import { memo } from "react";
import { MARQUEE_LOOP_ITEMS } from "../data/content";

function Marquee() {
  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderTop: "1px solid rgba(30,58,138,0.07)",
        background: "rgba(239,246,255,0.6)",
        padding: "11px 0",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: 36,
          animation: "marquee 28s linear infinite",
          fontSize: 12,
          color: "#94a3b8",
          letterSpacing: "0.06em",
          fontWeight: 500,
          fontFamily: "monospace",
        }}
      >
        {MARQUEE_LOOP_ITEMS.map((t, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#3b82f6", opacity: 0.4, fontSize: 7 }}>◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default memo(Marquee);
