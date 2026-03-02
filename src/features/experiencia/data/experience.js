export const EXPERIENCE_OVERVIEW = {
  title: "Experiencia y Proyectos",
  summary:
    "Aquí puedes filtrar por tecnología para encontrar en qué empresa y en qué proyecto apliqué cada stack.",
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
      "Construí un microservicio disparado por trigger de Freshdesk para consultar la API SAP del cliente, recuperar pedidos y guías por ID de usuario, y mostrar la información como mini-SPA HTML dentro del ticket para evitar cambios de plataforma durante soporte.",
    stack: ["Node.js", "Express", "Cloud Run","Artifact Registry"],
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
      "Desarrollé un microservicio de sincronización bidireccional entre Freshdesk y Dynamics 365: triggers en ambas plataformas crean, actualizan y replican tickets automáticamente para mantener consistencia de datos entre sistemas.",
    stack: ["Node.js", "Express", "Cloud Run", "Artifact Registry"],
  },
  {
    id: "ptree-esource",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "Esource Capital - Dashboard IA para análisis de tickets",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Construí un dashboard interno full stack para analizar de 100 a 1,000 tickets por mes en Freshdesk: KPIs por tipo de solicitud, detección de clientes recurrentes y análisis de tono con IA.",
    stack: ["React", "TanStack Query", "Node.js", "Prisma ORM", "Cloud SQL", "Gemini API","Artifact Registry"],
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
      "Implementé un chatbot institucional en Freshchat para consultas sobre reglamentos, procesos y servicios escolares usando RAG sobre documentos PDF institucionales. El historial se persiste en JSON diario en Cloud Storage para optimizar costos.",
    stack: ["Node.js", "Vertex AI", "Cloud Run", "Cloud Storage", "RAG","Artifact Registry"],
  },
  {
    id: "ptree-fanasa",
    type: "Profesional",
    role: "Desarrollador Full Stack",
    company: "Ptree and Esource Capital",
    companyUrl: "https://www.ptree.com.mx/",
    project: "FANASA - AppSheet, aprobaciones y optimización SQL",
    period: "Julio 2024 - Noviembre 2025",
    mode: "Remoto",
    detail:
      "Realicé upgrade y soporte de plataforma AppSheet, afinando 23 flujos de aprobación por perfil, monto y actor. Desarrollé microservicio en Cloud Run para centralizar cambios de aprobador y automatizaciones, optimicé BD con tablas, índices y vistas SQL, y documenté en Mermaid versionado en Git.",
    stack: ["Node.js", "Express", "Cloud Run", "Cloud SQL","MySQL", "AppSheet","Artifact Registry"],
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
      "Participé en un sistema de control de devoluciones para cientos de solicitudes por sucursal, con flujo de aprobación configurable por rol y seguimiento end-to-end.",
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
      "Brindé soporte y ampliación a sistema de control documental: implementé generación y envío mensual automático de reportes PDF desde plantilla en Google Docs, alimentada dinámicamente con datos de Firebase y distribuida por correo. También realicé upgrade de frontend y backend.",
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
      "Desarrollé una app web full stack para optimizar logística y control de pedidos: panel admin protegido, gestión de clientes, asignación de rutas y análisis de patrones de consumo.",
    stack: ["Next.js","Material UI", "Leaflet","MySQL", "Vercel"],
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
      "Desarrollé un sistema integral con módulos de agenda de citas, historial clínico por cara dental, inventario y registro de pagos. Reto clave: modelado de BD para anomalías por cuadrante dental.",
    stack: ["Vue.js", "Vuetify", "Google Auth", "Express", "Sequelize", "MySQL", "Joi", "PM2"],
  },
];
