import { Fade } from "react-awesome-reveal";
import { BioSnippetProps } from "../types/Types";

const BioSnippet = (props: BioSnippetProps) => {
  const { text } = props;
  return (
    <Fade>
      <p>{text}</p>
    </Fade>
  );
};

export default BioSnippet;
