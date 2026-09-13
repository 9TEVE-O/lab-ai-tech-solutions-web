export type LinkSet = {
  caseStudy?: string;
  demo?: string;
  github?: string;
};

export type Profile = {
  name: string;
  preferredName: string;
  creativeName?: string;
  headline: string;
  location: string;
  summary: string;
  positioning: string;
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
    substack?: string;
  };
};

export type Project = {
  id: string;
  name: string;
  problem: string;
  role: string;
  stack: string[];
  metrics: string[];
  evidence: string[];
  links: LinkSet;
  status: string;
};

export type Skill = {
  name: string;
  evidenceProjectIds: string[];
};

export type Experience = {
  id: string;
  title: string;
  organisation: string;
  summary: string;
  evidenceProjectIds: string[];
};

export type EvidenceUsed = {
  projectId: string;
  projectName: string;
  evidence: string[];
};

export type AskResult = {
  answer: string;
  evidenceUsed: EvidenceUsed[];
  closestProject?: string;
};

export type FitResult = {
  score: number;
  strengths: string[];
  gaps: string[];
  evidenceUsed: EvidenceUsed[];
  nextStep: string;
  disclaimer: string;
};
