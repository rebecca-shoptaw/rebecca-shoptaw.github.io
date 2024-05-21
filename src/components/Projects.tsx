import ProjectTile from "./ProjectTile";
import { projects } from "../data/ProjectData";

const Projects = () => {
  return (
    <section id="projects" className="section-wrap">
      <div className="section-body floating">
        <h2 className="section-title">A few things I've been working on:</h2>
        <section className="project-links">
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Projects;
