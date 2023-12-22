import { Fade } from "react-awesome-reveal";
import SocialLink from "./SocialLink";
import SOCIAL_LINKS from "../data/SocialData";

const Contact = () => {
  return (
    <section id="contact">
      <section className="section-body">
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
