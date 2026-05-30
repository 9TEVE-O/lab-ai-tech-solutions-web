export function parseSpec(raw) {
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

  function extract(patterns) {
    for (const line of lines) {
      for (const pat of patterns) {
        const m = line.match(pat);
        if (m) return (m[1] || m[0]).trim();
      }
    }
    return null;
  }

  const name = extract([/(?:site|company|product|name)\s*[:\-]\s*(.+)/i]) || 'Your Website';
  const rawDomain = extract([/(?:domain|url|website|site url)\s*[:\-]\s*(.+)/i, /https?:\/\/([\w.-]+)/i]) || '';
  const domain = rawDomain.replace(/^https?:\/\//, '').replace(/\/.*$/, '') || 'example.com';
  const description =
    extract([/(?:description|about|summary)\s*[:\-]\s*(.+)/i]) ||
    lines.slice(0, 2).join('. ') ||
    'A website making its content available to AI agents.';
  const contact =
    extract([/(?:contact|email|agent.?contact)\s*[:\-]\s*(.+)/i]) || ('agent-contact@' + domain);
  const indexingRaw = extract([/(?:allows?\s+(?:ai\s+)?index(?:ing)?|crawl(?:ing)?)\s*[:\-]\s*(.+)/i]);
  const allowsIndexing = indexingRaw ? !/no|false/i.test(indexingRaw) : true;
  const tdmRaw = extract([/(?:tdm|training.*opt|opt.*out)\s*[:\-]\s*(.+)/i]);
  const tdmOptOut = tdmRaw ? /yes|true|opt.?out/i.test(tdmRaw) : true;
  const sensitiveAreas = lines
    .filter(l => /sensitive|restricted|avoid/i.test(l))
    .map(l => l.replace(/.*?:\s*/, '').split(/[,;]/).map(s => s.trim()))
    .flat()
    .filter(Boolean);
  const today = new Date().toISOString().split('T')[0];

  return { name, domain, description, contact, allowsIndexing, tdmOptOut, sensitiveAreas, today, raw };
}
