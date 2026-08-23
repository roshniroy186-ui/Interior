import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="final-cta">

      <div className="final-cta-content">

        <p className="section-label">
          START YOUR PROJECT
        </p>

        <h2>
          Ready To Transform
          <br />
          Your Home?
        </h2>

        <p>
          Tell us about your home and let our team
          create a beautiful space designed around you.
        </p>

        <div className="final-cta-buttons">

          <Link
            to="/consultation"
            className="final-cta-primary"
          >
            Book Free Consultation →
          </Link>

          <a
            href="tel:+919999999999"
            className="final-cta-secondary"
          >
            Call Us
          </a>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;
