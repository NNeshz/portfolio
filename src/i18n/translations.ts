export type Lang = 'es' | 'en';

export const translations = {
  es: {
    meta: {
      title: 'Neftali Hernández | Full Stack Developer',
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
      seeMore: 'Ver más',
      jobs: [
        {
          title: 'Full Stack Developer',
          company: 'Keando',
          date: 'Jul 2023 - Nov 2025',
          description: [
            'Desarrollé e implementé sistemas de chatbots inteligentes para +10 clientes, reduciendo tiempos de respuesta en un 65% y mejorando la satisfacción del cliente.',
            'Creé herramientas personalizadas y aplicaciones web para diversos sectores empresariales, entregando 15 proyectos exitosos con un 95% de satisfacción del cliente.',
            'Gestioné bases de datos con +5,000 registros de usuarios y desarrollé sistemas de automatización que redujeron tareas manuales en un 40%.',
            'Optimicé el rendimiento de aplicaciones web, logrando mejoras de velocidad de carga de hasta un 50% mediante técnicas de optimización de código y assets.',
          ],
        },
        {
          title: 'Full Stack Developer',
          company: 'CargaYa',
          date: 'Nov 2022 - Jul 2023',
          description: [
            'Desarrollé herramientas internas para plataforma fintech enfocada en el sector de transporte de carga, procesando transacciones para +200 transportadores activos.',
            'Implementé sistema de gestión de pagos digitales que incrementó la eficiencia operacional en un 45%, facilitando la administración financiera para transportadores independientes.',
            'Integré pasarelas de pago locales (PSE, Bancolombia) procesando exitosamente el 99.5% de transacciones sin errores críticos.',
            'Construí dashboards administrativos con +10 métricas operacionales clave, reduciendo el tiempo de generación de reportes de 2 horas a 5 minutos usando AI.',
          ],
        },
        {
          title: 'Full Stack Developer & Freelance',
          company: 'Terna Labs',
          date: 'Feb 2020 - Oct 2022',
          description: [
            'Desarrollé diversos proyectos de e-commerce desde cero con tasas de conversión promedio del 2.8%, implementando funcionalidades completas de carrito, checkout y gestión de productos.',
            'Creé landing pages de alta conversión que generaron incrementos de hasta 35% en leads cualificados para campañas de marketing digital.',
            'Diseñé e implementé un sistema completo de punto de venta (POS) que mejoró la velocidad de procesamiento de ventas en un 60% y redujo errores de inventario en un 75%.',
            'Integré soluciones de pago con Stripe, procesando +$50K MXN en transacciones con un índice de éxito del 98% entre todos los proyectos.',
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
          resume: 'Es una plataforma creada para ayudar a los arrendadores a gestionar sus propiedades de manera eficiente, ahorrar tiempo por medio de mensajes de WhatsApp automatizados y control de ingresos y egresos.',
          date: 'Febrero 2026 - Presente',
          description: [
            'Implementacion de API de WhatsApp.',
            'Integración de suscripciones mediante Polar.',
            'Desarrollo de API RESTful con Cron Jobs.',
          ],
          tags: ['Next.js', 'ShadCN', 'TypeScript', 'ElysiaJS', 'Polar'],
          githubUrl: 'https://github.com/nneshz/reentwise',
          demoUrl: 'https://reentwise.com',
        },
        {
          title: 'Meetzeen',
          resume: 'Meetzeen es una plataforma que busca organizar y automatizar las citas de diferentes usuarios con diferentes servicios. La idea es ahorrar tiempo y dar claridad acerca del negocio, con sus horarios y todo.',
          date: 'Nov 2025 - Presente',
          description: [
            'Desarrollo de dashboard administrativo con +15 métricas operacionales clave, y reportes generados con IA.',
            'Implementación de autenticación con Better Auth + invitaciones de usuario por medio de magic link.',
            'Diseño y desarrollo de la base de datos con Supabase para almacenamiento de datos e imagenes.',
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
      seeMore: 'See more',
      jobs: [
        {
          title: 'Full Stack Developer',
          company: 'Keando',
          date: 'Jul 2023 - Nov 2025',
          description: [
            'Developed and implemented intelligent chatbot systems for 10+ clients, reducing response times by 65% and improving customer satisfaction.',
            'Built custom tools and web applications for various business sectors, delivering 15 successful projects with a 95% client satisfaction rate.',
            'Managed databases with 5,000+ user records and developed automation systems that reduced manual tasks by 40%.',
            'Optimized web application performance, achieving load speed improvements of up to 50% through code and asset optimization techniques.',
          ],
        },
        {
          title: 'Full Stack Developer',
          company: 'CargaYa',
          date: 'Nov 2022 - Jul 2023',
          description: [
            'Developed internal tools for a fintech platform focused on the cargo transportation sector, processing transactions for 200+ active transporters.',
            'Implemented a digital payment management system that increased operational efficiency by 45%, facilitating financial administration for independent transporters.',
            'Integrated local payment gateways (PSE, Bancolombia) successfully processing 99.5% of transactions without critical errors.',
            'Built administrative dashboards with 10+ key operational metrics, reducing report generation time from 2 hours to 5 minutes using AI.',
          ],
        },
        {
          title: 'Full Stack Developer & Freelance',
          company: 'Terna Labs',
          date: 'Feb 2020 - Oct 2022',
          description: [
            'Developed various e-commerce projects from scratch with average conversion rates of 2.8%, implementing full cart, checkout, and product management features.',
            'Created high-conversion landing pages that generated increases of up to 35% in qualified leads for digital marketing campaigns.',
            'Designed and implemented a complete point-of-sale (POS) system that improved sales processing speed by 60% and reduced inventory errors by 75%.',
            'Integrated payment solutions with Stripe, processing $50K+ MXN in transactions with a 98% success rate across all projects.',
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
          resume: 'A platform created to help landlords manage their properties efficiently, save time through automated WhatsApp messages, and track income and expenses.',
          date: 'February 2026 - Present',
          description: [
            'WhatsApp API implementation.',
            'Subscription integration via Polar.',
            'RESTful API development with Cron Jobs.',
          ],
          tags: ['Next.js', 'ShadCN', 'TypeScript', 'ElysiaJS', 'Polar'],
          githubUrl: 'https://github.com/nneshz/reentwise',
          demoUrl: 'https://reentwise.com',
        },
        {
          title: 'Meetzeen',
          resume: 'Meetzeen is a platform that aims to organize and automate appointments for different users with different services. The idea is to save time and bring clarity about the business, its schedules, and more.',
          date: 'Nov 2025 - Present',
          description: [
            'Administrative dashboard development with 15+ key operational metrics and AI-generated reports.',
            'Authentication implementation with Better Auth + user invitations via magic link.',
            'Database design and development with Supabase for data and image storage.',
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
