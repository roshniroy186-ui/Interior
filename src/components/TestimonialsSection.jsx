const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Noida",
    text: "The team completely transformed our apartment. The design was beautiful and the entire process was very smooth.",
    image: `${import.meta.env.BASE_URL}project-living-room.JPG`,
  },
  {
    name: "Priya Verma",
    location: "Greater Noida",
    text: "We loved the design of our living room and kitchen. The team understood exactly what we wanted.",
    image: `${import.meta.env.BASE_URL}project-bedroom.JPG`,
  },
  {
    name: "Amit Singh",
    location: "Delhi NCR",
    text: "Very professional team and excellent quality of work. Our home now feels completely different.",
    image: `${import.meta.env.BASE_URL}project-kitchen.JPG`,
  },
];

function Testimonials() {
  return (
    <main className="testimonials-page">

      {/* Hero */}
      <section className="inner-page-hero testimonials-hero">

        <p className="section-label">
          TESTIMONIALS
        </p>

        <h1>
          What Our Clients
          <br />
          <span>Say.</span>
        </h1>

        <p>
          Real experiences from our interior design clients.
        </p>

      </section>

      {/* Testimonials */}
      <section className="testimonials-page-grid">

        {testimonials.map((testimonial) => (

          <div
            className="testimonial-card"
            key={testimonial.name}
          >

            {/* Client Image */}
            <div className="testimonial-image-wrapper">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>

            {/* Stars */}
            <div className="testimonial-stars">
              ★★★★★
            </div>

            {/* Review */}
            <p className="testimonial-text">
              "{testimonial.text}"
            </p>

            {/* Client Name */}
            <strong>
              {testimonial.name}
            </strong>

            {/* Location */}
            <span className="testimonial-location">
              📍 {testimonial.location}
            </span>

          </div>

        ))}

      </section>

    </main>
  );
}

export default Testimonials;