function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Personalised Design",
      text: "Every project is designed around your lifestyle, taste and requirements.",
      image: `${import.meta.env.BASE_URL}Personal Design.jpg`,
    },
    {
      number: "02",
      title: "Quality Materials",
      text: "We focus on reliable materials and finishes that look beautiful and last longer.",
      image: `${import.meta.env.BASE_URL}quality Material.jpg`,
    },
    {
      number: "03",
      title: "Experienced Team",
      text: "Our design and execution team works together to deliver your project professionally.",
      image: `${import.meta.env.BASE_URL}Experience.Team.jpg`,
    },
    {
      number: "04",
      title: "Complete Execution",
      text: "From design to final installation, we manage the complete interior process.",
      image: `${import.meta.env.BASE_URL}Complete.Execution.jpg`,
    },
  ];

  return (
    <section className="why-section">

      <div className="why-heading">

        <div>
          <p className="section-label">
            WHY CHOOSE US
          </p>

          <h2>
            Designed With
            <br />
            Purpose.
          </h2>
        </div>

        <p>
          We believe great interiors are not just beautiful.
          They should also make everyday life easier and
          more comfortable.
        </p>

      </div>


      <div className="why-grid">

        {features.map((feature) => (

          <article
            className="why-card"
            key={feature.number}
          >

            <div className="why-image">

              <img
                src={feature.image}
                alt={feature.title}
              />

            </div>

            <div className="why-content">

              <span className="why-number">
                {feature.number}
              </span>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.text}
              </p>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;