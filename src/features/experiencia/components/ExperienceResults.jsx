import { memo, useMemo } from "react";
import ExperienceRow from "./ExperienceRow";

function buildPageItems(totalPages, currentPage) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
  const normalized = [...pages].filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b);
  const pageItems = [];

  normalized.forEach((page, index) => {
    if (index > 0 && page - normalized[index - 1] > 1) {
      pageItems.push("...");
    }
    pageItems.push(page);
  });

  return pageItems;
}

function ExperienceResults({
  entries,
  totalResults,
  activeType,
  selectedCompany,
  allCompaniesLabel,
  selectedTechCount,
  selectedTechNormalizedSet,
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
}) {
  const summaryText = useMemo(() => {
    const parts = [`${totalResults} proyecto(s)`];

    if (activeType === "Profesional" && selectedCompany !== allCompaniesLabel) {
      parts.push(`en ${selectedCompany}`);
    }

    if (selectedTechCount) {
      parts.push(`con ${selectedTechCount} tecnología(s)`);
    }

    return parts.join(" ");
  }, [totalResults, activeType, selectedCompany, allCompaniesLabel, selectedTechCount]);

  const pageItems = useMemo(() => buildPageItems(totalPages, currentPage), [totalPages, currentPage]);

  return (
    <section className={`xp-results ${totalResults === 0 ? "is-empty" : ""}`} aria-live="polite">
      <div className="xp-results-head">
        <h2>Resultados</h2>
        <p>{summaryText}</p>
      </div>

      {totalResults === 0 ? (
        <article className="xp-empty">
          <h3>Sin coincidencias</h3>
          <p>No encontré proyectos con esa combinación. Prueba cambiando tipo, empresa o tecnologías.</p>
        </article>
      ) : (
        <>
          <ol key={`page-${currentPage}`} className="xp-stream">
            {entries.map((entry, index) => (
              <ExperienceRow
                key={entry.id}
                entry={entry}
                index={(currentPage - 1) * itemsPerPage + index}
                selectedTechNormalizedSet={selectedTechNormalizedSet}
              />
            ))}
          </ol>

          {totalPages > 1 ? (
            <nav className="xp-pagination" aria-label="Paginación de resultados">
              <button
                type="button"
                className="xp-page-btn"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </button>

              <div className="xp-page-numbers">
                {pageItems.map((item, index) => (
                  typeof item === "number" ? (
                    <button
                      key={`p-${item}`}
                      type="button"
                      className={`xp-page-btn xp-page-num ${item === currentPage ? "is-active" : ""}`}
                      onClick={() => onPageChange(item)}
                      aria-current={item === currentPage ? "page" : undefined}
                    >
                      {item}
                    </button>
                  ) : (
                    <span key={`dots-${index}`} className="xp-page-dots" aria-hidden="true">
                      ...
                    </span>
                  )
                ))}
              </div>

              <button
                type="button"
                className="xp-page-btn"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Siguiente
              </button>
            </nav>
          ) : null}
        </>
      )}
    </section>
  );
}

export default memo(ExperienceResults);
