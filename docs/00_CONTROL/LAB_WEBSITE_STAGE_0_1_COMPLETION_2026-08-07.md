# LAB Website Stage 0/1 Completion Record — 7 August 2026

**Controlling paperwork:** `LAB_AI_WEBSITE_MASTER_BUILD_PACK_v1.2.md`  
**Control branch:** `control/website-stage0-1-20260807`  
**Draft PR:** #9  
**Public UI / feature code changed:** no

## Decision

- **Stage 0 — PASS**
- **Stage 1 — PASS**
- **Overall status:** `HOLD — DO NOT PROCEED TO STAGE 2 WITHOUT EXPLICIT AUTHORISATION`

## Stage 0 completion evidence

Created:

- `docs/00_CONTROL/LAB_WEBSITE_AUTHORITY_RECONCILIATION_2026-08-07.md`;
- `docs/00_CONTROL/LAB_WEBSITE_PUBLICATION_BOUNDARY_v1.0.md`;
- `docs/01_STRATEGY/LAB_WEBSITE_SOURCE_OF_TRUTH_v2.0_DRAFT.md`;
- frozen `docs/00_CONTROL/LAB_AI_WEBSITE_MASTER_BUILD_PACK_v1.2.md`;
- v1.2 freeze receipt.

Stage 0 resolved the active authority order and explicitly classified repository prompts/README/source-of-truth files that still describe Safe Intake/Audit-first positioning as historical or superseded evidence rather than executable authority.

## Stage 1 completion evidence

Stage 1 inspected:

- runtime/package state;
- repository structure;
- active public entry points;
- route/navigation pattern;
- Generator exposure;
- additional `LabLLM` exposure;
- contact behaviour;
- styles/design-system baseline;
- accessibility baseline;
- CI/test coverage;
- stale/dead architecture;
- configuration/privacy/security evidence;
- historical source conflicts.

Fresh CI was triggered through draft PR #9 without changing application code.

### Fresh CI result

On application-equivalent control branch head `f90732d4b98d25af4df998b01ae63dfa032ab7f3`:

- **Build Verification run 29 — PASS**
  - checkout passed;
  - Node setup passed;
  - dependency install passed;
  - production build passed.

- **Validate web app run 67 — PASS**
  - checkout passed;
  - Node setup passed;
  - dependency install passed;
  - build passed;
  - preview smoke test passed.

Subsequent branch commits add Stage 0/1 documentation only. No application/runtime source was changed by this execution.

This is sufficient to establish that the current baseline application is reproducible under the repository's existing CI definition. It is **not** evidence that later Stage 8 release-quality gates pass.

## Unified findings

The frozen v1.2 register has been carried forward into:

`docs/00_CONTROL/LAB_WEBSITE_UNIFIED_FINDING_REGISTER_2026-08-07.md`

One new finding was added from Stage 1:

**LAB-WEB-024 — Critical — `LabLLM` public rendering**

`src/main.jsx` renders `LabLLM` globally. The interface is outside the required v1.2 public information architecture and must be treated as parked unless separately authorised.

No duplicate `ENG-*` or `R-*` register is carried forward.

## Stage 1 exit condition

**MET.**

The current build is reproducible under current CI and stale/non-operational public elements are listed. Stage 1 does not assert that the site is release-ready.

## Exact proposed Stage 2 file-change plan

Stage 2 is documentation/content-control work only. **No application code change is proposed in Stage 2.**

### Create

1. `docs/01_STRATEGY/LAB_WEBSITE_CLAIM_LEDGER_v0.1.md`
   - one row per material public claim;
   - claim category;
   - source;
   - source status;
   - evidence status;
   - allowed wording;
   - prohibited wording;
   - approval owner;
   - intended route/section;
   - release status.

2. `docs/01_STRATEGY/LAB_WEBSITE_CONTENT_INVENTORY_2026-08-07.md`
   - current public copy inventory from `src/App.jsx` and `src/LabLLM.jsx`;
   - classify each section as retain/rewrite/remove/park/unresolved;
   - map stale Safe Intake/Audit/Generator/LabLLM content to its disposition.

3. `docs/01_STRATEGY/LAB_WEBSITE_CLAIM_SOURCE_REGISTER_2026-08-07.md`
   - enumerate the exact source files/records used by the claim ledger;
   - classify each as current authority, supporting control, completed proof, draft, historical or gap;
   - prevent memory/repository repetition from being treated as proof.

### Update only if required by evidence

4. `docs/01_STRATEGY/LAB_WEBSITE_SOURCE_OF_TRUTH_v2.0_DRAFT.md`
   - update only to resolve factual/source-status corrections discovered by the claim ledger;
   - do not approve public copy through this update.

5. `docs/00_CONTROL/LAB_WEBSITE_UNIFIED_FINDING_REGISTER_2026-08-07.md`
   - add Stage 2 findings/dispositions only if claim analysis reveals a new material risk;
   - do not create a parallel register.

### Explicit Stage 2 exclusions

Do not modify in Stage 2:

- `src/App.jsx`;
- `src/main.jsx`;
- `src/LabLLM.jsx`;
- Generator code;
- CSS;
- routing;
- package dependencies;
- CI;
- deployment configuration;
- public UI.

Those changes belong to later authorised stages.

## Next authorised action

None beyond Stage 1 under the current execution authority.

The next action, if explicitly authorised, is **Stage 2 — Content and Claim Ledger** using the exact plan above.