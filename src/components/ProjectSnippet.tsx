import { snippets } from "../data/Snippets";
import { showModal } from "../utils/utils";
import ProjectCodeBlock from "./ProjectCodeBlock";

const ProjectSnippet = ({ id }: { id: string }) => {
  const snippet = snippets[id];
  const modalId = `${id}-code-modal`;

  return (
    <div className="project-visual">
      <div className="code-block" onClick={() => showModal(modalId)}>
        <ProjectCodeBlock snippet={snippet} />
      </div>
      <dialog id={modalId} className={id}>
        <ProjectCodeBlock snippet={snippet} />
      </dialog>
      {snippet.link ? (
        <a href={snippet.link} target="_blank">
          {snippet.caption}
        </a>
      ) : (
        <span className="caption">{snippet.caption}</span>
      )}
    </div>
  );
};

export default ProjectSnippet;
