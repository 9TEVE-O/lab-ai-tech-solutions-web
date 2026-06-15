import profile from '@/data/profile.json';
import projects from '@/data/projects.json';
import skills from '@/data/skills.json';
import experience from '@/data/experience.json';

export default function Page() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal">Evidence-first AI portfolio</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none tracking-[-0.06em] sm:text-7xl">{profile.positioning}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-teal px-5 py-3 font-bold text-ink">Scan project evidence</a>
          <a href="#assistant" className="rounded-full border border-line px-5 py-3 font-bold">Ask my portfolio</a>
          <a href="#contact" className="rounded-full border border-line px-5 py-3 font-bold">Contact</a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-4xl font-black tracking-[-0.05em]">Project evidence cards</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.map(project => (
            <article key={project.id} className="rounded-3xl border border-line bg-panel p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-archive">{project.status}</p>
              <h3 className="mt-3 text-2xl font-bold">{project.name}</h3>
              <p className="mt-3 text-muted">{project.problem}</p>
              <p className="mt-4 text-sm"><b>Role:</b> {project.role}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{item}</span>)}</div>
              <p className="mt-4 text-sm text-muted">Metrics: {project.metrics.length ? project.metrics.join(', ') : 'Not evidenced in the current portfolio data.'}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">{project.evidence.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="assistant" className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl border border-line bg-panel p-6">
          <h2 className="text-4xl font-black tracking-[-0.05em]">Ask My Portfolio + Fit Analyzer</h2>
          <p className="mt-3 text-muted">Interactive assistant components are implemented through local portfolio data and must answer only from structured evidence.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-10 md:grid-cols-2">
        <article className="rounded-3xl border border-line bg-panel p-6"><h2 className="text-3xl font-black">Skills</h2><ul className="mt-4 space-y-2 text-muted">{skills.map(skill => <li key={skill.name}>{skill.name}</li>)}</ul></article>
        <article className="rounded-3xl border border-line bg-panel p-6"><h2 className="text-3xl font-black">Experience</h2><ul className="mt-4 space-y-3 text-muted">{experience.map(item => <li key={item.id}>{item.title}: {item.summary}</li>)}</ul></article>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-12"><div className="rounded-3xl bg-paper p-6 text-ink"><h2 className="text-4xl font-black">Contact</h2><p className="mt-3">{profile.contact.email}</p></div></section>
    </main>
  );
}
