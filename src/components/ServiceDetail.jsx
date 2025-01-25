import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="page-title serviceDetailNav">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h2 className="mb-2 mb-lg-0">Service Details</h2>
          <nav className="breadcrumbs">
            <ul>
              <li>
                <a onClick={() => handleClick()}>Home</a>
              </li>
              <li className="current">Service Details</li>
            </ul>
          </nav>
        </div>
      </div>
      <section id="service-details" className="service-details section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="services-list">
                <a href="#" className="active">
                  Web Design
                </a>
                <a href="#">Software Development</a>
                <a href="#">Product Management</a>
                <a href="#">Graphic Design</a>
                <a href="#">Marketing</a>
              </div>

              <h4>Enim qui eos rerum in delectus</h4>
              <p>
                Nam voluptatem quasi numquam quas fugiat ex temporibus quo est.
                Quia aut quam quod facere ut non occaecati ut aut. Nesciunt
                mollitia illum tempore corrupti sed eum reiciendis. Maxime modi
                rerum.
              </p>
            </div>

            <div
              className="col-lg-8 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/img/services.jpg"
                alt=""
                className="img-fluid services-img"
              />
              <h3>
                Temporibus et in vero dicta aut eius lidero plastis trand lined
                voluptas dolorem ut voluptas
              </h3>
              <p>
                Blanditiis voluptate odit ex error ea sed officiis deserunt.
                Cupiditate non consequatur et doloremque consequuntur.
                Accusantium labore reprehenderit error temporibus saepe
                perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem
                architecto eum et quos deleniti officia qui.
              </p>
              <ul>
                <li>
                  <span>Aut eum totam accusantium voluptatem.</span>
                </li>
                <li>
                  {" "}
                  <span>
                    Assumenda et porro nisi nihil nesciunt voluptatibus.
                  </span>
                </li>
                <li>
                  {" "}
                  <span>Ullamco laboris nisi ut aliquip ex ea</span>
                </li>
              </ul>
              <p>
                Est reprehenderit voluptatem necessitatibus asperiores neque sed
                ea illo. Deleniti quam sequi optio iste veniam repellat odit.
                Aut pariatur itaque nesciunt fuga.
              </p>
              <p>
                Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam
                aut consequuntur recusandae mollitia doloremque est architecto
                cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
                repellendus eveniet velit sint quia sapiente cumque. Et ipsa
                perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
                Eaque iusto cupiditate et totam et quia dolorum in. Sunt
                molestiae ipsum at consequatur vero. Architecto ut pariatur
                autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit
                dolore alias explicabo ea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
