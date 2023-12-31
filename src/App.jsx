import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Flashlight from "./components/FlashLight";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 3200);
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const scrollLeft = window.scrollX;
      const scrollTop = window.scrollY;

      const x = e.clientX + scrollLeft;
      const y = e.clientY + scrollTop;
      setLightPosition({ x: x, y: y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#0A192F", position: "relative" }}>
      <Flashlight lightPosition={lightPosition} />
      {initialLoading && <Loader />}
      {!initialLoading && (
        <div>
          <Navigation />
          <Home />
          <About />
          <Experience />
        </div>
      )}
    </div>
  );
}

export default App;
