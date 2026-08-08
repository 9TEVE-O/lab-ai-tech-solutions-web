import { useEffect, useState } from 'react';

const SAFE_INTAKE_PATH = '/safe-intake-proof-001';

const proofSteps = [
  ['01', 'Document received', 'Synthetic fixture enters the intake boundary.'],
  ['02', 'Original stored', 'The original is kept separate from AI-ready surfaces.'],
  ['03', 'Quarantine extraction', 'Extracted text remains inside the quarantine boundary.'],
  ['04', 'Sensitivity classified', 'Sensitivity metadata is recorded before downstream use.'],
  ['05', 'Evidence event', 'The workflow writes an evidence event for the state change.'],
  ['06', 'PENDING_REVIEW', 'The current proof hands off to human review.'],
  ['07', 'Stop', 'AI ingestion remains blocked in Proof 001.'],
];

const methodSteps = [
  ['1', 'Map the workflow', 'Identify how information, decisions, approvals, and failures currently move.'],
  ['2', 'Identify the evidence', 'Separate what is documented, assumed, remembered, proposed, or missing.'],
  ['3', 'Define the boundary', 'Clarify what the system may do, what requires human judgement, and what must remain blocked.'],
  ['4', 'Build a bounded proof', 'Test the smallest implementation that can reveal whether the approach is useful.'],
  ['5', 'Test failure states', 'Check what happens when evidence is missing, inputs are unsafe, or the system cannot proceed confidently.'],
  ['6', 'Review before expansion', 'Use the result to decide whether to revise, stop, or build further.'],
];

const capabilities = [
  ['AI workflow review and design', 'Review how AI enters an existing process, where authority sits, what evidence is available, and which controls are missing.', 'Active capability'],
  ['Document intelligence and retrieval', 'Design workflows for extracting, structuring, reviewing, and retrieving organisational knowledge without treating every model output as fact.', 'Active capability'],
  ['Evidence and approval architecture', 'Make sources, approval gates, limitations, state changes, and review responsibilities visible.', 'Demonstrated through working patterns and proofs'],
  ['AI-assisted development', 'Use AI tools to support implementation while keeping scope, verification, source control, and human review explicit.', 'Active capability'],
  ['Evaluation and observability', 'Design checks that distinguish a system running from a system producing useful, traceable, and reviewable results.', 'Active research and build capability'],
  ['Prompt and operating systems', 'Create structured prompts, runtime files, reusable procedures, and failure-learning loops for repeatable AI-supported work.', 'Demonstrated internal capability'],
];

const featuredSystems = [
  {
    title: 'Safe Intake Proof 001',
    body: 'A bounded document-intake proof showing controlled states, quarantine, evidence events, a human-review handoff, and blocked AI ingestion in the current proof.',
    status: 'Working proof',
    boundary: 'The current implementation stops at PENDING_REVIEW. Approval-to-AI ingestion is not enabled in Proof 001.',
    link: true,
  },
  {
    title: 'LAB Agent Runtime Pattern v0.1',
    body: 'An internal runtime pattern separating agent specification, durable memory, callable skills, and failure learning.',
    status: 'Approved internal capability',
    boundary: 'Internal operating asset, not a public product.',
  },
  {
    title: 'AI Website Builder Prompt Library',
    body: 'A structured prompt system for turning website intake, evidence, claims, and design constraints into editable build instructions.',
    status: 'Reusable working asset',
    boundary: 'Not a substitute for claim review, accessibility testing, or human approval.',
  },
  {
    title: 'Skill OS / Integrity Layer',
    body: 'Research into governed evaluation systems for AI-assisted development, including evidence rules, adjudication, human override, failure feedback, and update control.',
    status: 'Active internal research',
    boundary: 'Not a finished platform or public methodology.',
  },
];

const fieldNotes = [
  ['The Integrity Layer', 'Why AI-assisted development needs more than generated code, isolated tests, and automated review scores.', 'Draft under evidence review', 'Essay'],
  ['Compression Before Automation', 'Why organisations must make goals, evidence, authority, and constraints explicit before reliable automation is possible.', 'Working proposition', 'Working proposition'],
  ['Safe Intake Proof 001', 'What a bounded document workflow can reveal before a larger AI system is recommended.', 'Build note', 'Build note'],
];

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path) => {
    if (window.location.pathname === path) return;
    window.history.pushState({}, '', path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return [pathname, navigate];
}

function RouteLink({ to, navigate, className, children, ariaLabel }) {
  return (
    <a
      href={to}
      className={className}
      aria-label={ariaLabel}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

function Header({ navigate, safePage }) {
  return (
    <header className="site-header">
      <RouteLink to="/" navigate={navigate} className="brand" ariaLabel="LAB AI & Tech Solutions home">
        <span className="brand-mark">LAB</span>
        <span>AI & Tech Solutions</span>
      </RouteLink>
      <nav aria-label="Primary navigation">
        <RouteLink to="/" navigate={navigate}>Home</RouteLink>
        <RouteLink to={SAFE_INTAKE_PATH} navigate={navigate} className={safePage ? 'active-nav' : ''}>Safe Intake</RouteLink>
        {!safePage && <a href="#about">About</a>}
        {!safePage && <a href="#contact">Contact</a>}
      </nav>
    </header>
  );
}

function Status({ children, tone = 'neutral' }) {
  return <span className={`status status-${tone}`}>{children}</span>;
}

function ProofFlow({ detailed = false }) {
  return (
    <ol className={`proof-flow ${detailed ? 'proof-flow-detailed' : ''}`} aria-label="Safe Intake Proof 001 workflow">
      {proofSteps.map(([number, title, detail]) => (
        <li key={number}>
          <span className="flow-number">{number}</span>
          <strong>{title}</strong>
          {detailed && <p>{detail}</p>}
        </li>
      ))}
    </ol>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <section id="home" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">LAB AI & Tech Solutions</p>
          <h1>AI systems with evidence behind them.</h1>
          <p className="lead">
            LAB designs practical AI workflows, document-intelligence systems, and development proofs that make sources, approvals, limitations, and human judgement visible.
          </p>
          <div className="cta-row">
            <RouteLink className="button primary" to={SAFE_INTAKE_PATH} navigate={navigate}>View Safe Intake Proof 001</RouteLink>
            <a className="button secondary" href="#contact">Discuss a workflow</a>
          </div>
          <p className="supporting-note">Working proofs before larger promises.</p>
        </div>
        <aside className="hero-panel" aria-label="LAB build principle">
          <p className="panel-label">Working principle</p>
          <h2>Make the boundary visible.</h2>
          <p>Show what may proceed, what needs human judgement, what evidence exists, and what must remain blocked.</p>
        </aside>
      </section>

      <section className="section-pad split-section" aria-labelledby="problem-heading">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 id="problem-heading">AI adoption often starts before the workflow is ready.</h2>
        </div>
        <div className="copy-stack">
          <p>Documents are scattered. Decisions are undocumented. Sensitive information is mixed with ordinary material. Approval steps live in people’s heads. AI is then added on top and expected to produce reliable answers.</p>
          <p>The problem is not only the model.</p>
          <ul className="plain-list">
            <li>what information enters</li>
            <li>who is allowed to approve it</li>
            <li>what evidence supports the output</li>
            <li>what happens when the system is uncertain</li>
            <li>how failures are recorded and repaired</li>
          </ul>
          <p>LAB works at that layer.</p>
        </div>
      </section>

      <section className="section-pad proof-band" aria-labelledby="proof-heading">
        <div className="section-heading">
          <div className="section-kicker-row">
            <p className="eyebrow">Current working proof</p>
            <Status tone="green">Working proof</Status>
          </div>
          <h2 id="proof-heading">Before documents reach AI, they should pass through a controlled intake process.</h2>
          <p>
            Safe Intake Proof 001 is a bounded document-intake demonstration. In the current implementation, synthetic material moves through controlled intake, protected storage, quarantine extraction, sensitivity classification, and an evidence event before stopping at human review. AI ingestion remains blocked.
          </p>
        </div>
        <ProofFlow />
        <div className="proof-summary-grid">
          <article className="mini-card">
            <h3>What it demonstrates</h3>
            <ul>
              <li>document lifecycle states</li>
              <li>quarantine and review boundaries</li>
              <li>sensitivity classification</li>
              <li>evidence events</li>
              <li>fail-closed blocking before AI use</li>
            </ul>
          </article>
          <article className="mini-card boundary-card">
            <h3>Material boundary</h3>
            <p><code>APPROVED</code> and <code>REJECTED</code> are modelled future states, but they are not enabled in Proof 001.</p>
          </article>
        </div>
        <div className="cta-row">
          <RouteLink className="button primary" to={SAFE_INTAKE_PATH} navigate={navigate}>View Safe Intake Proof 001</RouteLink>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="method-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">LAB method</p>
          <h2 id="method-heading">Build the smallest proof that can expose the real decision.</h2>
          <p>LAB does not begin with a large platform recommendation. The work begins by making the workflow, evidence, permissions, and assumptions visible.</p>
        </div>
        <div className="method-grid">
          {methodSteps.map(([number, title, body]) => (
            <article className="method-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" aria-labelledby="capabilities-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Selected capabilities</p>
          <h2 id="capabilities-heading">What LAB works on</h2>
        </div>
        <div className="card-grid three">
          {capabilities.map(([title, body, status]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
              <Status>{status}</Status>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad proof-band" aria-labelledby="selected-work-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Selected work</p>
          <h2 id="selected-work-heading">Proofs, working assets, and research with status left visible.</h2>
        </div>
        <div className="card-grid two">
          {featuredSystems.map((item) => (
            <article className="card" key={item.title}>
              <Status>{item.status}</Status>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p className="boundary-copy"><strong>Boundary:</strong> {item.boundary}</p>
              {item.link && <RouteLink className="text-link" to={SAFE_INTAKE_PATH} navigate={navigate}>View proof →</RouteLink>}
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" aria-labelledby="notes-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Field Notes</p>
          <h2 id="notes-heading">Writing on the system around the model.</h2>
          <p>AI systems, evidence, software, document workflows, creativity, and the human judgement that remains after automation.</p>
        </div>
        <div className="card-grid three">
          {fieldNotes.map(([title, body, status, label]) => (
            <article className="card" key={title}>
              <p className="card-label">{label}</p>
              <h3>{title}</h3>
              <p>{body}</p>
              <Status>{status}</Status>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="page-section section-pad split-section" aria-labelledby="about-heading">
        <div>
          <p className="eyebrow">About Steven and LAB</p>
          <h2 id="about-heading">Practical AI work, with the judgement left visible.</h2>
        </div>
        <div className="copy-stack">
          <p>Steven Lees works across AI systems, document intelligence, AI-assisted development, technical writing, and creative technology.</p>
          <p>He is building LAB AI & Tech Solutions as an operating studio for practical AI workflows, bounded development proofs, evidence-aware systems, and clear technical explanation.</p>
          <blockquote>Better models do not remove the need for better decisions around the model.</blockquote>
          <ul className="plain-list">
            <li>source quality</li>
            <li>workflow design</li>
            <li>approval boundaries</li>
            <li>failure handling</li>
            <li>evaluation</li>
            <li>traceability</li>
            <li>human accountability</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section-pad contact-panel" aria-labelledby="contact-heading">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Working through an AI workflow that needs clearer boundaries?</h2>
          <p>Use the contact route to describe the workflow, decision problem, or document process you are trying to improve.</p>
          <p className="privacy-note">Do not upload or paste sensitive documents through the website. Describe the workflow only.</p>
        </div>
        <div className="contact-test-card">
          <Status tone="amber">Staging test boundary</Status>
          <h3>Contact route not activated in this comprehension build.</h3>
          <p>The public contact address remains an unresolved release gate. This staging build tests comprehension only and does not collect visitor data.</p>
          <a className="button secondary" href="#home">Back to top</a>
        </div>
      </section>
    </>
  );
}

function SafeIntakePage({ navigate }) {
  return (
    <>
      <section className="proof-hero section-pad">
        <div className="proof-hero-copy">
          <div className="section-kicker-row">
            <p className="eyebrow">Safe Intake Proof 001</p>
            <Status tone="green">Working proof</Status>
          </div>
          <h1>What happens before a document is allowed anywhere near AI?</h1>
          <p className="lead">Safe Intake Proof 001 is a bounded document-intake demonstration built to make one control visible: unreviewed material should not silently become AI context.</p>
          <p>In the current proof, synthetic documents move through controlled intake, protected storage, quarantine extraction, sensitivity classification, and an evidence event before the workflow stops at <code>PENDING_REVIEW</code>.</p>
          <p className="proof-lock">AI ingestion remains blocked.</p>
        </div>
      </section>

      <section className="section-pad split-section" aria-labelledby="safe-problem-heading">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 id="safe-problem-heading">A document existing in a folder does not make it authorised AI context.</h2>
        </div>
        <div className="copy-stack">
          <p>Raw or unreviewed documents can contain sensitive information, unclear authority, stale material, conflicting content, or instructions that should not be treated as trusted AI context.</p>
          <p>A retrieval result is not authority. The proof tests whether the workflow can make that boundary explicit before larger implementation decisions are made.</p>
        </div>
      </section>

      <section className="section-pad proof-band" aria-labelledby="flow-heading">
        <div className="section-heading">
          <p className="eyebrow">Current Proof 001 flow</p>
          <h2 id="flow-heading">Stop at the human-review boundary.</h2>
          <p>The current proof fails closed: downstream AI use is not enabled.</p>
        </div>
        <ProofFlow detailed />
      </section>

      <section className="section-pad" aria-labelledby="demonstrates-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Demonstrated in the current proof</p>
          <h2 id="demonstrates-heading">The useful evidence is the boundary itself.</h2>
        </div>
        <div className="evidence-grid">
          <article className="card strong-card">
            <h3>What the proof demonstrates</h3>
            <ul>
              <li>explicit document lifecycle states</li>
              <li>separation between the original document and quarantined extracted text</li>
              <li>sensitivity classification before downstream use</li>
              <li>evidence and blocked-action events</li>
              <li>a visible human-review handoff</li>
              <li>fail-closed behaviour at the authorised boundary</li>
              <li>blocked AI ingestion in Proof 001</li>
            </ul>
          </article>
          <article className="card boundary-card">
            <Status tone="amber">Material boundary</Status>
            <h3>Approval is modelled, not enabled.</h3>
            <p><code>APPROVED</code> and <code>REJECTED</code> exist as modelled future lifecycle states, but they are not operational in Proof 001.</p>
            <p>The current proof demonstrates the path up to human review. It does not demonstrate a completed approval-to-AI-ingestion path.</p>
          </article>
        </div>
      </section>

      <section className="section-pad limitations-panel" aria-labelledby="limitations-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">What this proof does not establish</p>
          <h2 id="limitations-heading">A narrow pass is not a blank cheque.</h2>
          <p>Safe Intake Proof 001 does not establish any of the following:</p>
        </div>
        <div className="limitation-grid">
          {[
            'production OCR',
            'production redaction',
            'cloud deployment',
            'external integrations',
            'vector-database or RAG implementation',
            'multi-tenant permissions',
            'compliance automation',
            'production security',
            'complete auditability',
            'enterprise readiness',
            'client outcomes or production use',
          ].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section-pad split-section" aria-labelledby="why-heading">
        <div>
          <p className="eyebrow">Why build it this way?</p>
          <h2 id="why-heading">Prove the intake boundary before expanding the system.</h2>
        </div>
        <div className="copy-stack">
          <p>LAB starts with the smallest proof that can expose the real control decision.</p>
          <p>For Safe Intake, that means proving what may enter, what remains quarantined, what evidence is recorded, where human review begins, and what stays blocked.</p>
          <p>Only then is there evidence for deciding whether the workflow should be revised, stopped, or expanded.</p>
        </div>
      </section>

      <section className="section-pad evidence-boundary" aria-labelledby="public-boundary-heading">
        <div>
          <p className="eyebrow">Public / internal boundary</p>
          <h2 id="public-boundary-heading">This page explains the proof. It does not publish the control room.</h2>
        </div>
        <p>Internal threat models, permission models, build gates, API contracts, evidence schemas, and failure records remain internal. They inform the public explanation without becoming public website content.</p>
      </section>

      <section className="section-pad proof-cta" aria-label="Safe Intake next actions">
        <div>
          <p className="eyebrow">Next</p>
          <h2>Return to the wider LAB evidence interface.</h2>
        </div>
        <div className="cta-row">
          <RouteLink className="button primary" to="/" navigate={navigate}>Back to homepage</RouteLink>
          <RouteLink className="button secondary" to="/" navigate={navigate}>View selected work</RouteLink>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Steven Lees · LAB AI & Tech Solutions</strong>
        <p>Built with AI assistance. Reviewed by a human before publication.</p>
      </div>
      <div className="footer-boundary">
        <Status>Staging comprehension build</Status>
        <p>Not approved for public launch.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [pathname, navigate] = usePathname();
  const safePage = pathname === SAFE_INTAKE_PATH;

  return (
    <main className="lab-site">
      <Header navigate={navigate} safePage={safePage} />
      {safePage ? <SafeIntakePage navigate={navigate} /> : <HomePage navigate={navigate} />}
      <Footer />
    </main>
  );
}
