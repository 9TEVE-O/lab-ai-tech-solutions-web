import { ArrowRight, Bot, CheckCircle2, ClipboardList, FileSearch, GitBranch, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import AgentReadyGenerator from './AgentReadyGenerator.jsx';

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
  ['Now', 'Operating hub shell, Agent-Ready Website Pack generator, proof architecture, and access CTA.'],
  ['Next', 'Website scan/import, evidence receipt output, and public build-log feed.'],
  ['Later', 'Auth, client workspace, document upload, agent orchestration, and policy controls.'],
];

const evidence = [
  'Existing public proof-of-concept established before this expansion sprint.',
  'Repository created as the source of truth for site, docs, and sprint decisions.',
  'Current focus: expand proof into a serious public operating surface.',
  'Agent-ready generator added as the first interactive product surface.',
];

function App() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top">LAB AI & Tech Solutions</a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#demo">Demo</a>
          <a href="#agent-ready">Generator</a>
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
            <a className="button primary" href="#agent-ready">Try the agent-ready generator <ArrowRight size={18} /></a>
            <a className="button secondary" href="#evidence">View proof layer</a>
          </div>
        </div>
        <aside className="command-card" aria-label="Sprint status">
          <p className="card-label">Expansion Sprint</p>
          <h2>From proof-of-concept to operating hub.</h2>
          <ul>
            <li><CheckCircle2 size={18} /> Public proof exists</li>
            <li><CheckCircle2 size={18} /> Repository active</li>
            <li><ClipboardList size={18} /> Agent-ready generator now in build</li>
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
          <h2>Agent-readable guidance. Human review. Safer routing.</h2>
          <p>
            The first interactive pathway generates a website-ready pack that helps businesses publish structured machine-readable guidance, clarify content-use boundaries, and reduce misrepresentation risk for compatible AI systems.
          </p>
        </div>
        <div className="flow-card">
          <span>1. Enter business details</span>
          <span>2. Generate agent guidance files</span>
          <span>3. Review safety and evidence rules</span>
          <span>4. Export an installation pack</span>
        </div>
      </section>

      <AgentReadyGenerator />

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
