import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import TechStack from "./TechStack";
import SideNav from "./SideNav";

const Homepage = () => {
  return (
    <div id="site-body">
      <SideNav />
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
