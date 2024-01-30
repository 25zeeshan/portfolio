import { useState } from "react";
import "./MenuIcon.css";

// eslint-disable-next-line react/prop-types
const MenuIcon = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleClickToSection(section) {
    setIsOpen(!isOpen);
    scrollToSection(section);
  }

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
              <a
                href="#"
                onClick={() => {
                  handleClickToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClickToSection("experience");
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClickToSection("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#" onClick={() => {
                  handleClickToSection("contact");
                }}>Contact</a>
            </li>
          </ul>

          <div className="resume-section">
            <a className="resume-button" href='https://drive.google.com/file/d/1Uo1uB50hul7R_5-MVneb3lQ96PWBjBjD/view?usp=drive_link' target='_' >Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
