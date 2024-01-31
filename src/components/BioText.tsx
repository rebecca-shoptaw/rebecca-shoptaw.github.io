import { Fade } from "react-awesome-reveal";

const BioText = () => {
  return (
    <section className="bio-text">
      <Fade>
        <p>
          Hello! My name is Rebecca and I'm an NYC-based frontend software
          engineer with a background in film.
        </p>
      </Fade>
      <Fade>
        <p>
          I bring from my filmmaking work the combination of a strong visual
          sense and minute technical precision, and I'm currently working
          freelance and on the Internet Archive's open-source{" "}
          <a
            className="inline-link"
            href="https://github.com/internetarchive/openlibrary"
            target="_blank"
          >
            Open Library
          </a>{" "}
          project.{" "}
          <a
            className="inline-link"
            href="https://github.com/internetarchive/openlibrary/pulls?q=is%3Apr+author%3Arebecca-shoptaw"
            target="_blank"
          >
            Latest contributions.
          </a>
        </p>
      </Fade>
      <Fade>
        <p>
          I started coding back in 2015, and there's an amusing video of{" "}
          <a
            className="inline-link"
            href="https://youtu.be/TWw28ZwjQvE?t=5390"
            target="_blank"
          >
            me at 19 talking about my iOS video-editing app.
          </a>
        </p>
      </Fade>
      <Fade>
        <p>
          <span className="bold">Primary tech stack:</span> React, Javascript,
          Typescript, HTML, CSS
        </p>
      </Fade>
      <Fade>
        <p>
          <span className="bold">With React:</span> Redux, Vite, Built-in and
          custom hooks
        </p>
      </Fade>
      <Fade>
        <p>
          <span className="bold">Design & styling:</span> SASS, Less, GSAP,
          Bootstrap, Figma
        </p>
      </Fade>
      <Fade>
        <p>
          <span className="bold">Testing & containerization:</span> Jest, Docker
        </p>
      </Fade>
      <Fade>
        <p>
          <span className="bold">Version control:</span> Git, GitHub
        </p>
      </Fade>
      <Fade>
        <p>
          <span className="bold">To learn more:</span>
        </p>
      </Fade>
    </section>
  );
};

export default BioText;
