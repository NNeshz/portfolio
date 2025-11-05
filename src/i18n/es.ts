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
      company: "Keando",
      position: "Desarrollador Full Stack",
      date: "Marzo 2023 - Presente",
      description:
        "En Keando, he optimizado servicios API críticos para soluciones de movilidad, logrando una reducción de latencia del 60%. He desarrollado una arquitectura escalable con NestJS, mejorando la confiabilidad del sistema en un 45%. Además, implementé un sistema de autenticación multicapa y mejoré las métricas de rendimiento web en un 15%, lo que ha resultado en una experiencia de usuario significativamente mejorada.",
      highlights: [
        "Optimicé servicios API críticos para soluciones de movilidad, reduciendo la latencia en un 60% (de 300 ms a 120 ms) mediante refactorización del backend y gestión eficiente de recursos con cloud storage.",
        "Desarrollé arquitectura escalable con NestJS implementando patrones de diseño modulares, disminuyendo fallas de sistema en un 60% y mejorando la confiabilidad operativa en un 45% para plataformas de alto tráfico.",
        "Implementé sistema de autenticación multicapa con tokens seguros y validación OTP, acelerando el proceso de acceso en un 40% y garantizando protección de datos sensibles mediante sanitización y cifrado.",
        "Mejoré métricas de rendimiento web en un 15% (Lighthouse) a través de optimización de rutas dinámicas, lazy loading y diseño responsive, mejorando significativamente la experiencia del usuario.",
      ],
    },
    {
      company: "Exxpress",
      position: "Desarrollador Full Stack",
      date: "Junio 2021 - Febrero 2023",
      description:
        "Lideré la migración del backend a NestJS con Firebase, lo que resultó en un aumento del 40% en la velocidad de respuesta y una reducción del 20% en los costos operativos. También desarrollé componentes de UI accesibles y reutilizables con React y TailwindCSS, lo que estandarizó el diseño y redujo los errores en los formularios. Mi contribución activa en el roadmap técnico aceleró la integración de nuevos módulos en un 25%.",
      highlights: [
        "Migré el backend a NestJS integrado con Firebase, incrementando la velocidad de respuesta en un 40% y reduciendo costos operativos en un 20%.",
        "Desarrollé componentes de UI accesibles y reutilizables con React y TailwindCSS, reduciendo errores en formularios y estandarizando el diseño del dashboard.",
        "Aceleré la integración de nuevos módulos en un 25%, analizando código legacy y contribuyendo activamente en el roadmap técnico junto al Project Manager.",
        "Mantuve estándares de código limpio con testing básico y CI/CD utilizando Vercel, PostgreSQL y TypeScript.",
      ],
    },
    {
      company: "Salón de Belleza Sois",
      position: "Desarrollador Full Stack (Freelance)",
      date: "Enero 2020 - Mayo 2021",
      description:
        "Como desarrollador freelance, diseñé y construí un sistema integral de punto de venta (POS), inventario y CMS para un salón de belleza. Este sistema optimizó las operaciones, redujo los tiempos de gestión en un 40% y mejoró la precisión de los informes en un 35%. La implementación de una API RESTful eficiente y un sistema de autenticación seguro con Auth0 fue clave para el éxito del proyecto.",
      highlights: [
        "Diseñé y desarrollé sistema completo de punto de venta, inventario y CMS, reduciendo tiempos operativos en un 40% y aumentando precisión de reportes en un 35%.",
        "Optimicé API RESTful con estrategias de caché y consultas indexadas, logrando tiempos de respuesta de 200-300 ms bajo carga concurrente.",
        "Implementé sistema de autenticación seguro con Auth0, disminuyendo brechas de seguridad en un 75% con gestión granular de roles y permisos.",
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
  "contact.message": "Hola, me gustaría trabajar contigo!",
  "contact.description":
    "Estoy aquí para dar vida a tus ideas con creatividad y precisión. Conectemos y exploremos las posibilidades",
  "contact.button": "Ponte en contacto",
};
