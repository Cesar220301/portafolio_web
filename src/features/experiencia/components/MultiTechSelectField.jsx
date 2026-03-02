import { memo } from "react";

function MultiTechSelectField({
  fieldRef,
  label,
  valueLabel,
  isOpen,
  onToggle,
  selectorQuery,
  onQueryChange,
  techOptions,
  selectedCount,
  onToggleTechnology,
  onClearTechnologies,
}) {
  const hasSearchMatches = techOptions.some((option) => option.passesSearch);
  const hasVisibleOptions = techOptions.some((option) => option.isVisible);

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
            <p>Selección múltiple</p>
            <button type="button" onClick={onClearTechnologies} disabled={selectedCount === 0}>
              Limpiar
            </button>
          </div>

          <div className="xp-menu-search">
            <input
              id="xp-tech-filter-input"
              type="text"
              value={selectorQuery}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Buscar tecnología..."
            />
          </div>

          <div className="xp-option-list">
            {!hasSearchMatches ? (
              <p className="xp-no-option">No hay tecnologías con ese texto.</p>
            ) : !hasVisibleOptions ? (
              <p className="xp-no-option">No hay tecnologías compatibles con tu selección actual.</p>
            ) : (
              techOptions.map((option) => {
                const { tech, count, isSelected, isVisible, passesSearch } = option;
                if (!passesSearch && !isSelected) return null;

                return (
                  <button
                    key={tech}
                    type="button"
                    className={`xp-option ${isSelected ? "is-selected" : ""} ${isVisible ? "" : "is-hidden"}`}
                    onClick={() => onToggleTechnology(tech)}
                    disabled={!isVisible}
                    aria-hidden={!isVisible}
                  >
                    <span className="xp-option-check">{isSelected ? "v" : ""}</span>
                    <span className="xp-option-name">{tech}</span>
                    <span className="xp-option-meta">{count} proj.</span>
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
