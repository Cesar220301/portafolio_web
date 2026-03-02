import { Link } from "react-router-dom";
import "./portfolio-azul.css";
import { EXPERIENCE_HEADER, EXPERIENCE_PROJECTS } from "./data/experience";

export default function ExperiencePage() {
  return (
    <div className="portfolio-azul">
      <div className="bg-mesh" />

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(248,250,255,0.88)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(30,58,138,0.08)",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px,6vw,72px)",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.04em", color: "#1e3a8a" }}>
          Cesar<span style={{ color: "#93c5fd", fontWeight: 500 }}>.dev</span>
        </span>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link to="/" className="cta-secondary" style={{ padding: "9px 18px", fontSize: 13 }}>
            Sobre mi
          </Link>
          <a
            href="https://github.com/cesarespiridion"
            target="_blank"
            rel="noreferrer"
            className="cta-secondary"
            style={{ padding: "9px 18px", fontSize: 13 }}
          >
            GitHub
          </a>
        </div>
      </nav>

      <main className="xp-page">
        <header className="xp-hero">
          <p className="xp-kicker">Experiencia Profesional</p>
          <h1>
            {EXPERIENCE_HEADER.role} - {EXPERIENCE_HEADER.company}
          </h1>
          <p className="xp-meta">
            {EXPERIENCE_HEADER.period} | {EXPERIENCE_HEADER.mode} |{" "}
            <a href={EXPERIENCE_HEADER.companyUrl} target="_blank" rel="noreferrer">
              Sitio oficial de Ptree
            </a>
          </p>
          <p className="xp-summary">{EXPERIENCE_HEADER.summary}</p>
        </header>

        <section className="xp-timeline">
          {EXPERIENCE_PROJECTS.map((project, index) => (
            <article key={project.client} className="xp-item">
              <div className="xp-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="xp-content">
                <h2>{project.client}</h2>
                <p>{project.detail}</p>
                <div className="xp-stack-wrap">
                  {project.stack.map((tech) => (
                    <span key={tech} className="xp-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
