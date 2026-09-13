# Gate 1 — AI Workflow Review design contract

**Authority:** branch-scoped implementation control only.  
**Applies to:** `/services/ai-workflow-review` on `gate-1-ai-workflow-review`.  
**Does not supersede:** repository publication controls, approved brand assets, or Steven Lees's release authority.

## Product context

The page explains the current primary working offer: a practical review of one defined AI-assisted workflow.

The page should feel like a professional technical review surface, not an AI product dashboard and not a generic consultancy template.

## Existing visual tokens

Use the repository's existing palette and spacing behaviour rather than introducing a new theme.

- text: `#17201c`
- strong text: `#111915`
- primary accent: `#2a7b71`
- secondary accent: `#94632e`
- warm background family: `#f7eddc`, `#f4ead8`, `#eee1cc`
- desktop content max-width: `1180px`
- mobile outer gutter: `12px` each side via `calc(100% - 24px)`
- existing large radii: `28px` and `34px`

These values are descriptive of the current codebase, not a new global brand canon.

## Typography

Keep the current repository font stack for Gate 1. Do not introduce a remote font dependency merely to make this page look more designed.

Hierarchy should do most of the visual work:

- very large, compressed headline;
- clear editorial section headings;
- small uppercase labels for evidence/state context;
- body copy kept readable and materially shorter than the governing source documents.

## Layout

- First viewport: proposition + one strong workflow-boundary visual.
- No card grid in the hero.
- Each section has one job.
- Use rules/lines and typographic hierarchy before additional containers.
- Reuse cards only where a genuine boundary or state is being represented.
- Desktop may use two-column compositions where the content has an actual relationship.
- At `980px` and below, major two-column structures collapse to one column.
- At `680px` and below, decision strips and workflow rows collapse without losing order or action hierarchy.

## Motion

Gate 1 adds no new animation requirement.

Existing `prefers-reduced-motion` behaviour remains controlling. Any later motion must communicate state, hierarchy or spatial relationship rather than act as decoration.

## Hero rule

The hero must answer three questions without scrolling:

1. What is the offer?
2. What does it examine?
3. What can I do next?

The primary action is `Prepare a workflow enquiry`.

## CTA rule

The CTA represents a state transition:

`visitor with an unclear AI-assisted workflow` → `person prepared to make a qualified, non-sensitive enquiry`.

It must not imply:

- instant booking;
- document upload;
- automated assessment;
- guaranteed outcome;
- activated public contact collection while the release gate remains unresolved.

## Evidence rule

Safe Intake Proof 001 may support method credibility only within its existing boundary.

The offer page must not use the proof to imply production readiness, compliance, enterprise security or client outcomes.

## Banned patterns for Gate 1

- neon/cyber AI aesthetic;
- decorative robot/human imagery;
- glowing-node network diagrams;
- generic three-column feature grid as the first impression;
- invented testimonials, logos, statistics or outcome claims;
- mega-menu navigation;
- decorative motion that does not improve comprehension;
- treating implementation completion as publication approval.

## Verification checklist

Before Gate 1 can leave draft status:

- route resolves at `/services/ai-workflow-review`;
- Vite build passes;
- primary action is visible on desktop and mobile;
- headings alone explain the page sequence;
- no source/design reference is copied as implementation material;
- no sensitive-data intake is enabled;
- unresolved contact/release state remains visible;
- Steven Lees performs the final human release decision.
