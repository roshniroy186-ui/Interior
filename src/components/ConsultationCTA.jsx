import { Link } from "react-router-dom";

function ConsultationCTA() {
  return (
    <section className="consultation-cta">

      <div className="consultation-cta-content">

        <p className="consultation-label">
          START YOUR PROJECT
        </p>

        <h2>
          Ready To Transform
          <br />
          Your Home?
        </h2>

        <p className="consultation-description">
          Tell us about your space and your requirements.
          Our team will get in touch with you to discuss
          your interior design project.
        </p>

        <div className="consultation-buttons">

          <Link
            to="/consultation"
            className="consultation-primary"
          >
            Book Free Consultation →
          </Link>

          <a
            href="tel:+919999999999"
            className="consultation-secondary"
          >
            Call Us
          </a>

        </div>

      </div>

    </section>
  );
}

export default ConsultationCTA;