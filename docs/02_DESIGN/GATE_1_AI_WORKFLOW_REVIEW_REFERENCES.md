# Gate 1 — AI Workflow Review reference packet

**Status:** working design evidence for the `gate-1-ai-workflow-review` branch  
**Scope:** `/services/ai-workflow-review` only  
**Rule:** references are evidence of observed design decisions, not evidence of UX effectiveness, conversion performance or implementation rights.

## Page job

Move a visitor from:

> I have an AI-assisted workflow that is unclear, unreliable or difficult to govern.

Toward:

> I understand what LAB reviews, what the review is for, and what information I would need to provide to begin a qualified enquiry.

The page must not bypass the unresolved public-contact release gate or invite sensitive document upload.

## Supahero — proposition / hero references

### AI Digital
Source: https://supahero.io/hero/ai-digital

Observed: a concise professional proposition built around transparency and accountability rather than generic AI capability language.

Use: keep the first viewport about the operational problem and the governing principle.

Do not copy: wording, brand treatment or visual identity.

### Meridian
Source: https://supahero.io/hero/meridian

Observed: proposition moves from observation to a concrete next action.

Use: make the hero explain what the visitor should understand or do next.

Do not infer: that the pattern converts better.

### New Genre
Source: https://supahero.io/hero/new-genre

Observed: studio positioning expressed with very little copy.

Use: resist over-explaining LAB in the first viewport.

## Navbar Gallery — routing references

### Factory
Source: https://www.navbar.gallery/navbar/factory

Observed: static navigation for an AI product, with paired desktop/mobile reference states.

Use: LAB currently has too few primary destinations to justify a mega-menu. Preserve simple static navigation.

### Daytona
Source: https://www.navbar.gallery/navbar/daytona

Observed: static SaaS navigation and mobile state.

Use: retain obvious primary destinations and avoid navigation complexity before the information architecture earns it.

## CTA Gallery — action references

### Shop
Source: https://www.cta.gallery/cta/shop

Observed: form-based CTA shown in desktop and mobile states.

Use: treat the CTA as a requested state transition, not as decorative button styling.

Do not infer: conversion uplift or suitability for LAB's exact workflow.

### Front
Source: https://www.cta.gallery/cta/front

Observed: simple button-led action in a SaaS context.

Use: one dominant action is preferable to multiple competing conversion paths on the offer page.

## Footer.design — closure references

### Figure AI
Source: https://www.footer.design/sites/figure-ai

Observed: minimal, large-type footer treatment with a mobile reference state.

Use: LAB's footer should close the page simply and preserve identity/status rather than create another navigation system.

### MONOLOG
Source: https://www.footer.design/sites/monolog

Observed: agency/studio footer with strong typography and desktop/mobile states.

Use: keep the footer editorial and restrained.

## GetLayers / agent-readable craft principles adapted for Gate 1

The implementation uses the mechanism, not the whole external architecture:

- explicit project design rules;
- reusable visual tokens already present in the repository;
- one job per section;
- responsive behaviour treated as part of the design decision;
- generation does not certify generation;
- release state remains separate from implementation state.

No GetLayers MCP, proprietary source package, new framework or runtime dependency is introduced in Gate 1.

## Decisions extracted from the references

1. **Hero:** proposition first; no dashboard/card-grid first impression; one dominant workflow visual.
2. **Navigation:** keep the existing static navigation; the information architecture does not justify dropdowns or mega-menus.
3. **CTA:** primary action is to prepare a qualified workflow enquiry, not to upload documents or enter a fabricated booking flow.
4. **Responsive:** preserve proposition, primary action and evidence boundary on mobile; secondary layout detail may collapse.
5. **Footer:** close simply with identity and release state.
6. **Evidence:** screenshots demonstrate implementation patterns only. They do not establish effectiveness, accessibility, conversion uplift or a right to reproduce the source design.

## Gate 1 acceptance checks

- route exists at `/services/ai-workflow-review`;
- first viewport identifies the offer and one primary action;
- page explains sources, tools, decisions, approvals, evidence/logging and failure/rollback;
- page states the possible bounded next decisions without promising implementation;
- Safe Intake Proof 001 is represented within its existing evidence boundary;
- mobile layout preserves hierarchy and CTA;
- no sensitive document upload is invited;
- no public contact route is fabricated;
- no client outcomes, conversion claims or unsupported credentials are introduced;
- build verification passes before the branch is considered technically complete.
