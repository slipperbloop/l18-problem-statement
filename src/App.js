import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import DiplomasPage from "./pages/DiplomasPage";
import DiplomaLayout from "./pages/DiplomaLayout";
import DiplomaDetailPage from "./pages/DiplomaDetailPage";
import ModuleDetailPage from "./pages/ModuleDetailPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/diplomas" replace />} />

        <Route path="/diplomas" element={<DiplomasPage />} />

        <Route path="/diplomas/:diplomaId" element={<DiplomaLayout />}>
          <Route index element={<DiplomaDetailPage />} />
          <Route path=":moduleId" element={<ModuleDetailPage />} />
        </Route>

        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
