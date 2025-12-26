function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p className="tech">
                <strong>Tecnologías:</strong> {project.tech.join(", ")}
            </p>

            <div className="links">
                <a href={project.github} target="_blank" rel="noreferrer">
                    Github
                </a>

                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                        Demo
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;