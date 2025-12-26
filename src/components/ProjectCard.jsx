function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
            <a href={project.github} target="_blank">GitHub</a>
            {project.demo && <a href={project.demo} target="_blank">Demo</a>}
        </div>
    );
}

export default ProjectCard;