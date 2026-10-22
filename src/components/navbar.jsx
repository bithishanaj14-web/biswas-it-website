

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="site-header">
      <nav className="custom-navbar">
        <div className="custom-navbar-container">

          {/* Logo */}
          <Link
            to="/"
            className="brand-logo"
            onClick={closeMenu}
          >
            Biswas<span>IT.</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="mainNavbar"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu */}
          <div
            id="mainNavbar"
            className={`navbar-menu ${menuOpen ? "show" : ""}`}
          >
            <ul className="navbar-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `navbar-link ${isActive ? "active" : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="navbar-cta"
              onClick={closeMenu}
            >
              Call Now
              <span aria-hidden="true"> ↗</span>
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
