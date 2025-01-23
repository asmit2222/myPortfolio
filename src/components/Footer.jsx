import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  return (
    <footer
      id="footer"
      className="footer position-relative light-background"
      data-aos="fade-up"
    >
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">iPortfolio</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits text-center">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
