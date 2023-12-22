import ProjectTile from "./ProjectTile";
import projects from "../data/ProjectData";

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-body">
        <h1 className="section-title">Work Samples</h1>
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
