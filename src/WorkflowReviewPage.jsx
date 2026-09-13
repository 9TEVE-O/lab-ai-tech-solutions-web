import './workflow-review.css';

const reviewAreas = [
  ['01', 'Source material', 'What information enters the workflow, where it comes from, and what is actually entitled to support the work.'],
  ['02', 'AI and tools', 'Where AI is already used or proposed, what it receives, and what actions or outputs it can produce.'],
  ['03', 'Decisions', 'Which decisions the workflow informs or changes, and where judgement still sits with a person.'],
  ['04', 'Approvals', 'What requires explicit human authority before the workflow can proceed or change state.'],
  ['05', 'Evidence and logging', 'What can be reconstructed later: sources, limitations, approvals, state changes and known gaps.'],
  ['06', 'Failure and rollback', 'What happens when evidence is missing, an input is unsafe, or the workflow should stop rather than guess.'],
];

const nextStates = [
  ['Revise', 'The workflow is useful but its sources, controls or decision boundaries need correction.'],
  ['Stop', 'The current workflow should not proceed because a required dependency, authority or evidence condition is not met.'],
  ['Test', 'A bounded proof can answer the next material question without committing to a larger implementation.'],
  ['Consider implementation', 'Further implementation can be scoped only where the review supports it.'],
];

function InternalLink({ to, navigate, className, children }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

export default function WorkflowReviewPage({ navigate }) {
  return (
    <>
      <section className="workflow-review-hero section-pad" aria-labelledby="workflow-review-title">
        <div className="workflow-review-copy">
          <p className="eyebrow">Primary working offer · AI Workflow Review</p>
          <h1 id="workflow-review-title">Make one AI-assisted workflow visible before automation expands.</h1>
          <p className="lead">
            A practical review of one defined workflow: where AI touches source material, documents, tools,
            decisions, approvals, evidence, logging, failure handling and rollback.
          </p>
          <div className="cta-row">
            <a className="button primary" href="#enquiry">Prepare a workflow enquiry</a>
            <a className="button secondary" href="#scope">See what the review examines</a>
          </div>
          <p className="supporting-note">Working offer copy. Final publication approval remains required.</p>
        </div>

        <aside className="workflow-review-boundary" aria-label="AI Workflow Review boundary">
          <p className="panel-label">The review boundary</p>
          <p className="boundary-statement">One workflow. One current state. One next justified decision.</p>
          <div className="boundary-list" aria-label="Review sequence">
            <span>Current workflow</span>
            <span aria-hidden="true">→</span>
            <span>AI touchpoints</span>
            <span aria-hidden="true">→</span>
            <span>Evidence + control gaps</span>
            <span aria-hidden="true">→</span>
            <span>Next justified decision</span>
          </div>
        </aside>
      </section>

      <section className="section-pad workflow-problem" aria-labelledby="workflow-problem-title">
        <div>
          <p className="eyebrow">When this review is useful</p>
          <h2 id="workflow-problem-title">The AI is rarely the whole workflow.</h2>
        </div>
        <div className="copy-stack">
          <p>
            Existing work already contains sources, hand-offs, permissions, decisions and failure points.
            Adding AI can make those boundaries harder to see unless they are made explicit.
          </p>
          <p>The review is designed for a defined workflow where at least one of these questions matters:</p>
          <ul className="plain-list">
            <li>Which sources are current, authoritative or allowed to support the work?</li>
            <li>What may AI do, and what still requires human judgement or approval?</li>
            <li>What evidence exists for outputs and state changes?</li>
            <li>What should happen when evidence, authority or confidence is insufficient?</li>
            <li>Is the next justified move to revise, stop, test or consider further implementation?</li>
          </ul>
        </div>
      </section>

      <section id="scope" className="section-pad proof-band" aria-labelledby="workflow-scope-title">
        <div className="section-heading narrow">
          <p className="eyebrow">Review scope</p>
          <h2 id="workflow-scope-title">Six things need to be visible.</h2>
          <p>The review follows the workflow itself rather than treating the AI tool as an isolated product.</p>
        </div>
        <div className="workflow-scope-grid">
          {reviewAreas.map(([number, title, body]) => (
            <article className="workflow-scope-item" key={number}>
              <span className="workflow-index">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" aria-labelledby="workflow-output-title">
        <div className="section-heading narrow">
          <p className="eyebrow">What the review is for</p>
          <h2 id="workflow-output-title">Reach a bounded next decision, not a larger pile of AI recommendations.</h2>
          <p>
            The review should leave the current workflow clearer enough to decide what deserves to happen next.
            The evidence found in the review controls the strength of that decision.
          </p>
        </div>
        <div className="decision-strip" aria-label="Possible next decisions after an AI Workflow Review">
          {nextStates.map(([title, body]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad proof-band workflow-proof" aria-labelledby="workflow-proof-title">
        <div>
          <p className="eyebrow">Method evidence</p>
          <h2 id="workflow-proof-title">A bounded proof should show where its authority stops.</h2>
          <p>
            Safe Intake Proof 001 is a completed internal demonstration of one controlled document-intake path.
            It shows lifecycle states, quarantine, evidence events, a human-review handoff and blocked AI ingestion
            at the current boundary.
          </p>
          <InternalLink className="text-link" to="/safe-intake-proof-001" navigate={navigate}>
            Inspect Safe Intake Proof 001 →
          </InternalLink>
        </div>
        <aside className="workflow-proof-boundary">
          <p className="panel-label">Evidence boundary</p>
          <h3>What that proof does not establish</h3>
          <p>
            It does not establish production readiness, client outcomes, compliance, enterprise security or a
            completed approval-to-AI-ingestion path.
          </p>
        </aside>
      </section>

      <section id="enquiry" className="section-pad workflow-enquiry" aria-labelledby="workflow-enquiry-title">
        <div>
          <p className="eyebrow">Start with the workflow, not the files</p>
          <h2 id="workflow-enquiry-title">Describe one workflow you need to understand better.</h2>
          <p>
            State what the workflow does, where AI is used or proposed, the decision or problem you are trying to
            improve, and what is currently going wrong or remaining unclear.
          </p>
          <p className="privacy-note">Do not send sensitive documents through the website. Describe the workflow only.</p>
        </div>
        <aside className="workflow-enquiry-gate">
          <span className="status status-amber">Release gate</span>
          <h3>Public enquiry route not activated.</h3>
          <p>
            The controlling website material still lists the public contact address and contact-data handling as
            unresolved publication decisions. This staging page therefore prepares the enquiry without pretending
            the release gate is closed.
          </p>
          <InternalLink className="button secondary" to="/" navigate={navigate}>Back to LAB</InternalLink>
        </aside>
      </section>
    </>
  );
}
