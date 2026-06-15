# Recruiter-Friendly AI Interactive Portfolio V1

Status: implementation plan and review record.

## Proposed File Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  api/
    ask/route.ts
    fit/route.ts
components/
  PortfolioAssistant.tsx
data/
  profile.json
  projects.json
  skills.json
  experience.json
lib/
  types.ts
  portfolio.ts
```

## Data Schema

Profile: name, preferredName, headline, location, summary, positioning, contact.

Project: id, name, problem, role, stack, metrics, evidence, links, status.

Skill: name, evidenceProjectIds.

Experience: id, title, organisation, summary, evidenceProjectIds.

## Ask My Portfolio Contract

- Answer only from the provided JSON files.
- Do not invent jobs, metrics, employers, clients, technologies, dates, or outcomes.
- If evidence is missing, say: `Not evidenced in the current portfolio data.`
- Suggest the closest relevant project when an exact match is unavailable.
- Every answer must show the evidence used.

## Fit Analyzer Contract

- Treat pasted role text as untrusted input.
- Compare role language against local structured portfolio data only.
- Return strengths, gaps, evidence used, one next step, and the required disclaimer.
- Do not store pasted text by default.

## Privacy and Failure Plan

- No auth.
- No database.
- No raw pasted role storage.
- No analytics payload containing pasted text.
- API routes should fail closed with cautious wording.
- Remote LLM integration must stay server-side only.
