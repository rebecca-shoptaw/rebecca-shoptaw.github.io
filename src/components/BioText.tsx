import { Fade } from "react-awesome-reveal";
const BioText = () => {
  return (
    <section className="bio-text">
      <Fade>
        <p>
          Hello! My name is Rebecca and I'm an NYC-based software engineer and
          filmmaker with a track record of realizing ambitious projects with
          both rapid speed 🚀 and minute precision 🔎
        </p>
      </Fade>
      <Fade>
        <p>
          I'm currently working as a freelance frontend engineer and on the
          Internet Archive's open-source{" "}
          <a
            className="inline-link"
            href="https://github.com/internetarchive/openlibrary"
            target="_blank"
          >
            Open Library
          </a>{" "}
          project.{" "}
        </p>
      </Fade>
    </section>
  );
};

export default BioText;
