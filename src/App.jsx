import Generator from './Generator';

const workflowSteps = [
  'Upload',
  'Classify',
  'Detect',
  'Redact',
  'Review',
  'Approve',
  'Retrieve',
  'Cite',
  'Audit',
];

const principles = [
  {
    title: 'Classify before use',
    body: 'Documents should be understood, labelled, and status-checked before they become AI context.',
  },
  {
    title: 'Human review stays visible',
    body: 'Approval is treated as a workflow state, not a vague intention.',
  },
  {
    title: 'Evidence should travel with answers',
    body: 'A useful AI workflow should show which approved source supported an answer, and refuse when evidence is missing.',
  },
];

const auditItems = [
  'Where documents enter the workflow',
  'Which sources are current, stale, draft, or approved',
  'Where sensitive or unclear material appears',
  'Where approval decisions happen',
  'What should be blocked before AI use',
  'What an AI agent should not be allowed to trust',
  'What evidence needs to be retained',
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="LAB AI & Tech Solutions home">
        <span className="brand-mark">LAB</span>
        <span>AI & Tech Solutions</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#safe-intake">Safe Intake</a>
        <a href="#generator">Generator</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Workflow() {
  return (
    <ol className="workflow" aria-label="Safe Intake workflow stages">
      {workflowSteps.map((step, index) => (
        <li key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
        </li>
      ))}
    </ol>
  );
}

function HomePage() {
  return (
    <>
      <section id="home" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">Document intelligence with evidence</p>
          <h1>AI systems with evidence behind them.</h1>
          <p className="lead">
            Most organisations do not have an AI problem first. They have an evidence problem.
            LAB helps teams prepare documents and workflows for AI safely through classification,
            review, approval, and traceable evidence.
          </p>
          <div className="cta-row">
            <a className="button primary" href="#safe-intake">View Safe Intake Proof 001</a>
            <a className="button secondary" href="#contact">Work With LAB</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Evidence pathway summary">
          <p className="panel-label">Core principle</p>
          <h2>No approval = no AI access.</h2>
          <p>
            Before information reaches AI systems, it should be classified, reviewed,
            approved, and traceable before retrieval or AI use.
          </p>
        </div>
      </section>

      <section className="section-pad split-section">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>Before AI can help, information must be trusted.</h2>
        </div>
        <div className="copy-stack">
          <p>
            Sensitive documents can enter AI tools without review. Approval decisions can be
            difficult to trace. Teams may not be able to explain what information influenced an answer.
          </p>
          <p>
            LAB focuses on the controlled intake layer before AI use: document handling, workflow
            states, review gates, retrieval boundaries, and evidence trails.
          </p>
          <p>
            Retrieval is not authority. A search result is not the same as an approved source of truth.
          </p>
        </div>
      </section>

      <section className="section-pad proof-band">
        <div className="section-heading">
          <p className="eyebrow">Primary proof artefact</p>
          <h2>Safe Intake Proof 001</h2>
          <p>
            A working proof demonstrating controlled document intake before AI use.
            It is not presented as production software, compliance software, or an enterprise platform.
          </p>
        </div>
        <Workflow />
      </section>

      <section className="section-pad card-grid-section">
        <div className="section-heading narrow">
          <p className="eyebrow">Why evidence matters</p>
          <h2>Trust is designed into the workflow.</h2>
        </div>
        <div className="card-grid three">
          {principles.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad process-section">
        <div>
          <p className="eyebrow">How LAB works</p>
          <h2>Map the workflow before scaling the system.</h2>
        </div>
        <ol className="process-list">
          <li>Map the current document workflow.</li>
          <li>Identify risk points and unclear ownership.</li>
          <li>Design approval gates and blocked states.</li>
          <li>Create evidence trails for review and retrieval.</li>
          <li>Test the proof before recommending a larger build.</li>
        </ol>
      </section>
    </>
  );
}

function SafeIntakePage() {
  return (
    <section id="safe-intake" className="page-section section-pad">
      <div className="section-heading">
        <p className="eyebrow">/safe-intake</p>
        <h2>Safe Intake Proof 001</h2>
        <p>
          Safe Intake Proof 001 demonstrates a controlled document-intake workflow where
          documents move through classification, quarantine, review, approval, and evidence-ledger
          stages before AI ingestion is permitted.
        </p>
      </div>
      <Workflow />
      <div className="evidence-grid">
        <article className="card strong-card">
          <h3>What the proof demonstrates</h3>
          <ul>
            <li>Document intake and classification.</li>
            <li>Quarantine and review states.</li>
            <li>Approval gates before AI access.</li>
            <li>Evidence ledger events.</li>
            <li>Blocked AI ingestion until approval.</li>
          </ul>
        </article>
        <article className="card warning-card">
          <h3>What this page does not claim</h3>
          <ul>
            <li>No guaranteed compliance claim.</li>
            <li>No legal certification claim.</li>
            <li>No enterprise security certification claim.</li>
            <li>No risk elimination claim.</li>
            <li>No production deployment claim.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function AuditOffer() {
  return (
    <section className="section-pad offer-section">
      <div>
        <p className="eyebrow">Entry offer</p>
        <h2>AI-Safe Document Intake Audit</h2>
        <p>
          A practical review for teams that want to understand whether their documents,
          approvals, and knowledge workflows are ready for safer AI use.
        </p>
        <p>
          The audit looks for places where an AI system may trust stale material, draft content,
          sensitive information, or unsupported sources before the organisation has approved them.
        </p>
      </div>
      <div className="card audit-card">
        <h3>What the audit looks at</h3>
        <ul>
          {auditItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <a className="button primary" href="#contact">Request an intake audit</a>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section id="about" className="page-section section-pad split-section">
      <div>
        <p className="eyebrow">/about</p>
        <h2>Built by a systems-focused AI practitioner.</h2>
      </div>
      <div className="copy-stack">
        <p>
          LAB AI & Tech Solutions is led by Steven Lees, working across AI systems,
          workflow design, document intelligence, and creative technology.
        </p>
        <p>
          The LAB approach starts with small, testable workflow proofs before expanding
          into larger systems. Safe Intake Proof 001 reflects that method: make the
          control points visible, reviewable, and harder to bypass before scaling.
        </p>
        <div className="guide-note">
          <strong>No hype. No panic.</strong>
          <span>Just the next sensible step.</span>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section id="contact" className="page-section section-pad contact-section">
      <div className="contact-copy">
        <p className="eyebrow">/contact</p>
        <h2>Bring the messy workflow.</h2>
        <p>
          Use this path to discuss a document workflow, AI intake problem, evidence gap,
          or implementation challenge. Do not paste sensitive documents into the enquiry.
        </p>
      </div>
      <form className="contact-form" name="lab-intake-enquiry">
        <label>
          Name
          <input type="text" name="name" autoComplete="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Organisation
          <input type="text" name="organisation" />
        </label>
        <label>
          What document or workflow problem are you trying to improve?
          <textarea name="message" rows="5" />
        </label>
        <p className="privacy-note">
          Please do not upload or paste sensitive documents here. Use this form only to describe the workflow.
        </p>
        <button className="button primary" type="button">Prepare enquiry</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>LAB AI & Tech Solutions</p>
      <p>Practical AI systems for document-heavy workflows.</p>
    </footer>
  );
}

export default function App() {
  return (
    <main className="lab-site">
      <Header />
      <HomePage />
      <SafeIntakePage />
      <AuditOffer />
      <Generator />
      <AboutPage />
      <ContactPage />
      <Footer />
    </main>
  );
}
