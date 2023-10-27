import { useState } from "react";
import { ClipLoader } from "react-spinners";

const site_link = "https://rebecca-shoptaw.github.io";
const git_link = "https://github.com/rebecca-shoptaw";

interface projects_arr {
  id: string;
  title: string;
  link?: string;
  img_id: string;
  img_src: string;
  img_alt: string;
  description: string;
  description_italics?: string;
  wip?: boolean;
}

const projects: projects_arr[] = [
  {
    id: `focusify`,
    title: `Focusify`,
    img_id: `focusify-img`,
    img_src: `https://static.thenounproject.com/png/263649-200.png`,
    img_alt: `Minimalist white circle on black background`,
    description: `A minimalist Spotify re-design with a light/dark mode and built-in functionality for audio visualizers and other view customizations. Further integrations to come. Built with Typescript, React, and the Spotify API.`,
    wip: true,
  },
  {
    id: `open-editions`,
    title: `Open Editions`,
    link: `/open-editions/`,
    img_id: `open-editions-img`,
    img_src: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Elizabeth_Winthrop_Chanler.JPG/1200px-Elizabeth_Winthrop_Chanler.JPG`,
    img_alt: `Sargent painting of Elizabeth Winthrop Chanler`,
    description: `A minimalist and aesthetically pleasing audiobook player, which combines public domain audiobook recordings of classic novels with customized cover images . Built with Typescript and React.`,
    wip: true,
  },
  {
    id: `pomodoro`,
    title: `Pomodoro`,
    link: `/pomodoro/`,
    img_id: `pomodoro-img`,
    img_src: "./pomodoro.png",
    img_alt: `Minimal logo text that reads "pomodoro"`,
    description: `A fully functional and customizable pomodoro study timer, with light and dark modes. Built with Typescript and React.`,

    wip: true,
  },
  {
    id: `triolingo`,
    title: `Triolingo`,
    link: `}/triolingo/`,
    img_id: `triolingo-img`,
    img_src: "./triolingo.png",
    img_alt: `Smiling gray cartoon cat`,
    description: `A Duolingo look-alike to help students practice SSAT Vocabulary. Features functionality for repeating and generating new word-sets and keeping score for each round. Built with Typescript and React.`,

    wip: true,
  },
  {
    id: `ask-oscar`,
    title: `Ask Oscar Wilde`,
    link: `/ask-oscar-wilde/`,
    img_id: `oscar-img`,
    img_src: `https://pilgrimtiles.co.uk/wp-content/uploads/2020/10/wm-straw-thief-detail-blue.jpg`,
    img_alt: `William Morris bird illustration`,
    description: `A dynamic site in which Oscar Wilde aphorisms appear in
        response to user predicaments.`,
  },
  {
    id: `cat-band`,
    title: `Cat Band`,
    link: `/cat-band/`,
    img_id: `cat-band-img`,
    img_src: "./cat-band.jpg",
    img_alt: `Drawing of singing cat`,
    description: `An all-cat jazz band for which the user can start and stop the instruments at will. Built with Typescript and React.`,
  },
  {
    id: `deco-calculator`,
    title: `Deco Calculator`,
    link: `/deco-calculator/`,
    img_id: `deco-calculator-img`,
    img_src: `https://www.burkedecor.com/cdn/shop/products/DD139230_1800x1800.jpg?v=1671736060`,
    img_alt: `Art Deco pattern`,
    description: `A stylish and fully functional calculator designed for doing basic calculations in an art deco manner. Built with Typescript and React.`,
  },
  {
    id: `tabula-rasa`,
    title: `Tabula Rasa`,
    link: `/tabula-rasa`,
    img_id: `tabula-img`,
    img_src: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Jan_van_Huysum_-_Arcadian_Landscape_with_a_Bust_of_Flora_-_1113_-_Mauritshuis.jpg/1600px-Jan_van_Huysum_-_Arcadian_Landscape_with_a_Bust_of_Flora_-_1113_-_Mauritshuis.jpg?20200127083852`,
    img_alt: `Jan van Huysum Arcadian Lanscape painting`,
    description: `A minimal and elegant responsive markdown previewer.`,
  },
  /*{
    id: `haines-project`,
    title: `Personal Website`,
    link: `https://codepen.io/rebecca-shoptaw/pen/WNYgmjv`,
    img_id: `haines-img`,
    img_src: `https://media.istockphoto.com/id/1292722853/vector/illustration-of-crossed-tennis-rackets-logotype-for-sports-club-or-team-logo-lineart.jpg?s=612x612&w=0&k=20&c=GqWUXumfGvmmjFYbptFGap2W-MnhLIUT3_yvxKZj9w0=`,
    img_alt: `Crossed tennis rackets logo`,
    description: `A sample website for the fictional 1950s tennis player and murder suspect, Guy Haines.`,
    description_italics: ``,
  },*/
  {
    id: `portrait-project`,
    title: `Film Press Kit`,
    link: `/mrs-john-lennox/`,
    img_id: `portrait-img`,
    img_src: `https://filmfreeway-production-storage-01-storage.filmfreeway.com/attachments/files/007/294/084/original/Screen_Shot_2023-06-16_at_5.37.15_PM.jpg?1686951530`,
    img_alt: `Woman in period costume looking at viewer`,
    description: `A press website for the short film `,
    description_italics: `The Portrait of Mrs. John Lennox.`,
  },
  /*{
    id: `vampires-project`,
    title: `Series Watch Page`,
    link: `https://codepen.io/rebecca-shoptaw/pen/rNQZRjm`,
    img_id: `vampires-img`,
    img_src: `https://upload.wikimedia.org/wikipedia/en/9/9c/Lesvampires.PNG`,
    img_alt: `Design of three masked figures with the text 'Qui' 'Quoi' 'Quand' 'Ou...'`,
    description: `A video hosting site for Louis Feuillade's 1920s French serial `,
    description_italics: `Les Vampires.`,
  },
  {
    id: `ayli-project`,
    title: `Audition Sign-Up Form`,
    link: `https://codepen.io/rebecca-shoptaw/pen/GRwXeme`,
    img_id: `ayli-img`,
    img_src: `https://sothebys-md.brightspotcdn.com/0e/df/bd40bb90400a9be899a057a8c3bf/l21008-btlgd-02.jpg`,
    img_alt: `Laura Knight painting of two women embracing in front of clouds`,
    description: `An audition sign-up form for a film of Shakespeare's `,
    description_italics: `As You Like It.`,
  },*/
];

const Homepage = () => {
  let [loaded, setLoaded] = useState(false);
  window.onload = () => setLoaded(true);

  /*document.body.style.backgroundImage = `url(${book.cover})`;
  document.body.style.backgroundSize = book.cover_size;*/

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
                <a id="contact-link" href="#contact-ref">
                  Contact
                </a>
              </div>
            </span>
          </div>
        </nav>
        <section id="welcome-section" className={`${!loaded ? "hidden" : ""}`}>
          <div className="title">
            <h1>Rebecca Shoptaw</h1>
            <h2>
              <i>Frontend Developer</i>
            </h2>
          </div>
        </section>
        <div id="about-ref" className="locator"></div>
        <section id="about">
          <div className="section-body">
            <h1 className="section-title">About</h1>
            <div className="bio">
              <span id="bio-block">
                <p className="bio-text">
                  {`Hello! My name is Rebecca and I'm a
                filmmaker-turned-front-end-developer.`}
                  <br></br>
                  <br></br>
                  {`I bring from my background in filmmaking and photo/video editing the combination
                of a strong visual sense and minute technical precision.`}
                  <br></br>
                  <br></br>
                  {`My training in coding began in high school on my TI-84 calculator,
                and continued through CS50 in college, for which I learned a
                number of coding languages and taught myself Swift to build a
                video-editing app.`}
                  <br></br>
                  <br></br>
                  {`Now, I'm focusing on front-end
                development, and using React with a mix of HTML, CSS, and Javascript/Typescript to make beautiful and functional responsive sites and applications.`}
                  <br></br>
                  <br></br>
                </p>
                <a href="#contact-ref">Get in Touch</a>
              </span>
              <img
                id="bio-img"
                src="https://images.squarespace-cdn.com/content/v1/58c9909ce58c627a188f8a64/ad9e7ee7-964e-4151-96a6-e99d81353fd2/20201007.JPG?format=2500w"
                alt="Profile picture"
              />
            </div>
          </div>
        </section>
        <div id="projects-ref" className="locator"></div>
        <section id="projects">
          <div className="section-body">
            <h1 className="section-title">Work Samples</h1>
            <div className="project-links">
              {projects.map((project) => (
                <div className="project-tile" id={project.id}>
                  <div className="img-wrapper">
                    <a href={site_link + project.link} target="_blank">
                      <img
                        id={project.img_id}
                        src={project.img_src as string}
                        alt={project.img_alt}
                      />
                    </a>
                  </div>
                  <div className="description">
                    <p>
                      <a
                        href={site_link + project.link}
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
                    <div id="visit-btns">
                      <a
                        href={git_link + project.link}
                        target="_blank"
                        className="button code"
                      >
                        Code
                      </a>
                      <a
                        href={site_link + project.link}
                        target="_blank"
                        className="button live"
                      >
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="project-tile" id="codepen-project">
                <div className="codepen-wrapper">
                  <a href="https://codepen.io/rebecca-shoptaw" target="_blank">
                    <img
                      id="codepen"
                      src="https://seeklogo.com/images/C/codepen-logo-FDEB3664F1-seeklogo.com.png"
                    />
                  </a>
                  <a
                    className="project-link"
                    id="profile-link"
                    href="https://codepen.io/rebecca-shoptaw"
                    target="_blank"
                  >
                    Full Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="contact-ref" className="locator"></div>
        <section id="contact">
          <div className="section-body">
            <h1 className="section-title">Contact</h1>
            <div id="contact-body">
              <div className="letter-wrap">
                <img
                  id="letter"
                  src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/352203/769892/restricted"
                />
              </div>
              <div className="social-icons">
                <a href="mailto:rebecca.shoptaw@gmail.com">
                  <img
                    src="https://icons.veryicon.com/png/o/internet--web/billion-square-cloud/mail-213.png"
                    className="social-icon"
                    id="mail"
                  />
                </a>
                <a href="https://codepen.io/rebecca-shoptaw" target="_blank">
                  <img
                    src="https://seeklogo.com/images/C/codepen-logo-FDEB3664F1-seeklogo.com.png"
                    className="social-icon"
                    id="codepen2"
                  />
                </a>
                <a href="https://github.com/rebecca-shoptaw" target="_blank">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                    className="social-icon"
                    id="github"
                  />
                </a>
                <a
                  href="https://www.instagram.com/rebeccashoptawfilms/"
                  target="_blank"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                    className="social-icon"
                    id="insta"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
