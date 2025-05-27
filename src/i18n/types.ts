export type Experience = {
  company: string;
  position: string;
  date: string;
  description: string;
  highlights: string[];
};

export type Project = {
  name: string;
  description: string;
  imageUrl: string;
  projectSocials: {
    network: string;
    label: string;
    url: string;
  }[];
};

export type UIContent = {
  "nav.experience": string;
  "nav.projects": string;
  "nav.contact": string;
  "hero.name": string;
  "hero.title": string;
  "hero.description1": string;
  "hero.description2": string;
  "hero.quote": string;
  "hero.quoteAuthor": string;
  "work.title": string;
  experience: Experience[];
  "stack.title": string;
  "projects.section": string;
  projects: Project[];
  "contact.title.1": string;
  "contact.title.2": string;
  "contact.description": string;
  "contact.button": string;
  "contact.message": string;
};