import { memo } from "react";

function MultiTechSelectField({
  fieldRef,
  label,
  valueLabel,
  isOpen,
  onToggle,
  selectorQuery,
  onQueryChange,
  visibleTechOptions,
  selectedTechSet,
  technologyUsage,
  onToggleTechnology,
  onClearTechnologies,
}) {
  return (
    <div className="xp-select-field xp-tech-field" ref={fieldRef}>
      <p className="xp-field-label">{label}</p>
      <button
        type="button"
        className={`xp-select-trigger ${isOpen ? "is-open" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="xp-tech-filter-menu"
      >
        <span>{valueLabel}</span>
        <span className="xp-trigger-icon">{isOpen ? "^" : "v"}</span>
      </button>

      {isOpen && (
        <div id="xp-tech-filter-menu" className="xp-select-menu" role="listbox" aria-multiselectable="true">
          <div className="xp-menu-toolbar">
            <p>Seleccion multiple</p>
            <button type="button" onClick={onClearTechnologies} disabled={selectedTechSet.size === 0}>
              Limpiar
            </button>
          </div>

          <div className="xp-menu-search">
            <input
              id="xp-tech-filter-input"
              type="text"
              value={selectorQuery}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Buscar tecnologia..."
            />
          </div>

          <div className="xp-option-list">
            {visibleTechOptions.length === 0 ? (
              <p className="xp-no-option">No hay tecnologias con ese texto.</p>
            ) : (
              visibleTechOptions.map((tech) => {
                const selected = selectedTechSet.has(tech);
                return (
                  <button
                    key={tech}
                    type="button"
                    className={`xp-option ${selected ? "is-selected" : ""}`}
                    onClick={() => onToggleTechnology(tech)}
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
  );
}

export default memo(MultiTechSelectField);
