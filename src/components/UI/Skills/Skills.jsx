import './skills.css';

function Skills() {
  const skills = [
    { src: 'src/assets/images/skills/react.svg', title: 'React' },
    { src: 'src/assets/images/skills/javascript.svg', title: 'JavaScript' },
    { src: 'src/assets/images/skills/jquery.svg', title: 'jQuery' },
    { src: 'src/assets/images/skills/html.svg', title: 'HTML' },
    { src: 'src/assets/images/skills/css.svg', title: 'CSS' },
    { src: 'src/assets/images/skills/tailwind-css.svg', title: 'Tailwind CSS' },
    { src: 'src/assets/images/skills/php.svg', title: 'PHP' },
    { src: 'src/assets/images/skills/mysql.svg', title: 'MySQL' },
    { src: 'src/assets/images/skills/mongodb.svg', title: 'MongoDB' },
    { src: 'src/assets/images/skills/nodejs.svg', title: 'NodeJs' },
    
  ];

  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.src} className="skill-icon" alt={skill.title} />
            <span className="skill-title">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
