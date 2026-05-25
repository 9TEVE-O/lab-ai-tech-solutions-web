# Sample AI-Safe Intake Audit Report

## Report status

**Synthetic sample only.**

This report is a website proof artefact for LAB AI & Tech Solutions.

It does not contain real client material.

It is not legal advice, privacy advice, security certification, or compliance certification.

---

# Report title

## AI-Safe Document Intake Audit Report

### Sample workflow

Artist onboarding form — synthetic sample

### Prepared by

LAB AI & Tech Solutions

### Date

25 May 2026

---

# Executive summary

LAB reviewed a synthetic artist onboarding form to demonstrate how a sensitive document should be prepared before AI search, summarisation, or knowledge-base ingestion.

The sample document contains personal, third-party, business, and payment-related information. Under the Safe Intake workflow, the original document is kept separate and blocked from AI access. A redacted candidate is created, reviewed by a human, and only the approved redacted copy is allowed to move into AI-assisted summarisation.

The audit found that the workflow should not allow raw onboarding forms to enter AI tools directly. It should require classification, sensitive-field detection, redaction, human approval, and an audit receipt before any AI use.

---

# Scope

## Included

- one synthetic artist onboarding form
- document type classification
- sensitivity classification
- sensitive-field detection
- redaction recommendation
- human review checkpoint
- approved AI-input boundary
- claim ledger sample
- risk register sample
- audit receipt sample

## Excluded

- legal compliance determination
- privacy law advice
- security penetration test
- production system validation
- real client document review
- full data-retention policy
- enterprise access-control review

---

# Document reviewed

## Synthetic document type

Artist onboarding form

## Example contents

```text
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

All details are fictional.

---

# Intake decision

| Item | Decision |
|---|---|
| Document type | Artist onboarding form |
| Source | Synthetic sample |
| Sensitivity | High |
| Raw original AI access | Blocked |
| Redacted candidate required | Yes |
| Human review required | Yes |
| Approved redacted copy required | Yes |
| Audit log required | Yes |

---

# Sensitivity classification

## Classification

High sensitivity.

## Reason

The document contains information that could identify or contact a person, plus third-party emergency contact information and payment-related context.

## Detected sensitivity categories

- personal identity information
- contact details
- physical address
- third-party contact information
- business/tax identifier
- payment-related note
- project context

---

# Sensitive information detected

| Field | Example value | Risk | Recommended action |
|---|---|---|---|
| Legal name | Maya Thompson | Personal information | Redact |
| Email | maya.river@example.test | Contact detail | Redact |
| Phone | 0400 000 000 | Contact detail | Redact |
| Address | 12 Example Street | Location/personal detail | Redact |
| Emergency contact | Lara Thompson / 0400 111 111 | Third-party personal information | Redact |
| ABN | 00 000 000 000 | Business/tax identifier | Review |
| Payment note | Bank details pending | Financial context | Redact/review |

---

# Redaction summary

## Redacted candidate

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

## Redaction decision

The project context can remain for summary purposes. Direct identifiers, third-party contact information, and payment-related details should not enter the AI workflow.

---

# Human review decision

| Review item | Status |
|---|---|
| Personal identifiers removed | Complete |
| Third-party details removed | Complete |
| Payment-related context blocked | Complete |
| ABN marked for review | Complete |
| Project context retained | Approved |
| AI access to raw original | Blocked |
| AI access to approved redacted copy | Allowed |

## Reviewer note

Project context may be used for a limited summary. Personal, third-party, and payment-related fields remain blocked.

---

# AI boundary

## Raw original

Status: **Blocked from AI**

Reason: contains unredacted personal, third-party, and payment-related information.

## Redacted candidate

Status: **Blocked from AI until review complete**

Reason: candidate redaction does not equal approval.

## Approved redacted copy

Status: **Eligible for limited AI use**

Reason: reviewed and approved for summary based only on retained project context.

---

# Approved AI summary

```text
The sample artist onboarding form relates to a regional showcase grant application and single release campaign. The approved project context indicates interview availability in June and July and possible travel support requirements for regional events.
```

## Source note

Source: approved redacted copy only.

## Not used

- legal name
- email
- phone
- address
- emergency contact
- ABN
- payment note

---

# Claim Ledger

| Claim | Status | Evidence |
|---|---|---|
| The document relates to a regional showcase grant application. | Evidenced | Approved redacted copy |
| The document relates to a single release campaign. | Evidenced | Approved redacted copy |
| Interview availability is June and July. | Evidenced | Approved redacted copy |
| Travel support may be required. | Evidenced | Approved redacted copy |
| Payment setup is complete. | Gap | Payment information blocked/redacted |
| Emergency contact can be shared with AI. | Blocked | Third-party personal information |

---

# Risk Register

| Risk | Control | Status |
|---|---|---|
| Raw personal data enters AI tool | Raw original blocked | Controlled |
| Third-party emergency contact disclosed | Field redacted | Controlled |
| Payment-related information exposed | Payment note blocked | Controlled |
| Unsupported payment-readiness claim | Claim ledger gap | Blocked |
| User assumes sample equals legal compliance | Report limitation statement | Needs clear communication |
| Redacted candidate used before review | Approval gate | Controlled |

---

# Audit receipt

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

# Recommendations

## Recommendation 1 — Do not send raw onboarding forms to AI tools

Raw forms contain personal and payment-related context. They should be blocked from model ingestion, retrieval, summarisation, or export until reviewed.

## Recommendation 2 — Separate originals from approved redacted copies

Originals should remain restricted. Approved redacted copies should be treated as the only eligible AI input.

## Recommendation 3 — Add a human approval gate

A redacted candidate should not automatically become an AI input. Human review should confirm what can move forward.

## Recommendation 4 — Track claims and gaps

AI-assisted outputs should show which claims are evidenced, inferred, missing, or blocked.

## Recommendation 5 — Export an audit receipt

Each workflow should leave behind a short record of what happened, what was blocked, what was approved, and what entered AI.

---

# Client-ready conclusion

This synthetic audit demonstrates the core LAB Safe Intake principle:

> No approval = no AI access.

The document can produce useful AI-assisted output only after sensitive fields are detected, redacted, reviewed, and approved. The audit trail is not an optional extra. It is the evidence that the workflow happened.

---

# Website usage

This sample report can be used as:

- a downloadable proof artefact
- a `/safe-intake` page section
- a sales-call example
- a prototype output example
- a reference for future client audit reports

Do not present it as a real client audit.

Do not claim it proves compliance.

---

# Final rule

This sample should make the buyer understand the difference between:

```text
Raw document → AI tool
```

and:

```text
Raw document → classify → redact → review → approve → AI use → claim ledger → audit receipt
```

LAB sells the second path.
