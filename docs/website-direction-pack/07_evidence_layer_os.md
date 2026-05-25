# LAB Evidence Layer OS

## The Evidence Layer before AI touches your documents

### Purpose

This file defines the website-ready explanation of **LAB Evidence Layer OS**.

It turns LAB’s positioning from:

> “We believe AI needs evidence.”

Into:

> “Here is the controlled workflow, the proof trail, the risk gate, and the approved output.”

This is not a backend specification by itself. It is the public-facing operating model for the LAB website, Safe Intake demo, and Evidence Layer Audit offer.

---

## One-line position

**LAB Evidence Layer OS is the control layer that sits before AI search, summarisation, and automation.**

It helps teams prepare sensitive or messy documents by separating originals from approved redacted copies, recording review decisions, tracking claims, and keeping a visible evidence trail.

---

## Website placement

Use this as either:

1. a homepage feature section,
2. a dedicated `/evidence-layer` page,
3. a demo page for LAB Safe Intake,
4. a service page for the Evidence Layer Audit.

Recommended first placement:

```text
Homepage section:
“The Evidence Layer before AI touches your documents.”

Dedicated page:
/evidence-layer
```

---

## Core website message

Most AI projects do not fail only because of the model.

They fail because the workflow around the model is unclear:

- documents enter tools before they are reviewed
- sensitive information is copied into unsafe places
- outputs cannot be traced back to approved sources
- nobody can see what was redacted, blocked, approved, or used
- risk is handled as policy language instead of operational evidence

LAB Evidence Layer OS makes the control layer visible.

---

## Public framing

Use this language:

> Before a document is used by AI, it should pass through a controlled evidence layer: intake, classification, redaction, human review, approved ingestion, claim tracking, and audit logging.

Avoid this language:

- “fully compliant AI”
- “AI-safe documents”
- “automated compliance”
- “guaranteed privacy”
- “enterprise-grade security”
- “no-risk AI ingestion”

Safer wording:

- “lower-risk AI inputs”
- “approved redacted copies”
- “supports privacy-conscious handling”
- “creates review evidence”
- “reduces uncontrolled disclosure risk”
- “does not prove legal compliance by itself”

---

# Evidence Layer OS workflow

## Short version

```text
Safe Intake
→ Evidence Bench
→ Claim Ledger
→ Risk Register
→ Approved Output
```

## Expanded version

```text
1. Receive the document
2. Store the original separately
3. Extract text and metadata
4. Classify document type and sensitivity
5. Detect sensitive information
6. Create a redacted candidate
7. Route for human review
8. Approve or reject the redacted copy
9. Allow only approved redacted content into AI workflows
10. Generate outputs with citations to approved sources
11. Record claims, risks, assumptions, and review decisions
12. Export an audit-ready evidence summary
```

---

# Layer 1 — Safe Intake

## Role

Safe Intake controls what enters the workflow.

It prevents raw, unreviewed, or sensitive material from moving directly into AI search, summarisation, or automation.

## What it handles

- document upload or selection
- original file registration
- metadata capture
- document type classification
- sensitivity classification
- sensitive information detection
- redaction candidate generation
- human review checkpoint
- approved redacted copy creation

## Website copy

> Safe Intake prepares documents before AI touches them. Originals stay separated. Sensitive fields are detected. Redacted candidates are reviewed. Only approved redacted content moves forward.

## UI idea

Show a document card moving through status chips:

```text
Received → Classified → Redacted → Reviewed → Approved
```

Use a visible blocker state:

```text
Blocked from AI
Reason: review not completed.
```

---

# Layer 2 — Evidence Bench

## Role

The Evidence Bench is where the system checks what is known, what is uncertain, and what should not be used.

## What it handles

- approved source list
- redaction status
- review status
- source quality notes
- evidence gaps
- blocked content
- assumptions
- unsupported claims

## Website copy

> The Evidence Bench separates source-backed facts from assumptions, gaps, and blocked material. It makes the quality of the input visible before any AI output is trusted.

## UI idea

Create three columns:

| Approved evidence | Needs review | Blocked |
|---|---|---|
| Redacted onboarding form | Unclear contract clause | Raw original file |
| Approved metadata | Missing ABN field | Bank details |
| Reviewer note: OK for summary | Low-confidence OCR area | Emergency contact details |

---

# Layer 3 — Claim Ledger

## Role

The Claim Ledger records the claims made in an AI-assisted output and shows what supports them.

## What it handles

- claim text
- source reference
- evidence status
- confidence level
- reviewer decision
- claim type
- unresolved gaps

## Claim types

| Claim type | Meaning |
|---|---|
| Evidenced | Directly supported by approved source material |
| Inferred | Reasonable interpretation, but not directly stated |
| Gap | Missing, unclear, or unsupported |
| Blocked | Cannot be used because it depends on restricted or unapproved material |

## Website copy

> The Claim Ledger stops AI outputs from becoming black boxes. It shows which statements are evidenced, which are inferred, which need review, and which should be blocked.

## UI idea

Display a small ledger table:

| Claim | Status | Evidence |
|---|---|---|
| The artist provided contact details. | Evidenced | Approved onboarding form |
| Payment setup appears incomplete. | Inferred | Bank field redacted / reviewer note |
| Emergency contact can be shared with AI. | Blocked | Sensitive personal field |

---

# Layer 4 — Risk Register

## Role

The Risk Register records what could go wrong and what control is in place.

## What it handles

- privacy risk
- disclosure risk
- unsupported output risk
- poor source quality
- unclear human ownership
- retention and access issues
- decision points needing review

## Website copy

> The Risk Register makes unresolved risk visible before AI-supported work is used, shared, or relied on.

## Example risk rows

| Risk | Control | Status |
|---|---|---|
| Raw document used before review | AI access blocked until approval | Controlled |
| Personal information leaked into summary | Redaction and human review | Controlled |
| Unsupported claim in output | Claim Ledger review | Needs review |
| Missing source for a recommendation | Evidence gap flag | Blocked |

---

# Layer 5 — Approved Output

## Role

Approved Output is the only stage where AI-supported summaries, answers, reports, or knowledge-base entries are shown as usable.

## What it handles

- approved redacted source references
- citations
- claim status
- unresolved risks
- reviewer notes
- exportable report
- audit log pointer

## Website copy

> LAB does not treat an AI output as finished just because the model generated it. The output must show what it used, what it skipped, what is evidenced, and what still needs review.

## Example output states

```text
Draft output
Needs review
Approved output
Blocked output
Expired output
```

---

# Hard boundary

## Website-safe wording

> No approval = no AI access.

Expanded version:

> Raw, unreviewed, or unapproved material should not be embedded, indexed, summarised, queried, exported, or sent to hosted AI tools. Only approved redacted content should enter retrieval or generation. If classification, redaction, approval, or logging is incomplete, the workflow should fail closed.

## Do not overclaim

Do not say:

- “This guarantees privacy.”
- “This makes any document AI-safe.”
- “This is legal compliance.”
- “This removes the need for human review.”

Use:

- “designed to reduce uncontrolled disclosure risk”
- “designed to support evidence-visible review”
- “requires human approval before AI use”
- “supports safer document preparation for AI workflows”

---

# Homepage section draft

## Eyebrow

Evidence Layer OS

## Heading

The control layer before AI touches your documents.

## Copy

AI tools are powerful, but most teams do not have a clear record of what entered the system, what was removed, who approved it, and what evidence supports the final answer.

LAB Evidence Layer OS gives document-heavy teams a visible process for intake, redaction, review, claim tracking, risk control, and approved output.

## Workflow strip

```text
Safe Intake → Evidence Bench → Claim Ledger → Risk Register → Approved Output
```

## CTA

View LAB Safe Intake

---

# Safe Intake page section draft

## Heading

From raw document to approved AI input.

## Copy

LAB Safe Intake is the first visible component of the Evidence Layer OS. It is designed for teams that need to prepare sensitive documents before using AI search, summarisation, or knowledge-base workflows.

It separates originals from approved redacted copies, records review decisions, and keeps a traceable evidence trail.

## Proof points

- Original documents are registered and separated.
- Sensitive fields are detected and redacted.
- Human review is required before AI use.
- Only approved redacted copies move forward.
- Outputs show source citations and claim status.
- Review and approval decisions are logged.

---

# Buyer relevance

## Who this matters for

- music and creative businesses handling onboarding, contracts, grants, and internal knowledge
- community organisations handling client, participant, or program documents
- small businesses preparing to use AI with sensitive operational records
- consultants and teams building document-heavy knowledge systems
- governance-aware teams that need evidence before automation

## Buyer pain

The buyer is not just buying “AI”. They are buying a way to answer:

- What documents did we receive?
- What sensitive information was detected?
- What was redacted?
- Who reviewed it?
- What was approved?
- What was blocked?
- What entered the AI system?
- What evidence supports the output?

---

# Build implication

The Evidence Layer OS should become the structure behind the LAB website:

```text
Homepage:
Positioning and core problem

/safe-intake:
Workflow proof and demo

/evidence-layer:
Operating model and claim ledger

/contact:
Safe enquiry path
```

The website should not rely only on belief statements. It should show workflow, proof, offer, and safe engagement.
