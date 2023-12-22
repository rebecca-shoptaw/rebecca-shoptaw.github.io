import { Fade } from "react-awesome-reveal";
import { GIT_LINK } from "../data/SiteLinks";
import { ProjectTileProps } from "../types/Types";

const ProjectTile = (props: ProjectTileProps) => {
  const { project } = props;

  return (
    <Fade>
      <div
        className="project-tile tile"
        id={project.id}
        key={project.id}
        itemScope
        itemType="https://schema.org/WebSite"
      >
        <div className="img-wrapper">
          <a href={project.id != "portfolio" ? `/${project.id}/` : `/`}>
            <img
              id={`${project.id}-img`}
              src={`./${project.id}.png`}
              alt={project.img_alt}
              loading="lazy"
            />
          </a>
        </div>

        <div className="description">
          <p>
            <a
              href={
                project.id != "portfolio"
                  ? `/${project.id}/`
                  : `${GIT_LINK}/${project.id}`
              }
              className="project-link"
            >
              {project.title}
            </a>

            {project.wip ? (
              <div>
                <i className="wip">Work in Progress</i>
              </div>
            ) : (
              <br></br>
            )}

            {project.description}

            <i className="project-italics">{project.description_italics}</i>
          </p>
        </div>

        <div className="visit-btns btns-wrap">
          <a
            href={`${GIT_LINK}/${project.id}/`}
            target="_blank"
            className="button-default"
          >
            Code
          </a>
          <a
            href={project.id != "portfolio" ? `/${project.id}/` : `/`}
            className="button-live"
          >
            Live
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectTile;
