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
  "hero.quote":
    "Programming is the easiest way to understand how things work.",
  "hero.quoteAuthor": "Chris Pine",
  "work.title": "Work Experience",
  experience: [
    {
      company: "Las Cámaras del Dragón",
      position: "Full Stack Developer",
      date: "February 2025 - May 2025",
      description: "Spearheaded the core API development, optimizing system communication using Elysia.js and Supabase. Implemented E2E architecture and logical deletion, reducing request/response errors by 35% and improving backend efficiency by 20%. Automated Swagger documentation enhanced technical clarity for the team.",
      highlights: [
        "API Route Optimization: Reduced latency from 300ms to 120ms (60% faster) with automated documentation via Elysia Swagger. Integrated AWS S3 for file management, improving load times by 25%.",
        "BetterAuth Authentication System: Cut security vulnerabilities by 50% and accelerated auth flow development by 40% through contextual data injection.",
        "Frontend Contributions (ShadCN/TailwindCSS): Implemented private routes and dynamic layouts, boosting Lighthouse scores by 15 points (SEO/UX)."
      ]
    },
    {
      company: "Sois",
      position: "Full Stack Developer",
      date: "September 2024 - December 2024",
      description: "Developed a full-scale sales, inventory, and reporting application, streamlining operational processes. Reduced API response times from 450ms to 180ms (60% faster) and implemented secure auth with Supabase, eliminating 75% of unauthorized access.",
      highlights: [
        "POS & Inventory System: Cut operational management time by 40% and increased report accuracy by 30%.",
        "Optimized RESTful APIs: Achieved 99.8% uptime with caching and refined queries.",
        "Supabase Auth: Reduced security gaps by 75% and accelerated auth flows by 50%."
      ]
    },
    {
      company: "Exxpress",
      position: "Full Stack Developer",
      date: "January 2024 - March 2024",
      description: "Designed and implemented a UI/UX-focused dashboard using Elysia.js and Firebase. Reduced user errors by 30% and improved API response times by 40% (500ms → 300ms).",
      highlights: [
        "ShadCN/UI: Enhanced accessibility (WCAG 2.1) and reduced form errors by 30%.",
        "Elysia.js + Firebase: Optimized API requests (40% faster) and cut costs by 20% vs. traditional solutions.",
        "Team Collaboration: Analyzed legacy code, accelerating new module integration by 25%."
      ]
    }
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
