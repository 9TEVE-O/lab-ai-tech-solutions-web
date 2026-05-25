import { ArrowRight, Bot, CheckCircle2, ClipboardList, FileSearch, GitBranch, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Bot,
    title: 'Demo',
    body: 'A visible workflow that turns messy inputs into structured review, evidence, and next action.',
  },
  {
    icon: FileSearch,
    title: 'Evidence',
    body: 'A proof layer for build logs, decisions, assumptions, limitations, and tested outputs.',
  },
  {
    icon: GitBranch,
    title: 'Roadmap',
    body: 'A controlled expansion path that shows what is live, what is next, and what is deliberately parked.',
  },
  {
    icon: ShieldCheck,
    title: 'Access',
    body: 'A direct path for early users, collaborators, and clients to request a demo or start a review.',
  },
];

const roadmap = [
  ['Now', 'Operating hub shell, proof architecture, demo narrative, and access CTA.'],
  ['Next', 'Interactive intake demo, evidence receipt output, and public build-log feed.'],
  ['Later', 'Auth, client workspace, document upload, agent orchestration, and policy controls.'],
];

const evidence = [
  'Existing public proof-of-concept established before this expansion sprint.',
  'Repository created as the source of truth for site, docs, and sprint decisions.',
  'Current focus: expand proof into a serious public operating surface.',
];

function App() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">LAB AI & Tech Solutions</a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#demo">Demo</a>
          <a href="#evidence">Evidence</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#access">Access</a>
        </div>
      </nav>

      <section id="top" className="hero section-grid">
        <div>
          <p className="eyebrow"><Sparkles size={16} /> Proof-led AI delivery</p>
          <h1>Practical AI systems with evidence, governance, and execution discipline.</h1>
          <p className="hero-copy">
            LAB AI & Tech Solutions helps turn messy workflows, documents, and agent activity into structured systems that can be reviewed, improved, and trusted.
          </p>
          <div className="cta-row">
            <a className="button primary" href="#access">Request early access <ArrowRight size={18} /></a>
            <a className="button secondary" href="#evidence">View proof layer</a>
          </div>
        </div>
        <aside className="command-card" aria-label="Sprint status">
          <p className="card-label">Expansion Sprint</p>
          <h2>From proof-of-concept to operating hub.</h2>
          <ul>
            <li><CheckCircle2 size={18} /> Public proof exists</li>
            <li><CheckCircle2 size={18} /> Repository active</li>
            <li><ClipboardList size={18} /> Demo, evidence, roadmap, access now being expanded</li>
          </ul>
        </aside>
      </section>

      <section className="section" aria-labelledby="pillars-heading">
        <div className="section-header">
          <p className="eyebrow">Operating pillars</p>
          <h2 id="pillars-heading">The public surface is built around four jobs.</h2>
        </div>
        <div className="pillar-grid">
          {pillars.map(({ icon: Icon, title, body }) => (
            <article className="pillar" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="demo" className="section split">
        <div>
          <p className="eyebrow">Demo pathway</p>
          <h2>Input. Review. Evidence. Action.</h2>
          <p>
            The first demo pathway will show how a project, document, or workflow can be assessed through a practical review loop and returned as a clear evidence receipt.
          </p>
        </div>
        <div className="flow-card">
          <span>1. Submit messy input</span>
          <span>2. Run structured review</span>
          <span>3. Generate evidence receipt</span>
          <span>4. Recommend next action</span>
        </div>
      </section>

      <section id="evidence" className="section evidence-section">
        <div className="section-header">
          <p className="eyebrow">Evidence layer</p>
          <h2>Proof beats polish.</h2>
          <p>LAB will show what is built, what is tested, what is assumed, and what still needs validation.</p>
        </div>
        <div className="evidence-list">
          {evidence.map((item) => (
            <article key={item}>
              <LockKeyhole size={20} />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section roadmap">
        <div className="section-header">
          <p className="eyebrow">Roadmap</p>
          <h2>Controlled expansion, not feature sprawl.</h2>
        </div>
        <div className="roadmap-grid">
          {roadmap.map(([phase, body]) => (
            <article key={phase}>
              <h3>{phase}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="access" className="section access-card">
        <p className="eyebrow">Access</p>
        <h2>Request a demo, review, or collaboration path.</h2>
        <p>
          The next public version should give early users a clear way to request access, submit a workflow for review, or follow the build.
        </p>
        <a className="button primary" href="mailto:stevenleesproduction@hotmail.com?subject=LAB%20AI%20%26%20Tech%20Solutions%20-%20Early%20Access">Request early access <ArrowRight size={18} /></a>
      </section>
    </main>
  );
}

export default App;
