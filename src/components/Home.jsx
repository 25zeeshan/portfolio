import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="Home">
        <div className="line1">Hi, my name is</div>
        <div className="name">Md Zeeshan Raza</div>
        <div className="line3">I build things for the web</div>
        <div className="details">
          I am a full stack developer specializing in building web applications.
          I bring over 2 years of diverse experience. I thrive on turning ideas
          into impactful realities.
        </div>
        <div style={{marginTop: "50px"}}>
          <a href="#projects" className="work-button">
            {" "}
            Check out my work !{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
