const About = () => {
  return (
    <section id="about" className="section-wrap">
      <div className="section-body">
        <h1 className="section-title">About</h1>

        <section className="bio-text">
          <p>
            Hello! My name is Rebecca and I'm an NYC-based software engineer
            with a track record of realizing ambitious projects with rapid speed
            🚀 and minute precision 🔎.
          </p>

          <p>
            I am currently an Engineering Fellow and
            Frontend/Internationalization Lead on the Internet Archive's{" "}
            <a
              className="inline-link"
              href="https://github.com/internetarchive/openlibrary"
              target="_blank"
            >
              Open Library
            </a>{" "}
            project. 👩‍💻📚
            <br></br>
            <br></br>
            You can see my latest contributions{" "}
            <a
              className="inline-link"
              href="https://github.com/internetarchive/openlibrary/issues?q=author%3Arebecca-shoptaw"
              target="_blank"
            >
              here
            </a>
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;
