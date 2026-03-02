export const EXPERIENCE_HEADER = {
  role: "Desarrollador Full Stack",
  company: "Ptree and Esource Capital",
  period: "Julio 2024 - Noviembre 2025",
  mode: "Remoto",
  companyUrl: "https://www.ptree.com.mx/",
  summary:
    "Desarrolle soluciones web end-to-end para clientes corporativos, cubriendo diseno de bases de datos, APIs, integraciones empresariales y despliegues en Google Cloud Platform.",
};

export const EXPERIENCE_PROJECTS = [
  {
    client: "MEpiel",
    detail:
      "Construi un microservicio disparado por trigger de Freshdesk para consultar la API SAP del cliente, recuperar pedidos y guias por ID de usuario, y mostrar la informacion como mini-SPA HTML dentro del ticket para evitar cambios de plataforma durante soporte.",
    stack: ["Node.js", "Express", "Cloud Run"],
  },
  {
    client: "Crediclub",
    detail:
      "Desarrolle un microservicio de sincronizacion bidireccional entre Freshdesk y Dynamics 365: triggers en ambas plataformas crean, actualizan y replican tickets automaticamente para mantener consistencia de datos entre sistemas.",
    stack: ["Node.js", "Express", "Cloud Run", "Artifact Registry"],
  },
  {
    client: "Esource Capital",
    detail:
      "Construi un dashboard interno full stack para analizar de 100 a 1,000 tickets por mes en Freshdesk: KPIs por tipo de solicitud, deteccion de clientes recurrentes y analisis de tono con IA.",
    stack: ["React", "TanStack Query", "Node.js", "Prisma ORM", "Cloud SQL", "Gemini API"],
  },
  {
    client: "Universidad Panamericana",
    detail:
      "Implemente un chatbot institucional en Freshchat para consultas sobre reglamentos, procesos y servicios escolares usando RAG sobre documentos PDF institucionales. El historial se persiste en JSON diario en Cloud Storage para optimizar costos.",
    stack: ["Node.js", "Vertex AI", "Cloud Run", "Cloud Storage"],
  },
  {
    client: "FANASA (Farmacos Nacionales)",
    detail:
      "Realice upgrade y soporte de plataforma AppSheet, afinando 23 flujos de aprobacion por perfil, monto y actor. Desarrolle microservicio en Cloud Run para centralizar cambios de aprobador y automatizaciones, optimice BD con tablas, indices y vistas SQL, y documente en Mermaid versionado en Git.",
    stack: ["Node.js", "Express", "Cloud Run", "Cloud SQL", "AppSheet"],
  },
  {
    client: "CCU Argentina",
    detail:
      "Participe en un sistema de control de devoluciones para cientos de solicitudes por sucursal, con flujo de aprobacion configurable por rol y seguimiento end-to-end.",
    stack: ["AngularJS 1.8", "Firebase Realtime Database", "Google Apps Script"],
  },
  {
    client: "Herdez",
    detail:
      "Brinde soporte y ampliacion a sistema de control documental: implemente generacion y envio mensual automatico de reportes PDF desde plantilla en Google Docs, alimentada dinamicamente con datos de Firebase y distribuida por correo. Tambien realice upgrade de frontend y backend.",
    stack: ["AngularJS", "Google Apps Script", "Firebase Realtime Database", "Google Docs"],
  },
];
