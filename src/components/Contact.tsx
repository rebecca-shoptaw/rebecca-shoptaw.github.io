import ContactBtns from "./ContactBtns";

const Contact = () => {
  return (
    <section id="contact" className="section-wrap">
      <section className="section-body floating">
        <div id="contact-body">
          <div className="letter-wrap">
            <img
              id="letter"
              src="./contact.jpg"
              alt="Painting of a woman writing a letter"
            />
          </div>

          <ContactBtns />
        </div>
      </section>
    </section>
  );
};

export default Contact;
