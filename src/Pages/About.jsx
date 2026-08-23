import WhyChooseUs from "../components/WhyChooseUs";
import HowWeWork from "../components/HowWeWork";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="section-label">
            ABOUT US
          </p>

          <h1>
            Designing Homes
            <br />
            With Purpose.
          </h1>

          <p>
            We create beautiful, functional and personalised
            interiors for homes and apartments.
          </p>

        </div>

      </section>


      {/* ABOUT */}

      <section className="about-introduction">

        <div className="about-intro-image">

          <img
            src={`${import.meta.env.BASE_URL}Personal Design.jpg`}
            alt="Personalised interior design"
          />

        </div>

        <div className="about-intro-content">

          <p className="section-label">
            OUR APPROACH
          </p>

          <h2>
            Designing Spaces
            <br />
            That Feel Like Home.
          </h2>

          <p>
            We believe a beautiful home should be more than
            just visually appealing. It should reflect your
            personality, lifestyle and the way you live.
          </p>

          <p>
            Our interior design team creates thoughtful and
            functional spaces for homes and apartments. From
            concept and design to final execution, we take
            care of every detail.
          </p>

          <p>
            Whether you are designing a single room or your
            complete home, we create spaces that are
            comfortable, practical and timeless.
          </p>

          <Link to="/consultation" className="about-button">
            Start Your Project →
          </Link>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <WhyChooseUs />


      {/* HOW WE WORK */}

      <HowWeWork />


      {/* FINAL CTA */}

      <section className="about-cta">

        <div>

          <p className="section-label">
            START YOUR PROJECT
          </p>

          <h2>
            Ready To Transform
            <br />
            Your Home?
          </h2>

          <p>
            Tell us about your space and your requirements.
            Our team will get in touch with you.
          </p>

          <Link to="/consultation">
            Book Free Consultation →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;