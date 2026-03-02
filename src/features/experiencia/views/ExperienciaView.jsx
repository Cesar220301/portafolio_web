import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PageShell from "../../layout/components/PageShell";
import TopNav from "../../layout/components/TopNav";
import { ALL_COMPANIES, EXPERIENCE_TYPES } from "../constants/filters";
import ExperienceHero from "../components/ExperienceHero";
import ExperienceResults from "../components/ExperienceResults";
import { EXPERIENCE_ENTRIES, EXPERIENCE_OVERVIEW } from "../data/experience";
import "../styles/experiencia.css";
import { normalizeText } from "../utils/normalize";

export default function ExperienciaView() {
  const [activeType, setActiveType] = useState("Todas");
  const [selectedCompany, setSelectedCompany] = useState(ALL_COMPANIES);
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [selectorQuery, setSelectorQuery] = useState("");
  const [openMenu, setOpenMenu] = useState(null);

  const typeRef = useRef(null);
  const companyRef = useRef(null);
  const techRef = useRef(null);

  const entriesWithNormalizedStack = useMemo(() => {
    return EXPERIENCE_ENTRIES.map((entry) => ({
      ...entry,
      normalizedStackSet: new Set(entry.stack.map(normalizeText)),
    }));
  }, []);

  const allTechnologies = useMemo(() => {
    return [...new Set(entriesWithNormalizedStack.flatMap((entry) => entry.stack))].sort((a, b) => a.localeCompare(b));
  }, [entriesWithNormalizedStack]);

  const technologySearchIndex = useMemo(() => {
    return allTechnologies.map((tech) => ({ tech, normalized: normalizeText(tech) }));
  }, [allTechnologies]);

  const professionalCompanies = useMemo(() => {
    return [...new Set(
      entriesWithNormalizedStack.filter((entry) => entry.type === "Profesional").map((entry) => entry.company),
    )].sort((a, b) => a.localeCompare(b));
  }, [entriesWithNormalizedStack]);

  const companyOptions = useMemo(() => [ALL_COMPANIES, ...professionalCompanies], [professionalCompanies]);

  const selectedTechSet = useMemo(() => new Set(selectedTechs), [selectedTechs]);
  const selectedTechNormalizedSet = useMemo(() => new Set(selectedTechs.map(normalizeText)), [selectedTechs]);

  const entriesByScope = useMemo(() => {
    return entriesWithNormalizedStack.filter((entry) => {
      const typeMatches = activeType === "Todas" || entry.type === activeType;
      if (!typeMatches) return false;

      if (activeType !== "Profesional") return true;
      return selectedCompany === ALL_COMPANIES || entry.company === selectedCompany;
    });
  }, [activeType, entriesWithNormalizedStack, selectedCompany]);

  const techOptions = useMemo(() => {
    const normalizedQuery = normalizeText(selectorQuery.trim());

    return technologySearchIndex.map(({ tech, normalized }) => {
      const isSelected = selectedTechSet.has(tech);
      const passesSearch = !normalizedQuery || normalized.includes(normalizedQuery);

      let count = 0;
      for (const entry of entriesByScope) {
        let matchesSelected = true;
        for (const selectedTech of selectedTechNormalizedSet) {
          if (!entry.normalizedStackSet.has(selectedTech)) {
            matchesSelected = false;
            break;
          }
        }

        if (!matchesSelected) continue;

        if (isSelected || entry.normalizedStackSet.has(normalized)) {
          count += 1;
        }
      }

      return {
        tech,
        count,
        isSelected,
        passesSearch,
        isVisible: passesSearch && (isSelected || count > 0),
      };
    });
  }, [entriesByScope, selectedTechSet, selectedTechNormalizedSet, selectorQuery, technologySearchIndex]);

  const filteredEntries = useMemo(() => {
    return entriesByScope.filter((entry) => {
      if (!selectedTechNormalizedSet.size) return true;

      return [...selectedTechNormalizedSet].every((selectedTech) => entry.normalizedStackSet.has(selectedTech));
    });
  }, [entriesByScope, selectedTechNormalizedSet]);
  const visibleEntryIds = useMemo(() => new Set(filteredEntries.map((entry) => entry.id)), [filteredEntries]);

  const heroFilterContext = useMemo(() => {
    return [
      `Tipo: ${activeType}`,
      activeType === "Profesional" ? `Empresa: ${selectedCompany}` : null,
      selectedTechs.length ? `Stack: ${selectedTechs.length} tecnologías` : "Stack: sin filtro",
    ]
      .filter(Boolean)
      .join("  |  ");
  }, [activeType, selectedCompany, selectedTechs.length]);

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedInsideSelector = [typeRef, companyRef, techRef].some((ref) =>
        ref.current?.contains(event.target),
      );

      if (!clickedInsideSelector) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = useCallback((menuName) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === menuName ? null : menuName));
  }, []);

  const handleTypeChange = useCallback((type) => {
    setActiveType(type);
    if (type !== "Profesional") {
      setSelectedCompany(ALL_COMPANIES);
    }
    setOpenMenu(null);
  }, []);

  const handleCompanyChange = useCallback((company) => {
    setSelectedCompany(company);
    setOpenMenu(null);
  }, []);

  const toggleTechnology = useCallback((tech) => {
    setSelectedTechs((prevSelectedTechs) => {
      if (prevSelectedTechs.includes(tech)) {
        return prevSelectedTechs.filter((item) => item !== tech);
      }
      return [...prevSelectedTechs, tech];
    });
  }, []);

  const clearTechnologies = useCallback(() => {
    setSelectedTechs([]);
    setSelectorQuery("");
  }, []);

  const selectedTechLabel = useMemo(() => {
    if (!selectedTechs.length) {
      return "Selecciona una o varias tecnologías";
    }

    if (selectedTechs.length === 1) {
      return selectedTechs[0];
    }

    return `${selectedTechs.length} tecnologías seleccionadas`;
  }, [selectedTechs]);

  const typeField = useMemo(() => ({
    fieldRef: typeRef,
    label: "Tipo de experiencia",
    value: activeType,
    ariaLabel: "Seleccionar tipo de experiencia",
    isOpen: openMenu === "type",
    onToggle: () => toggleMenu("type"),
    options: EXPERIENCE_TYPES,
    onSelect: handleTypeChange,
  }), [activeType, handleTypeChange, openMenu, toggleMenu]);

  const companyField = useMemo(() => ({
    fieldRef: companyRef,
    label: "Empresa (experiencia profesional)",
    value: selectedCompany,
    ariaLabel: "Seleccionar empresa",
    isOpen: openMenu === "company",
    onToggle: () => toggleMenu("company"),
    options: companyOptions,
    onSelect: handleCompanyChange,
  }), [companyOptions, handleCompanyChange, openMenu, selectedCompany, toggleMenu]);

  const techField = useMemo(() => ({
    fieldRef: techRef,
    label: "Tecnologías (selección múltiple)",
    valueLabel: selectedTechLabel,
    isOpen: openMenu === "tech",
    onToggle: () => toggleMenu("tech"),
    selectorQuery,
    onQueryChange: setSelectorQuery,
    techOptions,
    selectedCount: selectedTechs.length,
    onToggleTechnology: toggleTechnology,
    onClearTechnologies: clearTechnologies,
  }), [
    clearTechnologies,
    openMenu,
    selectedTechLabel,
    selectedTechs.length,
    selectorQuery,
    techOptions,
    toggleMenu,
    toggleTechnology,
  ]);

  return (
    <PageShell>
      <TopNav primaryTo="/" primaryLabel="Sobre mí" />

      <main className="xp-page">
        <ExperienceHero
          overview={EXPERIENCE_OVERVIEW}
          heroFilterContext={heroFilterContext}
          typeField={typeField}
          companyField={companyField}
          showCompanyField={activeType === "Profesional"}
          techField={techField}
        />

        <ExperienceResults
          entries={entriesWithNormalizedStack}
          visibleEntryIds={visibleEntryIds}
          visibleCount={filteredEntries.length}
          activeType={activeType}
          selectedCompany={selectedCompany}
          allCompaniesLabel={ALL_COMPANIES}
          selectedTechCount={selectedTechs.length}
          selectedTechNormalizedSet={selectedTechNormalizedSet}
        />
      </main>
    </PageShell>
  );
}
