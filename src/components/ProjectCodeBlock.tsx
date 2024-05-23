import { Snippet } from "../data/Snippets";
import { CodeBlock, irBlack } from "react-code-blocks";

const ProjectCodeBlock = ({ snippet }: { snippet: Snippet }) => {
  return (
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
  );
};

export default ProjectCodeBlock;
