import { Consideration } from "../data/ProjectData";

const ProjectConsiderations = ({
  considerations,
}: {
  considerations: Consideration[];
}) => {
  return (
    <section className="considerations">
      {considerations.map((item, index) => (
        <div key={index} className="consideration-item list-icon">
          •
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
