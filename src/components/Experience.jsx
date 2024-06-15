import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div id="experience" className="experience new-section">
      <div className="heading">
        Experience <div className="headingLine"></div>{" "}
      </div>
      <div className="content">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff", border: `1px solid #85f5da` }}
            contentArrowStyle={{ borderRight: "7px solid  #85f5da" }}
            iconStyle={{ background: "#fff", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer, <span className="company-name">@Odessa</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bangalore, India <span className="date">July 2021 - April 2024</span>
            </h4>
            <ul className="work-details">
              <li>
                Created a test dashboard in React frontend and .NET backend to monitor test results, code coverages, and manage deployments
              </li>
              <li>
                Developed automation tools - Schema-comparison and sql script execution in WPF
              </li>
              <li>Developed, maintained, and shipped production code for client websites primarily in .NET</li>
            </ul>
            <div className="tech-stack">
                React, Javascript, C#, .Net, SQL Server, WPF, REST, Azure
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff", border: `1px solid #85f5da` }}
            contentArrowStyle={{ borderRight: "7px solid  #85f5da" }}
            iconStyle={{ background: "#fff", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Web developer Intern, <span className="company-name">@Ungrezi</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kolkata, India <span className="date">Oct 2020 - Dec 2020</span>
            </h4>
            <ul className="work-details">
              <li>
              Participated in the full software development life cycle, from design to deployment
              </li>
              <li>
              Developed a wide range of websites using the MERN stack
              </li>
              <li>Collaborated with internal teams to ensure successful integration of web applications</li>
            </ul>
            <div className="tech-stack">
                React, Javascript, MongoDB, ExpressJS, AWS
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
