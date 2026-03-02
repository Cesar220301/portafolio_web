import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PageShell from "../../layout/components/PageShell";
import TopNav from "../../layout/components/TopNav";
import { EXPERIENCE_ENTRIES, EXPERIENCE_OVERVIEW } from "../data/experience";
import "../styles/experiencia.css";

const EXPERIENCE_TYPES = ["Todas", "Profesional", "Personal"];
const ALL_COMPANIES = "Todas las empresas";

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function ExperienciaView() {
  const [activeType, setActiveType] = useState("Todas");
  const [selectedCompany, setSelectedCompany] = useState(ALL_COMPANIES);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [selectorQuery, setSelectorQuery] = useState("");

  const [typeOpen, setTypeOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);

  const typeRef = useRef(null);
  const companyRef = useRef(null);
  const techRef = useRef(null);

  const allTechnologies = useMemo(() => {
    return [...new Set(EXPERIENCE_ENTRIES.flatMap((entry) => entry.stack))].sort((a, b) => a.localeCompare(b));
  }, []);

  const professionalCompanies = useMemo(() => {
    return [...new Set(
      EXPERIENCE_ENTRIES.filter((entry) => entry.type === "Profesional").map((entry) => entry.company),
    )].sort((a, b) => a.localeCompare(b));
  }, []);

  const companyOptions = useMemo(() => [ALL_COMPANIES, ...professionalCompanies], [professionalCompanies]);

  const technologyUsage = useMemo(() => {
    const usage = {};
    EXPERIENCE_ENTRIES.forEach((entry) => {
      entry.stack.forEach((tech) => {
        usage[tech] = (usage[tech] || 0) + 1;
      });
    });
    return usage;
  }, []);

  const visibleTechOptions = useMemo(() => {
    const normalizedQuery = normalizeText(selectorQuery.trim());
    if (!normalizedQuery) return allTechnologies;
    return allTechnologies.filter((tech) => normalizeText(tech).includes(normalizedQuery));
  }, [allTechnologies, selectorQuery]);

  const selectedTechNormalizedSet = useMemo(() => {
    return new Set(selectedTechs.map((tech) => normalizeText(tech)));
  }, [selectedTechs]);

  const filteredEntries = useMemo(() => {
    return EXPERIENCE_ENTRIES.filter((entry) => {
      const typeMatches = activeType === "Todas" || entry.type === activeType;
      if (!typeMatches) return false;

      const companyMatches =
        activeType !== "Profesional" ||
        selectedCompany === ALL_COMPANIES ||
        entry.company === selectedCompany;
      if (!companyMatches) return false;

      if (!selectedTechNormalizedSet.size) return true;

      return [...selectedTechNormalizedSet].every((selectedTech) =>
        entry.stack.some((tech) => normalizeText(tech) === selectedTech),
      );
    });
  }, [activeType, selectedCompany, selectedTechNormalizedSet]);

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedInsideType = typeRef.current?.contains(event.target);
      const clickedInsideCompany = companyRef.current?.contains(event.target);
      const clickedInsideTech = techRef.current?.contains(event.target);

      if (!clickedInsideType && !clickedInsideCompany && !clickedInsideTech) {
        setTypeOpen(false);
        setCompanyOpen(false);
        setTechOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTechnology = useCallback((tech) => {
    setSelectedTechs((prev) => {
      if (prev.includes(tech)) return prev.filter((item) => item !== tech);
      return [...prev, tech];
    });
  }, []);

  const clearTechnologies = useCallback(() => {
    setSelectedTechs([]);
    setSelectorQuery("");
  }, []);

  const openTypeSelect = useCallback(() => {
    setTypeOpen((open) => !open);
    setCompanyOpen(false);
    setTechOpen(false);
  }, []);

  const openCompanySelect = useCallback(() => {
    setCompanyOpen((open) => !open);
    setTypeOpen(false);
    setTechOpen(false);
  }, []);

  const openTechSelect = useCallback(() => {
    setTechOpen((open) => !open);
    setTypeOpen(false);
    setCompanyOpen(false);
  }, []);

  const handleTypeChange = useCallback((type) => {
    setActiveType(type);
    if (type !== "Profesional") {
      setSelectedCompany(ALL_COMPANIES);
      setCompanyOpen(false);
    }
  }, []);

  const selectedTechLabel = selectedTechs.length
    ? selectedTechs.length === 1
      ? selectedTechs[0]
      : `${selectedTechs.length} tecnologias seleccionadas`
    : "Selecciona una o varias tecnologias";
  const heroFilterContext = [
    `Tipo: ${activeType}`,
    activeType === "Profesional" ? `Empresa: ${selectedCompany}` : null,
    selectedTechs.length ? `Stack: ${selectedTechs.length} tecnologias` : "Stack: sin filtro",
  ]
    .filter(Boolean)
    .join("  |  ");

  return (
    <PageShell>
      <TopNav primaryTo="/" primaryLabel="Sobre mi" />

      <main className="xp-page">
        <header className="xp-hero">
          <div className="xp-hero-layout">
            <div className="xp-hero-copy">
              <p className="xp-kicker">Buscador de experiencia</p>
              <h1>{EXPERIENCE_OVERVIEW.title}</h1>
              <p className="xp-summary">{EXPERIENCE_OVERVIEW.summary}</p>
              <p className="xp-hero-context">{heroFilterContext}</p>
            </div>

            <div className="xp-hero-filters" aria-label="Filtros de experiencia">
              <div className="xp-filter-top">
                <div className="xp-select-field" ref={typeRef}>
                  <p className="xp-field-label">Tipo de experiencia</p>
                  <button
                    type="button"
                    className={`xp-select-trigger ${typeOpen ? "is-open" : ""}`}
                    onClick={openTypeSelect}
                    aria-expanded={typeOpen}
                    aria-label="Seleccionar tipo de experiencia"
                  >
                    <span>{activeType}</span>
                    <span className="xp-trigger-icon">{typeOpen ? "^" : "v"}</span>
                  </button>

                  {typeOpen && (
                    <div className="xp-select-menu" role="listbox">
                      <div className="xp-option-list xp-single-option-list">
                        {EXPERIENCE_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            className={`xp-option ${activeType === type ? "is-selected" : ""}`}
                            onClick={() => {
                              handleTypeChange(type);
                              setTypeOpen(false);
                            }}
                          >
                            <span className="xp-option-check">{activeType === type ? "v" : ""}</span>
                            <span className="xp-option-name">{type}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {activeType === "Profesional" && (
                  <div className="xp-select-field" ref={companyRef}>
                    <p className="xp-field-label">Empresa (experiencia profesional)</p>
                    <button
                      type="button"
                      className={`xp-select-trigger ${companyOpen ? "is-open" : ""}`}
                      onClick={openCompanySelect}
                      aria-expanded={companyOpen}
                      aria-label="Seleccionar empresa"
                    >
                      <span>{selectedCompany}</span>
                      <span className="xp-trigger-icon">{companyOpen ? "^" : "v"}</span>
                    </button>

                    {companyOpen && (
                      <div className="xp-select-menu" role="listbox">
                        <div className="xp-option-list xp-single-option-list">
                          {companyOptions.map((company) => (
                            <button
                              key={company}
                              type="button"
                              className={`xp-option ${selectedCompany === company ? "is-selected" : ""}`}
                              onClick={() => {
                                setSelectedCompany(company);
                                setCompanyOpen(false);
                              }}
                            >
                              <span className="xp-option-check">{selectedCompany === company ? "v" : ""}</span>
                              <span className="xp-option-name">{company}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="xp-select-field xp-tech-field" ref={techRef}>
                  <p className="xp-field-label">Tecnologias (seleccion multiple)</p>
                  <button
                    type="button"
                    className={`xp-select-trigger ${techOpen ? "is-open" : ""}`}
                    onClick={openTechSelect}
                    aria-expanded={techOpen}
                    aria-controls="xp-tech-filter-menu"
                  >
                    <span>{selectedTechLabel}</span>
                    <span className="xp-trigger-icon">{techOpen ? "^" : "v"}</span>
                  </button>

                  {techOpen && (
                    <div id="xp-tech-filter-menu" className="xp-select-menu" role="listbox" aria-multiselectable="true">
                      <div className="xp-menu-toolbar">
                        <p>Seleccion multiple</p>
                        <button type="button" onClick={clearTechnologies} disabled={selectedTechs.length === 0}>
                          Limpiar
                        </button>
                      </div>

                      <div className="xp-menu-search">
                        <input
                          id="xp-tech-filter-input"
                          type="text"
                          value={selectorQuery}
                          onChange={(event) => setSelectorQuery(event.target.value)}
                          placeholder="Buscar tecnologia..."
                        />
                      </div>

                      <div className="xp-option-list">
                        {visibleTechOptions.length === 0 ? (
                          <p className="xp-no-option">No hay tecnologias con ese texto.</p>
                        ) : (
                          visibleTechOptions.map((tech) => {
                            const selected = selectedTechs.includes(tech);
                            return (
                              <button
                                key={tech}
                                type="button"
                                className={`xp-option ${selected ? "is-selected" : ""}`}
                                onClick={() => toggleTechnology(tech)}
                              >
                                <span className="xp-option-check">{selected ? "v" : ""}</span>
                                <span className="xp-option-name">{tech}</span>
                                <span className="xp-option-meta">{technologyUsage[tech]} proj.</span>
                              </button>
                            );
                          })
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className={`xp-results ${filteredEntries.length === 0 ? "is-empty" : ""}`} aria-live="polite">
          <div className="xp-results-head">
            <h2>Resultados</h2>
            <p>
              {filteredEntries.length} proyecto(s)
              {activeType === "Profesional" && selectedCompany !== ALL_COMPANIES ? ` en ${selectedCompany}` : ""}
              {selectedTechs.length ? ` con ${selectedTechs.length} tecnologia(s)` : ""}
            </p>
          </div>

          {filteredEntries.length === 0 ? (
            <article className="xp-empty">
              <h3>Sin coincidencias</h3>
              <p>No encontre proyectos con esa combinacion. Prueba cambiando tipo, empresa o tecnologias.</p>
            </article>
          ) : (
            <ol className="xp-stream">
              {filteredEntries.map((entry, index) => {
                const matchedTechs = entry.stack.filter((tech) => selectedTechNormalizedSet.has(normalizeText(tech)));

                return (
                  <li key={entry.id} className="xp-row">
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
                        <p>
                          <strong>Modalidad</strong>
                          <span>{entry.mode}</span>
                        </p>
                        <p>
                          <strong>Match</strong>
                          <span>{selectedTechs.length ? `${matchedTechs.length}/${selectedTechs.length}` : "N/A"}</span>
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
              })}
            </ol>
          )}
        </section>
      </main>
    </PageShell>
  );
}
