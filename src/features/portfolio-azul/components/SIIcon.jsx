import { memo } from "react";
import { SI } from "../data/icons";

function SIIcon({ id, size = 22, colorOverride }) {
  const icon = SI[id];
  if (!icon) return null;

  const IconComponent = icon.Icon;
  const col = colorOverride || icon.color;

  return (
    <IconComponent
      size={size}
      color={col}
      style={{ display: "block", flexShrink: 0 }}
      aria-hidden="true"
      focusable="false"
    />
  );
}

export default memo(SIIcon);
