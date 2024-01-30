import { useEffect, useState } from "react";
import "./Navigation.css";
import MenuIcon from "./MenuIcon";
import { scrollToSection } from "../utils";

const Navigation = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.screenY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  

  return (
    <div className={`navigation ${visible ? "visible" : "hidden"}`}>
      <div className="logo">
        <div className="hexagon"></div>
        <div className="inner-hexagon"></div>
        <div className="text">Z</div>
      </div>

      <div className="nav-links">
        <a href="#" onClick={() => scrollToSection('about')}>About</a>
        <a href="#" onClick={() => scrollToSection('experience')}>Experience</a>
        <a href="#" onClick={() => scrollToSection('projects')}>Projects</a>
        <a href="#" onClick={() => scrollToSection('contact')}>Contact</a>
        <div>
        <a className="resume-button" href='https://drive.google.com/file/d/1Uo1uB50hul7R_5-MVneb3lQ96PWBjBjD/view?usp=drive_link' target='_' >Resume</a>
        </div>
      </div>

      <div className="mobile-menu">
        <MenuIcon scrollToSection={scrollToSection} />
      </div>  
    </div>
  );
};

export default Navigation;
