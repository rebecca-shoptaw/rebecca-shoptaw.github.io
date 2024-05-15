import { InfoBoxList } from "../data/InfoBoxData";
import useScrollPosition from "../hooks/useScrollPosition";

const InfoBox = () => {
  const pastHero = useScrollPosition(400);

  return (
    <section
      id="infobox"
      className={`section-wrap ${pastHero ? "infobox--side" : "infobox--full"}`}
    >
      <section className="section-body">
        <section className="infobox-top">
          <img src="https://images.squarespace-cdn.com/content/v1/58c9909ce58c627a188f8a64/ad9e7ee7-964e-4151-96a6-e99d81353fd2/20201007.JPG?format=2500w"></img>
          <div className="info-wrap">
            <h1>Rebecca Shoptaw</h1>
            <h2>Full-stack software engineer.</h2>
            <p className="info-bio text-muted">
              Efficient and pragmatic full-stack software engineer who has
              successfully shipped more than 25 high-impact features and fixes
              for an Internet Archive site with over 30 million monthly visitors
              and built more than 15 React sites and applications from the
              ground up since September. <br></br> <br></br> Highly organized,
              highly motivated, and proficient across the stack.
            </p>
          </div>
        </section>
        <div className="divider"></div>
        <ul className="infobox-icons">
          {InfoBoxList.map((item) => (
            <li className="infobox-icon" key={item.id}>
              {item.icon}{" "}
              {item.link ? (
                <a href={item.link} target="_blank" className="infobox-link">
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </li>
          ))}
        </ul>
        <a
          className="btn-link"
          href="mailto:rebecca@rebeccashoptaw.dev"
          target="_blank"
        >
          <button className="btn-default">Contact</button>
        </a>
      </section>
    </section>
  );
};

export default InfoBox;
