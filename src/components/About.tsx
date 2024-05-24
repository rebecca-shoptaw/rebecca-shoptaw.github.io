import { BioValues } from "../data/BioLists";
import useScrollPosition from "../hooks/useScrollPosition";
import { SCROLL_POSITION } from "../data/constants";

const About = () => {
  const pastHero = useScrollPosition(SCROLL_POSITION);
  const infoBoxHeight = document
    .getElementById("infobox")
    ?.getBoundingClientRect().height;

  return (
    <section
      id="about"
      className="section-wrap"
      style={pastHero && infoBoxHeight ? { marginTop: infoBoxHeight } : {}}
    >
      <div className="section-body floating">
        <h2 className="section-title">A few things I believe in:</h2>
        <ul className="icon-list">
          {BioValues.map((item) => (
            <li key={item.title} className="bio_list_item">
              {item.icon}{" "}
              <p>
                <span className="list-icon-title">{item.title} - </span>
                <span className="text-muted">{item.text}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
