import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import ExperienciaView from "../features/experiencia/views/ExperienciaView";
import SobreMiView from "../features/sobre-mi/views/SobreMiView";

function AnimatedRouteSwitch() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="route-transition">
      <Routes location={location}>
        <Route path="/" element={<SobreMiView />} />
        <Route path="/experiencia" element={<ExperienciaView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <HashRouter>
      <AnimatedRouteSwitch />
    </HashRouter>
  );
}
