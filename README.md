# LAB AI & Tech Solutions Website

A trust-led public website for LAB AI & Tech Solutions.

The site positions LAB around practical AI systems for document-heavy workflows, with **Safe Intake Proof 001** as the flagship proof artefact and **AI-Safe Document Intake Audit** as the entry offer.

---

## Current Implementation

This repository currently uses the existing **Vite React** app shell.

The previous recruiter/portfolio interface has been replaced with a LAB-focused single-page implementation containing the four confirmed public website areas:

```text
/
Homepage

/safe-intake
Primary proof artefact

/about
Founder and company context

/contact
Enquiry path
```

Because this is still running inside a simple Vite shell, the first implementation uses in-page anchors rather than a full router.

---

## Core Positioning

> LAB helps teams prepare documents and workflows for AI safely.

Core message:

> Most organisations do not have an AI problem first. They have an evidence problem.

Core principle:

> No approval = no AI access.

Website-ready line:

> Before information reaches AI systems, it should be classified, reviewed, approved, and traceable.

---

## Primary Proof

**Safe Intake Proof 001**

A working proof demonstrating controlled document intake before AI use.

It demonstrates:

- document intake
- classification
- quarantine
- review states
- approval gates
- evidence ledger events
- blocked AI ingestion until approval
- controlled workflow transitions

It must not be presented as:

- production software
- compliance software
- enterprise platform
- legal certification
- enterprise security certification
- risk elimination

---

## Primary Offer

**AI-Safe Document Intake Audit**

A practical review for teams that want to understand whether their documents, approvals, and knowledge workflows are ready for safer AI use.

---

## Active Source Documents

The build brain now lives in `docs/`:

```text
docs/00_CONTROL/LAB_WEBSITE_CONTINUATION_SYSTEM_PROMPT.md
docs/01_STRATEGY/LAB_WEBSITE_SOURCE_OF_TRUTH.md
docs/02_PROOF/SAFE_INTAKE_PROOF_001.md
docs/03_BRAND/LAB_CHARACTER_SYSTEM.md
docs/04_BUILD/LAB_WEBSITE_NEXT_BUILD_PROMPT.md
```

---

## File Structure

```text
src/App.jsx
src/main.jsx
src/styles.css
README.md
docs/
```

The older `data/` files may still exist from the previous portfolio MVP. They are not the current source of truth for the LAB website.

---

## Development

```bash
npm install
npm run dev
npm run build
```

---

## Claim Control

The website must not invent:

- products
- clients
- features
- compliance claims
- metrics
- case studies
- certifications
- partnerships
- testimonials
- deployment status

If evidence does not exist, do not claim it.

If deployment proof does not exist, do not imply it.

If uncertainty exists, state uncertainty.

---

## Build Principle

```text
Problem
↓
Proof
↓
Trust
↓
Conversation
```

Do not optimise only for understanding.

Optimise for action.
