import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ContactButtons from "./components/ContactButtons";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Consultation from "./pages/Consultation";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
  <BrowserRouter basename="/interior-design">

      <Navbar />

      <Routes>


        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* PORTFOLIO */}
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        {/* PROJECT DETAILS */}
        <Route
          path="/portfolio/:id"
          element={<ProjectDetails />}
        />

        {/* CONSULTATION */}
        <Route
          path="/consultation"
          element={<Consultation />}
        />

        {/* TESTIMONIALS */}
        <Route
          path="/testimonials"
          element={<Testimonials />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
      <ContactButtons />

    </BrowserRouter>
  );
}

export default App;