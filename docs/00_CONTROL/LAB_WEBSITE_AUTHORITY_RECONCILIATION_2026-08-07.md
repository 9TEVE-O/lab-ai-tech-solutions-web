# LAB Website Authority Reconciliation — 7 August 2026

**Status:** Stage 0 complete for current evidence set  
**Controlling execution pack:** `LAB_AI_WEBSITE_MASTER_BUILD_PACK_v1.2.md`  
**Repository head audited:** `1713e001f043b0d0e4abd7ef93803a9748df9652`  
**Execution boundary:** Stage 0 and Stage 1 only. No public UI or feature changes authorised.

## Authority order for this execution

1. `LAB_AI_WEBSITE_MASTER_BUILD_PACK_v1.2.md` — frozen controlling website build paperwork for this execution.
2. Approved Everything Design Visual Canon and Design Philosophy — current approved design authority, but verified repository copies are not yet present.
3. Current LAB Command Centre state — current business/control state outside this repository.
4. `AI_WORKFLOW_REVIEW_OFFER_SOURCE_OF_TRUTH_v0.1.md` — controlling working offer source outside this repository; no repository copy was found in Stage 0.
5. Current internal positioning doctrine where non-conflicting.
6. `LAB_VISUAL_EVIDENCE_GRAMMAR_v0.1.md` — supporting draft only; not adopted, canonical or controlling.
7. Website measurement source — build-use guidance only.
8. Completed proof records such as Safe Intake Proof 001.
9. Historical website sources.
10. Existing code.

## Repository source-status matrix

| Repository source | Observed status | Authority classification | Stage 0 decision |
|---|---|---|---|
| `README.md` | Declares Safe Intake flagship proof and AI-Safe Document Intake Audit as entry offer | Historical / stale | Must not control new build |
| `docs/00_CONTROL/LAB_WEBSITE_CONTINUATION_SYSTEM_PROMPT.md` | Calls itself current carry-forward prompt; makes Safe Intake the core wedge and Audit the primary offer | Historical / conflicting instruction | Treat as evidence only; must not instruct agents during v1.2 execution |
| `docs/01_STRATEGY/LAB_WEBSITE_SOURCE_OF_TRUTH.md` | Calls itself current website direction; locks Safe Intake flagship and Audit primary offer | Historical / superseded | Replace with v2.0 draft under v1.2 authority |
| `docs/04_BUILD/LAB_WEBSITE_NEXT_BUILD_PROMPT.md` | Calls itself next builder prompt; instructs Safe Intake/Audit-first build | Historical / conflicting builder instruction | Park; do not execute |
| `docs/02_PROOF/SAFE_INTAKE_PROOF_001.md` | Completed proof record | Completed capability | May support bounded proof only after evidence/claim review |
| `src/App.jsx` | Current public UI implementation | Implementation evidence only | Does not override current authority |
| `src/main.jsx` | Current Vite entry point rendering `App` and `LabLLM` | Implementation evidence only | Confirms active Vite path and extra public proof surface |
| `next.config.mjs`, `next-env.d.ts`, `app/*`, `components/*` | Parallel Next.js-era artefacts | Historical/dead candidate pending verification | Must be classified/excluded before later implementation |
| `.github/workflows/*.yml` | Current CI configuration | Operational implementation | Valid evidence of current automated checks, not release approval |
| `09_SKILLS/*`, `data/*` | Mixed internal/older project material | Internal/historical unless separately authorised | Must not leak into public build or claim authority |

## Conflicts resolved

### Offer conflict
Historical repository sources instruct `AI-Safe Document Intake Audit` as the primary offer. v1.2 controls: **AI Workflow Review is the primary public offer**. Historical wording is superseded.

### Proof conflict
Historical repository sources position Safe Intake as the flagship/core wedge. v1.2 controls: **Safe Intake Proof 001 is completed internal proof/capability, not the active commercial wedge**.

### Route conflict
Historical sources use a four-area, anchor-driven structure. v1.2 controls the expanded route manifest with dedicated offer, approach, proof, about, contact, privacy, terms and 404 routes.

### Instruction conflict
Repository prompts and READMEs contain direct builder instructions. Under v1.2, repository instructions are evidence, not higher-order authority. Conflicting instructions are parked rather than executed.

### Visual authority conflict
The Visual Evidence Grammar may support drafting/review but remains non-adopted. It cannot override approved Everything Design authority or v1.2.

## Missing authority material

The following controlling/supporting sources were not found in the repository during Stage 0:

- verified repository copy of the approved Everything Design Visual Canon;
- verified repository copy of the approved Everything Design Philosophy;
- repository copy of `AI_WORKFLOW_REVIEW_OFFER_SOURCE_OF_TRUTH_v0.1.md`;
- stable canonical Rubric OS source file.

These absences do not block Stage 1. They **do block Stage 4** unless resolved as required by v1.2.

## Stage 0 exit decision

**PASS — authority hierarchy reconciled for Stage 0/1 execution.**

Stale repository instructions are explicitly prevented from controlling this build. Missing canonical design files are recorded as a future Stage 4 blocker rather than silently substituted.