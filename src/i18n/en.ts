import type { UIContent } from "./types";

export const en: UIContent = {
  "nav.experience": "EXPERIENCE",
  "nav.projects": "PROJECTS",
  "nav.contact": "CONTACT",
  "hero.name": "Neftali Hernández",
  "hero.title": "Full Stack Developer",
  "hero.description1":
    "Systems engineered for real-world problems, free of technological dogma. Node.js/TypeScript are leveraged when productivity is critical. Golang is deployed where performance and concurrency are uncompromising requirements.",
  "hero.description2":
    "Currently open to exploring new professional opportunities where I can contribute my stack. If you have a project where you need technical experience without any fluff, it's worth a conversation.",
  "hero.quote": "Programming is the easiest way to understand how things work.",
  "hero.quoteAuthor": "Chris Pine",
  "work.title": "Work Experience",
  experience: [
    {
      company: "Keando",
      position: "Full Stack Developer",
      date: "March 2023 - Present",
      description:
        "At Keando, I have optimized critical API services for mobility solutions, achieving a 60% reduction in latency. I have developed a scalable architecture with NestJS, improving system reliability by 45%. Additionally, I implemented a multi-layer authentication system and improved web performance metrics by 15%, resulting in a significantly enhanced user experience.",
      highlights: [
        "Optimized critical API services for mobility solutions, reducing latency by 60% (from 300 ms to 120 ms) through backend refactoring and efficient resource management with cloud storage.",
        "Developed a scalable architecture with NestJS implementing modular design patterns, decreasing system failures by 60% and improving operational reliability by 45% for high-traffic platforms.",
        "Implemented a multi-layer authentication system with secure tokens and OTP validation, speeding up the access process by 40% and ensuring the protection of sensitive data through sanitization and encryption.",
        "Improved web performance metrics by 15% (Lighthouse) through dynamic route optimization, lazy loading, and responsive design, significantly enhancing the user experience.",
      ],
    },
    {
      company: "Exxpress",
      position: "Full Stack Developer",
      date: "June 2021 - February 2023",
      description:
        "I led the backend migration to NestJS with Firebase, resulting in a 40% increase in response speed and a 20% reduction in operational costs. I also developed accessible and reusable UI components with React and TailwindCSS, which standardized the design and reduced form errors. My active contribution to the technical roadmap accelerated the integration of new modules by 25%.",
      highlights: [
        "Migrated the backend to NestJS integrated with Firebase, increasing response speed by 40% and reducing operational costs by 20%.",
        "Developed accessible and reusable UI components with React and TailwindCSS, reducing form errors and standardizing the dashboard design.",
        "Accelerated the integration of new modules by 25%, analyzing legacy code and actively contributing to the technical roadmap with the Project Manager.",
        "Maintained clean code standards with basic testing and CI/CD using Vercel, PostgreSQL, and TypeScript.",
      ],
    },
    {
      company: "Sois Beauty Salon",
      position: "Full Stack Developer (Freelance)",
      date: "January 2020 - May 2021",
      description:
        "As a freelance developer, I designed and built a comprehensive point of sale (POS), inventory, and CMS system for a beauty salon. This system optimized operations, reducing management times by 40% and improving report accuracy by 35%. The implementation of an efficient RESTful API and a secure authentication system with Auth0 was key to the project's success.",
      highlights: [
        "Designed and developed a complete point of sale, inventory, and CMS system, reducing operational times by 40% and increasing report accuracy by 35%.",
        "Optimized RESTful API with caching strategies and indexed queries, achieving response times of 200-300 ms under concurrent load.",
        "Implemented a secure authentication system with Auth0, reducing security breaches by 75% with granular role and permission management.",
      ],
    },
  ],
  "stack.title": "Technologies",
  "projects.section": "Personal projects",
  projects: [
    {
      name: "Octo 🤖",
      description:
        "This is a project made for the Midudev Hackathon. Allows you to make reviews of your pull requests and send the comments to the GitHub repository to save time and improve the code review process.",
      imageUrl: "/assets/octo.webp",
      projectSocials: [
        {
          network: "GitHub",
          label: "GitHub",
          url: "https://github.com/JorgeRojas827/octo",
        },
        {
          network: "Demo",
          label: "Demo",
          url: "https://www.octo.lat/",
        },
      ],
    },
    {
      name: "Short URL 🔗",
      description:
        "Trying to improve my skills as Full Stack, I made this project to shorten URLs. It is a simple project, but it helped me to understand many concepts, and inprove my skills with Shadcn and TailwindCSS.",
      imageUrl: "/assets/url.webp",
      projectSocials: [
        {
          network: "GitHub",
          label: "GitHub",
          url: "https://github.com/NNeshz/url-shorter",
        },
        {
          network: "Demo",
          label: "Demo",
          url: "https://neshzurl.vercel.app/",
        },
      ],
    },
  ],
  "contact.title.1": "Ready to",
  "contact.title.2": "collaborate and create?",
  "contact.message": "Hey, I would like to work with you!",
  "contact.description":
    "I'm here to bring your ideas to life with creativity and precision. Let's connect and explore the possibilities",
  "contact.button": "Get in touch",
};
