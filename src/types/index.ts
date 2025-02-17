export type Education = {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  keywords: string[];
};

export type Certification = {
  status: string;
  items: string[];
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  keywords: string[];
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: string;
  links?: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
};

export type Publication = {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  link?: string;
  abstract?: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: React.ComponentType<{ size?: number }>;
};

export type Skill = {
  name: string;
  percentage: number;
};