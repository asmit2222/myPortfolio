import React from "react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-cont">
        <h2 className="section-title">About</h2>

        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div className="cont mt-5" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src="../src/assets/img/my-profile-img.jpg"
              className="img-fluid w-100 h-100 rounded-4"
              alt=""
            />
          </div>
          <div className="col-lg-8 content">
            <h2>UI/UX Designer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li>
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <strong>City:</strong> <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <strong>Age:</strong> <span>30</span>
                  </li>
                  <li>
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <strong>Email:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Natus tempore a magni tenetur, quidem quibusdam,
              cum odit nemo harum quia sint modi omnis quas ab totam
              consequuntur aliquam distinctio eligendi! Voluptates iure sint
              perferendis possimus aspernatur, necessitatibus rerum fuga non
              eveniet fugiat neque totam veritatis maxime quidem at temporibus
              minima eos a commodi quo beatae? Voluptatibus veritatis doloremque
              optio perspiciatis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi quis repellendus deserunt, at fugit
              autem. Modi at nemo quasi, officia adipisci eaque quam sint
              voluptatum distinctio amet nisi rem iusto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
