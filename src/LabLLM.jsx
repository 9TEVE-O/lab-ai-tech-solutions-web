import { useMemo, useState } from 'react';
import './lab-llm.css';

const conversationRecord = {
  title: 'Cognitive Infrastructure Governance',
  status: 'Conversation-derived concept record',
  date: '15 June 2026',
  thesis:
    'In the AI era, ingestion is governance. Whoever controls intake controls the future behaviour of the system because they control memory, evidence, permissions, and retrieval surfaces.',
  largerThing:
    'The transition from document management to machine cognition management.',
};

const knowledgeCards = [
  {
    id: 'safe-intake',
    title: 'Safe Intake',
    body:
      'Safe Intake is the controlled entry point before documents become AI context. Proof 001 demonstrates classification, quarantine, a human-review handoff, evidence ledger events, and blocked AI ingestion at PENDING_REVIEW. APPROVED and REJECTED are modelled future states, but they are not enabled in the current proof.',
    triggers: ['safe intake', 'intake', 'document', 'approval', 'redaction', 'review', 'classification'],
  },
  {
    id: 'evidence-layer',
    title: 'Evidence Layer',
    body:
      'The Evidence Layer keeps claims attached to support material, review status, source records, and audit trails so generated outputs can be checked instead of merely trusted.',
    triggers: ['evidence', 'claim', 'ledger', 'cite', 'citation', 'audit', 'proof'],
  },
  {
    id: 'runtime-control',
    title: 'Runtime Control',
    body:
      'Runtime Control is the operating layer around the model: permissions, memory, retrieval boundaries, workflow state, blocked actions, escalation, and human approval.',
    triggers: ['runtime', 'control', 'agent', 'memory', 'permissions', 'retrieval'],
  },
  {
    id: 'cognitive-governance',
    title: 'Cognitive Infrastructure Governance',
    body:
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

function findMatches(question) {
  const normalised = question.toLowerCase();
  return knowledgeCards.filter(card =>
    card.triggers.some(trigger => normalised.includes(trigger))
  );
}

function buildAnswer(question) {
  const matches = findMatches(question);

  if (!question.trim()) {
    return 'Ask a question about LAB Safe Intake, evidence, runtime control, or machine memory governance.';
  }

  if (matches.length === 0) {
    return [
      'I can answer from the current LAB concept record, but I will not invent beyond it.',
      '',
      'Relevant scope: Safe Intake, evidence-led AI workflows, approval gates, runtime control, and cognitive infrastructure governance.',
      '',
      'For a production LLM, this interface should call a server endpoint with approved retrieval context rather than placing an API key in the browser.',
    ].join('\n');
  }

  return [
    `From the LAB record: ${conversationRecord.thesis}`,
    '',
    ...matches.map(card => `${card.title}: ${card.body}`),
    '',
    `Larger frame: ${conversationRecord.largerThing}`,
    '',
    'Boundary: this is a website proof interface, not production legal, compliance, or security software.',
  ].join('\n');
}

export default function LabLLM() {
  const [question, setQuestion] = useState('What is the larger thing LAB is discovering?');
  const answer = useMemo(() => buildAnswer(question), [question]);

  return (
    <section id="lab-llm" className="page-section section-pad llm-section">
      <div className="section-heading">
        <p className="eyebrow">/lab-llm</p>
        <h2>LAB LLM interface.</h2>
        <p>
          A bounded website proof that answers from the approved LAB concept record.
          It demonstrates the intended behaviour before connecting a production model.
        </p>
      </div>

      <div className="llm-grid">
        <article className="card llm-record-card">
          <p className="panel-label">Loaded conversation record</p>
          <h3>{conversationRecord.title}</h3>
          <dl className="record-list">
            <div>
              <dt>Status</dt>
              <dd>{conversationRecord.status}</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{conversationRecord.date}</dd>
            </div>
            <div>
              <dt>Core thesis</dt>
              <dd>{conversationRecord.thesis}</dd>
            </div>
          </dl>
        </article>

        <article className="card llm-console" aria-label="LAB LLM chat proof">
          <label htmlFor="llm-question">Ask the LAB LLM proof</label>
          <textarea
            id="llm-question"
            rows="5"
            value={question}
            onChange={event => setQuestion(event.target.value)}
          />

          <div className="prompt-row" aria-label="Starter prompts">
            {starterPrompts.map(prompt => (
              <button key={prompt} type="button" onClick={() => setQuestion(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <div className="llm-answer" aria-live="polite">
            <pre>{answer}</pre>
          </div>
        </article>
      </div>

      <div className="llm-boundary-note">
        <strong>Implementation boundary:</strong>
        <span>
          This browser proof does not call a paid model or expose an API key. Production use should move inference,
          retrieval, logging, and policy checks behind a server endpoint.
        </span>
      </div>
    </section>
  );
}
