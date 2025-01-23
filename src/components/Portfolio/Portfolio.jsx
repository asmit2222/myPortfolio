import React, { useState } from "react";
import { FaLink, FaSearchPlus } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "App 1",
      category: "app",
      imgSrc: "/img/portfolio/app-1.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 2,
      title: "Product 1",
      category: "product",
      imgSrc: "/img/portfolio/product-1.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 3,
      title: "Branding 1",
      category: "branding",
      imgSrc: "/img/portfolio/branding-1.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 4,
      title: "App 2",
      category: "app",
      imgSrc: "/img/portfolio/app-2.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 5,
      title: "Product 2",
      category: "product",
      imgSrc: "/img/portfolio/product-2.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 6,
      title: "Branding 2",
      category: "branding",
      imgSrc: "/img/portfolio/branding-2.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 7,
      title: "app 3",
      category: "app",
      imgSrc: "/img/portfolio/app-3.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 8,
      title: "Product 3",
      category: "product",
      imgSrc: "/img/portfolio/product-3.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 9,
      title: "Branding 3",
      category: "branding",
      imgSrc: "/img/portfolio/branding-3.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 10,
      title: "books 1",
      category: "books",
      imgSrc: "/img/portfolio/books-1.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 11,
      title: "books 2",
      category: "books",
      imgSrc: "/img/portfolio/books-2.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      id: 12,
      title: "books 3",
      category: "books",
      imgSrc: "/img/portfolio/books-3.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
  ];

  // State for the active filter
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  // Function to handle the filter click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Filter portfolio items based on active filter
  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handlePreviewClick = (item) => {
    setSelectedItem(item);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <section id="portfolio" className="portfolio section" data-aos="fade-up">
      <div className="portfolio-cont">
        <h2 className="portfolio-head">Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs justify-content-center mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => handleFilterClick("all")}
            >
              All
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeFilter === "app" ? "active" : ""}`}
              onClick={() => handleFilterClick("app")}
            >
              App
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeFilter === "product" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("product")}
            >
              Product
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeFilter === "branding" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("branding")}
            >
              Branding
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeFilter === "books" ? "active" : ""}`}
              onClick={() => handleFilterClick("books")}
            >
              Books
            </button>
          </li>
        </ul>
        <div className="row" data-aos="fade-up">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 portfolio-item"
              data-aos="fade-up"
            >
              <div className="portfolio-wrap">
                <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="portfolio-links">
                    <a
                      href="#!"
                      className="link-preview"
                      onClick={() => handlePreviewClick(item)}
                    >
                      <FaSearchPlus />
                    </a>
                    <a href={`/portfolio/${item.id}`} className="link-details">
                      <FaLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedItem.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selectedItem.imgSrc}
                    className="img-fluid mb-3"
                    alt={selectedItem.title}
                  />
                  <p>{selectedItem.description}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal backdrop */}
        {selectedItem && (
          <div
            className="modal-backdrop fade show"
            style={{ opacity: 0.5 }}
            onClick={closeModal}
          ></div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
