import links from "../data/SiteLinks";
import { projectTileProps } from "../types/Types";

const ProjectTile: React.FC<projectTileProps> = ({ project }) => {
  return (
    <div>
      <div className="project-tile tile" id={project.id} key={project.id}>
        <div className="img-wrapper">
          <a
            href={
              !project.offline
                ? project.id != "portfolio"
                  ? `${links.site_link}/${project.id}/`
                  : `${links.site_link}`
                : "javascript:void(0)"
            }
            target={`${
              !project.offline && project.id != "portfolio" ? "_blank" : ""
            }`}
          >
            <img
              id={`${project.id}-img`}
              src={`./${project.id}.png`}
              alt={project.img_alt}
            />
          </a>
        </div>

        <div className="description">
          <p>
            <a
              href={
                project.id != "portfolio"
                  ? `${links.site_link}/${project.id}/`
                  : `${links.git_link}/${project.id}`
              }
              target="_blank"
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
            href={`${links.git_link}/${project.id}/`}
            target="_blank"
            className="button code"
          >
            Code
          </a>
          <a
            href={
              project.id != "portfolio"
                ? `${links.site_link}/${project.id}/`
                : links.site_link
            }
            target="_blank"
            className="button live"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
