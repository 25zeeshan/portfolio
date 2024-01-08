import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import github from "../assets/socials/github.svg";
import linkedIn from "../assets/socials/linkedin.svg";
import twitter from "../assets/socials/twitter.svg";
import githubHover from "../assets/socials/githubHover.svg";
import linkedInHover from "../assets/socials/linkedinHover.svg";
import twitterHover from "../assets/socials/twitterHover.svg";

const Contact = () => {
  const form = useRef();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ffatbrc",
        "template_8m9q46p",
        form.current,
        "fre1yIJfGCzsPpskf"
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const getIconSource = (iconName) => {
    switch (iconName) {
      case "github":
        return hoveredIcon === "github" ? githubHover : github;
      case "twitter":
        return hoveredIcon === "twitter" ? twitterHover : twitter;
      case "linkedIn":
        return hoveredIcon === "linkedIn" ? linkedInHover : linkedIn;
      default:
        return null;
    }
  };

  return (
    <div id="contact" className="contact new-section">
      <div className="heading">
        Get In Touch<div className="headingLine"></div>
      </div>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" required/>
          <label>Email</label>
          <input type="email" name="email" required/>
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" required/>
        </form>
        <div className="socials">
          <a
            href="https://github.com/25zeeshan"
            target="_"
            onMouseEnter={() => handleMouseEnter("github")}
            onMouseLeave={handleMouseLeave}
          >
            <img src={getIconSource("github")} alt="gh image" />
          </a>
          <a
            href="https://twitter.com/zeeshan2dev"
            target="_"
            onMouseEnter={() => handleMouseEnter("twitter")}
            onMouseLeave={handleMouseLeave}
          >
            <img src={getIconSource("twitter")} alt="x image" />
          </a>
          <a
            href="https://www.linkedin.com/in/zeeshan-raza-8a489b192/"
            target="_"
            onMouseEnter={() => handleMouseEnter("linkedIn")}
            onMouseLeave={handleMouseLeave}
          >
            <img src={getIconSource("linkedIn")} alt="lnkd image" />
          </a>
        </div>
      </div>

      <a href="https://github.com/25zeeshan/portfolio" target="_" className="footer">Designed and built by Zeeshan @2024</a>
    </div>
  );
};

export default Contact;
