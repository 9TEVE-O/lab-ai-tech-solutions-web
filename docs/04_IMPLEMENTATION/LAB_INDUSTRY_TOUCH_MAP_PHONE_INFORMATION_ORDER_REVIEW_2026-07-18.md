# LAB Industry Touch Map — Phone Information-Order Review

**Filename:** `LAB_INDUSTRY_TOUCH_MAP_PHONE_INFORMATION_ORDER_REVIEW_2026-07-18.md`  
**Owner:** LAB AI & Tech Solutions  
**Review date:** 18 July 2026  
**Reviewed artefact:** `LAB_INDUSTRY_TOUCH_MAP_RESPONSIVE_UI_2026-07-18.html`  
**Viewport reviewed:** 390 × 844 px  
**Classification:** Active design research input / internal review record  
**Authority boundary:** This review evaluates information order and inference risk. It is not publication approval, user-research validation, accessibility certification or evidence that the interface prevents misinterpretation in practice.

---

## 1. Decision

The phone layout is mechanically responsive and readable, but the safe interpretation model is delivered too late.

The primary defect is not visual compression. It is that the user encounters portfolio counts, evidence labels, lifecycle labels, domain strength statements and twenty sector records before receiving the full definitions and claim-control rules needed to interpret them safely.

**Required change before further visual refinement:** move interpretation and authority controls ahead of analytical summaries and sector exploration.

---

## 2. Review method

The prototype was rendered at 390 × 844 px and reviewed as a continuous phone journey.

Approximate section positions:

| Section | Start position | Approximate phone screens from top |
|---|---:|---:|
| Hero, boundary and metrics | 0 px | 0.0 |
| Strategic decision | 986 px | 1.2 |
| Portfolio charts | 1,819 px | 2.2 |
| Five public domains | 3,102 px | 3.7 |
| Sector explorer | 5,429 px | 6.4 |
| State definitions | 10,315 px | 12.2 |
| Claim controls | 11,641 px | 13.8 |
| State-change controls | 12,664 px | 15.0 |

The full page is approximately 13,490 px high, or sixteen 844 px phone screens.

---

## 3. Where judgement becomes clear

### 3.1 Initial boundary is clear

The first screen establishes that the artefact is an opportunity map rather than proof of market validation, clients, revenue, production readiness, regulatory approval or authority to advertise across every listed sector.

This is an effective first boundary because it appears before the metrics.

### 3.2 Strategic judgement becomes clear in the second screen

The strongest decision statement appears at approximately 1.2 phone screens:

> Position around five connected domains, not twenty separate industry claims.

The numbered five-domain list makes the intended strategic compression understandable. At this point the user can distinguish the public narrative from the underlying inventory.

### 3.3 Operational judgement becomes clear only near the end

The interface does not fully explain how to make a safe judgement about an individual sector until the claim-control and state-change sections, approximately fourteen to fifteen screens down.

Only there does the user receive the complete operating rule:

- internal wording is different from public-safe wording;
- several common inferences are prohibited;
- a sector cannot change state without a new evidence record; and
- buyer, use case, risks, authority and ownership must be recorded.

**Finding:** strategic judgement is clear early; evidence-bound operational judgement is late.

---

## 4. Where necessary context arrives too late

### 4.1 State definitions follow the sector inventory

The meanings of `direct evidence`, `built capability`, `research`, `idea only`, `active`, `completed`, `parked` and `archived` appear after the twenty-sector explorer.

Before reaching those definitions, the user has already seen:

- summary counts;
- evidence and lifecycle charts;
- domain strength statements;
- filters using the state labels; and
- twenty sector cards carrying those labels.

This reverses the safe order. The user must interpret labels before being told what they mean.

### 4.2 Independence of evidence and lifecycle is stated but not operationalised early

The portfolio section says evidence strength, lifecycle status and public-domain concentration remain independent. However, the practical consequences of that independence are not explained until much later.

The user needs an early statement such as:

> Evidence state describes the basis available. Lifecycle state describes current organisational attention. Neither state proves a current service, client, outcome or authority.

### 4.3 Claim controls arrive after the most inference-heavy content

The public-safe wording and prohibited-inference list arrive after all domain and sector content.

By that stage the user has already encountered labels such as:

- `active sector`;
- `direct evidence`;
- `current strength`;
- `core opportunity`; and
- `public positioning`.

Those terms can be interpreted commercially or authoritatively before the limiting language appears.

### 4.4 Sector evidence and limitations are collapsed by default

Each card initially exposes the sector, domain, evidence state and lifecycle state. The representative evidence and opportunity boundary sit inside a closed disclosure element.

The visible summary therefore presents the classification before the reasons and limits supporting it.

For an evidence-bound interface, the minimum visible card layer should include:

1. what exists;
2. what it supports; and
3. what it does not support.

Detailed source records may remain collapsed.

### 4.5 Provenance is absent from the decision surface

The cards name representative evidence but do not expose source identifiers, dates, authority records, verification state or review dates.

The user cannot determine from the interface whether a classification is:

- current or stale;
- self-authored or indepently verified;
- based on direct delivery, professional background, research or analogy; or
- superseded by a later record.

---

## 5. Where the interface invites an unsupported inference

### 5.1 Headline metrics can become service claims

`20 industry groups` and `10 active sectors` are visually prominent before the user sees the state definitions.

Possible unsupported inference:

> LAB actively serves or offers services across twenty sectors, with ten currently active.

The authority boundary reduces this risk but does not remove it, particularly after the user scrolls away from the hero.

### 5.2 `Active` can be read as an active commercial offer

In the source model, active can mean current research, product work or opportunity development. It does not necessarily mean a public offer, current client, active delivery or validated demand.

The green active badge and active-sector count visually resemble commercial status indicators.

### 5.3 `Direct evidence` can be read as paid client or outcome proof

Direct evidence includes operational, client-related, case-study or professional material. It does not automatically prove a paid LAB engagement, measurable outcome or repeatable sector delivery.

That boundary is not visible wherever the label appears.

### 5.4 Domain counts can be read as priority, strength or market size

The public-domain footprint chart counts mapped sectors. It does not measure:

- evidence quality;
- commercial attractiveness;
- revenue potential;
- buyer demand;
- delivery readiness; or
- strategic priority.

The chart title and bars can still invite those readings.

### 5.5 `Current strength` can overstate the evidence basis

The domain cards use concise strength statements without showing the evidence set, verification status or limitations immediately beside them.

Possible unsupported inference:

> The domain has been independently validated or proven through current LAB delivery.

### 5.6 Isolated search results lose global context

Once the sticky search and filter controls are in use, a user can encounter one sector card far below the opening boundary. The card does not repeat the global rule that the inventory is not a service, client, revenue or authority claim.

### 5.7 Visual hierarchy privileges classification over substantiation

Badges and counts are immediately scannable. Evidence details, authority boundaries and source limitations require expansion or further scrolling.

The interface therefore makes the easiest information to consume the least sufficient information for judgement.

---

## 6. Revised phone information order

The next interface iteration should use this order:

1. **Purpose and authority boundary** — what the map is and is not.
2. **Strategic decision** — five connected domains, not twenty service claims.
3. **How to read the model** — evidence and lifecycle definitions plus the rule that neither proves a service, client, outcome or authority.
4. **Claim controls** — public-safe wording and prohibited inferences.
5. **Portfolio summaries** — counts and charts labelled as inventory distributions, not market or readiness scores.
6. **Public domains** — opportunity, evidence basis, risk and current permitted claim.
7. **Sector explorer** — visible support and limitation statement; expandable provenance.
8. **State-transition control** — evidence, authority, buyer, use case, risk, owner and review requirements.

---

## 7. Interface requirements derived from the review

The underlying data model must allow the interface to display, for every capability or opportunity node:

- evidence class and confidence as separate values;
- lifecycle state and commercial-offer state as separate values;
- source and provenance references;
- authority scope and exclusions;
- current permitted claim;
- prohibited inferences;
- opportunity posture;
- decision owner;
- review date or event trigger; and
- the latest append-only state-transition record.

The UI must not calculate a stronger claim merely because multiple weak records exist.

---

## 8. Closure

**Review result:** information-order revision required before branding or visual refinement.

**Schema dependency:** `LAB_EVIDENCE_BOUND_OPPORTUNITY_SCHEMA_v0.1.md` defines the model that the next interface should render.
