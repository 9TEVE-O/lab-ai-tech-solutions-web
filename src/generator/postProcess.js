function patchJson(content, mutate) {
  try {
    const parsed = JSON.parse(content);
    mutate(parsed);
    return JSON.stringify(parsed, null, 2);
  } catch {
    return content;
  }
}

function patchCapabilities(content, spec) {
  return patchJson(content, (parsed) => {
    parsed.capabilities = (parsed.capabilities || []).map((capability) => {
      if (capability.id !== 'training-use') return capability;

      return {
        ...capability,
        allowed: !spec.tdmOptOut,
        description: spec.tdmOptOut
          ? 'Training data use is not permitted without separate written licence because a TDM reservation is declared in agent-terms.txt.'
          : 'Training data use is not restricted by this generated pack; use remains subject to applicable law, attribution requirements, and platform terms.',
      };
    });
  });
}

function patchReadinessReport(content, spec) {
  const tdmValue = spec.tdmOptOut ? 'Declared (rights reserved)' : 'Not declared by generated pack';
  const trainingValue = spec.tdmOptOut
    ? 'Not permitted without licence'
    : 'Not restricted by generated pack; still subject to applicable law';
  const crawlValue = spec.allowsIndexing
    ? 'Yes — with rate limiting'
    : 'No — crawling/indexing restricted by generated policy';

  return content
    .replace('| TDM opt-out | Declared (rights reserved) |', `| TDM opt-out | ${tdmValue} |`)
    .replace('| Training data | Not permitted without licence |', `| Training data | ${trainingValue} |`)
    .replace('| Crawl allowed | Yes — with rate limiting |', `| Crawl allowed | ${crawlValue} |`);
}

function patchAccessibility(content, spec) {
  return content
    .replace(
      '<meta name="ai-indexing" content="permitted" />',
      `<meta name="ai-indexing" content="${spec.allowsIndexing ? 'permitted' : 'restricted'}" />`,
    )
    .replace(
      '<meta name="tdm-reservation" content="1" />',
      `<meta name="tdm-reservation" content="${spec.tdmOptOut ? '1' : '0'}" />`,
    )
    .replace(
      `<meta name="agent-contact" content="agent-contact@${spec.domain}" />`,
      `<meta name="agent-contact" content="${spec.contact}" />`,
    );
}

export function postProcessGeneratedFile(id, content, spec) {
  if (id === 'capabilities') return patchCapabilities(content, spec);
  if (id === 'readiness-report') return patchReadinessReport(content, spec);
  if (id === 'accessibility') return patchAccessibility(content, spec);
  return content;
}
