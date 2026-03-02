import { memo, useMemo } from "react";
import ExperienceRow from "./ExperienceRow";

function ExperienceResults({
  entries,
  activeType,
  selectedCompany,
  allCompaniesLabel,
  selectedTechCount,
  selectedTechNormalizedSet,
}) {
  const summaryText = useMemo(() => {
    const parts = [`${entries.length} proyecto(s)`];

    if (activeType === "Profesional" && selectedCompany !== allCompaniesLabel) {
      parts.push(`en ${selectedCompany}`);
    }

    if (selectedTechCount) {
      parts.push(`con ${selectedTechCount} tecnologia(s)`);
    }

    return parts.join(" ");
  }, [entries.length, activeType, selectedCompany, allCompaniesLabel, selectedTechCount]);

  return (
    <section className={`xp-results ${entries.length === 0 ? "is-empty" : ""}`} aria-live="polite">
      <div className="xp-results-head">
        <h2>Resultados</h2>
        <p>{summaryText}</p>
      </div>

      {entries.length === 0 ? (
        <article className="xp-empty">
          <h3>Sin coincidencias</h3>
          <p>No encontre proyectos con esa combinacion. Prueba cambiando tipo, empresa o tecnologias.</p>
        </article>
      ) : (
        <ol className="xp-stream">
          {entries.map((entry, index) => (
            <ExperienceRow
              key={entry.id}
              entry={entry}
              index={index}
              selectedTechNormalizedSet={selectedTechNormalizedSet}
            />
          ))}
        </ol>
      )}
    </section>
  );
}

export default memo(ExperienceResults);
