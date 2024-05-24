import { TechData } from "../data/TechData";
import TechStackItem from "./TechStackItem";

const TechStack = () => {
  return (
    <section id="techstack" className="section-wrap">
      <div className="section-body floating">
        <h2 className="section-title">A few things I use:</h2>
        <section className="tech-lists">
          {TechData.map((section, index) => (
            <div key={index}>
              <p className="tech-list-header">{section.header}</p>
              <ul className="icon-list">
                {section.elements.map((elem) => (
                  <TechStackItem key={elem.title} elem={elem} />
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default TechStack;
