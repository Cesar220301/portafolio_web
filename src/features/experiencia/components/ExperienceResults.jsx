import { memo, useMemo } from "react";
import ExperienceRow from "./ExperienceRow";

function ExperienceResults({
  entries,
  visibleEntryIds,
  visibleCount,
  activeType,
  selectedCompany,
  allCompaniesLabel,
  selectedTechCount,
  selectedTechNormalizedSet,
}) {
  const summaryText = useMemo(() => {
    const parts = [`${visibleCount} proyecto(s)`];

    if (activeType === "Profesional" && selectedCompany !== allCompaniesLabel) {
      parts.push(`en ${selectedCompany}`);
    }

    if (selectedTechCount) {
      parts.push(`con ${selectedTechCount} tecnología(s)`);
    }

    return parts.join(" ");
  }, [visibleCount, activeType, selectedCompany, allCompaniesLabel, selectedTechCount]);

  return (
    <section className={`xp-results ${visibleCount === 0 ? "is-empty" : ""}`} aria-live="polite">
      <div className="xp-results-head">
        <h2>Resultados</h2>
        <p>{summaryText}</p>
      </div>

      {visibleCount === 0 ? (
        <article className="xp-empty">
          <h3>Sin coincidencias</h3>
          <p>No encontré proyectos con esa combinación. Prueba cambiando tipo, empresa o tecnologías.</p>
        </article>
      ) : null}

      <ol className="xp-stream">
        {entries.map((entry, index) => (
          <ExperienceRow
            key={entry.id}
            entry={entry}
            index={index}
            isVisible={visibleEntryIds.has(entry.id)}
            selectedTechNormalizedSet={selectedTechNormalizedSet}
          />
        ))}
      </ol>
    </section>
  );
}

export default memo(ExperienceResults);
