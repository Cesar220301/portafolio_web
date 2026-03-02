export const EXPERIENCE_OVERVIEW = {
  title: "Experiencia y Proyectos",
  summary:
    "Aqui puedes filtrar por tecnologia para encontrar en que empresa y en que proyecto aplique cada stack.",
};

export const EXPERIENCE_ENTRIES = [
  {
    id: "ptree-mepiel",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "MEpiel - Integracion Freshdesk + SAP",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Construi un microservicio disparado por trigger de Freshdesk para consultar la API SAP del cliente, recuperar pedidos y guias por ID de usuario, y mostrar la informacion como mini-SPA HTML dentro del ticket para evitar cambios de plataforma durante soporte.",
    stack: ["Node.js", "Express", "Cloud Run"],
  },
  {
    id: "ptree-crediclub",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "Crediclub - Sincronizacion Freshdesk <-> Dynamics 365",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Desarrolle un microservicio de sincronizacion bidireccional entre Freshdesk y Dynamics 365: triggers en ambas plataformas crean, actualizan y replican tickets automaticamente para mantener consistencia de datos entre sistemas.",
    stack: ["Node.js", "Express", "Cloud Run", "Artifact Registry"],
  },
  {
    id: "ptree-esource",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "Esource Capital - Dashboard IA para analisis de tickets",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Construi un dashboard interno full stack para analizar de 100 a 1,000 tickets por mes en Freshdesk: KPIs por tipo de solicitud, deteccion de clientes recurrentes y analisis de tono con IA.",
    stack: ["React", "TanStack Query", "Node.js", "Prisma ORM", "Cloud SQL", "Gemini API"],
  },
  {
    id: "ptree-up",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "Universidad Panamericana - Chatbot institucional con RAG",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Implemente un chatbot institucional en Freshchat para consultas sobre reglamentos, procesos y servicios escolares usando RAG sobre documentos PDF institucionales. El historial se persiste en JSON diario en Cloud Storage para optimizar costos.",
    stack: ["Node.js", "Vertex AI", "Cloud Run", "Cloud Storage", "RAG"],
  },
  {
    id: "ptree-fanasa",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "FANASA - AppSheet, aprobaciones y optimizacion SQL",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Realice upgrade y soporte de plataforma AppSheet, afinando 23 flujos de aprobacion por perfil, monto y actor. Desarrolle microservicio en Cloud Run para centralizar cambios de aprobador y automatizaciones, optimice BD con tablas, indices y vistas SQL, y documente en Mermaid versionado en Git.",
    stack: ["Node.js", "Express", "Cloud Run", "Cloud SQL", "AppSheet", "Mermaid"],
  },
  {
    id: "ptree-ccu",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "CCU Argentina - Control de devoluciones",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Participe en un sistema de control de devoluciones para cientos de solicitudes por sucursal, con flujo de aprobacion configurable por rol y seguimiento end-to-end.",
    stack: ["AngularJS", "Firebase Realtime Database", "Google Apps Script"],
  },
  {
    id: "ptree-herdez",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "Herdez - Control documental y reportes PDF",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Brinde soporte y ampliacion a sistema de control documental: implemente generacion y envio mensual automatico de reportes PDF desde plantilla en Google Docs, alimentada dinamicamente con datos de Firebase y distribuida por correo. Tambien realice upgrade de frontend y backend.",
    stack: ["AngularJS", "Google Apps Script", "Firebase Realtime Database", "Google Docs"],
  },
  {
    id: "personal-logistica",
    type: "Personal",
    role: "Desarrollador Full Stack Independiente",
    company: "Proyecto personal para Purificadora de Agua",
    project: "App de Logistica Full Stack",
    period: "Septiembre 2023 - Febrero 2024",
    mode: "Independiente",
    detail:
      "Desarrolle una app web full stack para optimizar logistica y control de pedidos: panel admin protegido, gestion de clientes, asignacion de rutas y analisis de patrones de consumo.",
    stack: ["Next.js 13", "NextAuth.js", "Material UI", "Leaflet", "API Routes", "Vercel MySQL", "Vercel"],
  },
  {
    id: "personal-dental",
    type: "Personal",
    role: "Desarrollador Full Stack Independiente",
    company: "Proyecto personal para Consultorio Dental",
    project: "Sistema de Administracion Full Stack",
    period: "Febrero 2022 - Agosto 2022",
    mode: "Independiente",
    detail:
      "Desarrolle un sistema integral con modulos de agenda de citas, historial clinico por cara dental, inventario y registro de pagos. Reto clave: modelado de BD para anomalias por cuadrante dental.",
    stack: ["Vue.js", "Vuetify", "Google Auth", "Express", "Sequelize", "MySQL", "Joi", "PM2"],
  },
];
