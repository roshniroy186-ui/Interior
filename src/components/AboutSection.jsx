import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* Left Side */}
        <div className="about-heading">

          <p className="section-label">
            ABOUT US
          </p>

          <h2>
            Designing Spaces
            <br />
            That Feel Like Home.
          </h2>

        </div>


        {/* Right Side */}
        <div className="about-content">

          <p className="about-intro">
            We believe a beautiful home should be
            more than just visually appealing. It
            should reflect your personality, lifestyle
            and the way you live.
          </p>

          <p>
            Our interior design team creates
            thoughtful and functional spaces for
            homes and apartments. From concept and
            design to final execution, we take care
            of every detail.
          </p>

          <p>
            Whether you are designing a single room
            or your complete home, we create spaces
            that are comfortable, practical and
            timeless.
          </p>

          <Link
            to="/about"
            className="about-link"
          >
            Discover More About Us →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;