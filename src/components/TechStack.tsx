import { TechData } from "../data/TechData";

const TechStack = () => {
  return (
    <section id="techstack" className="section-wrap">
      <div className="section-body floating">
        <h2 className="section-title">A few things I use:</h2>
        <section className="tech-lists">
          {TechData.map((section, index) => (
            <ul className="icon-list" key={index}>
              <p className="tech-list-header">{section.header}</p>
              {section.elements.map((elem) => (
                <a href={elem.url} target="_blank" title={elem.title}>
                  <li className="list-icon">
                    <svg
                      role="img"
                      key={elem.title}
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
              ))}
            </ul>
          ))}
        </section>
      </div>
    </section>
  );
};

export default TechStack;
