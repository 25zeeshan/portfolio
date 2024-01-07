/* eslint-disable react/prop-types */
import "./Projects.css";

const projects = [
  {
    name: "Chess Analysis",
    image: "/projects/chessAnalysis.png",
    description: "Setup and analyze custom chess positions",
    url: "https://chess-analysis.vercel.app/analysis",
    tech : "React, Typescript, HTML, CSS, Python, django",
    github: "https://github.com/25zeeshan/Chess-Analysis"
  },
  {
    name: "Sort Visualizer",
    image: "/projects/algoVisualizer.png",
    description: "Visualization of sorting algorithms",
    url: "https://25zeeshan.github.io/Sort-Visualize/",
    github: "https://github.com/25zeeshan/Sort-Visualize",
    tech : "Bootstrap, React.js, HTML, CSS",
  },
  {
    name: "Wordle clone",
    image: "/projects/wordle.png",
    description: "Clone of popular word game wordle",
    url: "https://chess-analysis.vercel.app/analysis",
    github: "https://github.com/25zeeshan/Wordle_Clone",
    tech : "JavaScript, HTML, CSS",
  },
];

const ProjectDetail = (props) => {
  console.log(props);
  return (
    <div className="project-detail">
      <div className="image-container">
        <div className="overlay">
          <div >
            <a href={props.url} target="_">
              {props.name}
            </a>
            <a href={props.github} target="_"><img src="/github.svg" style={{width : "30px"}}/></a>
            <a href={props.url} target="_">< img src="/link.png" style={{width : "25px"}}/></a>
            
          </div>
          <p>{props.description}</p>
          <div>
            {props.tech}
            
          </div>
        </div>
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
};

// eslint-disable-next-line react/display-name
const Projects = function () {
  return (
    <div id="projects" className="projects new-section">
      <div className="heading">
        Some things I&apos;ve built<div className="headingLine"></div>
      </div>

      {projects.map((project, index) => {
        return <ProjectDetail key={index} {...project} />;
      })}
    </div>
  );
};

export default Projects;
