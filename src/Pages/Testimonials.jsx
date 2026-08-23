import TestimonialsSection from "../components/TestimonialsSection";

function Testimonials() {
  return (
    <main className="testimonials-page">

      <section className="inner-page-hero">

        <p className="section-label">
          TESTIMONIALS
        </p>

        <h1>
          What Our Clients
          <br />
          Say.
        </h1>

        <p>
          Real experiences from our interior design clients.
        </p>

      </section>

      <TestimonialsSection showHeading={false} />

    </main>
  );
}

export default Testimonials;
