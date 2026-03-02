import { memo } from "react";
import { normalizeText } from "../utils/normalize";

function ExperienceRow({ entry, index, isVisible, selectedTechNormalizedSet }) {
  return (
    <li className={`xp-row ${isVisible ? "" : "is-hidden"}`} aria-hidden={!isVisible}>
      <div className="xp-row-line" aria-hidden="true" />
      <div className="xp-row-index">{String(index + 1).padStart(2, "0")}</div>

      <article className="xp-row-content">
        <header className="xp-row-head">
          <div className="xp-row-title-wrap">
            <span className={`xp-type-badge xp-${entry.type.toLowerCase()}`}>{entry.type}</span>
            <h3>{entry.project}</h3>
          </div>
          <p className="xp-role">{entry.role}</p>
        </header>

        <div className="xp-signal-grid">
          <p>
            <strong>Empresa</strong>
            {entry.companyUrl ? (
              <a href={entry.companyUrl} target="_blank" rel="noreferrer">
                {entry.company}
              </a>
            ) : (
              <span>{entry.company}</span>
            )}
          </p>
          <p>
            <strong>Periodo</strong>
            <span>{entry.period}</span>
          </p>
        </div>

        <p className="xp-detail">{entry.detail}</p>

        <div className="xp-stack-wrap">
          {entry.stack.map((tech) => {
            const highlighted = selectedTechNormalizedSet.has(normalizeText(tech));
            return (
              <span key={tech} className={`xp-chip ${highlighted ? "is-highlighted" : ""}`}>
                {tech}
              </span>
            );
          })}
        </div>
      </article>
    </li>
  );
}

export default memo(ExperienceRow);
