import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaSkype,
} from "react-icons/fa";

function Home() {
  return (
    <section className="bg-container" id="home">
      <div className="hero">
        <img
          className="w-100 vh-100 hero-img"
          src="/img/hero-bg.jpg"
          alt="Hero"
          loading="lazy"
        />
      </div>
      <div className="content">
        <h1>Asmit Katiyar</h1>
        <h3>
          I'm a{" "}
          <span>
            <ReactTyped
              className="text-orange"
              strings={["Developer", "Freelancer"]}
              typeSpeed={35}
              backSpeed={50}
              loop={true}
            />
          </span>
        </h3>
        <div className="social mt-5 d-flex justify-between">
          <a href="">
            <FaLinkedin className="w-100 h-100" />
          </a>
          <a href="">
            <FaInstagram className="w-100 h-100" />
          </a>
          <a href="">
            <FaFacebook className="w-100 h-100" />
          </a>
          <a href="">
            <FaTwitter className="w-100 h-100" />
          </a>
          <a href="">
            <FaSkype className="w-100 h-100" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
