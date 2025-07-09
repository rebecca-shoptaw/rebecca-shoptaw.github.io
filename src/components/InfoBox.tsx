import { SCROLL_POSITION } from "../data/constants";
import useScrollPosition from "../hooks/useScrollPosition";
import { resetUrl } from "../utils/utils";
import ContactBtns from "./ContactBtns";
import InfoBoxIcons from "./InfoBoxIcons";

const InfoBox = () => {
  const pastHero = useScrollPosition(SCROLL_POSITION);

  return (
    <section
      id="infobox"
      className={`section-wrap ${pastHero ? "infobox--side" : "infobox--full"}`}
    >
      <section className="section-body">
        <section className="infobox-top">
          <img src="https://images.squarespace-cdn.com/content/v1/58c9909ce58c627a188f8a64/ad9e7ee7-964e-4151-96a6-e99d81353fd2/20201007.JPG?format=2500w"></img>
          <div className="info-wrap">
            <a href="#" onClick={resetUrl}>
              <h1 className="site-title">Rebecca Shoptaw</h1>
            </a>
            <h2 className="site-subtitle">Full-stack software engineer</h2>
            <p className="info-bio">
              Hello! My name is Rebecca and I'm a full-stack software engineer
              who specializes in breaking down complex, large-scale feature
              requests into straightforward, iterable tasks – then powering
              through the tasks one by one until the feature is complete.
              <br />
              <br />
              I joined the Internet Archive at the end of 2023, first as a
              volunteer, then as a frontend and internationalization lead on the
              Open Library team, then as an engineer on the core site UX team.
              <br />
              <br />
              Since joining, I've shipped more than 50 features and fixes across
              the stack, helping both to make the site as modern, seamless and
              intuitive as possible for users, and to optimize the development
              process behind the scenes for engineers.
              <br />
              <br />
              My specialty is driving new features from ideation to realization
              by: <br />
              <ol>
                <li>Developing a clear, efficient action plan</li>
                <li>Writing clean, well-tested code</li>
                <li>
                  Consistently modifying the plan as needed to get past
                  engineering roadblocks and push the best possible solution to
                  production
                </li>
              </ol>
              In my spare time, I've also built a number of new React
              applications from the ground up, such as a gamified vocab practice
              site for middle schoolers, an aesthetically pleasing audiobook
              site, and my personal favorite, an all-cat jazz band. 🎷🐈
            </p>
          </div>
        </section>
        <div className="divider"></div>
        <InfoBoxIcons />
        <a
          className="btn-link"
          href="mailto:rebeccashoptaw.dev@gmail.com"
          target="_blank"
        >
          <button className="btn-default">Contact</button>
        </a>
        <ContactBtns />
      </section>
    </section>
  );
};

export default InfoBox;
