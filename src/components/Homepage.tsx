import { useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

import ProjectTile from "./ProjectTile";
import projects from "../data/ProjectData";
import links from "../data/SiteLinks";
import social_links from "../data/SocialData";

const Homepage = () => {
  const bodyRef = useRef(null);
  const navRef = useRef(null);
  const welcomeRef = useRef(null);
  const siteRef = useRef();

  useGSAP(() => {
    gsap.from("#welcome-section", {
      duration: 2.5,
      opacity: 0,
      delay: 1,
      scale: 1.3,
    });

    gsap.from(".nav-content", {
      opacity: 0,
      duration: 5,
    });

    gsap.from(".nav-content", {
      y: -100,
      duration: 2.5,
      delay: 1,
    });
  });

  const resetUrl = () => {
    setTimeout(() => {
      window.history.pushState({}, "", "/");
    });
  };

  return (
    <>
      <article id="site-body" ref={bodyRef}>
        <nav id="navbar" ref={navRef}>
          <div className="nav-content">
            <span>
              <a
                className="welcome-link"
                href="#welcome-section"
                onClick={resetUrl}
              >
                <h1>Rebecca Shoptaw</h1>
              </a>
            </span>
            <span>
              <div className="nav-links">
                <a className="nav-link" href="#about-ref" onClick={resetUrl}>
                  About
                </a>
                <a className="nav-link" href="#projects-ref" onClick={resetUrl}>
                  Work
                </a>
                <a id="contact-link" href="#contact-ref" onClick={resetUrl}>
                  Contact
                </a>
              </div>
            </span>
          </div>
        </nav>

        <section id="welcome-section" ref={welcomeRef}>
          <div className="title">
            <h1>Rebecca Shoptaw</h1>
            <h2>Frontend Developer</h2>
          </div>
        </section>

        <div id="about-ref" className="locator"></div>
        <section id="about">
          <div className="section-body">
            <h1 className="section-title">About</h1>
            <div className="bio tile">
              <span id="bio-block">
                <p className="bio-text">
                  <Fade>
                    <p>
                      Hello! My name is Rebecca and I'm a freelance frontend web
                      developer.
                    </p>
                  </Fade>

                  <Fade>
                    <p>
                      I bring from my background in filmmaking the combination
                      of a strong visual sense and minute technical precision.
                    </p>
                  </Fade>

                  <Fade>
                    <p>
                      My training in programming began in the CS50 course in
                      college back in 2015, for which I learned Javascript,
                      HTML/CSS, C and SQL. For the final project, I taught
                      myself Swift to build a video-editing app, and I was
                      selected to be{" "}
                      <a
                        href="https://youtu.be/TWw28ZwjQvE?t=5390"
                        target="_blank"
                        title="Interview Video"
                      >
                        interviewed about the app
                      </a>{" "}
                      at the year-end course fair.
                    </p>
                  </Fade>

                  <Fade>
                    <p>
                      {" "}
                      Now, I'm focusing on frontend development, and using React
                      with a mix of HTML, CSS, and Javascript/Typescript to make
                      beautiful and functional responsive sites and
                      applications.
                    </p>
                  </Fade>
                  <br></br>
                </p>
                <Fade className="btns-wrap">
                  <div className="visit-btns">
                    <a
                      className="button"
                      href={links.RESUME_PATH}
                      target="_blank"
                    >
                      Resume
                    </a>
                    <a
                      className="button live"
                      href="#contact-ref"
                      onClick={resetUrl}
                    >
                      Get in Touch
                    </a>
                  </div>
                </Fade>
              </span>
              <Fade>
                <img
                  id="bio-img"
                  src="https://images.squarespace-cdn.com/content/v1/58c9909ce58c627a188f8a64/ad9e7ee7-964e-4151-96a6-e99d81353fd2/20201007.JPG?format=2500w"
                  alt="Profile picture"
                  loading="lazy"
                />
              </Fade>
            </div>
          </div>
        </section>
        <div id="projects-ref" className="locator"></div>
        <section id="projects">
          <div className="section-body">
            <h1 className="section-title">Work Samples</h1>
            <div className="project-links">
              {projects.map((project) => (
                <Fade>
                  <ProjectTile project={project} />
                </Fade>
              ))}
            </div>
          </div>
        </section>
        <div id="contact-ref" className="locator"></div>
        <section id="contact">
          <div className="section-body">
            <h1 className="section-title">Contact</h1>
            <div id="contact-body" className="tile">
              <Fade>
                <div className="letter-wrap">
                  <img
                    id="letter"
                    src="./contact.jpg"
                    alt="Painting of a woman writing a letter"
                    loading="lazy"
                  />
                </div>
              </Fade>

              <div className="social-icons">
                {social_links.map((social) => (
                  <Fade>
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      title={social.title}
                    >
                      <i
                        id={social.id}
                        className={`social-icon bi bi-${social.icon_class}`}
                      />
                    </a>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Homepage;
