import { useState } from "react";
import "./MenuIcon.css";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar line1"></span>
        <span className="bar line2"></span>
        <span className="bar line3"></span>
      </div>

      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="logo">
            <div className="hexagon"></div>
            <div className="inner-hexagon"></div>
            <div className="text">Z</div>
        </div>
        <div className={`sidebar`}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="resume-section">
            <button className="resume-button">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
