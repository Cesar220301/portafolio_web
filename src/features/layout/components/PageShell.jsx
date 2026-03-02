import "../styles/layout.css";

export default function PageShell({ children }) {
  return (
    <div className="portfolio-azul">
      <div className="bg-mesh" />
      {children}
    </div>
  );
}
