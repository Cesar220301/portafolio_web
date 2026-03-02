import { memo } from "react";
import MultiTechSelectField from "./MultiTechSelectField";
import SingleSelectField from "./SingleSelectField";

function ExperienceHero({
  overview,
  heroFilterContext,
  typeField,
  companyField,
  showCompanyField,
  techField,
}) {
  return (
    <header className="xp-hero">
      <div className="xp-hero-layout">
        <div className="xp-hero-copy">
          <p className="xp-kicker">Buscador de experiencia</p>
          <h1>{overview.title}</h1>
          <p className="xp-summary">{overview.summary}</p>
          <p className="xp-hero-context">{heroFilterContext}</p>
        </div>

        <div className="xp-hero-filters" aria-label="Filtros de experiencia">
          <div className="xp-filter-top">
            <SingleSelectField {...typeField} />
            {showCompanyField ? <SingleSelectField {...companyField} /> : null}
            <MultiTechSelectField {...techField} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(ExperienceHero);
