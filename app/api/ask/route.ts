import { NextResponse } from 'next/server';
import projects from '@/data/projects.json';

const NOT_EVIDENCED = 'Not evidenced in the current portfolio data.';

type Project = (typeof projects)[number];

function tokens(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9ø]+/gi, ' ').split(' ').filter(token => token.length > 2);
}

function projectText(project: Project) {
  return [project.name, project.problem, project.role, project.status, ...project.stack, ...project.metrics, ...project.evidence].join(' ');
}

function score(project: Project, queryTokens: string[]) {
  const haystack = tokens(projectText(project));
  return queryTokens.reduce((total, token) => total + haystack.filter(item => item.includes(token)).length, 0);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) || {};
  const question = typeof body.question === 'string' ? body.question.slice(0, 2000) : '';
  const queryTokens = tokens(question);

  if (!queryTokens.length) {
    return NextResponse.json({ answer: 'Ask about project evidence, skills, roles, tools, or experience shown in the portfolio data.' });
  }

  const matched = projects
    .map(project => ({ project, score: score(project, queryTokens) }))
    .sort((a, b) => b.score - a.score)
    .filter(item => item.score > 0)
    .slice(0, 3);

  if (!matched.length) {
    const fallbackProject = projects[0]?.name ? '\n\nClosest relevant project to review: ' + projects[0].name + '.' : '';
    return NextResponse.json({ answer: NOT_EVIDENCED + fallbackProject });
  }

  const answer = matched.map(({ project }) => [
    project.name,
    `Problem: ${project.problem}`,
    `Role: ${project.role}`,
    `Status: ${project.status}`,
    `Tech stack: ${project.stack.join(', ')}`,
    project.metrics.length ? `Metrics: ${project.metrics.join(', ')}` : `Metrics: ${NOT_EVIDENCED}`,
    `Evidence used: ${project.evidence.join(' ')}`,
  ].join('\n')).join('\n\n');

  return NextResponse.json({ answer });
}
