import { images } from "../data/ProjectImages";
import { showImageModal } from "../utils/utils";

const ProjectImage = ({ id }: { id: string }) => {
  const image = images[id];
  const src = `./assets/${image.src}`;
  const modalId = `${id}-modal`;

  return (
    <div className="project-visual">
      <img onClick={() => showImageModal(modalId)} src={src} />
      <dialog id={modalId} className={id}>
        <img className="image-modal" src={src} />
      </dialog>
      <a href={image.link} target="_blank">
        {image.caption}
      </a>
    </div>
  );
};

export default ProjectImage;
