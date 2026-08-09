# LAB Website Stage 1 — Repository and Runtime Audit

**Date:** 7 August 2026  
**Branch:** `control/website-stage0-1-20260807`  
**Base/main head audited:** `1713e001f043b0d0e4abd7ef93803a9748df9652`  
**Controlling paperwork:** `LAB_AI_WEBSITE_MASTER_BUILD_PACK_v1.2.md`  
**Public UI changes made:** none

## Stage status

**AUDIT EXECUTED — STAGE 1 EXIT NOT YET SATISFIED**

The repository has been inspected and material stale/non-operational elements have been recorded. A fresh install/build was not executable through the connected repository interface in this run. The latest GitHub Actions evidence for the current unchanged main head is from 17 July 2026 and shows both `Validate web app` and `Build Verification` completed successfully on SHA `1713e001f043b0d0e4abd7ef93803a9748df9652`.

That is valid historical build evidence for the exact current commit, but it is **not represented as a fresh 7 August reproducibility run**. Stage 1 remains blocked on a fresh deterministic install/build before its exit condition can be declared passed.

## Runtime architecture

### Active path

`package.json` declares:

- `vite` development;
- `vite build` production build;
- `vite preview` preview server;
- React 19.2.7 / React DOM 19.2.7;
- no router dependency;
- no lint/test/a11y scripts.

`src/main.jsx` mounts `App` and `LabLLM` into the Vite root.

**Decision:** Vite + React is the active production runtime.

### Parallel/stale architecture

The repository also contains Next.js-era artefacts including:

- `next.config.mjs`;
- `next-env.d.ts`;
- `app/layout.tsx` and `app/globals.css`;
- `components/PortfolioAssistant.tsx`;
- older portfolio data under `data/`.

These are not referenced by the active Vite package scripts and are classified as **historical/dead candidates pending later archival/exclusion work**.

## Current public surfaces observed

### `src/App.jsx`

Observed public content includes:

- Safe Intake-first hero/positioning;
- Safe Intake Proof 001 as primary proof;
- historical `AI-Safe Document Intake Audit` offer;
- `Generator` rendered into the public app;
- anchor navigation rather than required dedicated routes;
- a data-collecting contact form whose button does not implement the approved email-only path.

### `src/main.jsx` / `src/LabLLM.jsx`

`src/main.jsx` also renders `LabLLM` globally.

`LabLLM` exposes a bounded browser-based proof interface around LAB concept records. It is not part of the v1.2 required public information architecture and has not been separately authorised as a public proof surface.

**New Stage 1 finding:** `LAB-WEB-024` — unauthorised/out-of-scope `LabLLM` public rendering.

## Routing and navigation

- No `react-router` usage was found.
- Current app uses anchor links such as `#safe-intake`, `#generator`, `#about`, `#contact`.
- Required v1.2 routes are not implemented.
- Refresh-safe route behaviour therefore cannot yet satisfy the target information architecture.

## Contact and configuration

- No repository use of `VITE_LAB_CONTACT_EMAIL` was found.
- Current contact UI is a client-side form rather than the approved email-only enquiry route.
- No evidence was found in this pass of the required two-mode environment validation.
- No approved production contact email/domain is established by this repository audit.

## Styling and design-system state

Current `src/styles.css` uses numerous direct colour, background, gradient, radius and shadow values.

Observed hero styling includes decorative gradient/stripe effects. A controlled design-token implementation aligned with the active approved Everything Design sources is not yet present.

The approved Everything Design canon/philosophy files required by v1.2 were not found in the repository. Stage 4 remains blocked until verified copies/paths exist.

## Accessibility baseline

Current source review does not show:

- skip-link implementation;
- `prefers-reduced-motion` rules;
- accessible interactive-node primitives;
- automated accessibility test configuration.

Current HTML does use labels and semantic sections in places, but this is insufficient to claim WCAG 2.2 AA readiness.

## CI and test baseline

### Current package scripts

Only:

- `dev`;
- `build`;
- `preview`.

### `.github/workflows/build.yml`

Runs:

- checkout;
- Node 22;
- `npm install`;
- `npm run build`.

### `.github/workflows/validate.yml`

Runs:

- checkout;
- Node 22;
- `npm install`;
- build;
- preview-server smoke window.

Missing from the enforced baseline:

- lint;
- unit tests;
- integration tests;
- route tests;
- broken-link check;
- accessibility automation;
- unresolved-token scan;
- bundle/performance gate;
- secret/dependency scanning as an integrated release gate;
- Rubric OS judgement gate.

`npm install` rather than a frozen clean-install command also weakens reproducibility evidence.

## Metadata / SEO / deployment baseline

The current single-page Vite implementation does not yet demonstrate the required per-route metadata, sitemap/robots strategy, privacy/terms routes, useful 404 route, canonical domain configuration or staged-release architecture required by v1.2.

No claim is made here that host security headers are absent in the eventual hosting layer; only that Stage 1 repository evidence is insufficient to verify them.

## Stale-source register

| Source | Stage 1 classification | Reason |
|---|---|---|
| `README.md` | stale | Safe Intake/Audit-first positioning |
| `docs/00_CONTROL/LAB_WEBSITE_CONTINUATION_SYSTEM_PROMPT.md` | stale/conflicting instruction | claims current authority but contradicts v1.2 |
| `docs/01_STRATEGY/LAB_WEBSITE_SOURCE_OF_TRUTH.md` | superseded | older offer/proof/route decisions |
| `docs/04_BUILD/LAB_WEBSITE_NEXT_BUILD_PROMPT.md` | stale/conflicting builder prompt | instructs superseded build |
| `next.config.mjs`, `next-env.d.ts`, `app/*` | dead/historical candidate | parallel Next.js architecture not used by active Vite scripts |
| `components/PortfolioAssistant.tsx`, `data/*` | older portfolio material | outside current website position unless separately reused/cleared |
| `src/Generator.jsx`, `src/GuidedGenerator.jsx`, generator assets | parked feature code | public exposure prohibited; retain outside production unless deletion authorised |
| `src/LabLLM.jsx`, `src/lab-llm.css` | unresolved/park candidate | currently public but outside v1.2 information architecture |

## Public-risk register

1. **Critical:** stale primary offer can ship.
2. **Critical:** parked Generator remains publicly rendered.
3. **Critical:** `LabLLM` adds an unapproved public proof/methodology surface.
4. **Critical:** contact path implies data collection without approved operational handling.
5. **High:** current repository prompts can misdirect a coding agent unless authority boundary is enforced.
6. **High:** parallel Next/Vite artefacts create architecture ambiguity.
7. **High:** green CI can be mistaken for release readiness despite missing gates.
8. **High:** accessibility/reduced-motion baseline is not present for upcoming movable visuals.
9. **High:** design-system token layer is not established.
10. **High:** required route/SEO/privacy/terms architecture is not present.

## Rubric OS preflight state

No numeric production score is asserted because current evidence is incomplete.

- **Security:** NOT YET PASSABLE — headers, secrets/dependency posture, privacy configuration and deployment evidence incomplete.
- **Bugs & Correctness:** BLOCKED — stale public offer, Generator, LabLLM and contact behaviour are material product correctness failures.
- **Performance:** NOT YET PASSABLE — no fresh staged performance/INP evidence; interactive visuals not yet implemented.
- **DRY/SOLID:** BLOCKED — parallel architecture and monolithic/public mixed surfaces require reconciliation.
- **UX/A11y:** BLOCKED — required accessibility primitives and route behaviour incomplete.
- **Design System:** BELOW RELEASE EVIDENCE — controlled token implementation and verified canonical design files absent.

## Stage 1 exit decision

`HOLD — STAGE 1 EXIT NOT YET MET`

### Exact remaining Stage 1 blocker

Run a fresh deterministic install and production build against the exact audited commit/branch, capture the command/environment/result, and confirm no new repository changes invalidate this audit.

Historical CI success on the unchanged main SHA is retained as supporting evidence but is not relabelled as a fresh run.