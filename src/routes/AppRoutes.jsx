import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import ExperienciaView from "../features/experiencia/views/ExperienciaView";
import SobreMiView from "../features/sobre-mi/views/SobreMiView";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SobreMiView />} />
        <Route path="/experiencia" element={<ExperienciaView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
