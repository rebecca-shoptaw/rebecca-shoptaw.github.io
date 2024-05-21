import { TechElement } from "../types/Types";

const TechStackItem = ({ elem }: { elem: TechElement }) => {
  return (
    <a href={elem.url} target="_blank" title={elem.title}>
      <li className="list-icon">
        <svg
          role="img"
          className="logo"
          width="16px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{elem.title}</title>
          <path d={elem.path} />
        </svg>
        <span className="tech-name">{elem.title}</span>
      </li>
    </a>
  );
};

export default TechStackItem;
