import { MODES } from './modes';
import { parseSpec } from './parse';
import {
  genAiManifest,
  genLlmsTxt,
  genCapabilities,
  genPolicy,
  genTests,
  genAgentTerms,
  genSafetyYaml,
  genReadinessReport,
  genEdgeWorker,
  genInstallGuide,
  genAccessibility,
  genClientReport,
  genWhiteLabel,
  genMaintenance,
} from './templates';

const FILE_DEFS = {
  'ai-manifest':      { filename: 'ai-manifest.json',                 path: '/.well-known/ai-manifest.json',     gen: genAiManifest },
  'llms-txt':         { filename: 'llms.txt',                         path: '/llms.txt',                         gen: genLlmsTxt },
  'capabilities':     { filename: 'capabilities.json',                path: '/capabilities.json',                gen: genCapabilities },
  'policy':           { filename: 'agent-policy.json',                path: '/agent-policy.json',                gen: genPolicy },
  'tests':            { filename: 'agent-tests.yaml',                 path: '/agent-tests.yaml',                 gen: genTests },
  'agent-terms':      { filename: 'agent-terms.txt',                  path: '/agent-terms.txt',                  gen: genAgentTerms },
  'safety-yaml':      { filename: 'safety.yaml',                      path: '/safety.yaml',                      gen: genSafetyYaml },
  'readiness-report': { filename: 'agent-readiness-report.md',        path: '/agent-readiness-report.md',        gen: genReadinessReport },
  'edge-worker':      { filename: 'edge-worker-template.js',          path: '/edge-worker-template.js',          gen: genEdgeWorker },
  'install-guide':    { filename: 'install-guide.md',                 path: '/install-guide.md',                 gen: genInstallGuide },
  'accessibility':    { filename: 'agent-accessibility-snippet.html', path: '/agent-accessibility-snippet.html', gen: genAccessibility },
  'client-report':    { filename: 'client-report.md',                 path: '/client-report.md',                 gen: genClientReport },
  'white-label':      { filename: 'white-label-summary.md',           path: '/white-label-summary.md',           gen: genWhiteLabel },
  'maintenance':      { filename: 'monthly-maintenance-checklist.md', path: '/monthly-maintenance-checklist.md', gen: genMaintenance },
};

export function generate(rawSpec, modeId) {
  const mode = MODES.find(m => m.id === modeId);
  if (!mode) return [];
  const spec = parseSpec(rawSpec);
  return mode.fileIds.map(id => {
    const def = FILE_DEFS[id];
    return { id, filename: def.filename, path: def.path, content: def.gen(spec) };
  });
}
