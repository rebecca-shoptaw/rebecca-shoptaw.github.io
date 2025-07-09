import { images } from "../data/ProjectImages";
import { showModal } from "../utils/utils";

const ProjectImage = ({ id }: { id: string }) => {
  const image = images[id];
  const src = `./assets/${image.src}`;
  const modalId = `${id}-modal`;

  return (
    <div className="project-visual">
      <img onClick={() => showModal(modalId)} src={src} />
      <dialog id={modalId} className={id}>
        <img className="image-modal" src={src} />
      </dialog>
      {image.link ? (
        <a href={image.link} target="_blank">
          {image.caption}
        </a>
      ) : (
        <span className="caption">{image.caption}</span>
      )}
    </div>
  );
};

export default ProjectImage;
