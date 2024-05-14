import { BioValues } from "../data/BioLists";

const About = () => {
  return (
    <section id="about" className="section-wrap">
      <div className="section-body">
        <h1 className="section-title">About</h1>

        <section className="bio-text bio">
          <p>
            Hello! My name is Rebecca and I'm an NYC-based software engineer
            with a track record of realizing ambitious projects with rapid speed
            and minute precision.
          </p>
          <p>Engineering fellow @ Internet Archive</p>
          <p>I'm a big believer in:</p>
          <ul>
            {BioValues.map((item) => (
              <li key={item.icon} className="bio_list_item">
                {item.icon} <strong>{item.title}</strong> - {item.text}
              </li>
            ))}
          </ul>
          You can find my latest Internet Archive contributions{" "}
          <a
            className="inline-link"
            href="https://github.com/internetarchive/openlibrary/issues?q=author%3Arebecca-shoptaw"
            target="_blank"
          >
            here
          </a>
          , and my recent projects and experience are featured below.
        </section>
      </div>
    </section>
  );
};

export default About;
