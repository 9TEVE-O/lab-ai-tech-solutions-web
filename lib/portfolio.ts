import profile from '@/data/profile.json';
import projects from '@/data/projects.json';
import skills from '@/data/skills.json';
import experience from '@/data/experience.json';

export type Project = (typeof projects)[number];
export type Skill = (typeof skills)[number];
export type Experience = (typeof experience)[number];

export const portfolio = {
  profile,
  projects: projects as Project[],
  skills: skills as Skill[],
  experience: experience as Experience[]
};

export function getPortfolioContext() {
  return JSON.stringify(portfolio, null, 2);
}

export function searchEvidence(query: string) {
  const normalised = query.toLowerCase();
  const matchedProjects = portfolio.projects.filter(project => {
    const haystack = [
      project.name,
      project.problem,
      project.role,
      project.status,
      ...project.stack,
      ...project.evidence
    ].join(' ').toLowerCase();

    return normalised
      .split(/\W+/)
      .filter(Boolean)
      .some(token => token.length > 2 && haystack.includes(token));
  });

  return matchedProjects.slice(0, 3);
}
