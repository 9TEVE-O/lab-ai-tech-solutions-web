import { NextResponse } from 'next/server';
import projects from '@/data/projects.json';
import skills from '@/data/skills.json';

const none = 'Not evidenced in the current portfolio data.';
const disclaimer = 'This score is based only on available portfolio data, not a full hiring assessment.';

function words(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9ø]+/gi, ' ').split(' ').filter(word => word.length > 2);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) || {};
  const input = typeof body.jobDescription === 'string' ? body.jobDescription.slice(0, 6000) : '';
  const wanted = new Set(words(input));

  const matchedSkills = skills.filter(skill => words(skill.name).some(word => wanted.has(word)));
  const projectIds = new Set(matchedSkills.flatMap(skill => skill.evidenceProjectIds));

  const matchedProjects = projects.filter(project => {
    const stackMatch = project.stack.some(item => words(item).some(word => wanted.has(word)));
    if (stackMatch) projectIds.add(project.id);
    return projectIds.has(project.id);
  });

  const strengths = matchedSkills.map(skill => skill.name);
  const score = Math.min(85, Math.max(10, strengths.length * 12 + matchedProjects.length * 8));

  const answer = [
    `Fit score: ${score}%`,
    '',
    'Strengths:',
    ...(strengths.length ? strengths.map(item => `- ${item}`) : [`- ${none}`]),
    '',
    'Gaps:',
    '- Requirements not listed in strengths are not evidenced in the current portfolio data.',
    '- Unsupported metrics, seniority, employer history, and exact commercial outcomes need human review.',
    '',
    'Evidence used:',
    ...(matchedProjects.length ? matchedProjects.map(project => `- ${project.name}: ${project.evidence.join(' ')}`) : [`- ${none}`]),
    '',
    'One next step:',
    '- Add one project card that maps directly to the target role before using this as hiring evidence.',
    '',
    disclaimer,
  ].join('\n');

  return NextResponse.json({ answer });
}
