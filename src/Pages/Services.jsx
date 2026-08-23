import ServicesSection from "../components/ServicesSection";
import ConsultationCTA from "../components/ConsultationCTA";

function Services() {
  return (
    <main className="services-page">

      {/* Services Hero */}
      <section className="services-page-hero">

        <div className="services-page-hero-content">

          <p className="section-label">
            OUR SERVICES
          </p>

          <h1>
            Interiors For
            <br />
            Every Space.
          </h1>

          <p>
            From individual rooms
            to complete homes and apartments,
            we create interiors designed
            around the way you live.
          </p>

        </div>

      </section>


      {/* Services */}
      <ServicesSection />


      {/* Consultation */}
      <ConsultationCTA />

    </main>
  );
}

export default Services;