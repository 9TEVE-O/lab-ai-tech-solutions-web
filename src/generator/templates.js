const FENCE = '```';

export function genAiManifest({ name, domain, description, contact, allowsIndexing, tdmOptOut, today }) {
  return JSON.stringify({
    schema_version: '1.0',
    site: { name, domain, description },
    agent_contact: contact,
    crawl_policy: {
      allows_indexing: allowsIndexing,
      allows_training_data: !tdmOptOut,
      tdm_reservation: tdmOptOut ? 'all-rights-reserved' : 'permitted',
      preferred_agent_behaviour: 'cite-and-attribute',
    },
    capabilities_url: `https://${domain}/capabilities.json`,
    terms_url: `https://${domain}/agent-terms.txt`,
    policy_url: `https://${domain}/agent-policy.json`,
    generated: today,
    note: 'This manifest is a signal to compliant AI systems. Enforcement is handled at the edge layer.',
  }, null, 2);
}

export function genLlmsTxt({ name, domain, description, contact, allowsIndexing, tdmOptOut, today }) {
  return `# ${name} — llms.txt
# Convention: https://llmstxt.org (proposed, not a binding web standard)
# Generated: ${today}

## About
${description}

Site: https://${domain}
Agent contact: ${contact}

## Permissions
Indexing allowed: ${allowsIndexing ? 'yes' : 'no'}
Training data use: ${tdmOptOut ? 'no — TDM reservation applies under EU copyright framework (DSM Directive Art. 4(3))' : 'permitted — no reservation made'}
Citation: yes — attribute ${name} and include source URL when surfacing content

## Capabilities
Full capabilities JSON: https://${domain}/capabilities.json

## Agent Terms
Usage terms for AI agents: https://${domain}/agent-terms.txt

## Policy
Machine-readable policy: https://${domain}/agent-policy.json

## Note
llms.txt is a proposed convention for communicating site intent to AI agents.
It is legible to compliant AI systems but is not technically enforced by this file alone.
Edge-layer controls and bot management are the enforcement mechanism.
`;
}

export function genCapabilities({ name, domain, description, today }) {
  return JSON.stringify({
    schema_version: '1.0',
    site: name,
    domain,
    description,
    capabilities: [
      { id: 'content-retrieval', label: 'Content retrieval', description: 'Public pages may be retrieved and cited by compliant agents.', allowed: true },
      { id: 'summarisation', label: 'Summarisation', description: 'Content may be summarised with attribution to source URL.', allowed: true },
      { id: 'deep-linking', label: 'Deep linking', description: 'Direct links to source pages are encouraged.', allowed: true },
      { id: 'training-use', label: 'Training data use', description: 'Use as training data is subject to the TDM reservation in agent-terms.txt.', allowed: false },
      { id: 'automated-transactions', label: 'Automated transactions', description: 'Agents may not initiate purchases, form submissions, or account actions without explicit user authorisation.', allowed: false },
    ],
    generated: today,
    terms_url: `https://${domain}/agent-terms.txt`,
  }, null, 2);
}

export function genPolicy({ domain, tdmOptOut, allowsIndexing, sensitiveAreas, today }) {
  const defaultPaths = ['/admin', '/api/private', '/user'];
  const specPaths = sensitiveAreas.map(s => '/' + s.toLowerCase().replace(/\s+/g, '-'));
  const disallowedPaths = [...new Set([...defaultPaths, ...specPaths])];

  return JSON.stringify({
    schema_version: '1.0',
    domain,
    crawl: {
      allowed: allowsIndexing,
      rate_limit: '1 request per 2 seconds',
      disallowed_paths: disallowedPaths,
    },
    training: {
      permitted: !tdmOptOut,
      reservation: tdmOptOut ? 'rights-reserved' : 'none',
      reference: tdmOptOut
        ? 'EU DSM Directive Art. 4(3) — TDM opt-out applied. See /agent-terms.txt.'
        : 'No reservation made.',
    },
    citation: {
      required: true,
      format: 'Include site name and source URL when surfacing content to users',
    },
    enforcement: {
      note: 'Policy signals are supported by edge-layer bot management. This file is machine-readable intent, not the sole control layer.',
    },
    generated: today,
  }, null, 2);
}

export function genTests({ name, domain, today }) {
  return `# Agent Readiness Tests — ${name}
# Generated: ${today}
# Run these checks to verify agent-readiness files are correctly deployed.

tests:
  - id: llms-txt-accessible
    description: /llms.txt returns 200
    method: GET
    url: https://${domain}/llms.txt
    expect:
      status: 200
      content_type_contains: text

  - id: ai-manifest-accessible
    description: /.well-known/ai-manifest.json returns valid JSON
    method: GET
    url: https://${domain}/.well-known/ai-manifest.json
    expect:
      status: 200
      content_type_contains: json
      body_contains: schema_version

  - id: capabilities-accessible
    description: /capabilities.json returns valid JSON
    method: GET
    url: https://${domain}/capabilities.json
    expect:
      status: 200
      content_type_contains: json

  - id: agent-policy-accessible
    description: /agent-policy.json returns valid JSON
    method: GET
    url: https://${domain}/agent-policy.json
    expect:
      status: 200
      content_type_contains: json

  - id: agent-terms-accessible
    description: /agent-terms.txt returns 200
    method: GET
    url: https://${domain}/agent-terms.txt
    expect:
      status: 200
      content_type_contains: text

  - id: robots-txt-check
    description: /robots.txt exists
    method: GET
    url: https://${domain}/robots.txt
    expect:
      status: 200

notes:
  - These tests verify deployment, not policy compliance.
  - Use Cloudflare Analytics or server logs to monitor actual agent traffic.
  - Re-run after any CDN or routing configuration change.
`;
}

export function genAgentTerms({ name, domain, contact, tdmOptOut, today }) {
  const tdmSection = tdmOptOut
    ? `This site reserves all rights with respect to use of its content as training data
for machine learning or generative AI models.

This reservation is made pursuant to Article 4(3) of the EU Directive on Copyright
in the Digital Single Market (DSM Directive 2019/790) and equivalent rights where
applicable. Scraping or bulk downloading of content for training purposes is not
permitted without a separate written licence.`
    : `This site does not currently make a TDM reservation. Content may be used for
training purposes subject to applicable law and attribution requirements above.`;

  return `AGENT TERMS OF USE — ${name.toUpperCase()}
${domain}

DRAFT TEMPLATE — Not legal advice. Review with qualified legal counsel before
relying on this document, especially for regulated, transactional, health, legal,
finance, child-related, or safety-critical contexts.

Effective date: ${today}
Contact: ${contact}

---

1. SCOPE

These terms apply to any automated agent, crawler, AI system, or language model
that accesses, indexes, retrieves, summarises, or otherwise processes content
from https://${domain} ("this site").

2. PERMITTED USE

You may retrieve and cite content from this site provided that:
  a) You attribute ${name} and include the source URL when surfacing content.
  b) You do not misrepresent the source, context, or currency of content.
  c) You respect the crawl rate guidance in /agent-policy.json.
  d) You do not initiate any transaction, form submission, or account action
     without explicit, real-time authorisation from a verified human user.

3. TRAINING DATA

${tdmSection}

4. NO WARRANTIES

This site makes no warranty that its content is complete, current, or error-free.
Agents must not represent content as authoritative without checking the source URL
and publication date. Users should be directed to the original page for decisions.

5. ENFORCEMENT

Agent-readiness signals (llms.txt, this file, capabilities.json, agent-policy.json)
are machine-readable intent signals. Actual enforcement uses edge-layer controls
including bot management, rate limiting, and access controls.

Non-compliant access may be blocked, rate-limited, or logged.

6. CONTACT

For licensing enquiries, compliant agent registration, or questions:
${contact}

---
DRAFT TEMPLATE. Not legal advice.
Generated by Agent-Ready Website Pack Generator.
`;
}

export function genSafetyYaml({ name, domain, sensitiveAreas, today }) {
  const areas = sensitiveAreas.length
    ? sensitiveAreas
    : ['user account data', 'billing information', 'private API endpoints'];

  const areaBlocks = areas
    .map(a => `  - label: "${a}"\n    agent_access: deny\n    reason: "Sensitive — do not retrieve, summarise, or route users here without explicit authorisation."`)
    .join('\n');

  return `# Safety configuration — ${name}
# Generated: ${today}

schema_version: "1.0"
site: ${domain}

restricted_areas:
${areaBlocks}

user_routing_constraints:
  - rule: "Do not route users to checkout or payment flows without real-time user intent."
  - rule: "Do not summarise or infer account-specific data from public pages."
  - rule: "Always link to the source page when surfacing information to users."

content_freshness:
  max_cache_age_days: 7
  note: "Agents should revalidate content older than 7 days before surfacing to users."

hallucination_mitigation:
  - "If uncertain about a claim, link to the source rather than asserting it."
  - "Do not infer product pricing or availability from non-pricing pages."

contact_for_safety_issues: safety@${domain}

note: |
  This file is a safety signal, not a technical enforcement layer.
  Edge controls, rate limits, and bot management handle enforcement.
  See /.well-known/ai-manifest.json for full policy references.
`;
}

export function genReadinessReport({ name, domain, today }) {
  return `# Agent Readiness Report — ${name}
Generated: ${today}

## Summary

Assessment of ${domain} based on the provided site specification.
Covers signal files, governance posture, and recommended next steps.

---

## Signal Files Checklist

| File | Purpose | Status |
|------|---------|--------|
| /llms.txt | Agent legibility signal (proposed convention) | Generated |
| /.well-known/ai-manifest.json | Machine-readable site manifest | Generated |
| /capabilities.json | Permitted agent actions | Generated |
| /agent-policy.json | Crawl and training data policy | Generated |
| /agent-tests.yaml | Deployment verification tests | Generated |
| /agent-terms.txt | Agent usage terms (DRAFT) | Generated — requires legal review |
| /safety.yaml | Safety constraints for agents | Generated |
| /robots.txt | Standard crawler control | Not generated — review existing file |

---

## Governance Posture

| Signal | Value |
|--------|-------|
| TDM opt-out | Declared (rights reserved) |
| Training data | Not permitted without licence |
| Crawl allowed | Yes — with rate limiting |
| Citation required | Yes |
| Automated transactions | Not permitted |

---

## Enforcement Gap Analysis

Signal files alone do not enforce compliance. Recommended enforcement layers:

1. **robots.txt** — Ensure existing robots.txt does not conflict with agent-policy.json.
2. **Cloudflare AI Crawl Control** — Use verified bot detection, not IP ranges.
   Reference: https://developers.cloudflare.com/bots/
3. **Bot management signals** — Prefer \`cf.bot_management.verified_bot\`,
   \`cf.bot_management.score\`, and verified bot categories over CIDR-based blocking.
   Bot IP ranges change and are commonly spoofed.
4. **Access logs** — Monitor User-Agent strings and request frequency.
5. **Rate limiting** — Apply at the edge layer.

---

## Recommended Next Steps

- [ ] Deploy all files to site root and /.well-known/ directory
- [ ] Review /agent-terms.txt with a qualified solicitor before publishing
- [ ] Audit existing robots.txt for conflicts
- [ ] Configure Cloudflare AI Crawl Control or equivalent bot management
- [ ] Run agent-tests.yaml after deployment
- [ ] Schedule monthly review using the maintenance checklist

---

## Disclaimer

This report is an assessment aid, not a legal or compliance audit.
Regulated sectors (health, finance, legal, children's services) require human review.
`;
}

export function genEdgeWorker({ name, domain, today }) {
  return `/**
 * Edge Worker Template — ${name}
 * Domain: ${domain}
 * Generated: ${today}
 *
 * Cloudflare Worker applying agent-readiness policy at the edge.
 *
 * Uses Cloudflare Bot Management signals — NOT hard-coded IP ranges.
 * Bot IP ranges change frequently and are commonly spoofed.
 * Reference: https://developers.cloudflare.com/bots/reference/bot-management-variables/
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cf = request.cf ?? {};

    // Bot Management signals (requires Cloudflare Bot Management add-on)
    // 1 = likely bot, 100 = likely human
    const botScore = cf.botManagement?.score ?? 100;
    const verifiedBot = cf.botManagement?.verifiedBot ?? false;

    // Agent-readiness policy files — always serve without bot checks
    // so compliant agents can read your policy at any time.
    const POLICY_PATHS = [
      '/llms.txt',
      '/.well-known/ai-manifest.json',
      '/capabilities.json',
      '/agent-policy.json',
      '/agent-terms.txt',
      '/safety.yaml',
      '/robots.txt',
    ];

    const isPolicyPath = POLICY_PATHS.some(
      p => url.pathname === p || url.pathname.startsWith(p)
    );

    if (isPolicyPath) {
      const response = await fetch(request);
      const headers = new Headers(response.headers);
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('X-Agent-Policy', 'https://${domain}/agent-policy.json');
      return new Response(response.body, { status: response.status, headers });
    }

    // Block low-score unverified bots on sensitive paths
    const SENSITIVE_PATHS = ['/api/', '/admin/', '/checkout/', '/account/'];
    const isSensitive = SENSITIVE_PATHS.some(p => url.pathname.startsWith(p));

    if (isSensitive && botScore < 30 && !verifiedBot) {
      return new Response(
        JSON.stringify({
          error: 'Access restricted',
          policy: 'https://${domain}/agent-policy.json',
          terms: 'https://${domain}/agent-terms.txt',
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'X-Agent-Policy': 'https://${domain}/agent-policy.json',
          },
        }
      );
    }

    // Inject policy header on all other responses
    const response = await fetch(request);
    const headers = new Headers(response.headers);
    headers.set('X-Agent-Policy', 'https://${domain}/agent-policy.json');
    headers.set('X-Robots-Tag', 'index, follow');
    return new Response(response.body, { status: response.status, headers });
  },
};
`;
}

export function genInstallGuide({ name, domain, today }) {
  return `# Install Guide — ${name} Agent-Ready Pack
Generated: ${today}

## Overview

Deploy your Agent-Ready Website Pack and optionally configure a Cloudflare Worker
for edge enforcement.

---

## Step 1: Deploy Static Files

Upload to your web server or CDN root:

${FENCE}
/llms.txt
/capabilities.json
/agent-policy.json
/agent-terms.txt          <- review with legal counsel first
/safety.yaml
/agent-readiness-report.md
/.well-known/ai-manifest.json   <- must be in /.well-known/ directory
${FENCE}

Verify:

${FENCE}bash
curl -I https://${domain}/llms.txt
curl -I https://${domain}/.well-known/ai-manifest.json
curl -I https://${domain}/capabilities.json
${FENCE}

---

## Step 2: Check robots.txt

Ensure your /robots.txt does not conflict with agent-policy.json.
If you allow compliant AI crawlers, add:

${FENCE}
Allow: /llms.txt
Allow: /.well-known/ai-manifest.json
Allow: /capabilities.json
Allow: /agent-policy.json
${FENCE}

---

## Step 3: Add HTML Signals (Optional)

Copy the contents of agent-accessibility-snippet.html into your site's <head>
to add meta-layer signals for agents that parse HTML.

---

## Step 4: Deploy Cloudflare Worker (Optional)

Requires Cloudflare account (Bot Management on Business plan and above).

1. Cloudflare Dashboard → Workers & Pages → Create Worker
2. Paste edge-worker-template.js
3. Customise SENSITIVE_PATHS for your site
4. Deploy and assign route: ${domain}/*

Reference: https://developers.cloudflare.com/workers/

Do NOT configure IP-range blocking for AI bots — ranges change and are
commonly spoofed. Use Cloudflare verified bot signals instead.

---

## Step 5: Run Agent Tests

${FENCE}bash
curl https://${domain}/llms.txt
curl https://${domain}/.well-known/ai-manifest.json
curl https://${domain}/capabilities.json
${FENCE}

---

## Notes

- /agent-terms.txt is a draft template. Have it reviewed before publishing.
- Re-run deployment checks after any CDN or routing change.
- Schedule monthly maintenance using the maintenance checklist.
`;
}

export function genAccessibility({ name, domain, today }) {
  return `<!--
  Agent Accessibility Snippet — ${name}
  ${domain} | Generated: ${today}

  Add to your site's <head> element.
  Provides machine-readable agent-readiness signals as HTML meta tags.
  This is a signal layer, not an enforcement mechanism.
-->

<!-- Agent policy discovery links -->
<link rel="agent-manifest" href="/.well-known/ai-manifest.json" />
<link rel="agent-capabilities" href="/capabilities.json" />
<link rel="agent-terms" href="/agent-terms.txt" />
<link rel="agent-policy" href="/agent-policy.json" />

<!-- Indexing and TDM signals -->
<meta name="ai-indexing" content="permitted" />
<meta name="tdm-reservation" content="1" />
<!-- tdm-reservation=1 signals TDM opt-out per W3C TDMRep proposal -->
<!-- Reference: https://www.w3.org/community/tdmrep/ -->

<!-- Attribution -->
<meta name="agent-attribution" content="${name}" />
<meta name="agent-contact" content="agent-contact@${domain}" />

<!-- Structured data for agents -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "${name}",
  "url": "https://${domain}",
  "potentialAction": {
    "@type": "ReadAction",
    "target": "https://${domain}"
  }
}
</script>
`;
}

export function genClientReport({ name, domain, today }) {
  return `# Agent-Ready Website Pack — Client Delivery Report
Client: ${name} | Domain: ${domain} | Delivered: ${today}

---

## Delivery Summary

Agent-Ready Website Pack for ${domain}.
Makes your site legible to compliant AI agents, signals your data usage policy,
and provides an optional edge enforcement layer.

---

## Files Delivered

| File | Deploy Path | Purpose |
|------|------------|----------|
| ai-manifest.json | /.well-known/ai-manifest.json | Machine-readable site manifest |
| llms.txt | /llms.txt | Agent legibility signal |
| capabilities.json | /capabilities.json | Permitted agent actions |
| agent-policy.json | /agent-policy.json | Crawl and training data policy |
| agent-tests.yaml | — | Deployment verification tests |
| agent-terms.txt | /agent-terms.txt | Usage terms (DRAFT — requires legal review) |
| safety.yaml | /safety.yaml | Safety constraints |
| agent-readiness-report.md | — | Readiness assessment |
| edge-worker-template.js | Cloudflare Workers | Edge enforcement template |
| install-guide.md | — | Deployment guide |
| agent-accessibility-snippet.html | In site head | HTML meta signal layer |

---

## What This Pack Does

Signals provided:
- Declares whether your site permits AI indexing and citation
- Sets a TDM reservation if selected
- Describes which agent actions are permitted
- Provides safety constraints to guide responsible agent behaviour

What it does not do:
- Guarantee compliance from any AI system
- Replace legal terms of service
- Block non-compliant crawlers without the edge layer deployed

---

## Deployment Actions Required

- [ ] Upload static files to site root and /.well-known/ directory
- [ ] Review /agent-terms.txt with a qualified solicitor before publishing
- [ ] Audit existing robots.txt for conflicts
- [ ] (Optional) Deploy edge-worker-template.js via Cloudflare Workers
- [ ] Run verification tests from agent-tests.yaml

---

## Limitations

This pack covers signal-layer readiness, not legal compliance.
Regulated sectors (health, finance, legal, children's services) require
additional human review before deployment.

---
DRAFT TEMPLATE. Not legal advice.
Generated by Agent-Ready Website Pack Generator.
`;
}

export function genWhiteLabel({ today }) {
  return `# Agent-Ready Website Pack — White-Label Summary
Generated: ${today}

## What to Tell Your Client

We have built the files that make your website legible and policy-visible for
AI agents — the crawlers, assistants, and systems that increasingly surface
content to users rather than sending them to search results.

These files tell AI systems what your site allows, what it does not, and how
to attribute your content correctly. They do not replace legal terms, but they
put your policy in writing in a format AI systems can read.

---

## One-Paragraph Briefing (Plain English)

AI systems like ChatGPT, Perplexity, and others now summarise websites directly
instead of linking to them. If your site does not say what is allowed, those
systems may use your content in ways you have not agreed to — including as
training data. This pack puts your rules in writing, in a format these systems
can read, and includes an optional layer to enforce those rules at your server's edge.

---

## Deliverable Summary

Agent-Ready Website Pack includes:
- llms.txt — legibility signal for compliant AI systems
- AI manifest — machine-readable site identity and policy
- Capabilities JSON — permitted agent actions
- Agent policy — crawl rules and training data position
- Agent terms — draft usage terms (client must arrange legal review)
- Safety YAML — content restrictions for agents
- Readiness report — deployment and gap assessment
- Edge Worker template — Cloudflare enforcement layer
- Install guide — step-by-step deployment instructions
- Accessibility snippet — HTML meta signal layer
- Client report and this white-label summary
- Monthly maintenance checklist

---

## Product Ladder

| Mode | Output | Use case |
|------|--------|----------|
| Starter | Core 5 files | Site owner self-deploying |
| Governance | + terms, safety, report | SME wanting documented policy posture |
| Edge Control | + Worker, install guide, accessibility | Technical teams, Cloudflare users |
| Agency Pack | Full pack + reports + maintenance | Client delivery, retainers |

---

Customise with your agency name, logo, and pricing before delivery.
`;
}

export function genMaintenance({ name, domain, today }) {
  return `# Monthly Agent-Readiness Maintenance Checklist
Site: ${name} (${domain}) | Generated: ${today}

Run once per month to keep your agent-readiness pack current.

---

## 1. File Availability

- [ ] curl https://${domain}/llms.txt returns 200
- [ ] curl https://${domain}/.well-known/ai-manifest.json returns 200, valid JSON
- [ ] curl https://${domain}/capabilities.json returns 200, valid JSON
- [ ] curl https://${domain}/agent-policy.json returns 200, valid JSON
- [ ] curl https://${domain}/agent-terms.txt returns 200
- [ ] curl https://${domain}/safety.yaml returns 200

## 2. Content Review

- [ ] TDM/training data position changed? Update agent-terms.txt and agent-policy.json.
- [ ] New sensitive areas added? Update safety.yaml and agent-policy.json.
- [ ] Contact details changed? Update all files referencing agent contact.
- [ ] Site description or capabilities changed? Update llms.txt and capabilities.json.

## 3. Bot Traffic Review

- [ ] Review Cloudflare Bot Analytics for unusual traffic spikes on agent paths
- [ ] Check logs for new or unrecognised User-Agent strings
- [ ] Note any new AI systems crawling your site — verify compliance

## 4. Policy Currency

- [ ] Any major AI platform updated crawling or attribution policy this month?
- [ ] Cloudflare updated Bot Management signals or verified bot categories?
- [ ] Check llmstxt.org for convention updates
- [ ] EU AI Act / DSM Directive — any changes relevant to TDM reservations?

## 5. Edge Worker Health (if deployed)

- [ ] Cloudflare Worker active, no errors in dashboard
- [ ] Review blocked request count — investigate spikes
- [ ] Confirm SENSITIVE_PATHS list is current for site structure

## 6. Incident Log

| Date | Issue | Action Taken |
|------|-------|-------------|
| ${today} | Initial deployment | Pack deployed and verified |

---

Next review: [Date + 30 days]

Generated by Agent-Ready Website Pack Generator.
`;
}
