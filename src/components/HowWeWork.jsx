function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      text: "We understand your requirements, lifestyle and design preferences.",
      image: `${import.meta.env.BASE_URL}Consultation.jpg`,
    },
    {
      number: "02",
      title: "Design",
      text: "Our designers create a personalised interior concept for your home.",
      image: `${import.meta.env.BASE_URL}Design.jpg`,
    },
    {
      number: "03",
      title: "Execution",
      text: "Our team manages the execution and brings your interior design to life.",
      image: `${import.meta.env.BASE_URL}Execution.jpg`,
    },
  ];

  return (
    <section className="how-section">

      <div className="how-heading">

        <p className="section-label">
          HOW WE WORK
        </p>

        <h2>
          Simple Process.
          <br />
          Beautiful Results.
        </h2>

      </div>


      <div className="how-grid">

        {steps.map((step) => (

          <article
            className="how-card"
            key={step.number}
          >

            <div className="how-image">

              <img
                src={step.image}
                alt={step.title}
              />

              <span>
                {step.number}
              </span>

            </div>


            <div className="how-content">

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default HowWeWork;