import { Consideration } from "../data/ProjectData";
import { DotFillIcon, CheckIcon } from "@primer/octicons-react";

const ProjectConsiderations = ({
  considerations,
}: {
  considerations: Consideration[];
}) => {
  return (
    <section className="considerations">
      {considerations.map((item, index) => (
        <div key={index} className="consideration-item list-icon">
          {item.wip ? <DotFillIcon size={16} /> : <CheckIcon size={16} />}
          {item.link ? (
            <a href={item.link} target="_blank">
              {item.text}
            </a>
          ) : (
            <p>{item.text}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProjectConsiderations;
