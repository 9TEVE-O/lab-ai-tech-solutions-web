# LAB Evidence-Bound Opportunity Five-Node Validation v0.1

**Date:** 18 July 2026  
**Status:** Completed schema fixture test / internal validation record  
**Authority boundary:** The fixtures encode the current Industry Touch Map classifications. They do not independently verify every underlying artefact and do not approve new public services or claims.

## Decision

The five representative nodes can be encoded without collapsing evidence, lifecycle, commercial-offer state, authority, claim status or opportunity posture.

The fixture pack passes the implemented completeness, reference-integrity and contradiction checks. Two material schema-design issues were exposed: the common `status` field collides with record-specific status fields, and v0.1 does not define initial import or initial classification receipts.

## Encoded nodes

| # | Node | Evidence | Lifecycle | Commercial offer | Opportunity posture |
|---:|---|---|---|---|---|
| 1 | AI, software and developer tools | `built_capability` | `active` | `not_an_offer` | `core_positioning` |
| 2 | Legal, regulatory and compliance services | `direct_evidence` | `active` | `offer_hypothesis` | `adjacent_bounded` |
| 3 | Events, festivals and public markets | `direct_evidence` | `completed` | `not_an_offer` | `adjacent_bounded` |
| 4 | Cybersecurity, OSINT and media integrity | `research` | `parked` | `not_an_offer` | `parked` |
| 5 | Healthcare, aged care and care robotics | `idea_only` | `parked` | `not_an_offer` | `parked` |

## Check results

| Check | Result |
|---|---|
| Node count | 5 |
| Total records | 56 |
| Required-field completeness | 56/56 records passed |
| Reference integrity | 5/5 nodes passed |
| Contradiction checks | 5/5 nodes passed |
| Phone contract section order | Passed at 390 × 844 px |
| Compact-card required fields | Passed for all five nodes |

## Phone-display result

The generated view was rendered in Chromium at **390 × 844 px**.

- section order: passed;
- horizontal overflow: none (`390 px` client width and `390 px` scroll width);
- five cards fit inside the viewport;
- lifecycle, commercial-offer state, evidence class, confidence, support, limitation, posture and review status were visible without expansion on every card;
- provenance and full authority detail remained collapsed;
- body and paragraph text rendered at `16 px`; and
- total document height was `4,893 px`.

The phone view passes the v0.1 display contract. This is a deterministic render check, not usability research or accessibility certification.

## Completeness interpretation

The validator checks the common metadata envelope and required payload fields for all eleven record types represented in the fixture pack. Empty authority scope is accepted only where authority level is explicitly `none`.

Passing completeness means required fields are populated and references resolve. It does not prove source truth, external authority or commercial validity.

## Contradiction checks applied

- no `approved_offer` combined with `parked` or `archived` lifecycle;
- no public service claim when commercial-offer state is `not_an_offer`;
- no outcome claim supported only by research, concept or prototype evidence;
- no formal-authority claim based only on contextual authority;
- no active high-stakes use with authority level `none`;
- no current claim relying on withdrawn, disputed or superseded evidence;
- no delivery-stage opportunity combined with parked or archived lifecycle; and
- every node resolves to its latest claim-status transition receipt.

## Schema findings

### 1. Common status-field collision

`DecisionOwnerRecord` and `ReviewTriggerRecord` define their own `status` fields while the common record convention also requires `status`.

**Fixture handling:** common fields are placed in a `meta` envelope; record-specific status remains in the payload.

**Required future decision:** formally adopt a metadata envelope or rename the common field to `record_status`.

### 2. Initial-state receipt gap

The schema defines append-only state transitions but does not define how a pre-existing unstructured record receives its first structured lifecycle state.

**Fixture handling:** no lifecycle history was invented. The latest receipts record only the claim-status decisions made during this encoding exercise.

**Required future decision:** define an initialisation or migration receipt separately from lifecycle transition.

### 3. Derivative provenance boundary

The fixtures point to the current Industry Touch Map as a traceable source. That source is a synthesis, not the reopened primary evidence bundle for every sector.

**Fixture handling:** evidence verification is `internally_checked`; confidence is `moderate` or `limited`; claims are `restricted` or `internal_only`.

**Required next evidence step:** reopen primary artefacts before strengthening confidence, authority or public claim status.

## Phone-display acceptance criteria

The generated phone view must:

1. preserve the required eight-section order;
2. fit a 390 px viewport without horizontal overflow;
3. show lifecycle, commercial-offer state, evidence class, confidence, support, limitation, posture and review status without expansion;
4. keep provenance, full authority and transition detail expandable; and
5. label fixture counts as test coverage rather than market, priority or readiness measures.

## Artefacts

- `LAB_EVIDENCE_BOUND_OPPORTUNITY_FIVE_NODE_FIXTURES_v0.1.json`
- `LAB_EVIDENCE_BOUND_OPPORTUNITY_FIVE_NODE_VALIDATION_v0.1.json`
- `LAB_EVIDENCE_BOUND_OPPORTUNITY_FIVE_NODE_PHONE_VIEW_v0.1.html`
- `LAB_EVIDENCE_BOUND_OPPORTUNITY_PHONE_DISPLAY_CHECK_v0.1.json`
- `LAB_EVIDENCE_BOUND_OPPORTUNITY_FIVE_NODE_PHONE_RENDER_390_v0.1.png`

## Decision

Retain the schema as an active architectural hypothesis. The encoding test is sufficient to justify a targeted v0.2 schema patch for metadata-envelope and initialisation-receipt semantics, but not broader scoring, ranking or productisation.
