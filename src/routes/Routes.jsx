import { Routes, Route } from "react-router-dom";
import Dashboard from "../features/dashboard/page/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
