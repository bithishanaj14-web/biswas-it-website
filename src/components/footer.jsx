
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <Link
              to="/"
              className="text-white text-decoration-none fs-3 fw-bold"
            >
              Biswas<span className="text-info">IT.</span>
            </Link>

            <p className="text-white-50 mt-3">
              We build modern digital experiences
              that help businesses grow online.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/portfolio" className="footer-link">Portfolio</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Our Services</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">Web Development</li>
              <li className="mb-2">WordPress Development</li>
              <li className="mb-2">UI/UX Design</li>
              <li className="mb-2">SEO Optimization</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3">Get In Touch</h5>
            <p className="text-white-50">
              Have a project in mind? Let's discuss
              how we can help your business.
            </p>
            <Link to="/contact" className="btn btn-outline-info">
              Contact Us
            </Link>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-white-50 small">
          © {new Date().getFullYear()} Biswas IT.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
