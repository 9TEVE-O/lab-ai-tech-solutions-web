"use client";

import { FormEvent, useState } from 'react';

type ApiState = 'idle' | 'loading' | 'done' | 'error';

async function postJson(path: string, payload: unknown) {
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json() as Promise<{ answer: string }>;
}

export default function PortfolioAssistant() {
  const [question, setQuestion] = useState('What projects show document intelligence or responsible AI controls?');
  const [jobDescription, setJobDescription] = useState('');
  const [askAnswer, setAskAnswer] = useState('');
  const [fitAnswer, setFitAnswer] = useState('');
  const [askState, setAskState] = useState<ApiState>('idle');
  const [fitState, setFitState] = useState<ApiState>('idle');

  async function handleAsk(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAskState('loading');
    setAskAnswer('');

    try {
      const data = await postJson('/api/ask', { question });
      setAskAnswer(data.answer);
      setAskState('done');
    } catch {
      setAskState('error');
      setAskAnswer('The portfolio assistant failed safely. Try again with a narrower question.');
    }
  }

  async function handleFit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFitState('loading');
    setFitAnswer('');

    try {
      const data = await postJson('/api/fit', { jobDescription });
      setFitAnswer(data.answer);
      setFitState('done');
    } catch {
      setFitState('error');
      setFitAnswer('The fit analyser failed safely. No job description text was stored by this interface.');
    }
  }

  return (
    <section id="assistant" className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 md:px-8">
      <article className="rounded-3xl border border-line bg-panel/80 p-6 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.3em] text-teal">Ask My Portfolio</p>
        <h2 className="mt-3 text-2xl font-semibold text-paper">Query the structured project evidence.</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          The assistant can only answer from the local portfolio data. Missing evidence is reported directly.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleAsk}>
          <label className="block text-sm font-medium text-paper" htmlFor="question">Question</label>
          <textarea
            id="question"
            className="min-h-32 w-full rounded-2xl border border-line bg-ink p-4 text-sm text-paper focus-ring"
            value={question}
            onChange={event => setQuestion(event.target.value)}
          />
          <button className="focus-ring rounded-full bg-teal px-5 py-3 text-sm font-semibold text-ink disabled:opacity-60" disabled={askState === 'loading' || !question.trim()}>
            {askState === 'loading' ? 'Checking evidence...' : 'Ask portfolio'}
          </button>
        </form>
        {askAnswer && <pre className="mt-5 whitespace-pre-wrap rounded-2xl border border-line bg-ink p-4 text-sm leading-6 text-paper">{askAnswer}</pre>}
      </article>

      <article className="rounded-3xl border border-line bg-panel/80 p-6 shadow-2xl shadow-black/20">
        <p className="text-sm uppercase tracking-[0.3em] text-archive">Fit Analyzer</p>
        <h2 className="mt-3 text-2xl font-semibold text-paper">Paste a job description for cautious fit analysis.</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Raw job descriptions are not stored by default. The text is treated only as analysis input.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleFit}>
          <label className="block text-sm font-medium text-paper" htmlFor="jobDescription">Job description</label>
          <textarea
            id="jobDescription"
            className="min-h-32 w-full rounded-2xl border border-line bg-ink p-4 text-sm text-paper focus-ring"
            placeholder="Paste role requirements here. Do not paste confidential material."
            value={jobDescription}
            onChange={event => setJobDescription(event.target.value)}
          />
          <button className="focus-ring rounded-full bg-archive px-5 py-3 text-sm font-semibold text-ink disabled:opacity-60" disabled={fitState === 'loading' || !jobDescription.trim()}>
            {fitState === 'loading' ? 'Analysing cautiously...' : 'Analyse fit'}
          </button>
        </form>
        {fitAnswer && <pre className="mt-5 whitespace-pre-wrap rounded-2xl border border-line bg-ink p-4 text-sm leading-6 text-paper">{fitAnswer}</pre>}
      </article>
    </section>
  );
}
