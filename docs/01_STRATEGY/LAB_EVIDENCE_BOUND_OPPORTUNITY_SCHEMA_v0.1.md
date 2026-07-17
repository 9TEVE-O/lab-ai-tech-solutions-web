# LAB Evidence-Bound Opportunity Schema v0.1

**Filename:** `LAB_EVIDENCE_BOUND_OPPORTUNITY_SCHEMA_v0.1.md`  
**Owner:** LAB AI & Tech Solutions  
**Version:** 0.1  
**Date:** 18 July 2026  
**Status:** Active architectural hypothesis / draft schema  
**Authority level:** Proposed internal control model; not canon, not a product specification and not approval to alter public positioning  
**Derived from:** LAB Industry Touch Map and phone information-order review  
**Review requirement:** Test against at least two materially different inventories before approval or implementation as a shared LAB system

---

## 1. Decision

LAB should represent capability and opportunity information as an evidence-bound graph rather than as an unstructured portfolio list or a presentation-only table.

The schema must make the following chain explicit:

> Evidence → capability → context → authority → permitted claim → opportunity posture → lifecycle decision → review or next action

No public, commercial or operational claim may be inferred solely from the presence of a file, repeated mention, active lifecycle label, sector association or internally generated framework.

---

## 2. Purpose

This schema defines the minimum records and controls required to answer:

1. **What exists?**
2. **What evidence supports it?**
3. **Where did that evidence come from?**
4. **What state is the capability or opportunity in?**
5. **What authority does LAB actually hold?**
6. **What may LAB safely claim?**
7. **What opportunity posture is justified?**
8. **Who owns the decision?**
9. **When must the record be reviewed?**
10. **What evidence and approval are required to change state?**

The schema is intended to support multiple views, including:

- industry and opportunity maps;
- capability portfolios;
- research inventories;
- product and service pipelines;
- project maturity views;
- public-claim registers; and
- organisational memory and reactivation controls.

---

## 3. Normative rules

The terms **MUST**, **MUST NOT**, **SHOULD** and **MAY** are normative.

### 3.1 Separation rules

- Evidence state and lifecycle state **MUST** remain separate.
- Lifecycle state and commercial-offer state **MUST** remain separate.
- Evidence class and evidence confidence **MUST** remain separate.
- Capability, authority and opportunity **MUST NOT** be collapsed into one status.
- Internal wording **MUST NOT** automatically become public wording.

### 3.2 Evidence rules

- Every evidence assertion **MUST** link to at least one provenance record.
- Evidence **MUST** state what it supports and what it does not support.
- Repetition **MUST NOT** increase confidence unless the repeated records are independent and materially additive.
- A self-authored artefact **MUST NOT** be presented as independent validation.
- A prototype **MUST NOT** be treated as deployment, adoption, outcome or market evidence.
- Professional background **MUST NOT** be converted into a current LAB client claim.
- Buyer interest **MUST NOT** be converted into demand validation without a defined validation record.

### 3.3 Authority rules

- Authority **MUST** be explicit, scoped and evidence-backed.
- Missing authority **MUST** be interpreted as no authority, not unknown permission.
- Formal legal, clinical, regulatory, cultural, security, procurement or professional authority **MUST NOT** be inferred from adjacent experience.
- Expired, superseded or unverified authority records **MUST NOT** support current public claims.

### 3.4 Lifecycle rules

- Completed, parked or archived work **MUST NOT** become active through retrieval, mention, reuse or interface display.
- Reactivation **MUST** use an append-only state-transition record.
- Archived records **MUST** remain historically intact.
- A material change **MUST NOT** overwrite the evidence or decision record that preceded it.

### 3.5 Claim rules

- Every approved public claim **MUST** identify its supporting evidence and authority scope.
- Claims **MUST** remain within the narrowest applicable evidence and authority boundary.
- Unsupported inference risks **MUST** be recorded alongside permitted claims.
- Where evidence or authority is ambiguous, the system **MUST** fail closed to a narrower claim or no public claim.

---

## 4. Conceptual model

The schema contains eleven primary record types.

| Record | Purpose |
|---|---|
| `CapabilityRecord` | Defines a reusable ability, method, system, artefact or demonstrated practice. |
| `ContextRecord` | Defines a sector, domain, buyer environment, problem context or application setting. |
| `EvidenceRecord` | Records a bounded item of substantiation and its limitations. |
| `ProvenanceRecord` | Records the source, origin, version, custody and verification path for evidence. |
| `AuthorityRecord` | Defines the authority LAB holds, its basis, scope and exclusions. |
| `ClaimRecord` | Defines internal, public-safe, restricted or prohibited wording. |
| `OpportunityRecord` | Defines a bounded commercial, research, public-interest or product opportunity. |
| `DecisionOwnerRecord` | Defines who may decide, approve, review or escalate. |
| `ReviewTriggerRecord` | Defines time-based and event-based review conditions. |
| `StateTransitionRecord` | Creates an append-only record of lifecycle movement. |
| `OpportunityNode` | Joins the current records into one queryable decision object. |

---

## 5. Identifier and record conventions

### 5.1 Identifier format

Each record **MUST** have a stable identifier.

Recommended format:

```text
<record-type>-<slug>-<YYYYMMDD>-<sequence>
```

Examples:

```text
cap-document-risk-review-20260718-001
evd-sensitive-intake-pack-20260718-001
src-oshc-package-20260718-001
clm-five-domain-public-positioning-20260718-001
trn-cybersecurity-parked-active-20260718-001
```

### 5.2 Common fields

Every primary record **MUST** contain:

| Field | Type | Required | Rule |
|---|---|---:|---|
| `id` | string | yes | Stable and unique. |
| `record_type` | enum | yes | One of the defined record types. |
| `title` | string | yes | Human-readable name. |
| `status` | enum | yes | `draft`, `current`, `superseded`, `withdrawn` or `archived_record`. |
| `created_at` | datetime | yes | Original creation time. |
| `created_by` | owner reference | yes | Person or authorised system. |
| `updated_at` | datetime | yes | Latest metadata update. |
| `version` | string | yes | Semantic or sequential version. |
| `sensitivity` | enum | yes | `public`, `internal`, `confidential`, `restricted`. |
| `supersedes_id` | record reference | no | Previous record replaced by this record. |
| `notes` | string | no | Bounded contextual notes. |

A superseded record **MUST** remain retrievable.

---

## 6. CapabilityRecord

A capability is a reusable ability, method, system, artefact or demonstrated practice. It is not automatically a service, product, market position or authority claim.

### 6.1 Required fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `capability_id` | string | yes | Stable capability identifier. |
| `name` | string | yes | Canonical capability name. |
| `description` | string | yes | Bounded description of what the capability does. |
| `capability_type` | enum | yes | `method`, `workflow`, `software`, `prototype`, `package`, `standard`, `research_system`, `operational_practice`, `teaching_asset`, `product_candidate`. |
| `current_lifecycle_state` | lifecycle enum | yes | Current organisational state. |
| `commercial_offer_state` | enum | yes | `not_an_offer`, `offer_hypothesis`, `validation`, `approved_offer`, `retired_offer`. |
| `primary_domain_ids` | context references | yes | One or more higher-order domains. |
| `applicable_context_ids` | context references | no | Sectors or application settings. |
| `evidence_ids` | evidence references | yes | Evidence supporting the capability. |
| `authority_ids` | authority references | no | Applicable authority records. |
| `claim_ids` | claim references | no | Current approved or restricted claims. |
| `decision_owner_id` | owner reference | yes | Current accountable owner. |
| `review_trigger_ids` | trigger references | yes | Current review policy. |
| `limitations` | string array | yes | Known capability boundaries. |
| `excluded_uses` | string array | yes | Uses the capability is not approved for. |

### 6.2 Capability constraints

- `current_lifecycle_state = active` **MUST NOT** imply `commercial_offer_state = approved_offer`.
- `capability_type = prototype` **MUST NOT** support production-readiness claims without separate evidence.
- A capability with no current evidence record **MUST** be marked `limited` confidence and cannot support a public claim.

---

## 7. ContextRecord

A context defines where a capability may apply. Context may represent a public domain, sector, buyer environment, user group, problem class, jurisdiction or application setting.

| Field | Type | Required | Description |
|---|---|---:|---|
| `context_id` | string | yes | Stable context identifier. |
| `name` | string | yes | Context name. |
| `context_type` | enum | yes | `public_domain`, `sector`, `buyer_group`, `user_group`, `problem_class`, `jurisdiction`, `application_setting`. |
| `parent_context_id` | context reference | no | Higher-order context. |
| `description` | string | yes | Bounded context definition. |
| `in_scope` | string array | yes | Included activities or conditions. |
| `out_of_scope` | string array | yes | Excluded activities or conditions. |
| `risk_profile` | enum | yes | `standard`, `sensitive`, `regulated`, `high_stakes`. |
| `required_authority_types` | enum array | no | Authority required before action or claim. |
| `jurisdiction` | string array | no | Relevant geographic or legal scope. |

A sector association **MUST NOT** be interpreted as sector-wide capability or authority.

---

## 8. EvidenceRecord

Evidence records the bounded basis for an assertion. Evidence class describes the kind of evidence; confidence describes how strongly the evidence supports the specific assertion.

### 8.1 Evidence class

| Value | Meaning |
|---|---|
| `direct_operational` | Directly observed or produced through operational activity. |
| `client_related` | Connected to client or prospective-client material, without automatically proving paid engagement or outcomes. |
| `professional_background` | Evidence from prior employment, professional practice or founder background. |
| `built_capability` | A reusable method, package, standard, prototype, workflow or product candidate exists. |
| `research` | Substantive research or analytical work exists. |
| `buyer_signal` | A bounded buyer or user signal exists. |
| `outcome` | A measured result exists with defined attribution and limitations. |
| `idea_only` | A documented concept exists without sufficient build, research or delivery evidence. |
| `negative_evidence` | Evidence weakens, contradicts or blocks an assertion. |

### 8.2 Confidence

| Value | Meaning |
|---|---|
| `high` | Multiple current, relevant and materially independent records directly support the assertion. |
| `moderate` | Relevant evidence supports the assertion, but material limitations or independence gaps remain. |
| `limited` | Evidence is partial, indirect, old, self-authored, narrow or otherwise insufficient for a strong claim. |
| `conflicted` | Material evidence points in different directions. |
| `unknown` | Confidence has not been assessed. |

### 8.3 Required fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `evidence_id` | string | yes | Stable evidence identifier. |
| `assertion` | string | yes | The exact proposition being supported or challenged. |
| `evidence_class` | enum | yes | Class above. |
| `confidence` | enum | yes | Confidence above. |
| `supports` | string | yes | Narrow statement the evidence supports. |
| `does_not_support` | string array | yes | Explicit prohibited inferences. |
| `provenance_ids` | provenance references | yes | One or more source records. |
| `independence_group` | string | yes | Groups records that share origin or dependency. |
| `observed_at` | date or range | yes | When the underlying event or work occurred. |
| `recorded_at` | datetime | yes | When evidence was registered. |
| `verification_status` | enum | yes | `unverified`, `internally_checked`, `externally_checked`, `independently_reproduced`, `withdrawn`. |
| `verification_method` | string | required if checked | How it was checked. |
| `valid_from` | date | yes | Start of applicability. |
| `valid_until` | date | no | Expiry or review date. |
| `sensitivity` | enum | yes | Access classification. |
| `conflict_ids` | evidence references | no | Material contradictory records. |
| `related_capability_ids` | capability references | yes | Capabilities supported or challenged. |
| `related_context_ids` | context references | no | Applicable contexts. |

### 8.4 Evidence aggregation

An aggregate evidence state **MAY** be derived, but the algorithm **MUST**:

- account for independence groups;
- preserve negative and conflicting evidence;
- avoid treating volume as quality;
- expose the underlying records; and
- never promote evidence class solely because confidence is high.

---

## 9. ProvenanceRecord

Provenance records the source and custody path of evidence.

| Field | Type | Required | Description |
|---|---|---:|---|
| `provenance_id` | string | yes | Stable identifier. |
| `source_type` | enum | yes | `document`, `dataset`, `repository`, `communication`, `interview`, `observation`, `system_log`, `external_publication`, `professional_record`, `generated_output`. |
| `source_title` | string | yes | Human-readable source name. |
| `source_locator` | string | yes | File path, URI, document ID, repository path or other stable locator. |
| `source_version` | string | no | Version, commit, revision or snapshot. |
| `source_date` | date | yes | Date of the source content. |
| `captured_at` | datetime | yes | Date acquired or registered. |
| `captured_by` | owner reference | yes | Person or system that captured it. |
| `content_hash` | string | recommended | Hash of the reviewed source representation. |
| `originator` | string | yes | Original author, organisation or system. |
| `custody_status` | enum | yes | `original`, `authorised_copy`, `export`, `transcript`, `summary`, `derived_record`, `unknown`. |
| `derivation_method` | string | required if derived | How the record was produced. |
| `access_status` | enum | yes | `accessible`, `restricted`, `expired_link`, `missing`, `deleted`. |
| `verification_notes` | string | no | Source checks and unresolved issues. |
| `superseded_by_id` | provenance reference | no | Later source replacing this one. |

A summary or generated output **MUST NOT** inherit the authority of its source without a traceable link and review record.

---

## 10. Lifecycle state

Lifecycle state records organisational attention and current use. It does not describe evidence strength, authority or commercial availability.

| State | Meaning |
|---|---|
| `candidate` | Newly identified; not yet assessed. |
| `active` | Currently relevant to approved operating direction, research, product work or opportunity development. |
| `completed` | Bounded work was completed and may remain reusable. |
| `parked` | Deliberately outside active execution; reactivation requires a decision. |
| `archived` | Historical, superseded or legacy reference; not current authority. |
| `retired` | Explicitly discontinued and not intended for reuse without exceptional review. |

### 10.1 Lifecycle constraints

- `active` **MUST** identify the active purpose.
- `completed` **MUST** identify the completed deliverable or boundary.
- `parked` **MUST** identify the parking decision and reactivation condition.
- `archived` **MUST** identify the current replacement or state that no replacement exists.
- `retired` **MUST** identify the reason for discontinuation.

---

## 11. AuthorityRecord

Authority is the bounded right or competence to perform an action, make a claim, approve a state or represent a professional capacity.

### 11.1 Authority types

- `internal_decision`
- `operational_experience`
- `client_permission`
- `content_usage`
- `contractual`
- `professional_credential`
- `legal`
- `regulatory`
- `clinical`
- `security`
- `procurement`
- `cultural_or_community`
- `publication`

### 11.2 Required fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `authority_id` | string | yes | Stable identifier. |
| `authority_type` | enum | yes | Type above. |
| `holder` | string or owner reference | yes | Who holds the authority. |
| `basis` | string | yes | Evidence, appointment, contract, permission or credential establishing authority. |
| `provenance_ids` | provenance references | yes | Source records. |
| `scope` | string | yes | Exact actions, contexts and claims permitted. |
| `exclusions` | string array | yes | Explicitly excluded actions or claims. |
| `jurisdiction` | string array | no | Geographic or legal scope. |
| `valid_from` | date | yes | Start date. |
| `valid_until` | date | no | Expiry date. |
| `verification_status` | enum | yes | `unverified`, `verified`, `expired`, `revoked`, `superseded`. |
| `verified_by` | owner reference | required if verified | Reviewer. |
| `review_trigger_ids` | trigger references | yes | Revalidation conditions. |

A record of experience is not a legal, clinical, regulatory, cultural or professional-authority record unless that authority is independently established.

---

## 12. ClaimRecord

A claim record controls wording. It separates internal analysis from public-safe statements and prohibited inferences.

### 12.1 Claim classes

| Class | Meaning |
|---|---|
| `internal` | Suitable for bounded internal analysis. |
| `public_safe` | Approved for the stated audience, channel and period. |
| `restricted` | May be used only with conditions, qualification or approval. |
| `prohibited` | Must not be stated or implied. |

### 12.2 Required fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `claim_id` | string | yes | Stable identifier. |
| `claim_text` | string | yes | Exact wording or bounded proposition. |
| `claim_class` | enum | yes | Class above. |
| `subject_ids` | record references | yes | Capability, context or opportunity described. |
| `audience` | string array | yes | Intended audience. |
| `channel` | string array | yes | Website, proposal, article, internal report, conversation or other channel. |
| `evidence_ids` | evidence references | yes for internal/public/restricted | Supporting records. |
| `authority_ids` | authority references | required where applicable | Authority basis. |
| `qualifications` | string array | no | Required caveats. |
| `prohibited_inferences` | string array | yes | What readers must not infer. |
| `approved_by` | owner reference | required for public-safe | Approver. |
| `approved_at` | datetime | required for public-safe | Approval time. |
| `valid_until` | date | yes for public-safe/restricted | Review or expiry date. |
| `withdrawal_trigger_ids` | trigger references | yes | Events that suspend the claim. |
| `replaces_claim_id` | claim reference | no | Superseded wording. |

### 12.3 Claim constraints

- A public-safe claim **MUST** be narrower than or equal to its supporting evidence and authority scope.
- A prohibited inference **MUST** remain visible in internal decision views.
- Search, filtering or excerpting **MUST NOT** remove required qualifications from the displayed claim.

---

## 13. OpportunityRecord

An opportunity is a bounded possibility for action. It is not demand proof or an approved offer.

### 13.1 Opportunity posture

| Posture | Meaning |
|---|---|
| `observe` | Retain as a signal; no active work. |
| `research` | Investigate the problem, evidence or context. |
| `validate` | Test with defined buyers or users. |
| `develop` | Build a bounded capability, prototype or package. |
| `offer_candidate` | Sufficient internal basis to prepare an offer for approval. |
| `approved_offer` | Explicitly approved commercial offer. |
| `hold` | Pause pending evidence, authority or capacity. |
| `decline` | Do not pursue under current conditions. |

### 13.2 Required fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `opportunity_id` | string | yes | Stable identifier. |
| `name` | string | yes | Opportunity name. |
| `opportunity_type` | enum | yes | `commercial`, `research`, `public_interest`, `product`, `partnership`, `publishing`, `capability_development`. |
| `capability_ids` | capability references | yes | Relevant capabilities. |
| `context_ids` | context references | yes | Relevant contexts. |
| `problem_statement` | string | yes | Bounded problem. |
| `buyer_or_user` | string | yes | Defined buyer or user. |
| `bounded_use_case` | string | yes | Specific use case. |
| `evidence_ids` | evidence references | yes | Evidence supporting pursuit. |
| `authority_requirements` | authority type array | yes | Required authority. |
| `authority_ids` | authority references | no | Authority currently held. |
| `current_posture` | posture enum | yes | Current decision posture. |
| `current_stage` | enum | yes | `signal`, `qualified_problem`, `validation`, `development`, `approval_review`, `active_offer`, `closed`. |
| `risks` | string array | yes | Material risks. |
| `exclusions` | string array | yes | Out-of-scope conditions. |
| `success_threshold` | string | yes | Evidence required to advance. |
| `stop_condition` | string | yes | Condition requiring hold or decline. |
| `next_action` | string | required unless closed/declined | Next bounded action. |
| `decision_owner_id` | owner reference | yes | Accountable owner. |
| `review_trigger_ids` | trigger references | yes | Review policy. |
| `latest_transition_id` | transition reference | yes | Current state receipt. |

Opportunity posture **MUST NOT** be derived solely from sector count, personal interest or the number of related artefacts.

---

## 14. DecisionOwnerRecord

| Field | Type | Required | Description |
|---|---|---:|---|
| `owner_id` | string | yes | Stable identifier. |
| `name` | string | yes | Person, role or authorised governance group. |
| `owner_type` | enum | yes | `person`, `role`, `group`, `external_authority`. |
| `decision_scope` | string array | yes | Decisions the owner may make. |
| `approval_limit` | string | yes | Boundaries and escalation threshold. |
| `delegates` | owner references | no | Authorised delegates. |
| `conflict_rules` | string array | yes | Conflicts requiring escalation or independent review. |
| `active_from` | date | yes | Authority start. |
| `active_until` | date | no | End date. |
| `escalation_owner_id` | owner reference | no | Higher authority. |

An AI system **MAY** prepare a transition recommendation but **MUST NOT** be recorded as the final human decision owner for public positioning, commercial activation or high-stakes authority decisions.

---

## 15. ReviewTriggerRecord

A review trigger may be time-based or event-based.

### 15.1 Trigger types

- `scheduled_date`
- `evidence_expiry`
- `new_material_evidence`
- `contradictory_evidence`
- `buyer_signal`
- `delivery_completed`
- `incident_or_failure`
- `authority_change`
- `public_positioning_change`
- `regulatory_change`
- `owner_change`

### 15.2 Required fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `trigger_id` | string | yes | Stable identifier. |
| `trigger_type` | enum | yes | Type above. |
| `condition` | string | yes | Exact event or time condition. |
| `applies_to_ids` | record references | yes | Controlled records. |
| `severity` | enum | yes | `routine`, `material`, `blocking`. |
| `required_action` | enum | yes | `review`, `revalidate`, `suspend_claim`, `suspend_use`, `escalate`, `archive`. |
| `required_reviewer_id` | owner reference | yes | Accountable reviewer. |
| `due_at` | datetime | no | Scheduled time. |
| `status` | enum | yes | `pending`, `triggered`, `completed`, `waived`, `superseded`. |
| `completion_evidence_ids` | evidence references | no | Evidence that closes the review. |
| `waiver_reason` | string | required if waived | Reason and authority for waiver. |

A blocking trigger **MUST** suspend affected public claims or active use until resolved.

---

## 16. StateTransitionRecord

State transitions are append-only decision receipts.

### 16.1 Required fields

| Field | Type | Required | Description |
|---|---|---:|---|
| `transition_id` | string | yes | Stable identifier. |
| `entity_id` | record reference | yes | Capability or opportunity changing state. |
| `state_dimension` | enum | yes | `lifecycle`, `commercial_offer`, `opportunity_stage`, `claim_status`, `authority_status`. |
| `from_state` | string | yes | Previous state. |
| `to_state` | string | yes | Proposed or approved state. |
| `requested_by` | owner reference | yes | Requester. |
| `requested_at` | datetime | yes | Request time. |
| `decision_owner_id` | owner reference | yes | Authorised decision owner. |
| `decided_at` | datetime | yes | Decision time. |
| `decision` | enum | yes | `approved`, `rejected`, `deferred`, `conditional`. |
| `rationale` | string | yes | Decision reason. |
| `evidence_added_ids` | evidence references | yes | New or revalidated evidence. |
| `authority_source_ids` | authority references | no | Current authority basis. |
| `buyer_or_user` | string | required for commercial activation | Intended buyer or user. |
| `bounded_use_case` | string | required for activation | Specific use case. |
| `risks_and_exclusions` | string array | yes | Material boundaries. |
| `conditions` | string array | no | Conditions attached to approval. |
| `review_trigger_ids` | trigger references | yes | New review conditions. |
| `previous_transition_id` | transition reference | no | Prior transition in chain. |
| `record_hash` | string | recommended | Integrity check for the receipt. |

### 16.2 Transition validation

A transition **MUST** fail when:

- the decision owner lacks scope;
- required evidence is missing, withdrawn or superseded;
- required authority is absent or expired;
- the buyer, user or bounded use case is missing for commercial activation;
- risks and exclusions are blank;
- no review trigger is created; or
- the transition attempts to rewrite an archived historical record.

---

## 17. OpportunityNode

`OpportunityNode` is the queryable object rendered by dashboards and interfaces. It references authoritative records rather than duplicating their content.

```yaml
opportunity_node:
  id: node-example-20260718-001
  capability_id: cap-example-20260718-001
  context_ids:
    - ctx-domain-example-20260718-001
    - ctx-sector-example-20260718-001
  evidence_ids:
    - evd-example-20260718-001
  current_evidence_summary:
    primary_class: built_capability
    confidence: moderate
    verification_status: internally_checked
  current_lifecycle_state: active
  commercial_offer_state: not_an_offer
  authority_ids:
    - auth-example-20260718-001
  permitted_claim_ids:
    - clm-example-20260718-001
  opportunity_id: opp-example-20260718-001
  decision_owner_id: owner-lab-20260718-001
  review_trigger_ids:
    - rev-example-20260718-001
  latest_transition_id: trn-example-20260718-001
```

### 17.1 Derived display fields

An interface **MAY** derive:

- compact evidence badge;
- lifecycle badge;
- opportunity posture label;
- current permitted public wording;
- next review date;
- blocking status; and
- visible support and limitation summary.

Derived display fields **MUST NOT** become independent authority records.

---

## 18. Validation rules

### 18.1 Record completeness

An opportunity node is valid only when:

- capability, evidence, provenance, lifecycle, owner and review records exist;
- every evidence record has at least one source;
- every public claim has evidence, authority where required, an approver and review date;
- every active or validating opportunity has a next action and success threshold; and
- every state transition has a decision receipt.

### 18.2 Contradiction checks

The system **MUST** flag:

- `approved_offer` with lifecycle `parked` or `archived`;
- public service claims when `commercial_offer_state = not_an_offer`;
- outcome claims supported only by activity or prototype evidence;
- formal-authority claims supported only by contextual experience;
- active use in a high-stakes context without the required authority type;
- current claims relying only on superseded or expired evidence;
- multiple current claim records with materially conflicting wording; and
- state changes without an append-only transition.

### 18.3 Fail-closed outcomes

When validation fails:

- the record remains accessible internally;
- affected public claims become `restricted` or suspended;
- affected commercial activation is blocked;
- the prior valid state remains current; and
- a blocking review trigger is created.

---

## 19. Phone-interface contract

Any phone view built from this schema **MUST** present information in this order:

1. purpose and authority boundary;
2. strategic decision;
3. state interpretation;
4. permitted and prohibited claim guidance;
5. portfolio distributions;
6. domain or cluster summaries;
7. individual opportunity nodes; and
8. state-transition and review controls.

Each compact opportunity card **MUST** show without expansion:

- capability or context name;
- lifecycle state;
- commercial-offer state;
- evidence class and confidence;
- one-line `supports` statement;
- one-line `does_not_support` statement;
- opportunity posture; and
- next review or blocking status.

Expandable detail **SHOULD** contain:

- provenance;
- complete evidence set;
- authority record;
- approved claim wording;
- decision owner;
- transition history; and
- review receipts.

Counts and charts **MUST** identify the measured quantity and **MUST NOT** imply market size, evidence quality, readiness or strategic priority unless those measures are separately defined and evidenced.

---

## 20. Minimum implementation profile

A first implementation requires at minimum:

1. structured Markdown, JSON, YAML or database records for all eleven record types;
2. immutable identifiers and version history;
3. source locators and hashes where available;
4. append-only transition receipts;
5. a claim register;
6. blocking validation rules;
7. phone and desktop views over the same records; and
8. an exportable audit bundle for each opportunity node.

The first implementation **SHOULD NOT** begin with scoring, automated ranking or predictive opportunity recommendations.

Those features would create false precision before the evidence and authority model is validated.

---

## 21. Required cross-inventory tests

Before this schema can become approved LAB architecture, test it against at least:

### Test A — Industry opportunity inventory

Use the twenty-sector LAB Industry Touch Map.

Verify that the schema:

- preserves all evidence and lifecycle distinctions;
- prevents twenty-industry service claims;
- exposes provenance and authority boundaries; and
- represents public-safe wording separately from internal wording.

### Test B — Materially different inventory

Use one of:

- product and service candidates;
- research programmes;
- client workflow capabilities;
- public writing and claim inventory; or
- project maturity and reactivation records.

Verify that the schema is not dependent on sector-specific language.

### Approval threshold

The schema may advance only if both tests show that it:

- represents the records without material loss;
- blocks unsupported claims;
- prevents accidental reactivation;
- produces a comprehensible phone information order; and
- supports a complete decision receipt.

---

## 22. Risks and open questions

### Risks

- The schema may become too heavy for routine use.
- Manual evidence classification may be inconsistent.
- Authority records may be mistaken for legal or professional determinations.
- A compact badge may still hide material nuance.
- Automated confidence or ranking may produce evidence theatre.
- Historical records may contain sensitive or third-party material unsuitable for broad interface access.

### Open questions

- Which record type should be the primary editing surface?
- Which evidence and authority fields are mandatory for low-risk internal research?
- How should source sensitivity and redaction be handled across views?
- What is the minimum viable transition receipt for a solo operator?
- Which rules can be automated without transferring decision authority to the system?
- How should conflicting evidence and competing authority sources be represented?

---

## 23. Decision and next action

**Decision:** retain this as `v0.1` active architectural hypothesis. Do not yet name or market it as a LAB product.

**Next concrete action:** encode five representative nodes from the Industry Touch Map using this schema, including:

1. one active built capability;
2. one active direct-evidence sector;
3. one completed direct-evidence sector;
4. one parked research sector; and
5. one parked idea-only sector.

Run completeness, contradiction and phone-display checks before expanding the schema or refining visual styling.
