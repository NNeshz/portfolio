export type Lang = 'es' | 'en';

export const translations = {
  es: {
    meta: {
      title: 'Neftali Hernández | Full Stack Developer',
      description: 'Full Stack Developer especializado en React, Next.js, TypeScript y Node.js. Construyo aplicaciones web limpias y escalables, incluyendo agentes con IA (LLMs, RAG).',
    },
    theme: {
      ariaLabel: 'Cambiar tema',
    },
    lang: {
      ariaLabel: 'Switch to English',
      label: 'ES',
      switchTo: '/en/',
    },
    me: {
      role: 'Full Stack Developer',
    },
    description: {
      bio1: 'Me gusta crear aplicaciones que se sientan bien desde dentro hacia afuera: limpias, bien pensadas y agradables de usar. Me enfoco en que el código sea claro, mantenible y escalable, para que los proyectos crezcan sin perder su esencia.',
      bio2: 'Aunque cuento con un stack principal, siempre estoy explorando nuevas herramientas y tecnologías. Me gusta mantenerme en movimiento, probar cosas nuevas y encontrar formas frescas de mejorar cada proyecto en el que trabajo.',
      contact: 'Puedes contactarme aquí:',
      email: 'Correo',
    },
    experience: {
      title: 'Experiencia',
      jobs: [
        {
          title: 'Full Stack Developer',
          company: 'Keando',
          date: 'Jul 2023 - Nov 2025',
          description: [
            'Diseñé e implementé agentes conversacionales con LLMs (GPT-4, Claude) y RAG sobre bases de conocimiento para más de 10 clientes, reduciendo el tiempo medio de primera respuesta en un 65% y automatizando la resolución de consultas frecuentes sin intervención humana.',
            'Entregué más de 15 aplicaciones web a medida para retail, salud y logística, cumpliendo los plazos pactados en el 95% de las entregas.',
            'Operé en producción bases de datos con más de 5,000 usuarios activos e implementé pipelines de automatización (ETL/cron) que eliminaron tareas manuales recurrentes del equipo.',
            'Optimicé el rendimiento del frontend (lazy loading, code splitting, optimización de assets), mejorando el LCP en un 50%.',
          ],
        },
        {
          title: 'Full Stack Developer',
          company: 'CargaYa',
          date: 'Nov 2022 - Jul 2023',
          description: [
            'Desarrollé herramientas internas para una plataforma fintech del sector transporte en Colombia, gestionando operaciones diarias de más de 200 transportadores activos.',
            'Implementé el sistema de pagos digitales con soporte para PSE, Bancolombia y billeteras virtuales, automatizando la conciliación de pagos que antes era manual.',
            'Integré pasarelas de pago locales logrando un 99.5% de tasa de éxito en transacciones, sin incidentes críticos durante todo el período de operación.',
            'Construí dashboards con más de 10 métricas clave e informes generados con IA, reduciendo el tiempo de reporte de 2 horas a 5 minutos.',
          ],
        },
        {
          title: 'Full Stack Developer & Freelance',
          company: 'Terna Labs',
          date: 'Feb 2020 - Oct 2022',
          description: [
            'Diseñé y desarrollé múltiples tiendas de e-commerce desde cero con tasas de conversión promedio del 2.8%, incluyendo carrito, checkout optimizado y gestión de productos.',
            'Construí landing pages para campañas de marketing; en pruebas A/B, las versiones optimizadas elevaron la conversión visitante→lead hasta un 35%.',
            'Desarrollé un sistema de punto de venta (POS) completo con control de inventario que redujo las discrepancias de stock en un 75%.',
            'Integré Stripe en los proyectos de e-commerce, manteniendo una tasa de éxito en transacciones del 98%.',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      seeDetails: 'Ver detalles',
      items: [
        {
          title: 'Reentwise',
          resume: 'SaaS para arrendadores que elimina la fricción del cobro de rentas: recordatorios automáticos por WhatsApp, seguimiento de pagos y control financiero centralizado.',
          date: 'Feb 2026 - Presente',
          description: [
            'Automatización de recordatorios de pago vía WhatsApp Business API con mensajes personalizados por inquilino, fechas de vencimiento y estado de pago.',
            'Sistema de suscripciones con Polar: planes mensuales y anuales, gestión de facturación y periodo de prueba gratuito para nuevos arrendadores.',
            'API RESTful con Cron Jobs para seguimiento de pagos recurrentes, generación de reportes financieros y alertas automáticas de pagos vencidos.',
          ],
          tags: ['Next.js', 'ShadCN', 'TypeScript', 'ElysiaJS', 'Polar'],
          githubUrl: 'https://github.com/nneshz/reentwise',
          demoUrl: 'https://reentwise.com',
        },
        {
          title: 'Meetzeen',
          resume: 'Plataforma de agendamiento inteligente que conecta negocios con sus clientes, automatizando citas y ofreciendo visibilidad total sobre la operación.',
          date: 'Nov 2025 - Presente',
          description: [
            'Dashboard administrativo con más de 15 métricas clave (ocupación, ingresos proyectados, tasa de cancelación) y reportes generados con IA para toma de decisiones.',
            'Autenticación segura con Better Auth, roles de usuario diferenciados e invitaciones por magic link para onboarding sin fricción.',
            'Arquitectura de base de datos en Supabase con almacenamiento de imágenes en S3, optimizada para múltiples negocios y alta concurrencia.',
          ],
          tags: ['Next.js', 'ShadCN', 'TypeScript', 'Supabase', 'ElysiaJS', 'S3 Bucket'],
          githubUrl: 'https://github.com/nneshz/meetzeen',
        },
      ],
    },
    skills: {
      title: 'Habilidades y Herramientas',
    },
    contributions: {
      title: 'Contribuciones en GitHub',
      inLastYear: 'en el último año',
      less: 'Menos',
      more: 'Más',
      locale: 'es-MX',
      tooltipWord: 'contribuciones el',
    },
    footer: {
      specialDates: {
        newYearEve: '¡Feliz año nuevo! 🎊',
        newYear: '¡Feliz Año Nuevo! 🎆',
        valentines: '¡Feliz Día de San Valentín! ❤️',
        mexico: '¡Viva México! 🇲🇽',
        christmas: '¡Feliz Navidad! 🎄',
      },
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
      ],
      locale: 'es-MX',
    },
  },
  en: {
    meta: {
      title: 'Neftali Hernández | Full Stack Developer',
      description: 'Full Stack Developer specialized in React, Next.js, TypeScript, and Node.js. I build clean, scalable web applications, including AI-powered agents (LLMs, RAG).',
    },
    theme: {
      ariaLabel: 'Toggle theme',
    },
    lang: {
      ariaLabel: 'Cambiar a Español',
      label: 'EN',
      switchTo: '/',
    },
    me: {
      role: 'Full Stack Developer',
    },
    description: {
      bio1: 'I enjoy building applications that feel great from the inside out: clean, thoughtful, and enjoyable to use. I focus on writing clear, maintainable, and scalable code so projects can grow without losing their essence.',
      bio2: "While I have a primary stack, I'm always exploring new tools and technologies. I like to keep moving, try new things, and find fresh ways to improve every project I work on.",
      contact: 'You can reach me here:',
      email: 'Email',
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          title: 'Full Stack Developer',
          company: 'Keando',
          date: 'Jul 2023 - Nov 2025',
          description: [
            'Designed and implemented LLM-powered conversational agents (GPT-4, Claude) with RAG over knowledge bases for 10+ clients, reducing average first-response time by 65% and automating the resolution of common queries without human intervention.',
            'Delivered 15+ custom web applications across retail, healthcare, and logistics, meeting agreed deadlines on 95% of deliveries.',
            'Operated production databases with 5,000+ active users and built automation pipelines (ETL/cron) that eliminated the team\'s recurring manual tasks.',
            'Optimized frontend performance (lazy loading, code splitting, asset optimization), improving LCP by 50%.',
          ],
        },
        {
          title: 'Full Stack Developer',
          company: 'CargaYa',
          date: 'Nov 2022 - Jul 2023',
          description: [
            'Built internal tooling for a fintech platform serving the cargo transport sector in Colombia, managing daily operations for 200+ active transporters.',
            'Implemented the digital payment system with support for PSE, Bancolombia, and digital wallets, automating payment reconciliation that was previously manual.',
            'Integrated local payment gateways achieving a 99.5% transaction success rate with zero critical incidents throughout the entire operation period.',
            'Built dashboards with 10+ key operational metrics and AI-generated reports, cutting report generation time from 2 hours down to 5 minutes.',
          ],
        },
        {
          title: 'Full Stack Developer & Freelance',
          company: 'Terna Labs',
          date: 'Feb 2020 - Oct 2022',
          description: [
            'Designed and built multiple e-commerce stores from scratch with an average 2.8% conversion rate, including optimized cart, checkout, and product management flows.',
            'Built landing pages for marketing campaigns; in A/B tests, optimized versions lifted visitor-to-lead conversion by up to 35%.',
            'Built a full-featured point-of-sale (POS) system with inventory control that reduced stock discrepancies by 75%.',
            'Integrated Stripe across e-commerce projects, maintaining a 98% transaction success rate.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      seeDetails: 'See details',
      items: [
        {
          title: 'Reentwise',
          resume: 'SaaS for landlords that eliminates the friction of rent collection: automated WhatsApp reminders, payment tracking, and centralized financial control.',
          date: 'Feb 2026 - Present',
          description: [
            'Automated payment reminders via WhatsApp Business API with personalized messages per tenant, due dates, and payment status updates.',
            'Subscription system with Polar: monthly and annual plans, billing management, and free trial period for new landlords.',
            'RESTful API with Cron Jobs for recurring payment tracking, financial report generation, and automatic overdue payment alerts.',
          ],
          tags: ['Next.js', 'ShadCN', 'TypeScript', 'ElysiaJS', 'Polar'],
          githubUrl: 'https://github.com/nneshz/reentwise',
          demoUrl: 'https://reentwise.com',
        },
        {
          title: 'Meetzeen',
          resume: 'Intelligent scheduling platform that connects businesses with their clients, automating appointments and providing full operational visibility.',
          date: 'Nov 2025 - Present',
          description: [
            'Administrative dashboard with 15+ key metrics (occupancy, projected revenue, cancellation rate) and AI-generated reports for data-driven decision making.',
            'Secure authentication with Better Auth, differentiated user roles, and magic link invitations for frictionless onboarding.',
            'Supabase database architecture with S3 image storage, optimized for multi-business usage and high concurrency.',
          ],
          tags: ['Next.js', 'ShadCN', 'TypeScript', 'Supabase', 'ElysiaJS', 'S3 Bucket'],
          githubUrl: 'https://github.com/nneshz/meetzeen',
        },
      ],
    },
    skills: {
      title: 'Skills & Tools',
    },
    contributions: {
      title: 'GitHub Contributions',
      inLastYear: 'in the last year',
      less: 'Less',
      more: 'More',
      locale: 'en-US',
      tooltipWord: 'contributions on',
    },
    footer: {
      specialDates: {
        newYearEve: "Happy New Year's Eve! 🎊",
        newYear: 'Happy New Year! 🎆',
        valentines: "Happy Valentine's Day! ❤️",
        mexico: '¡Viva México! 🇲🇽',
        christmas: 'Merry Christmas! 🎄',
      },
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      locale: 'en-US',
    },
  },
} as const;
