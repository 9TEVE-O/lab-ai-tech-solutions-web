export const MODES = [
  {
    id: 'starter',
    label: 'Starter',
    tagline: '/llms.txt, capabilities JSON, policy, tests',
    description: 'Core agent-readiness files to make your site legible to compliant AI systems.',
    fileIds: ['ai-manifest', 'llms-txt', 'capabilities', 'policy', 'tests'],
  },
  {
    id: 'governance',
    label: 'Governance',
    tagline: 'Starter + terms, safety YAML, readiness report',
    description: 'Adds policy signals, usage terms, and a structured readiness assessment.',
    fileIds: ['ai-manifest', 'llms-txt', 'capabilities', 'policy', 'tests', 'agent-terms', 'safety-yaml', 'readiness-report'],
  },
  {
    id: 'edge',
    label: 'Edge Control',
    tagline: 'Governance + Cloudflare Worker template and install guide',
    description: 'Adds Cloudflare-style enforcement layer, install guide, and accessibility signal.',
    fileIds: ['ai-manifest', 'llms-txt', 'capabilities', 'policy', 'tests', 'agent-terms', 'safety-yaml', 'readiness-report', 'edge-worker', 'install-guide', 'accessibility'],
  },
  {
    id: 'agency',
    label: 'Agency Pack',
    tagline: 'Edge Control + client report, white-label summary, maintenance checklist',
    description: 'Full deliverable pack for client engagements including reports and recurring maintenance.',
    fileIds: ['ai-manifest', 'llms-txt', 'capabilities', 'policy', 'tests', 'agent-terms', 'safety-yaml', 'readiness-report', 'edge-worker', 'install-guide', 'accessibility', 'client-report', 'white-label', 'maintenance'],
  },
];
