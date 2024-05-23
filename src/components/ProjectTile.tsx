import { ProjectInfo } from "../data/ProjectData";
import ProjectConsiderations from "./ProjectConsiderations";
import ProjectImage from "./ProjectImage";
import ProjectSnippet from "./ProjectSnippet";
import ProjectText from "./ProjectText";

import {
  IssueOpenedIcon,
  IssueClosedIcon,
  RepoIcon,
} from "@primer/octicons-react";

const ProjectTile = ({ project }: { project: ProjectInfo }) => {
  return (
    <section id={project.id}>
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
        <ProjectText header="The Problem" text={project.problem} />
        <ProjectText header="The Solution" text={project.solution} />
        <section className="project-visuals">
          <ProjectImage id={project.id} />
          <ProjectSnippet id={project.id} />
        </section>
        {project.considerations && (
          <>
            <p className="project-header">Considerations</p>
            <ProjectConsiderations considerations={project.considerations} />
          </>
        )}
        <ProjectText header="Role(s)" text={project.roles} />
      </section>
    </section>
  );
};

export default ProjectTile;
