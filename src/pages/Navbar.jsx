import React from "react";
import "../style/style.min.css";
import "../style/style.css";
import carousel1 from "../img/carousel-1.jpg";
import carousel2 from "../img/carousel-2.jpg";
import carousel3 from "../img/carousel-3.jpg";

function Navbar() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container nav-bar p-0">
        <div className="container p-0">
          <nav
            className="navbar navbar-expand-lg bg-secondary navbar-dark px-3 px-md-4 py-3"
            style={{ fontSize: "1.15rem", letterSpacing: "0.5px" }}
          >
                       <a href="index.html" className="navbar-brand">
              <h1 className="m-0 text-white display-4">
                <span className="text-primary">Infy</span>nitive
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler ml-auto"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
              <div
                className="navbar-nav mx-auto py-2 py-lg-0 text-center text-md-left w-0"
                style={{ gap: "0.5rem" }}
              >
                <a
                  href="#home"
                  className="nav-item nav-link active px-4 py-2 mx-1"
                  style={{ fontSize: "1.1rem", borderRadius: "0.5rem" }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="nav-item nav-link px-4 py-2 mx-1"
                  style={{ fontSize: "1.1rem", borderRadius: "0.5rem" }}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="nav-item nav-link px-4 py-2 mx-1"
                  style={{ fontSize: "1.1rem", borderRadius: "0.5rem" }}
                >
                  Services
                </a>
                <a
                  href="#feature"
                  className="nav-item nav-link px-4 py-2 mx-1"
                  style={{ fontSize: "1.1rem", borderRadius: "0.5rem" }}
                >
                  Feature
                </a>
                <a href="#contact" className="nav-item nav-link px-3 py-2">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Bootstrap Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#header-carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#header-carousel" data-slide-to="1"></li>
            <li data-target="#header-carousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" style={{ width: "100%" }}>
            <div className="carousel-item active">
              <img
                className="img-fluid"
                style={{ width: "100%", height: "70%" }}
                src={carousel1}
                alt="Creative Agency 1"
              />
              <div className="carousel-caption d-flex align-items-center justify-content-center">
                <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
                  <h5 className="text-white text-uppercase mb-md-3 d-none d-md-block">
                    Creative Agency
                  </h5>
                  <h1 className="display-3 text-white mb-md-4">
                    Creative Services For Brands Grow
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                className="img-fluid"
                style={{ width: "100%", height: "70%" }}
                src={carousel2}
                alt="Creative Agency 2"
              />
              <div className="carousel-caption d-flex align-items-center justify-content-center">
                <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
                    <h5 className="text-white text-uppercase mb-md-3 d-none d-md-block">
                    Creative Agency
                  </h5>
                  <h1 className="display-3 text-white mb-md-4">
                    Highly Professional Team Members
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="img-fluid"
                style={{ width: "100%", height: "70%" }}
                src={carousel3}
                alt="Creative Agency 3"
              />
              <div className="carousel-caption d-flex align-items-center justify-content-center">
                <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
                    <h5 className="text-white text-uppercase mb-md-3 d-none d-md-block">
                    Creative Agency
                  </h5>
                  <h1 className="display-3 text-white mb-md-4">
                    Happy Clients & Positive Reviews
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* Bootstrap Carousel End */}
    </>
  );
}

export default Navbar;
