import { useEffect, useState } from 'react';

const DEMO = {
  name: 'Darwin Plumbing Co',
  domain: 'darwinplumbing.com.au',
  description: 'Local plumbing services for residential and commercial properties in Darwin and surrounding areas.',
  contact: 'agents@darwinplumbing.com.au',
  allowsIndexing: true,
  tdmOptOut: true,
  sensitiveAreas: 'booking details, customer data, pricing',
};

function buildSpec(f) {
  const lines = [
    `Site name: ${f.name}`,
    `Domain: ${f.domain}`,
    `Description: ${f.description}`,
    `Contact: ${f.contact}`,
    `Allows AI indexing: ${f.allowsIndexing ? 'yes' : 'no'}`,
    `TDM opt-out: ${f.tdmOptOut ? 'yes' : 'no'}`,
  ];
  if (f.sensitiveAreas.trim()) lines.push(`Sensitive areas: ${f.sensitiveAreas}`);
  return lines.join('\n');
}

function readinessScore(f) {
  const checks = [
    f.name.trim() !== '',
    f.domain.trim() !== '',
    f.description.trim() !== '',
    f.contact.trim() !== '',
    true,
    true,
    f.sensitiveAreas.trim() !== '',
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function Toggle({ label, value, onChange }) {
  return (
    <div className="field-group">
      <span className="field-label">{label}</span>
      <div className="field-toggle" role="group" aria-label={label}>
        <button
          type="button"
          className={'toggle-btn' + (value ? ' active' : '')}
          onClick={() => onChange(true)}
        >
          Yes
        </button>
        <button
          type="button"
          className={'toggle-btn' + (!value ? ' active' : '')}
          onClick={() => onChange(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default function GuidedGenerator({ onSpecChange }) {
  const [fields, setFields] = useState(DEMO);

  // Pass initial demo spec to parent on mount so Generate button is enabled
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onSpecChange(buildSpec(DEMO)); }, []);

  function update(key, value) {
    const next = { ...fields, [key]: value };
    setFields(next);
    onSpecChange(buildSpec(next));
  }

  const score = readinessScore(fields);

  return (
    <div className="guided-form">
      <div className="readiness-bar-wrap">
        <span className="readiness-label">Readiness: {score}%</span>
        <div className="readiness-bar" role="progressbar" aria-valuenow={score} aria-valuemin={0} aria-valuemax={100}>
          <div className="readiness-fill" style={{ width: `${score}%` }} />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="gf-name" className="field-label">Site / company name</label>
        <input
          id="gf-name"
          type="text"
          className="field-input"
          value={fields.name}
          onChange={e => update('name', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label htmlFor="gf-domain" className="field-label">Domain or URL</label>
        <input
          id="gf-domain"
          type="text"
          className="field-input"
          placeholder="example.com"
          value={fields.domain}
          onChange={e => update('domain', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label htmlFor="gf-desc" className="field-label">Brief description</label>
        <textarea
          id="gf-desc"
          className="field-input field-textarea"
          rows={2}
          value={fields.description}
          onChange={e => update('description', e.target.value)}
        />
      </div>

      <div className="field-group">
        <label htmlFor="gf-contact" className="field-label">Agent contact email</label>
        <input
          id="gf-contact"
          type="email"
          className="field-input"
          placeholder="agents@example.com"
          value={fields.contact}
          onChange={e => update('contact', e.target.value)}
        />
      </div>

      <div className="field-row">
        <Toggle label="Allow AI indexing" value={fields.allowsIndexing} onChange={v => update('allowsIndexing', v)} />
        <Toggle label="TDM opt-out" value={fields.tdmOptOut} onChange={v => update('tdmOptOut', v)} />
      </div>

      <div className="field-group">
        <label htmlFor="gf-sensitive" className="field-label">
          Sensitive areas <span className="field-hint">(comma-separated, optional)</span>
        </label>
        <input
          id="gf-sensitive"
          type="text"
          className="field-input"
          placeholder="billing, user data, admin"
          value={fields.sensitiveAreas}
          onChange={e => update('sensitiveAreas', e.target.value)}
        />
      </div>
    </div>
  );
}
