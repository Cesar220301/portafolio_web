import { memo } from "react";

function SingleSelectField({
  fieldRef,
  label,
  value,
  ariaLabel,
  isOpen,
  onToggle,
  options,
  onSelect,
}) {
  return (
    <div className="xp-select-field" ref={fieldRef}>
      <p className="xp-field-label">{label}</p>
      <button
        type="button"
        className={`xp-select-trigger ${isOpen ? "is-open" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        <span>{value}</span>
        <span className="xp-trigger-icon">{isOpen ? "^" : "v"}</span>
      </button>

      {isOpen && (
        <div className="xp-select-menu" role="listbox">
          <div className="xp-option-list xp-single-option-list">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                className={`xp-option ${value === option ? "is-selected" : ""}`}
                onClick={() => onSelect(option)}
              >
                <span className="xp-option-check">{value === option ? "v" : ""}</span>
                <span className="xp-option-name">{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(SingleSelectField);
