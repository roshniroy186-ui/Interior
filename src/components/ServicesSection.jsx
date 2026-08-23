import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    number: "01",
    title: "Living Room",
    text: "Elegant and comfortable living spaces designed around your lifestyle.",
    image: "/interior-design/Living.Room.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Bedroom",
    text: "Calm and personalised bedrooms designed for comfort and relaxation.",
    image: "/interior-design/BedRoom.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Kitchen",
    text: "Functional kitchens combining modern design, storage and practicality.",
    image: "/interior-design/Kitchen.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Bathroom",
    text: "Beautiful bathroom interiors with elegant finishes and smart layouts.",
    image: "/interior-design/Bathroom.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Full Home",
    text: "Complete home interiors designed with a consistent and timeless style.",
    image: "/interior-design/Full.House.jpg",
  },
  {
    id: 6,
    number: "06",
    title: "Apartment Interior",
    text: "Complete apartment solutions designed to maximise space and comfort.",
    image: "/interior-design/Apartment.jpg",
  },
];
function ServicesSection() {
  return (
    <section className="services-section">

      <div className="services-grid">

        {services.map((service) => (

          <article
            className="service-card"
            key={service.id}
          >

            <div className="service-image">

              <img
                src={service.image}
                alt={service.title}
              />

              <span className="service-number">
                {service.number}
              </span>

            </div>

            <div className="service-info">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

              <a href="/consultation">
                Explore Service →
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default ServicesSection;