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
  ['AI workflow review', 'Review one defined AI-assisted workflow: sources, tools, decisions, approvals, evidence, failure handling and control gaps.'],
  ['Evidence and source control', 'Make source records, limitations, approval boundaries and state changes visible enough to inspect.'],
  ['AI-assisted implementation', 'Build bounded implementations with scope, source control, verification and human review kept explicit.'],
  ['Testing and verification', 'Test specified behaviour, failure states and evidence before deciding whether a system should expand.'],
];

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;
    const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const navigate = (path) => {
    const hashIndex = path.indexOf('#');
    const nextPath = (hashIndex === -1 ? path : path.slice(0, hashIndex)) || '/';
    const hash = hashIndex === -1 ? '' : path.slice(hashIndex);
    const pathChanged = window.location.pathname !== nextPath;

    window.history.pushState({}, '', nextPath + hash);
    if (pathChanged) setPathname(nextPath);

    if (hash) {
      window.setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return [pathname, navigate];
}

function RouteLink({ to, navigate, className, children, ariaLabel }) {
  return (
    <a href={to} className={className} aria-label={ariaLabel} onClick={(event) => { event.preventDefault(); navigate(to); }}>
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
        {safePage ? (
          <>
            <RouteLink to="/#work" navigate={navigate}>Work</RouteLink>
            <RouteLink to="/#approach" navigate={navigate}>Approach</RouteLink>
            <RouteLink to="/#about" navigate={navigate}>About</RouteLink>
            <RouteLink to="/#contact" navigate={navigate}>Contact</RouteLink>
          </>
        ) : (
          <>
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </>
        )}
      </nav>
    </header>
  );
}

function Status({ children, tone = 'neutral' }) {
  return <span className={`status status-${tone}`}>{children}</span>;
}

function EvidenceBoundary({ state, supports, doesNotSupport }) {
  return (
    <article className="card boundary-card">
      <Status tone="green">{state}</Status>
      <h3>Evidence boundary</h3>
      <p><strong>Supports:</strong> {supports}</p>
      <p><strong>Does not support:</strong> {doesNotSupport}</p>
    </article>
  );
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
          <h1>Practical AI systems for people doing real work.</h1>
          <p className="lead">LAB reviews, builds and tests AI-assisted workflows with the evidence, controls and human decisions left visible.</p>
          <div className="cta-row">
            <a className="button primary" href="#contact">Discuss an AI workflow</a>
            <a className="button secondary" href="#approach">See how LAB works</a>
          </div>
          <p className="supporting-note">Working website copy. Final publication approval remains required.</p>
        </div>
        <aside className="hero-panel" aria-label="LAB working principle">
          <p className="panel-label">Working principle</p>
          <h2>Make the boundary visible.</h2>
          <p>Show what may proceed, what needs human judgement, what evidence exists, and what must remain blocked.</p>
        </aside>
      </section>

      <section className="section-pad split-section" aria-labelledby="problem-heading">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 id="problem-heading">AI enters workflows that already contain unclear sources, decisions and authority.</h2>
        </div>
        <div className="copy-stack">
          <p>Documents are scattered. Decisions may be undocumented. Sensitive information can sit beside ordinary material. Approval steps can depend on memory. Adding AI increases the number of actions and outputs that need to be understood and checked.</p>
          <ul className="plain-list">
            <li>what information enters</li>
            <li>who may approve or change it</li>
            <li>what evidence supports an output</li>
            <li>what happens when evidence is missing</li>
            <li>how failures are recorded and repaired</li>
          </ul>
        </div>
      </section>

      <section className="section-pad proof-band" aria-labelledby="offer-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Primary working offer</p>
          <h2 id="offer-heading">AI Workflow Review</h2>
          <p>A practical review of one defined AI-assisted workflow. The review maps where AI touches sources, documents, tools, decisions, approvals, evidence, failure handling and rollback.</p>
        </div>
        <div className="card-grid two">
          <article className="card">
            <h3>What LAB reviews</h3>
            <p>The current workflow, source material, AI/tool involvement, decision points, approval boundaries, evidence and known failure states.</p>
          </article>
          <article className="card">
            <h3>What happens afterwards</h3>
            <p>The evidence from the review determines whether the workflow should be revised, stopped, tested with a bounded proof, or considered for further implementation.</p>
          </article>
        </div>
        <p className="supporting-note">Offer wording remains subject to final public-copy approval.</p>
      </section>

      <section id="approach" className="section-pad" aria-labelledby="method-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Approach</p>
          <h2 id="method-heading">Build the smallest proof that can expose the real decision.</h2>
          <p>The work begins by making the workflow, evidence, permissions and assumptions visible.</p>
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
          <p className="eyebrow">Current work</p>
          <h2 id="capabilities-heading">Problems LAB is working on</h2>
        </div>
        <div className="card-grid two">
          {capabilities.map(([title, body]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-pad proof-band" aria-labelledby="work-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Evidence</p>
          <h2 id="work-heading">What LAB can currently show</h2>
          <p>Public evidence should state what an artefact establishes and where its authority stops.</p>
        </div>
        <div className="card-grid two">
          <article className="card strong-card">
            <Status tone="green">Completed bounded proof</Status>
            <h3>Safe Intake Proof 001</h3>
            <p>A document-intake proof showing controlled states, quarantine, evidence events, a human-review handoff and blocked AI ingestion in the current proof.</p>
            <RouteLink className="text-link" to={SAFE_INTAKE_PATH} navigate={navigate}>Inspect the proof →</RouteLink>
          </article>
          <EvidenceBoundary
            state="Completed bounded proof"
            supports="The specified intake path reaches PENDING_REVIEW with evidence events and AI ingestion blocked in Proof 001."
            doesNotSupport="Production readiness, client outcomes, compliance, enterprise security, or a completed approval-to-AI-ingestion path."
          />
        </div>
      </section>

      <section id="about" className="page-section section-pad split-section" aria-labelledby="about-heading">
        <div>
          <p className="eyebrow">About Steven and LAB</p>
          <h2 id="about-heading">Practical AI work with the judgement left visible.</h2>
        </div>
        <div className="copy-stack">
          <p>Steven Lees is building LAB AI & Tech Solutions around practical AI workflows, bounded implementation, evidence, verification and clear technical explanation.</p>
          <p>This staging copy deliberately avoids unverified credentials, client outcomes and broad capability claims while the publication evidence is reconciled.</p>
        </div>
      </section>

      <section id="contact" className="page-section section-pad contact-panel" aria-labelledby="contact-heading">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Discuss one defined AI-assisted workflow.</h2>
          <p>Describe what the workflow does, where AI is used or proposed, the decision or problem you are trying to improve, and what is currently going wrong.</p>
          <p className="privacy-note">Do not upload or paste sensitive documents through the website. Describe the workflow only.</p>
        </div>
        <div className="contact-test-card">
          <Status tone="amber">Release gate</Status>
          <h3>Public contact route not activated.</h3>
          <p>The public contact address remains unresolved in the controlling website material. This staging build does not collect visitor data.</p>
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
            <Status tone="green">Completed bounded proof</Status>
          </div>
          <h1>What happens before a document is allowed anywhere near AI?</h1>
          <p className="lead">Safe Intake Proof 001 makes one control visible: unreviewed material should not silently become AI context.</p>
          <p>In the current proof, synthetic documents move through controlled intake, protected storage, quarantine extraction, sensitivity classification and an evidence event before the workflow stops at <code>PENDING_REVIEW</code>.</p>
          <p className="proof-lock">AI ingestion remains blocked.</p>
        </div>
      </section>

      <section className="section-pad proof-band" aria-labelledby="flow-heading">
        <div className="section-heading">
          <p className="eyebrow">Proof 001 flow</p>
          <h2 id="flow-heading">Stop at the human-review boundary.</h2>
          <p>The proof fails closed: downstream AI use is not enabled.</p>
        </div>
        <ProofFlow detailed />
      </section>

      <section className="section-pad" aria-labelledby="demonstrates-heading">
        <div className="section-heading narrow">
          <p className="eyebrow">Evidence boundary</p>
          <h2 id="demonstrates-heading">The proof establishes a narrow path.</h2>
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
              <li>blocked AI ingestion in Proof 001</li>
            </ul>
          </article>
          <EvidenceBoundary
            state="Completed bounded proof"
            supports="The demonstrated path up to human review and fail-closed blocking at that boundary."
            doesNotSupport="Production OCR or redaction, cloud deployment, external integrations, production security, enterprise readiness, client outcomes, or a completed approval-to-AI-ingestion path."
          />
        </div>
      </section>

      <section className="section-pad split-section" aria-labelledby="safe-problem-heading">
        <div>
          <p className="eyebrow">Why it exists</p>
          <h2 id="safe-problem-heading">A document existing in a folder does not make it authorised AI context.</h2>
        </div>
        <div className="copy-stack">
          <p>Raw or unreviewed documents can contain sensitive information, unclear authority, stale material, conflicting content or instructions that should not be treated as trusted AI context.</p>
          <p>The proof tests whether the workflow can make that boundary explicit before larger implementation decisions are made.</p>
        </div>
      </section>

      <section className="section-pad proof-cta" aria-label="Safe Intake next actions">
        <div>
          <p className="eyebrow">Next</p>
          <h2>Return to the wider LAB website.</h2>
        </div>
        <div className="cta-row">
          <RouteLink className="button primary" to="/" navigate={navigate}>Back to LAB</RouteLink>
          <RouteLink className="button secondary" to="/#contact" navigate={navigate}>Discuss a workflow</RouteLink>
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
        <Status>Staging build</Status>
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
