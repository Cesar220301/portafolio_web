import PageShell from "../../layout/components/PageShell";
import TopNav from "../../layout/components/TopNav";
import { EXPERIENCE_HEADER, EXPERIENCE_PROJECTS } from "../data/experience";
import "../styles/experiencia.css";

export default function ExperienciaView() {
  return (
    <PageShell>
      <TopNav primaryTo="/" primaryLabel="Sobre mi" />

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
    </PageShell>
  );
}
