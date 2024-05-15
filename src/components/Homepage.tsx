import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";
import InfoBox from "./InfoBox";

const Homepage = () => {
  return (
    <div id="site-body">
      <InfoBox />
      <main>
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Homepage;
