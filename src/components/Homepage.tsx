import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import { useAnimation } from "../hooks/useAnimation";

const Homepage = () => {
  const animateIntro = useAnimation();
  animateIntro();

  return (
    <>
      <Nav />
      <main>
        <section id="welcome-section" className="section-wrap">
          <section className="title">
            <h1>Rebecca Shoptaw</h1>
            <h2>Frontend Developer</h2>
          </section>
        </section>
        <div id="about-ref" className="locator"></div>
        <About />
        <div id="projects-ref" className="locator"></div>
        <Projects />
        <div id="contact-ref" className="locator"></div>
        <Contact />
      </main>
    </>
  );
};

export default Homepage;
