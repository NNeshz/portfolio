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
      company: "Las Cámaras del Dragón",
      position: "Desarrollador Full Stack",
      date: "Febrero 2025 - Mayo 2025",
      description: "Lideré el desarrollo de la API principal, optimizando la comunicación entre sistemas con Elysia.js y Supabase. Implementé arquitectura E2E y borrado lógico, reduciendo errores en peticiones/respuestas en un 35% y mejorando la eficiencia del backend en un 20%. La documentación automatizada con Swagger mejoró la claridad técnica para el equipo.",
      highlights: [
        "Optimización de rutas API: Reducción de latencia de 300ms a 120ms (60% más rápido) y documentación automatizada con Elysia Swagger. Integración de AWS S3 para gestión de archivos, mejorando tiempos de carga en un 25%.",
        "Sistema de autenticación con BetterAuth: Reducción de vulnerabilidades en un 50% y aceleración del flujo de desarrollo en autenticación/autorización en un 40% mediante inyección contextual de datos.",
        "Contribución en Frontend con ShadCN/TailwindCSS: Implementación de rutas privadas y layouts dinámicos, mejorando la puntuación Lighthouse en 15 puntos (SEO/UX)."
      ]
    },
    {
      company: "Sois",
      position: "Desarrollador Full Stack",
      date: "Septiembre 2024 - Diciembre 2024",
      description: "Desarrollé una aplicación integral para gestión de ventas, inventario y reportes, optimizando procesos operativos. Reduje tiempos de respuesta de APIs de 450ms a 180ms (60% más rápido) e implementé autenticación segura con Supabase, eliminando accesos no autorizados en un 75%.",
      highlights: [
        "Sistema de punto de venta e inventario: Reducción del 40% en tiempos de gestión operativa y aumento del 30% en precisión de reportes.",
        "APIs RESTful optimizadas: Mejor rendimiento con caché y queries optimizadas, logrando un 99.8% de uptime.",
        "Supabase Auth: Reducción de brechas de seguridad en un 75% y aceleración de flujos de autenticación en un 50%."
      ]
    },
    {
      company: "Exxpress",
      position: "Desarrollador Full Stack",
      date: "Enero 2024 - Marzo 2024",
      description: "Diseñé e implementé el panel de control con enfoque en UI/UX, integrando Elysia.js y Firebase. Reduje errores de usuario en un 30% y mejoré tiempos de respuesta API en un 40% (de 500ms a 300ms).",
      highlights: [
        "ShadCN/UI: Mejora de accesibilidad (WCAG 2.1) y reducción de errores en formularios en un 30%.",
        "Integración Elysia.js + Firebase: Optimización de solicitudes API (40% más rápidas) y reducción de costos en un 20% vs. soluciones tradicionales.",
        "Colaboración en equipo: Análisis de código legacy, acelerando la integración de nuevos módulos en un 25%."
      ]
    }
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