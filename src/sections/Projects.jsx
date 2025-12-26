import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Proyectos</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;