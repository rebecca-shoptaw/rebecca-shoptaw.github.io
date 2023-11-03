import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Fade } from "react-awesome-reveal";

const site_link = "https://rebeccashoptaw.dev";
const git_link = "https://github.com/rebecca-shoptaw";

interface projects_arr {
  id: string;
  title: string;
  link?: string;
  img_id?: string;
  img_src?: string;
  img_alt: string;
  description: string;
  description_italics?: string;
  wip?: boolean;
}

const projects: projects_arr[] = [
  {
    id: "calmtube",
    title: "CalmTube",
    img_alt: "Simple black search interface.",
    description:
      "A minimalist YouTube re-design with a light/dark mode and no distractions. Built with Typescript, React, and the YouTube Data API.",
  },
  {
    id: `open-editions`,
    title: `Open Editions`,
    img_alt: `Audiobook playlist with romantic painting in the background.`,
    description: `A minimalist and aesthetically pleasing audiobook player, which combines public domain audiobook recordings of classic novels with customized cover images . Built with Typescript and React.`,
    wip: true,
  },
  {
    id: `cat-band`,
    title: `Cat Band`,
    img_alt: `Black and white interface with drawings of cats playing instruments.`,
    description: `An all-cat jazz band. Built with Typescript and React.`,
  },
  {
    id: `pomodoro`,
    title: `Pomodoro`,
    img_alt: `Minimal timer text and controls.`,
    description: `A fully functional and customizable pomodoro study timer, with light and dark modes. Built with Typescript and React.`,
    wip: true,
  },
  {
    id: `focusify`,
    title: `Focusify`,
    img_alt: `Simple off-white home screen with the text "Begin"`,
    description: `A minimalist Spotify re-design with a light/dark mode and built-in functionality for audio visualizers and other view customizations. Further integrations to come. Built with Typescript, React, and the Spotify API.`,
    wip: true,
  },
  {
    id: `triolingo`,
    title: `Triolingo`,
    img_alt: `Duolingo-esque interface with a gray cat.`,
    description: `A Duolingo look-alike to help students practice SSAT Vocabulary. Features functionality for repeating and generating new word-sets and keeping score for each round. Built with Typescript and React.`,

    wip: true,
  },
  {
    id: `ask-oscar-wilde`,
    title: `Ask Oscar Wilde`,
    img_alt: `Submission and quote boxes on a William Morris print.`,
    description: `A dynamic site in which Oscar Wilde aphorisms appear in
        response to user predicaments.`,
  },
  {
    id: `deco-calculator`,
    title: `Deco Calculator`,
    img_alt: `Green and gold calculator with an art deco background`,
    description: `A stylish and fully functional calculator designed for doing basic calculations in an art deco manner. Built with Typescript and React.`,
  },
  {
    id: `tabula-rasa`,
    title: `Tabula Rasa`,
    img_alt: `Simple white text entry and preview windows.`,
    description: `A minimal and elegant responsive markdown previewer.`,
  },
  /*{
    id: `haines-project`,
    title: `Personal Website`,
    img_alt: `Crossed tennis rackets logo`,
    description: `A sample website for the fictional 1950s tennis player and murder suspect, Guy Haines.`,
    description_italics: ``,
  },*/
  {
    id: `mrs-john-lennox`,
    title: `Film Press Kit`,
    img_alt: `Press site with text blocks and an image of a woman in period costume.`,
    description: `A press website for the short film `,
    description_italics: `The Portrait of Mrs. John Lennox.`,
  },
  /*{
    id: `vampires-project`,
    title: `Series Watch Page`,
    img_alt: `Design of three masked figures with the text 'Qui' 'Quoi' 'Quand' 'Ou...'`,
    description: `A video hosting site for Louis Feuillade's 1920s French serial `,
    description_italics: `Les Vampires.`,
  },
  {
    id: `ayli-project`,
    title: `Audition Sign-Up Form`,
    img_alt: `Laura Knight painting of two women embracing in front of clouds`,
    description: `An audition sign-up form for a film of Shakespeare's `,
    description_italics: `As You Like It.`,
  },*/
];

interface social_arr {
  id: string;
  icon_class: string;
  link: string;
  title: string;
}

const social_links: social_arr[] = [
  {
    id: `mail`,
    icon_class: `envelope`,
    link: `mailto:rebecca.shoptaw@gmail.com`,
    title: `Email`,
  },
  {
    id: `github`,
    icon_class: `github`,
    link: `https://github.com/rebecca-shoptaw`,
    title: `Github`,
  },
  {
    id: `insta`,
    icon_class: `instagram`,
    link: `https://www.instagram.com/rebeccashoptawfilms/`,
    title: `Instagram`,
  },
];

const Homepage = () => {
  let [loaded, setLoaded] = useState(false);
  window.onload = () => setLoaded(true);

  /*document.body.style.backgroundImage = `url(https://www.christies.com/img/LotImages/2017/NYR/2017_NYR_15004_0012A_000(rene_magritte_lempire_des_lumieres125847).jpg?mode=max)`*/
  /*document.body.style.backgroundSize = book.cover_size;*/

  return (
    <>
      {!loaded && (
        <div id="loading">
          <ClipLoader size={100} color="#fff" />
        </div>
      )}
      <div id="site-body" className={`${!loaded ? "hidden" : ""}`}>
        <nav id="navbar" className={`${!loaded ? "hidden" : ""}`}>
          <div className="nav-content">
            <span>
              <a href="#welcome-section">
                <h1>Rebecca Shoptaw</h1>
              </a>
            </span>
            <span>
              <div className="nav-links">
                <a className="nav-link" href="#about-ref">
                  About
                </a>
                <a className="nav-link" href="#projects-ref">
                  Work
                </a>
                <a id="contact-link" className="button" href="#contact-ref">
                  Contact
                </a>
              </div>
            </span>
          </div>
        </nav>
        <section id="welcome-section" className={`${!loaded ? "hidden" : ""}`}>
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
                    {`Hello! My name is Rebecca and I'm a
                freelance frontend web developer.`}
                  </Fade>
                  <br></br>
                  <Fade>
                    {`I bring from my background in filmmaking and photo/video editing the combination
                of a strong visual sense and minute technical precision.`}
                  </Fade>

                  <br></br>
                  <Fade>
                    {`My training in coding began in high school on my TI-84 calculator,
                and continued through CS50 in college, for which I learned a
                number of coding languages and taught myself Swift to build a
                video-editing app.`}
                  </Fade>

                  <br></br>
                  <Fade>
                    {`Now, I'm focusing on frontend
                development, and using React with a mix of HTML, CSS, and Javascript/Typescript to make beautiful and functional responsive sites and applications.`}
                  </Fade>

                  <br></br>
                </p>
                <Fade>
                  <a className="button" href="#contact-ref">
                    Get in Touch
                  </a>
                </Fade>
              </span>
              <Fade>
                <img
                  id="bio-img"
                  src="https://images.squarespace-cdn.com/content/v1/58c9909ce58c627a188f8a64/ad9e7ee7-964e-4151-96a6-e99d81353fd2/20201007.JPG?format=2500w"
                  alt="Profile picture"
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
                <div
                  className="project-tile tile"
                  id={project.id}
                  key={project.id}
                >
                  <Fade>
                    <div className="img-wrapper">
                      <a href={`${site_link}/${project.id}/`} target="_blank">
                        <img
                          id={`${project.id}-img`}
                          src={`./${project.id}.png`}
                          alt={project.img_alt}
                        />
                      </a>
                    </div>

                    <div className="description">
                      <p>
                        <a
                          href={`${site_link}/${project.id}/`}
                          target="_blank"
                          className="project-link"
                        >
                          {project.title}
                        </a>

                        {project.wip ? (
                          <div>
                            <i className="wip">Work in Progress</i>
                          </div>
                        ) : (
                          <br></br>
                        )}

                        {project.description}

                        <i className="project-italics">
                          {project.description_italics}
                        </i>
                      </p>
                    </div>

                    <div id="visit-btns">
                      <a
                        href={`${git_link}/${project.id}/`}
                        target="_blank"
                        className="button code"
                      >
                        Code
                      </a>
                      <a
                        href={`${site_link}/${project.id}/`}
                        target="_blank"
                        className="button live"
                      >
                        Live
                      </a>
                    </div>
                  </Fade>
                </div>
              ))}
              {/*<div className="project-tile" id="codepen-project">
                <a className="codepen-wrapper">
                  <a id="portfolio-link" href={git_link} className="project-link">
                    Full Portfolio
                  </a>
                </a>
                      </div>*/}
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
                  <img id="letter" src="./contact.jpg" />
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
      </div>
    </>
  );
};

export default Homepage;
