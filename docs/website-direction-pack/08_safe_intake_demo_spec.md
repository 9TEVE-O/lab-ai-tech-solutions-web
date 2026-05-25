# LAB Safe Intake Demo Spec

## Demo name

**LAB Safe Intake Demo v0.1**

## Purpose

This file defines the first website-safe demo for LAB Safe Intake.

The demo should show the workflow, not pretend to be a fully finished production system.

It should help a visitor understand:

- what LAB Safe Intake does
- why raw documents should not go straight into AI tools
- how review and approval gates work
- what an evidence trail looks like
- what LAB can audit or build for a client

---

## Demo positioning

**LAB Safe Intake prepares sensitive documents for lower-risk AI use by separating originals from approved redacted copies before model ingestion.**

The demo is designed to be synthetic, controlled, and privacy-safe.

It should not ask public website visitors to upload real confidential documents.

---

## Public demo warning

Use a visible note near the demo:

> Demo uses synthetic sample documents only. Do not upload or paste sensitive, confidential, client, employee, financial, legal, medical, or private material through this website demo.

If a real upload feature is added later, it must include backend controls, storage policy, review gates, retention rules, and explicit consent language.

---

# Core demo flow

## One-screen version

```text
1. Select synthetic document
2. Classify type and sensitivity
3. Detect sensitive fields
4. Generate redacted candidate
5. Human review decision
6. Approve redacted copy
7. Produce source-backed summary
8. Export audit receipt
```

## Full version

```text
Synthetic document selected
→ Intake record created
→ Document type classified
→ Sensitivity classified
→ Sensitive fields detected
→ Redacted candidate shown
→ Human review required
→ Approved redacted copy created
→ AI summary generated from approved redacted copy only
→ Claim ledger created
→ Risk register updated
→ Audit receipt exported
```

---

# Demo invariant

## Hard rule

> No raw, unreviewed, or unapproved content enters AI search, summarisation, retrieval, export, or knowledge-base indexing.

## Demo wording

> In this demo, the raw document is blocked from AI access until a redacted copy has been reviewed and approved.

---

# Primary scenario

## Scenario title

Artist onboarding form

## Why this works

This scenario connects LAB’s music-industry origin to a real operational pain point.

Artist onboarding forms commonly contain:

- name
- phone number
- email
- address
- emergency contact
- bank/payment notes
- tax or business information
- manager or label contact
- grant or release context

It is credible, practical, and easy to understand without needing regulated medical or legal examples.

---

## Synthetic sample document

```text
Artist Onboarding Form

Artist name: Maya River
Legal name: Maya Thompson
Email: maya.river@example.test
Phone: 0400 000 000
Address: 12 Example Street, Brunswick VIC 3056
Emergency contact: Lara Thompson, 0400 111 111
ABN: 00 000 000 000
Payment note: Bank details to be supplied by manager.
Project: Regional showcase grant application and single release campaign.
Notes: Artist is available for interviews in June and July. Travel support may be required for regional events.
```

Use clearly fake sample details.

Do not use real names, real phone numbers, real emails, real ABNs, or real addresses.

---

# Demo screens

## Screen 1 — Select sample document

### Goal

Let the visitor start safely without uploading private data.

### UI elements

- demo document selector
- warning note
- start button

### Copy

> Choose a synthetic sample document to see how LAB Safe Intake prepares information before AI use.

### Sample options

- Artist onboarding form
- Music grant application pack
- Internal AI policy draft

---

## Screen 2 — Intake record

### Goal

Show that intake starts with registration, not AI summarisation.

### UI elements

- document ID
- received timestamp
- file type
- source label
- status badge

### Example values

```text
Document ID: LAB-SI-DEMO-001
Document type: Artist onboarding form
Source: Synthetic sample
Status: Received
AI access: Blocked
```

---

## Screen 3 — Classification

### Goal

Show document type and sensitivity classification.

### UI elements

- document type card
- sensitivity score
- reason list

### Example output

```text
Document type: Artist onboarding form
Sensitivity: High
Reason: Contains personal contact details, emergency contact, address, ABN, and payment-related note.
AI access: Blocked
```

---

## Screen 4 — Sensitive information detection

### Goal

Show the fields found before redaction.

### UI table

| Field | Detected value | Risk type | Action |
|---|---|---|---|
| Legal name | Maya Thompson | Personal information | Redact |
| Email | maya.river@example.test | Contact detail | Redact |
| Phone | 0400 000 000 | Contact detail | Redact |
| Address | 12 Example Street | Location/personal | Redact |
| Emergency contact | Lara Thompson | Third-party personal info | Redact |
| ABN | 00 000 000 000 | Business/tax identifier | Review |
| Payment note | Bank details pending | Financial context | Redact/review |

### Copy

> Detection does not equal approval. Fields still need review before the redacted copy can be used.

---

## Screen 5 — Redacted candidate

### Goal

Show the transformation from raw sample to redacted candidate.

### Example redacted copy

```text
Artist Onboarding Form

Artist name: Maya River
Legal name: [REDACTED]
Email: [REDACTED]
Phone: [REDACTED]
Address: [REDACTED]
Emergency contact: [REDACTED]
ABN: [REVIEW REQUIRED]
Payment note: [REDACTED]
Project: Regional showcase grant application and single release campaign.
Notes: Artist is available for interviews in June and July. Travel support may be required for regional events.
```

### UI note

```text
Status: Redacted candidate
AI access: Still blocked
Reason: Human review not complete
```

---

## Screen 6 — Human review gate

### Goal

Make human review visible as a core part of the workflow.

### UI elements

- checklist
- approve button
- reject button
- reviewer note field

### Checklist

- Personal details redacted
- Third-party details redacted
- Financial/payment details redacted or reviewed
- Remaining project context is safe enough for demo summary
- No raw original content will be sent to AI

### Example reviewer decision

```text
Reviewer: Demo reviewer
Decision: Approved redacted copy
Note: Project context may be used for summary. Personal and payment fields remain blocked.
```

---

## Screen 7 — Approved redacted copy

### Goal

Show the approved copy as the only eligible AI input.

### UI state

```text
Original document: Stored separately / blocked
Redacted candidate: Reviewed
Approved redacted copy: Created
AI access: Allowed for approved redacted copy only
```

### Copy

> The model only receives the approved redacted copy. The original remains outside the AI workflow.

---

## Screen 8 — AI summary from approved copy only

### Goal

Show useful output with source boundaries.

### Example summary

```text
The sample artist onboarding form relates to a regional showcase grant application and single release campaign. The approved project context indicates interview availability in June and July and possible travel support requirements for regional events.
```

### Citation style

```text
Source: Approved redacted copy, lines 8–10.
```

### Blocked note

```text
Not used: legal name, email, phone, address, emergency contact, ABN, payment note.
```

---

## Screen 9 — Claim Ledger

### Goal

Show whether output statements are evidenced, inferred, blocked, or gaps.

### Table

| Claim | Status | Evidence |
|---|---|---|
| The document relates to a regional showcase grant application. | Evidenced | Approved redacted copy |
| The document relates to a single release campaign. | Evidenced | Approved redacted copy |
| Interview availability is June and July. | Evidenced | Approved redacted copy |
| Travel support may be required. | Evidenced | Approved redacted copy |
| Payment setup is complete. | Gap | Payment note blocked/redacted |
| Emergency contact can be shared. | Blocked | Third-party personal info |

---

## Screen 10 — Risk Register

### Goal

Show the risks and controls.

### Table

| Risk | Control | Status |
|---|---|---|
| Raw personal information enters AI tool | Original blocked | Controlled |
| Third-party emergency contact disclosed | Redacted | Controlled |
| Financial/payment context exposed | Redacted/reviewed | Controlled |
| Unsupported claim about payment readiness | Claim Ledger gap | Blocked |
| User assumes demo is production system | Public demo warning | Needs clear copy |

---

## Screen 11 — Audit receipt

### Goal

Create the proof artefact.

### Example receipt

```text
Audit receipt: LAB-SI-DEMO-001
Document: Artist onboarding form
Source: Synthetic sample
Document sensitivity: High
Sensitive fields detected: 7
Fields redacted: 6
Fields marked review required: 1
Human review: Completed
Approved redacted copy: Yes
Original sent to AI: No
AI input: Approved redacted copy only
Output generated: Summary with source note
Blocked content recorded: Yes
Claim ledger generated: Yes
Risk register generated: Yes
```

---

## Screen 12 — CTA

### Goal

Move the visitor toward the offer.

### CTA copy

> Want this mapped to your own document workflow?

Buttons:

```text
Request an AI-Safe Document Intake Audit
View sample audit report
Contact LAB AI
```

### Privacy note

> Do not send sensitive documents through the contact form. Start with a workflow description instead.

---

# Demo data model

```json
{
  "document_id": "LAB-SI-DEMO-001",
  "scenario": "artist_onboarding_form",
  "source_type": "synthetic_sample",
  "document_type": "artist_onboarding_form",
  "sensitivity": "high",
  "ai_access_original": "blocked",
  "detected_fields": [
    {"field": "legal_name", "action": "redact"},
    {"field": "email", "action": "redact"},
    {"field": "phone", "action": "redact"},
    {"field": "address", "action": "redact"},
    {"field": "emergency_contact", "action": "redact"},
    {"field": "abn", "action": "review_required"},
    {"field": "payment_note", "action": "redact_review"}
  ],
  "human_review": {
    "status": "completed",
    "decision": "approved_redacted_copy",
    "reviewer_note": "Project context may be used for summary. Personal and payment fields remain blocked."
  },
  "ai_input": "approved_redacted_copy_only",
  "audit_status": "demo_receipt_generated"
}
```

---

# Build notes

## First implementation

The first website version can be front-end only.

Use a fixed synthetic document and predetermined states.

Do not build real upload until the backend controls are ready.

## Suggested components

- `DemoScenarioSelector`
- `IntakeStatusCard`
- `ClassificationPanel`
- `SensitiveFieldTable`
- `RedactedCandidateViewer`
- `HumanReviewGate`
- `ApprovedCopyStatus`
- `AISummaryPanel`
- `ClaimLedgerTable`
- `RiskRegisterTable`
- `AuditReceipt`
- `SafeContactCTA`

## State machine

```text
selected
→ received
→ classified
→ pii_detected
→ redacted_candidate
→ awaiting_review
→ approved
→ summary_generated
→ audit_receipt_generated
```

## Blocked states

```text
raw_original_selected → blocked_from_ai
redacted_candidate_without_review → blocked_from_ai
missing_review_decision → blocked_from_ai
unsupported_claim → blocked_from_output
```

---

# Acceptance criteria

The demo is acceptable when a visitor can understand these points without explanation:

- raw documents are not sent straight to AI
- sensitive fields are detected
- redaction is visible
- human approval is required
- the approved redacted copy is the AI input
- the output has evidence status
- risks and gaps are visible
- the audit receipt proves what happened

---

# Final rule

The demo should sell discipline, not magic.

It should feel like:

> “Here is the workflow. Here is the proof. Here is the boundary.”

Not:

> “Upload anything and our AI will safely handle it.”
