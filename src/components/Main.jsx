import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";



const Main = () => {
  return (
    <div className="main-content">
      <Navigation />
      <Home />
      <About />
      <Experience />
    </div>
  );
};

export default Main;
