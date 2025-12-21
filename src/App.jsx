import { Routes, Route } from "react-router-dom";
import Achievements from "./pages/Achievements";
import Home from "./components/Home";
import PortfolioLayout from "./layouts/PortfolioLayout";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/global.css";

function App() {
  return (
    <>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={
          <>
            <ThemeToggle />
            <Home />
          </>
        } />

        {/* PORTFOLIO PAGES */}
        <Route element={<PortfolioLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
