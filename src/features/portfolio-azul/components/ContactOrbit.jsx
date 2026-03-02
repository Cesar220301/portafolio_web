import { useState } from "react";
import SIIcon from "./SIIcon";
import { SI } from "../data/icons";
import { CONTACT_ORBIT_ANGLES, CONTACTS } from "../data/content";

export default function ContactOrbit({ small = false }) {
  const [open, setOpen] = useState(false);

  const orbitR = small ? 46 : 54;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="cta-primary"
        style={{
          padding: small ? "9px 18px" : "13px 28px",
          fontSize: small ? 13 : 14,
          background: open
            ? "linear-gradient(135deg,#1e3a8a,#2563eb)"
            : "linear-gradient(135deg,#1e40af,#3b82f6)",
          outline: "none",
          boxShadow: open
            ? "0 0 0 4px rgba(59,130,246,0.22), 0 4px 14px rgba(30,64,175,0.3)"
            : "0 4px 14px rgba(30,64,175,0.3)",
        }}
      >
        Contacto {open ? "↑" : "↓"}
      </button>

      {CONTACTS.map((c, i) => {
        const rad = CONTACT_ORBIT_ANGLES[i] * (Math.PI / 180);
        const x = Math.cos(rad) * orbitR;
        const y = Math.sin(rad) * orbitR;

        return (
          <a
            key={c.id}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            title={c.label}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px - 22px)`,
              top: `calc(50% + ${y}px - 22px)`,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "white",
              boxShadow: `0 4px 16px ${SI[c.Icon]?.color}55, 0 2px 8px rgba(0,0,0,0.1)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${SI[c.Icon]?.color}66`,
              opacity: open ? 1 : 0,
              transform: open ? "scale(1)" : "scale(0.3)",
              transition: `opacity 0.28s ease ${i * 70}ms, transform 0.32s cubic-bezier(0.34,1.56,0.64,1) ${i * 70}ms`,
              pointerEvents: open ? "auto" : "none",
              zIndex: 50,
              textDecoration: "none",
            }}
          >
            <SIIcon id={c.Icon} size={20} />
          </a>
        );
      })}
    </div>
  );
}
