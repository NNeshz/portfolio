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
      company: "Exxpress",
      position: "Full Stack Developer",
      date: "January 2024 - March 2024",
      description:
        "I worked at Exxpress team, where I helped build the web dashboard. I was responsible for UI/UX and API requests, which involved to learn Elysia.js and Firebase, use Radix and develop a better user experience.",
      highlights: [
        "Using Shandcn to improve user experience and forms",
        "Learning Elysia.js and Firebase to handle API requests",
        "Understanding other developers' code structure and working in a team",
      ],
    },
    {
      company: "Sois",
      position: "Full Stack Developer",
      date: "October 2024 - December 2024",
      description:
        "At Sois, I was responsable of the sales, inventory and reports application development team. I was in charge of API integration, improving user experience, and implementing new features.",
      highlights: [
        "Development of sales, inventory and reports",
        "Integration of RESTful APIs and performance optimization",
        "Implementation of authentication and authorization system with Supabase",
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
  "contact.description":
    "I'm here to bring your ideas to life with creativity and precision. Let's connect and explore the possibilities",
  "contact.button": "Get in touch",
};
