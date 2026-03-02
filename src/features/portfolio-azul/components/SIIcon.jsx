import { SI } from "../data/icons";

export default function SIIcon({ id, size = 22, colorOverride }) {
  const icon = SI[id];
  if (!icon) return null;

  const col = colorOverride || icon.color;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={col}
      style={{ display: "block", flexShrink: 0 }}
    >
      <path d={icon.path} />
    </svg>
  );
}
