import { Route, Routes } from "react-router-dom";

// Public Layout
import RootLayout from "./components/RootLayout";

// Public Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Highlights from "./pages/Highlights";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

// Admin Components
import AdminLayout from "./admin/components/AdminLayout";

// Admin Pages
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import AdminProjects from "./admin/pages/Projects";
import AdminExperience from "./admin/pages/Experience";

function App() {
  return (
    <Routes>
      {/* PUBLIC PORTFOLIO */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ADMIN LOGIN */}
      <Route path="/admin/login" element={<Login />} />

      {/* ADMIN DASHBOARD */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="experience" element={<AdminExperience />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;