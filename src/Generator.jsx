import { useEffect, useRef, useState } from 'react';
import { MODES } from './generator/modes';
import { generate } from './generator/index';
import GuidedGenerator from './GuidedGenerator';
import './generator.css';

const PLACEHOLDER = `Site name: Acme Corp
Domain: acme.com
Description: B2B SaaS for project management teams
Contact: agents@acme.com
Allows AI indexing: yes
TDM opt-out: yes
Sensitive areas: billing, user data, admin`;

export default function Generator() {
  const [modeId, setModeId] = useState('starter');
  const [inputMode, setInputMode] = useState('paste');
  const [spec, setSpec] = useState('');
  const [files, setFiles] = useState([]);
  const [openFile, setOpenFile] = useState(null);
  const [copied, setCopied] = useState(null);
  const [copyError, setCopyError] = useState(null);
  const copyTimeoutRef = useRef(null);
  const errorTimeoutRef = useRef(null);

  const mode = MODES.find(m => m.id === modeId);

  function clearCopyTimers() {
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
    copyTimeoutRef.current = null;
    errorTimeoutRef.current = null;
  }

  useEffect(() => clearCopyTimers, []);

  function switchInputMode(next) {
    setInputMode(next);
    if (next === 'paste') setSpec('');
    setFiles([]);
    setOpenFile(null);
    clearCopyTimers();
    setCopyError(null);
  }

  function handleGenerate() {
    const result = generate(spec, modeId);
    setFiles(result);
    setOpenFile(result[0]?.id ?? null);
    clearCopyTimers();
    setCopied(null);
    setCopyError(null);
  }

  async function handleCopy(file) {
    clearCopyTimers();

    try {
      await navigator.clipboard.writeText(file.content);
      setCopied(file.id);
      setCopyError(null);
      copyTimeoutRef.current = setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
      setCopyError(file.id);
      errorTimeoutRef.current = setTimeout(() => setCopyError(null), 3000);
    }
  }

  function handleDownload(file) {
    const blob = new Blob([file.content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  const activeFile = files.find(f => f.id === openFile);

  return (
    <section id="generator" className="gen-section">
      <div className="gen-header">
        <p className="eyebrow">Agent-Ready Website Pack Generator</p>
        <h2>Paste your site spec. Choose a mode. Get the files.</h2>
        <p className="gen-sub">
          Generate the instruction, capability, safety, and policy files that make a website
          easier for compliant AI agents to understand, cite, and safely route users through.
        </p>
      </div>

      <div className="mode-grid" role="tablist" aria-label="Generator mode">
        {MODES.map(m => (
          <button
            key={m.id}
            role="tab"
            aria-selected={modeId === m.id}
            className={'mode-tab' + (modeId === m.id ? ' active' : '')}
            onClick={() => { setModeId(m.id); setFiles([]); setOpenFile(null); clearCopyTimers(); setCopyError(null); }}
          >
            <span className="mode-label">{m.label}</span>
            <span className="mode-tagline">{m.tagline}</span>
          </button>
        ))}
      </div>

      <div className="gen-input-area">
        <div className="input-mode-toggle" role="tablist" aria-label="Input mode">
          <button
            role="tab"
            aria-selected={inputMode === 'paste'}
            className={'mode-input-tab' + (inputMode === 'paste' ? ' active' : '')}
            onClick={() => switchInputMode('paste')}
          >
            Paste Spec
          </button>
          <button
            role="tab"
            aria-selected={inputMode === 'guided'}
            className={'mode-input-tab' + (inputMode === 'guided' ? ' active' : '')}
            onClick={() => switchInputMode('guided')}
          >
            Guided Form
          </button>
        </div>

        {inputMode === 'paste' ? (
          <>
            <label htmlFor="spec-input" className="input-label">
              Paste your board-spec or site description
            </label>
            <textarea
              id="spec-input"
              className="spec-textarea"
              rows={8}
              placeholder={PLACEHOLDER}
              value={spec}
              onChange={e => setSpec(e.target.value)}
            />
          </>
        ) : (
          <>
            <span className="input-label">Fill in your site details</span>
            <GuidedGenerator onSpecChange={setSpec} />
          </>
        )}

        <button
          className="button primary gen-btn"
          onClick={handleGenerate}
          disabled={!spec.trim()}
        >
          Generate {mode.label} Pack
        </button>
      </div>

      {files.length > 0 && (
        <div className="gen-output">
          <div className="file-list" role="tablist" aria-label="Generated files">
            {files.map(f => (
              <button
                key={f.id}
                role="tab"
                aria-selected={openFile === f.id}
                className={'file-tab' + (openFile === f.id ? ' active' : '')}
                onClick={() => setOpenFile(f.id)}
              >
                {f.filename}
              </button>
            ))}
          </div>

          {activeFile && (
            <div className="file-pane">
              <div className="file-pane-header">
                <span className="file-path">{activeFile.path}</span>
                <div className="file-actions">
                  <button className="action-btn" onClick={() => handleCopy(activeFile)}>
                    {copied === activeFile.id ? 'Copied!' : copyError === activeFile.id ? 'Copy failed' : 'Copy'}
                  </button>
                  <button className="action-btn" onClick={() => handleDownload(activeFile)}>
                    Download
                  </button>
                </div>
              </div>
              <pre className="file-content"><code>{activeFile.content}</code></pre>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
