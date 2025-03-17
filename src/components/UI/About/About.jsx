import './about.css';

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-heading">About Me!</h2>
      <div className="about-content">

        <p>
          I have completed my schooling fro, <span className="highlighted-text">St. Conrad's , Agra</span> and am currently pursuing a <span className="highlighted-text">bachelor’s degree in Computer Science</span>.
          I am a <span className="highlighted-text">Full-Stack Developer, UI/UX Designer, and Data Scientist</span>, constantly exploring new technologies to enhance my skills and create impactful digital solutions.
        </p>

        <p>
          If we step away from the code, you’ll probably find me with my nose in a <span className="highlighted-text">good book</span>, immersed in a <span className="highlighted-text">game</span>,
          or <span className="highlighted-text">binge-watching movies & TV series.</span><span className="highlighted-text"></span>
          <span className="highlighted-text"></span><span className="highlighted-text"></span> <span className="highlighted-text"></span>
        </p>

        
      </div>
    </div>
  );
}

export default About;
