import './projects.css';

function Projects() {
    const projects = [
        {
            title: "ByteRoot",
            category: "Typescript",
            description: "Byteroot is an application inspired by the concept of the vegetable beetroot, where each individual's contributions contribute to the growth of the community. It stands out as a unique platform, promoting community engagement and collaborative activities in problem-solving and algorithm creation. The platform ensures the validity of posted questions through a stringent validation process, offering users a reliable space to code, problem-solve, and access solutions.",
            sourceCode: "https://github.com/xxKUNALxx/byteroot" // Add GitHub link here
        },
        {
            title: "Mgwing",
            category: "react",
            description: "Developed a fully functional eCommerce platform for MG Enterprises, integrating a seamless user experience with a robust backend. The platform enables secure transactions, efficient order management, and a dynamic product catalog, ensuring a smooth and engaging shopping experience.",
            sourceCode: "https://github.com/xxKUNALxx/Mgwing" // Add GitHub link here
        },
        {
            title: "Cinemania",
            category: "react",
            description: "Cinemania is a feature-rich movie streaming platform designed for users to explore, watch trailers, and stream full movies using third-party APIs. It provides an immersive and user-friendly experience, enabling movie lovers to search, discover, and enjoy content effortlessly.",
            sourceCode: "https://github.com/xxKUNALxx/cinemania" // Add GitHub link here
        },
    ];

    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-heading">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="source-code-button">
                                <button className="styled-button">🔗 View Source</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
