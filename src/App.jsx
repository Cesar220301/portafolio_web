import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import PortfolioAzul from "./features/portfolio-azul/PortfolioAzul";
import ExperiencePage from "./features/portfolio-azul/ExperiencePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioAzul />} />
        <Route path="/experiencia" element={<ExperiencePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
