import React from "react";
import { BsGeoAlt, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
  return (
    <section id="contact" className="contact section" data-aos="fade-up">
      <div className="contact-cont">
        <h2 className="contact-head">Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex">
                <div className="icon">
                  <BsGeoAlt className="bi bi-geo flex-shrink-0" />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="info-item d-flex ">
                <div className="icon">
                  <BsFillTelephoneFill className="bi bi-telephone flex-shrink-0" />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <div className="icon">
                  {" "}
                  <MdEmail className="bi bi-envelope flex-shrink-0" />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              action=""
              // method="post"
              className="email-form "
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlfor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required=""
                  />
                </div>

                <div className="col-md-6">
                  <label htmlfor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <label htmlfor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <label htmlfor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    id="message-field"
                    required=""
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
