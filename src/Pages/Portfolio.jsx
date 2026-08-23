import { Link } from "react-router-dom";
  const projects = [
  {
    id: 1,
    category: "LIVING ROOM",
    title: "Modern Luxury Living Room",
    image: `${import.meta.env.BASE_URL}project-living-room.JPG`,
  },
  {
    id: 2,
    category: "BEDROOM",
    title: "Minimal Bedroom",
    image: `${import.meta.env.BASE_URL}project-bedroom.JPG`,
  },
  {
    id: 3,
    category: "KITCHEN",
    title: "Modern Modular Kitchen",
    image: `${import.meta.env.BASE_URL}project-kitchen.JPG`,
  },
  {
    id: 4,
    category: "FULL HOME",
    title: "Complete 3BHK Interior",
    description:
      "A complete home interior designed with a consistent and timeless visual language.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    category: "APARTMENT",
    title: "Premium Apartment Interior",
    description:
      "A sophisticated apartment designed to make every part of the space feel intentional.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    category: "FULL HOME",
    title: "Contemporary Home",
    description:
      "A contemporary home balancing functionality, comfort and refined design.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
  },
];

function Portfolio() {
  return (
    <main className="portfolio-page">

      {/* HERO */}

      <section className="portfolio-hero">

        <div className="portfolio-hero-content">

          <p className="portfolio-label">
            OUR PORTFOLIO
          </p>

          <h1>
            Spaces We've
            <br />
            Transformed.
          </h1>

          <p>
            Explore some of our completed interior
            projects for homes and apartments.
          </p>

        </div>

      </section>


      {/* PROJECTS */}

      <section className="portfolio-projects">

        <div className="portfolio-heading">

          <div>
            <p className="portfolio-label">
              SELECTED PROJECTS
            </p>

            <h2>
              Our Recent Work.
            </h2>
          </div>

          <p>
            Every project is designed around the
            client's lifestyle, personality and space.
          </p>

        </div>


        <div className="portfolio-grid">

          {projects.map((project) => (

            <article
              className="portfolio-card"
              key={project.id}
            >

              <Link
                to={`/portfolio/${project.id}`}
                className="portfolio-image"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <span>
                  View Project →
                </span>

              </Link>


              <div className="portfolio-info">

                <p className="portfolio-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="portfolio-description">
                  {project.description}
                </p>

                <Link
                  to={`/portfolio/${project.id}`}
                  className="portfolio-link"
                >
                  View Project →
                </Link>

              </div>

            </article>

          ))}

        </div>


        <div className="portfolio-cta">

          <p>
            Have a space you want to transform?
          </p>

          <Link to="/consultation">
            Talk To Our Design Team →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Portfolio;