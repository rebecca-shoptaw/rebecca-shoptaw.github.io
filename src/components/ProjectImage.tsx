import { images } from "../data/ProjectImages";

const ProjectImage = ({ id }: { id: string }) => {
  const image = images[id];
  return (
    <div className="project-visual">
      <img src={`./assets/${image.src}`} />
      <a href={image.link} target="_blank">
        {image.caption}
      </a>
    </div>
  );
};

export default ProjectImage;
