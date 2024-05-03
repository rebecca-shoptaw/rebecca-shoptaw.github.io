import { TechData } from "../data/TechData";
import { Fade } from "react-awesome-reveal";

const TechStack = () => {
  return (
    <section id="techstack" className="section-wrap">
      <div className="section-body">
        <h1 className="section-title">Tech Stack</h1>
        <div className="tech-section-wrap tile">
          {TechData.map((section, index) => (
            <section className="tech-section" key={index}>
              <Fade>
                <p className="bold">{section.header}</p>
              </Fade>
              <Fade>
                <section className="tech-logos">
                  {section.elements.map((elem) => (
                    <a href={elem.url} target="_blank" title={elem.title}>
                      <svg
                        role="img"
                        key={elem.title}
                        className="logo"
                        fill={elem.color}
                        width="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>{elem.title}</title>
                        <path d={elem.path} />
                      </svg>
                    </a>
                  ))}
                </section>
              </Fade>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
