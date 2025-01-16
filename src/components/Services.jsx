import React from "react";
import { FaBriefcase, FaBinoculars, FaCalendar } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { MdBarChart, MdBrightness5 } from "react-icons/md";

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="services-cont">
        <h2 className="services-head">Services</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 service-item d-flex ">
            <div className="icon flex-shrink-0">
              <FaBriefcase className="bi bi-briefcase" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className=" ">
                  Lorem Ipsum
                </a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex ">
            <div className="icon flex-shrink-0">
              <BsCardChecklist className="bi bi-card-checklist" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className=" ">
                  Dolor Sitema
                </a>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex">
            <div className="icon flex-shrink-0">
              <MdBarChart className="bi bi-bar-chart" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className=" ">
                  Sed ut perspiciatis
                </a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex ">
            <div className="icon flex-shrink-0">
              <FaBinoculars className="bi bi-binoculars" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className=" ">
                  Magni Dolores
                </a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex ">
            <div className="icon flex-shrink-0">
              <MdBrightness5 className="bi bi-brightness-high" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className=" ">
                  Nemo Enim
                </a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-item d-flex ">
            <div className="icon flex-shrink-0">
              <FaCalendar className="bi bi-calendar" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className=" ">
                  Eiusmod Tempor
                </a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
