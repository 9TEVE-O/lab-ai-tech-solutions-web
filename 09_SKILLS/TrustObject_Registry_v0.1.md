# TrustObject Registry v0.1

Path: `09_SKILLS/TrustObject_Registry_v0.1.md`  
Status: Draft for implementation  
Parent artefact: `TrustObject v0.2`

## Purpose

Create a single registry for tracking the trust state of papers, notes, prompts, memories, runs, artefacts, observations, and project outputs.

This is not a content library. It is a control index.

## Core principle

Every meaningful project item becomes a TrustObject.

```text
Datapoint
→ uncertainty
→ verification
→ status
→ authority decision
→ evidence log
→ controlled use
→ stale review
→ archive or dissolution
```

No item should be amplified, indexed, published, automated, or used as system memory unless its status allows that action.

## Registry schema

```json
{
  "trust_object_id": "uuid",
  "item_id": "string",
  "title": "string",
  "source": "string",
  "input_type": "article|paper|note|interview|observation|run|memory|prompt|artefact",
  "current_status": "raw|classified|review_required|approved|blocked|active|stale|archived|dissolved",
  "uncertainty": [],
  "verification_events": [],
  "decision_authority": "human|policy|system|external",
  "connectors": [],
  "amplifiers": [],
  "expiry_condition": "time|source_update|policy_change|manual_review|task_completion",
  "evidence_log_id": "uuid",
  "state_transition_log": [],
  "created_at": "iso8601",
  "last_reviewed_at": "iso8601",
  "next_review_trigger": "string"
}
```

## Required fields

| Field | Required | Purpose |
|---|---:|---|
| `trust_object_id` | Yes | Registry identity |
| `item_id` | Yes | Original item identity |
| `title` | Yes | Human-readable label |
| `source` | Yes | Provenance |
| `input_type` | Yes | Object class |
| `current_status` | Yes | Current trust state |
| `decision_authority` | Yes | Who or what changed status |
| `evidence_log_id` | Yes | Audit receipt |
| `created_at` | Yes | Creation timestamp |

## Status definitions

| Status | Meaning | Allowed use |
|---|---|---|
| `raw` | Captured but not assessed | Store only |
| `classified` | Type and sensitivity identified | Internal review only |
| `review_required` | Needs human or policy review | No amplification |
| `approved` | Cleared for controlled use | May enter approved workflows |
| `blocked` | Must not be used downstream | Store evidence only |
| `active` | Currently used in workflow/runtime | Monitor |
| `stale` | Trust has decayed | Re-review before use |
| `archived` | Retained but inactive | Reference only |
| `dissolved` | Execution context removed | Evidence retained only |

## Transition rules

Allowed transitions:

```text
raw → classified
classified → review_required
review_required → approved
review_required → blocked
approved → active
active → stale
stale → approved
stale → archived
active → dissolved
blocked → archived
```

Forbidden transitions:

```text
raw → approved
raw → active
classified → active
review_required → active
blocked → approved
archived → active
dissolved → active
```

A forbidden transition requires a new TrustObject or explicit human override with evidence.

## Decision authority rules

| Authority | Can do |
|---|---|
| `system` | classify, flag, mark stale |
| `policy` | block, require review, enforce expiry |
| `human` | approve, reject, override, archive |
| `external` | update source status, trigger revalidation |

Only `human` or explicit `policy` may move an item into `approved`.

Only `human` may override `blocked`.

## Amplifier rules

Amplifiers increase risk.

Examples:

- RAG index
- model call
- automation
- agent runtime
- published article
- client-facing output
- exported dataset
- memory system

Rule:

```text
IF current_status != approved
THEN amplifier_access = denied
```

Exception:

```text
IF current_status == active
AND previous_status == approved
AND evidence_log_id exists
THEN amplifier_access = allowed
```

## Connector rules

Connectors show dependency.

Examples:

- project
- article
- workflow
- agent
- note
- decision
- memory
- code module
- client artefact

Rule:

```text
IF object.status == stale
THEN mark connected outputs as review_required
```

## Expiry rules

Trust expires when:

- the source changes
- policy changes
- the object is older than its review window
- connected artefacts become public-facing
- the object enters a higher-risk workflow
- a contradiction is found
- the object is superseded

Default review windows:

| Type | Review window |
|---|---|
| paper | 12 months or source update |
| article | 6 months |
| project note | 90 days |
| prompt | 90 days |
| memory | 180 days |
| run | task completion |
| artefact | policy change or public use |
| observation | corroboration required |

## Evidence event schema

```json
{
  "event_id": "uuid",
  "trust_object_id": "uuid",
  "timestamp": "iso8601",
  "actor": "system|human|policy|external",
  "event_type": "created|classified|verified|approved|blocked|activated|marked_stale|archived|dissolved",
  "previous_status": "string",
  "new_status": "string",
  "reason": "string",
  "evidence_refs": [],
  "input_hash": "sha256",
  "output_hash": "sha256"
}
```

## MVP files

```text
09_SKILLS/
  TrustObject_v0.2.md
  TrustObject_Registry_v0.1.md
  trustobject_registry.csv
  evidence_events.jsonl
```

## Acceptance criteria

The registry is working when:

- every important artefact has a TrustObject ID
- every approved item has an evidence receipt
- blocked items cannot be amplified
- stale items trigger review before reuse
- every status change records authority
- every active item has connectors listed
- dissolved items retain evidence but not execution context

## Control boundary

The registry records authority.

It does not create authority.

Storage does not mean approval.

Presence in the registry does not mean the object is safe, verified, public-ready, or usable downstream.

Only status plus authority plus evidence determines use.
