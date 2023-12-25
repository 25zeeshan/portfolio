import { useEffect, useState } from "react";
import "./Navigation.css";
import MenuIcon from "./MenuIcon";

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
        <a href="#about">About</a>
        <a href="#about">Experience</a>
        <a href="#about">Projects</a>
        <a href="#about">Contact</a>
        <div>
            <button className="resume-button">Resume</button>
        </div>
      </div>

      <div className="mobile-menu">
        <MenuIcon />
      </div>  
    </div>
  );
};

export default Navigation;
