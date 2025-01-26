import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">
            <img
              className="navbar-logo-image"
              src="/img/my-profile-img.jpg"
              alt="Profile Image"
            />
          </a>
          <button className="navbar-toggler" onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </button>
          <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
            <li className="navbar-item" data-aos="fade-up">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar-link"
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item" data-aos="fade-up">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="navbar-item" data-aos="fade-up">
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </li>
            <li className="navbar-item" data-aos="fade-up">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li className="navbar-item" data-aos="fade-up">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="navbar-item" data-aos="fade-up">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
