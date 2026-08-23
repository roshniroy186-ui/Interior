const projects = [
  {
    id: 1,
    category: "LIVING ROOM",
    title: "Modern Living Room",
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
    category: "LIVING ROOM",
    title: "Contemporary Living Room",
    image: `${import.meta.env.BASE_URL}project-living-room%20copy.jpg`,
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section">

      <div className="projects-heading">

        <div>

          <p className="section-label">
            OUR PORTFOLIO
          </p>

          <h2>
            Spaces We've
            <br />
            Transformed.
          </h2>

        </div>

        <p>
          Explore some of our completed interior projects
          for homes and apartments.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-info">

              <p>
                {project.category}
              </p>

              <h3>
                {project.title}
              </h3>

              <a
                href={`/portfolio/${project.id}`}
              >
                View Project →
              </a>

            </div>

          </div>

        ))}

      </div>

      <div className="projects-button">

        <a href="/portfolio">
          View All Projects →
        </a>

      </div>

    </section>
  );
}

export default ProjectsSection;