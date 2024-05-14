import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";

const Homepage = () => {
  return (
    <>
      <main>
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Homepage;
