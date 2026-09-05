import { useEffect } from "react";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ThemeProvider } from "./context/ThemeContext";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
