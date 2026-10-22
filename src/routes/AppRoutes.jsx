import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home.jsx";
import Services from "../pages/services.jsx";
import Portfolio from "../pages/portfolio.jsx";
import About from "../pages/about.jsx";
import Contact from "../pages/contact.jsx";
import ServiceDetail from "../pages/servicedetail.jsx";
import NotFound from "../pages/notfound.jsx";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;