import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-label">
          INTERIOR DESIGN STUDIO
        </p>

        <h1>
          Beautiful Spaces.
          <br />
          Designed For You.
        </h1>

        <p className="hero-description">
          We create beautiful and functional interiors
          for homes and apartments.
        </p>

        <div className="hero-buttons">

          <Link
            to="/consultation"
            className="hero-primary"
          >
            Get Free Consultation
          </Link>

          <Link
            to="/portfolio"
            className="hero-secondary"
          >
            View Our Projects
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;