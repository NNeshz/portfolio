import type { UIContent } from "./types";

export const es: UIContent = {
  "nav.experience": "EXPERIENCIA",
  "nav.projects": "PROYECTOS",
  "nav.contact": "CONTACTO",
  "hero.name": "Neftali Hernández",
  "hero.title": "Desarrollador Full Stack",
  "hero.description1":
    "Construyo sistemas que resuelven problemas reales, sin dogmatismos tecnológicos. Uso Node.js/TypeScript cuando la productividad es clave, y Golang donde el rendimiento y la concurrencia son no-negociables.",
  "hero.description2":
    "Actualmente estoy explorando nuevas oportunidades donde pueda aportar valor con mi stack. Si tienes un proyecto interesante donde necesites experiencia técnica sin rodeos, vale la pena conversar.",
  "hero.quote":
    "La programación es la forma más fácil de entender cómo funcionan las cosas.",
  "hero.quoteAuthor": "Chris Pine",
  "work.title": "Experiencia Laboral",
  experience: [
    {
      company: "Exxpress",
      position: "Desarrollador Full Stack",
      date: "Enero 2024 - Marzo 2024",
      description:
        "Trabajé en el equipo de Exxpress, donde ayudé a construir el panel de control web. Fui responsable de la UI/UX y las solicitudes de API, lo que implicó aprender Elysia.js y Firebase, usar Radix y desarrollar una mejor experiencia de usuario.",
      highlights: [
        "Usar Shandcn para mejorar la experiencia del usuario y los formularios",
        "Aprender Elysia.js y Firebase para manejar solicitudes de API",
        "Entender la estructura de código de otros desarrolladores y trabajar en equipo",
      ],
    },
    {
      company: "Sois",
      position: "Desarrollador Full Stack",
      date: "Octubre 2024 - Diciembre 2024",
      description:
        "En Sois, fui responsable del desarrollo de la aplicación de gestión de ventas, inventario y reportes. Me encargué de la integración de la API, la mejora de la experiencia del usuario y la implementación de nuevas funcionalidades.",
      highlights: [
        "Desarrollo de punto de ventas, inventario y reportes",
        "Integración de APIs RESTful y optimización de rendimiento",
        "Implementación de autenticación y autorización con Supabase",
      ],
    },
  ],
  "stack.title": "Tecnologías",
  "projects.section": "Proyectos personales",
  projects: [
    {
      name: "Octo 🤖",
      description:
        "Este es un proyecto hecho para el Hackathon de Midudev. Te permite hacer revisiones de tus pull requests y enviar los comentarios al repositorio de GitHub para ahorrar tiempo y mejorar el proceso de revisión de código",
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
        "Intentando mejorar mis habilidades como Full Stack, hice este proyecto para acortar URLs. Es un proyecto simple, pero me ayudó a entender muchos conceptos y mejorar mis habilidades con Shadcn y TailwindCSS",
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
  "contact.title.1": "¿Listo para",
  "contact.title.2": "colaborar y crear algo nuevo?",
  "contact.description":
    "Estoy aquí para dar vida a tus ideas con creatividad y precisión. Conectemos y exploremos las posibilidades",
  "contact.button": "Ponte en contacto",
};