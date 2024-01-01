import "./About.css";
import reactImg from "../assets/reactjs.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/javascript.png";
import nodeImg from "../assets/nodejs.png";
import tsImg from "../assets/typescript.png";
import gitImg from "../assets/git.png";
import reduxImg from "../assets/redux.png";
import mongoImg from "../assets/mongodb.png";
import sqlimg from "../assets/sql-server.png";
import tailwindImg from "../assets/tailwind.png";
import csharpImg from "../assets/cSharp.png";
import dotnetImg from "../assets/dotnet.png";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const homeElements = document.querySelectorAll(".about > div");

    homeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 300);
    });
  }, []);

  return (
    <div id="about" className="about new-section">
      <div className="heading">
        About Me<div className="headingLine"></div>{" "}
      </div>
      <div className="content">
        Hi there! I&apos;m Zeeshan, a web enthusiast who discovered the magic of
        creating online stuff back in 2020. I started with building websites
        using{" "}
        <span style={{ color: "#85f5da" }}>HTML, CSS, React, and Node.js</span>{" "}
        during an internship, and I&apos;ve been hooked ever since.
      </div>
      <div className="content">
        Fast-forward to today, I&apos;ve had the chance to work in different
        places—from <span style={{ color: "#85f5da" }}>small startups</span> to{" "}
        <span style={{ color: "#85f5da" }}>big companies</span> - and even
        pitched in with some{" "}
        <span style={{ color: "#85f5da" }}>open-source projects</span> along the
        way. But what really gets me excited? Full-stack development. I&apos;m
        all about crafting entire web applications, from the start to the finish
        line.
      </div>
      <div className="content">
        Join me in this adventure of turning lines of code into awesome web
        experiences!
      </div>

      <div className="skills">
        <img src={htmlImg} alt="React logo" />
        <img src={cssImg} alt="React logo" />
        <img src={jsImg} alt="React logo" />
        <img src={nodeImg} alt="React logo" />
        <img src={reactImg} alt="React logo" />
        <img src={reduxImg} alt="React logo" />
        <img src={tsImg} alt="React logo" />
        <img src={mongoImg} alt="React logo" />
        <img src={gitImg} alt="React logo" />
        <img src={sqlimg} alt="sql image" />
        <img src={tailwindImg} alt="tailwind" />
        <img src={csharpImg} alt="c#" />
        <img src={dotnetImg} alt=".Net" />
      </div>
    </div>
  );
};

export default About;
