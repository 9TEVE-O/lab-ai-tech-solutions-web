# LAB Industry Touch Map — Responsive UI redesign notes

## Design decision

The original seven-column sector table is not used as the primary reading surface. It compresses long evidence and boundary text, creates horizontal movement on phones, and asks the reader to compare too many dimensions at once.

The responsive redesign uses this information order:

1. Decision and authority boundary
2. Four summary metrics
3. Three compact distribution charts
4. Five public-positioning domain cards
5. Searchable and filterable sector explorer
6. Evidence and lifecycle definitions
7. Claim-safe wording and prohibited inference
8. State-change control rule

## Phone behaviour

- One-column reading flow
- No horizontal scrolling
- Sector details are collapsed until requested
- Filters wrap instead of creating a sideways chip rail
- Charts use horizontal bars with labels above each bar
- Text width remains readable rather than filling the whole screen
- The desktop matrix is unavailable below 1024 px

## Web behaviour

- Summary information expands into two- and three-column grids
- Sector cards use two columns on tablets and three columns on wide screens
- A compact matrix view is available for fast comparison
- Long evidence and boundary text remains in cards, preventing the matrix from becoming compressed
- Sticky search and filters remain visible while reviewing the inventory

## Data visualisation

The charts use counts derived directly from the 20-sector inventory:

- Evidence: 9 direct evidence, 5 built capability, 5 research, 1 idea only
- Lifecycle: 10 active, 7 completed, 3 parked, 0 archived
- Domains: 6 education/research/knowledge, 5 events/logistics/public sector, and 3 each across the remaining domains

## Content boundary

The redesign changes presentation only. It does not change sector states, evidence claims, lifecycle status, public-safe wording or authority boundaries.
