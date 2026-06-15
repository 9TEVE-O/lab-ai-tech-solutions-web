import { useMemo, useState } from 'react';
import profile from '../data/profile.json';
import projects from '../data/projects.json';
import skills from '../data/skills.json';

const conversationRecord = {
  title: 'Cognitive Infrastructure Governance',
  status: 'Conversation-derived concept record',
  date: '15 June 2026',
  thesis:
    'In the AI era, ingestion is governance. Whoever controls intake controls the future behaviour of the system because they control memory, evidence, permissions, and retrieval surfaces.',
  largerThing:
    'The transition from document management to machine cognition management.',
};

const labKnowledge = [
  {
    title: 'Safe Intake',
    answer:
      'Safe Intake is the controlled entry point before documents become AI context. It emphasises classification, quarantine, review, approval gates, evidence ledger events, and blocked AI ingestion until approval.',
    triggers: ['safe intake', 'intake', 'document', 'approval', 'review', 'redaction', 'classification'],
  },
  {
    title: 'Evidence Layer',
    answer:
      'The Evidence Layer keeps claims attached to support material, review status, source records, and audit trails so generated outputs can be checked instead of merely trusted.',
    triggers: ['evidence', 'claim', 'ledger', 'audit', 'citation', 'proof'],
  },
  {
    title: 'Runtime Control',
    answer:
      'Runtime Control is the operating layer around the model: permissions, memory, retrieval boundaries, workflow state, blocked actions, escalation, and human approval.',
    triggers: ['runtime', 'control', 'agent', 'permissions', 'memory', 'retrieval'],
  },
  {
    title: 'Cognitive Infrastructure Governance',
    answer:
      'The larger discovery is governance of the information environments that AI systems think, remember, retrieve, and act inside.',
    triggers: ['larger', 'governance', 'cognitive', 'infrastructure', 'machine memory', 'machine cognition'],
  },
];

const starterPrompts = [
  'What is Safe Intake?',
  'Why does evidence matter before AI use?',
  'What is the larger thing LAB is discovering?',
  'How should an organisation control machine memory?',
];

function ask(q) {
  const terms = q.toLowerCase().split(/\W+/).filter(Boolean);
  const matches = projects
    .filter(p =>
      [p.name, p.problem, p.role, p.status, ...p.stack, ...p.evidence]
        .join(' ')
        .toLowerCase()
        .split(/\W+/)
        .some(w => terms.includes(w))
    )
    .slice(0, 3);

  return matches.length
    ? matches
        .map(
          p =>
            `Project: ${p.name}\nRole: ${p.role}\nStatus: ${p.status}\nEvidence used:\n- ${p.evidence.join('\n- ')}`
        )
        .join('\n\n')
    : 'Not evidenced in the current portfolio data.';
}

function fit(jd) {
  const text = jd.toLowerCase();
  const matchedSkills = skills.filter(s => text.includes(s.name.toLowerCase()));
  const ids = new Set(matchedSkills.flatMap(s => s.evidenceProjectIds));
  const matchedProjects = projects.filter(p => ids.has(p.id));
  const score = Math.min(85, Math.max(10, matchedSkills.length * 12 + matchedProjects.length * 8));

  return `Fit Score: ${score}%\n\nStrengths:\n${
    matchedSkills.length
      ? matchedSkills.map(s => `- ${s.name}`).join('\n')
      : '- Not evidenced in the current portfolio data.'
  }\n\nGaps:\n- Requirements not listed above are not evidenced in the current portfolio data.\n\nEvidence used:\n${
    matchedProjects.length
      ? matchedProjects.map(p => `- ${p.name}`).join('\n')
      : '- Not evidenced in the current portfolio data.'
  }\n\nOne next step:\n- Add one project card that maps directly to the target role.\n\nDisclaimer: This score is based only on available portfolio data, not a full hiring assessment.`;
}

function askLabLLM(question) {
  const normalised = question.toLowerCase();
  const matches = labKnowledge.filter(item => item.triggers.some(trigger => normalised.includes(trigger)));

  if (!question.trim()) {
    return 'Ask about Safe Intake, evidence, runtime control, machine memory, or the larger LAB thesis.';
  }

  if (!matches.length) {
    return [
      'I can answer from the current LAB concept record, but I will not invent beyond it.',
      '',
      'Known scope: Safe Intake, evidence-led workflows, approval gates, runtime control, and cognitive infrastructure governance.',
      '',
      'Production boundary: a real LLM should run behind a server endpoint with approved retrieval context, logging, rate limits, and policy checks.',
    ].join('\n');
  }

  return [
    `Conversation record: ${conversationRecord.thesis}`,
    '',
    ...matches.map(item => `${item.title}: ${item.answer}`),
    '',
    `Larger frame: ${conversationRecord.largerThing}`,
    '',
    'Boundary: this is a website proof interface, not production legal, compliance, or security software.',
  ].join('\n');
}

function LabLLM() {
  const [question, setQuestion] = useState('What is the larger thing LAB is discovering?');
  const answer = useMemo(() => askLabLLM(question), [question]);

  return (
    <section id="lab-llm" className="section assistant-grid">
      <article className="card llm-record-card">
        <p className="eyebrow">Conversation loaded</p>
        <h2>LAB LLM</h2>
        <p>
          A bounded website proof that answers from the LAB conversation record before any
          production model is connected.
        </p>
        <p><strong>Record:</strong> {conversationRecord.title}</p>
        <p><strong>Status:</strong> {conversationRecord.status}</p>
        <p><strong>Core thesis:</strong> {conversationRecord.thesis}</p>
      </article>

      <article className="card">
        <h2>Ask the LAB LLM</h2>
        <textarea value={question} onChange={e => setQuestion(e.target.value)} />
        <div className="prompt-row">
          {starterPrompts.map(prompt => (
            <button key={prompt} type="button" onClick={() => setQuestion(prompt)}>
              {prompt}
            </button>
          ))}
        </div>
        <pre>{answer}</pre>
      </article>
    </section>
  );
}

function App() {
  const [q, setQ] = useState('Which projects show document intelligence?');
  const [a, setA] = useState('');
  const [j, setJ] = useState('');
  const [f, setF] = useState('');

  return (
    <main className="portfolio-shell">
      <section className="hero">
        <p className="eyebrow">Recruiter portfolio</p>
        <h1>Structured project evidence.</h1>
        <p>{profile.summary}</p>
        <div className="cta-row">
          <a href="#projects">Scan projects</a>
          <a href="#assistant">Ask portfolio</a>
          <a href="#lab-llm">Open LAB LLM</a>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Project cards</h2>
        <div className="project-grid">
          {projects.map(p => (
            <article className="card" key={p.id}>
              <p className="status">{p.status}</p>
              <h3>{p.name}</h3>
              <p>{p.problem}</p>
              <p><strong>Role:</strong> {p.role}</p>
              <div className="tag-row">
                {p.stack.map(x => <span key={x}>{x}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <LabLLM />

      <section id="assistant" className="section assistant-grid">
        <article className="card">
          <h2>Ask My Portfolio</h2>
          <textarea value={q} onChange={e => setQ(e.target.value)} />
          <button onClick={() => setA(ask(q))}>Ask portfolio</button>
          {a && <pre>{a}</pre>}
        </article>
        <article className="card">
          <h2>Fit Analyzer</h2>
          <textarea
            placeholder="Paste role description. Do not paste confidential material."
            value={j}
            onChange={e => setJ(e.target.value)}
          />
          <button onClick={() => setF(fit(j))}>Analyse fit</button>
          {f && <pre>{f}</pre>}
        </article>
      </section>

      <section className="section contact-card">
        <h2>Contact Steven</h2>
        <p>{profile.contact.email}</p>
      </section>
    </main>
  );
}

export default App;
