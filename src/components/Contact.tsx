import SocialLink from "./SocialLink";
import SOCIAL_LINKS from "../data/SocialData";

const Contact = () => {
  return (
    <section id="contact" className="section-wrap">
      <section className="section-body">
        <h1 className="section-title">Contact</h1>
        <div id="contact-body" className="tile">
          <div className="letter-wrap">
            <img
              id="letter"
              src="./contact.jpg"
              alt="Painting of a woman writing a letter"
              loading="lazy"
            />
          </div>

          <div className="social-icons">
            {SOCIAL_LINKS.map((social) => (
              <SocialLink key={social.id} social={social} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
