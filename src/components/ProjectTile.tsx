import { ProjectInfo } from "../data/ProjectData";
import ProjectImage from "./ProjectImage";
import ProjectSnippet from "./ProjectSnippet";
import {
  IssueOpenedIcon,
  IssueClosedIcon,
  RepoIcon,
} from "@primer/octicons-react";

const ProjectTile = ({ project }: { project: ProjectInfo }) => {
  return (
    <section className="project-tile" id={project.id}>
      <section className="project-title">
        {project.type === "issue" &&
          (project.wip ? (
            <IssueOpenedIcon size={16} />
          ) : (
            <IssueClosedIcon size={16} />
          ))}
        {project.type === "repo" && <RepoIcon size={16} />}
        <a href={project.link} target="_blank">
          {project.title}
        </a>
      </section>
      <section className="project-body">
        <p className="project-header">The Problem</p>
        <p>{project.problem}</p>
        <p className="project-header">The Solution</p>
        {project.solution}
        <section className="project-visuals">
          <ProjectImage id={project.id} />
          <ProjectSnippet id={project.id} />
        </section>
      </section>
    </section>
  );
};

export default ProjectTile;
