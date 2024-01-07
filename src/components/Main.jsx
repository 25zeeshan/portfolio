import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./contact";
import { memo } from "react";

// eslint-disable-next-line react/display-name
const Main = memo(function(){
  return (
    <div className="main-content">
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
});

export default Main;
