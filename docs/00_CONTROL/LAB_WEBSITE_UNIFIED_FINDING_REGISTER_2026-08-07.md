# LAB Website Unified Finding Register — 7 August 2026

**Status:** Stage 0/1 successor register  
**Controlling frozen source:** `docs/00_CONTROL/LAB_AI_WEBSITE_MASTER_BUILD_PACK_v1.2.md`  
**Audited branch head:** `f90732d4b98d25af4df998b01ae63dfa032ab7f3`  
**Purpose:** Carry the single v1.2 finding namespace forward without modifying the frozen build pack.

## Disposition vocabulary

- `OPEN — BLOCKING`
- `OPEN — NON-BLOCKING`
- `RESOLVED — VERIFIED`
- `NOT PRESENT — VERIFIED`
- `ACCEPTED LIMITATION — HUMAN DECISION REQUIRED`

## Findings

| ID | Domain | Severity | Stage 0/1 verification | Current disposition | Next control/action |
|---|---|---:|---|---|---|
| LAB-WEB-001 | Authority / Architecture | High | **Verified present.** Vite package scripts are active while Next.js artefacts remain in parallel. | OPEN — BLOCKING | Stage 6 implementation must exclude/archive dead runtime artefacts and retain one production path. |
| LAB-WEB-002 | Bugs / Product | Critical | **Verified present.** `src/App.jsx` renders the Generator. | OPEN — BLOCKING | Remove from production route/render tree during authorised implementation; preserve code unless deletion authorised. |
| LAB-WEB-003 | Claim / Product | Critical | **Verified present.** Current UI and repository docs remain Safe Intake/Audit-first. | OPEN — BLOCKING | Stage 2 claim ledger then Stage 5/6 copy and implementation correction. |
| LAB-WEB-004 | Privacy / Bugs | Critical | **Verified present.** Current contact UI is a data-collecting form; approved email configuration is absent. | OPEN — BLOCKING | Stage 7 email-only path and environment validation. |
| LAB-WEB-005 | Architecture / UX | High | **Verified present.** Anchor navigation; no router dependency found. | OPEN — BLOCKING | Stage 3 route plan; Stage 6 refresh-safe route implementation. |
| LAB-WEB-006 | QA / Bugs | Critical | **Verified present.** Package scripts remain `dev`, `build`, `preview` only. | OPEN — BLOCKING | Stage 8 adds deterministic lint/test/a11y/smoke scripts. |
| LAB-WEB-007 | CI / Correctness | High | **Verified present.** Fresh PR CI passes but still enforces only install/build/preview smoke. | OPEN — BLOCKING | Stage 8 expands CI; do not treat current green CI as release readiness. |
| LAB-WEB-008 | UX / Accessibility | High | **Verified present.** Required skip-link/reduced-motion/interactive-node accessibility primitives not found in current implementation. | OPEN — BLOCKING | Stage 4–9 design/implementation/test controls. |
| LAB-WEB-009 | Design System | High | **Verified present.** Current CSS relies heavily on raw visual values rather than the target token layer. | OPEN — BLOCKING | Stage 4 design-token plan, Stage 6 implementation. |
| LAB-WEB-010 | Visual Control | High | **Verified present.** Hero includes decorative gradient/stripe treatment without evidence function. | OPEN — NON-BLOCKING | Replace/reduce during authorised Stage 6 visual implementation. |
| LAB-WEB-011 | Performance | High | **Prospective risk confirmed.** Interactive visuals are not yet implemented. | OPEN — NON-BLOCKING | DOM/SVG/CSS-first implementation; measure before release. |
| LAB-WEB-012 | UX / Accessibility | High | **Prospective risk confirmed.** Free dragging not yet implemented. | OPEN — NON-BLOCKING | Keep drag optional; selection/tap/keyboard baseline. |
| LAB-WEB-013 | Evidence / Visual | Critical | **Prospective risk confirmed.** Animated-node implementation not yet present. | OPEN — BLOCKING | Stage 4–9 must prevent motion from implying unsupported reasoning/causality/approval. |
| LAB-WEB-014 | Release Control | Critical | **Verified as control requirement.** Fresh CI is green while many product/release findings remain open. | RESOLVED — VERIFIED | v1.2 explicitly states CI is necessary but insufficient; preserve this rule. |
| LAB-WEB-015 | Authority / Visual | Critical | **Verified.** Visual Evidence Grammar is drafted, not adopted/canonical. | RESOLVED — VERIFIED | v1.2 and Stage 0 reconciliation classify it as supporting draft only. |
| LAB-WEB-016 | Authority / Design | Critical | **Verified present.** Approved Everything Design canon/philosophy repository copies not found. | OPEN — BLOCKING | Stage 4 hard-stop until verified copies/paths exist. |
| LAB-WEB-017 | Agent Security / Authority | Critical | **Verified present.** Repository contains stale prompts that describe themselves as current and conflict with v1.2. | RESOLVED — VERIFIED | v1.2 repository-instruction boundary + Stage 0 reconciliation prevent them controlling execution. |
| LAB-WEB-018 | Release Control | Critical | **Paperwork defect corrected.** v1.1 could fail open after Stage 8. | RESOLVED — VERIFIED | v1.2 Stage 8 now stops on release-blocking failures. |
| LAB-WEB-019 | Release Control | Critical | **Paperwork defect corrected.** v1.1 deployment order allowed production before human decision. | RESOLVED — VERIFIED | v1.2 requires private/staging candidate, Human Decision Record, then production promotion. |
| LAB-WEB-020 | Claim / Release | High | **No unresolved v1.2 placeholder tokens found in current repository search, but required release scan is not implemented.** | OPEN — BLOCKING | Stage 5/8 implement deterministic source + built-artifact scan. |
| LAB-WEB-021 | Configuration / CI | High | **Verified not implemented.** No required two-mode environment validation found. | OPEN — BLOCKING | Stage 7 implement test/staging and production-release modes. |
| LAB-WEB-022 | Maintainability | Moderate | **Paperwork defect corrected.** Component plan simplified in v1.2. | RESOLVED — VERIFIED | Preserve small map primitive architecture in Stage 4/6. |
| LAB-WEB-023 | Public Methodology | High | **Paperwork defect corrected.** Public terminology boundary added. | RESOLVED — VERIFIED | Stage 5/6 must use neutral labels unless separate approval exists. |
| LAB-WEB-024 | Product / Publication Boundary | Critical | **New Stage 1 finding.** `src/main.jsx` renders `LabLLM`, a proof/concept interface outside the required v1.2 public architecture. | OPEN — BLOCKING | Classify as parked unless separately authorised; remove from production render tree during Stage 6 implementation. |

## Fresh reproducibility evidence

Draft PR #9 triggered fresh GitHub Actions on branch head `f90732d4b98d25af4df998b01ae63dfa032ab7f3`:

- **Build Verification — run 29:** completed successfully; checkout, Node setup, install and build all passed.
- **Validate web app — run 67:** completed successfully; checkout, Node setup, install, build and preview smoke test all passed.

This satisfies the Stage 1 requirement for a fresh install/build evidence pass on the control branch. It does **not** satisfy the later Stage 8 quality gate because current CI still lacks the required broader checks.

## Stage 0/1 register status

Stage 0/1 has verified the baseline and established one finding namespace. No open finding is silently waived. Later stages must update this successor register or create a versioned successor rather than reintroducing parallel `ENG-*` or `R-*` lists.