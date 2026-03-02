import { Link } from "react-router-dom";

const BASE_NAV_STYLE = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  background: "rgba(248,250,255,0.88)",
  backdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(30,58,138,0.08)",
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 clamp(20px,6vw,72px)",
};

export default function TopNav({ primaryTo, primaryLabel, navStyle }) {
  return (
    <nav style={{ ...BASE_NAV_STYLE, ...navStyle }}>
      <span style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.04em", color: "#1e3a8a" }}>
        Cesar<span style={{ color: "#93c5fd", fontWeight: 500 }}>.dev</span>
      </span>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Link to={primaryTo} className="cta-secondary" style={{ padding: "9px 18px", fontSize: 13 }}>
          {primaryLabel}
        </Link>
        <a
          href="https://github.com/cesar220301"
          target="_blank"
          rel="noreferrer"
          className="cta-secondary"
          style={{ padding: "9px 18px", fontSize: 13 }}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
