import { snippets } from "../data/Snippets";
import { CodeBlock, irBlack } from "react-code-blocks";

const ProjectSnippet = ({ id }: { id: string }) => {
  const snippet = snippets[id];
  return (
    <div className="project-visual">
      <CodeBlock
        text={snippet.text}
        language={snippet.language}
        theme={irBlack}
        customStyle={{
          aspectRatio: "16 / 9",
          border: "1px solid #30363d",
        }}
        showLineNumbers={false}
        wrapLongLines={true}
      />
      <a href={snippet.link} target="_blank">
        {snippet.caption}
      </a>
    </div>
  );
};

export default ProjectSnippet;
