import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FinalCTA from "../components/FinalCTA";

function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio / Projects */}
      <ProjectsSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Final Call To Action */}
      <FinalCTA />

    </main>
  );
}

export default Home;