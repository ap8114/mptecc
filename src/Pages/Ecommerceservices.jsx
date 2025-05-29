import React from 'react';
import { Link } from 'react-router-dom';
import ecomm from '../assets/services/ecomm.png';
import ecomm2 from '../assets/services/ecomm2.png';

const ECommerceServices = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-5 text-white mb-3">E-Commerce Services</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
            <a href="#" style={{ color: "rgb(73, 153, 227)" }}>
              Services
            </a>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* E-Commerce Content Start */}
      <div className="container bg-secondary p-0">
        <div className="row g-0 align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 py-5 px-4 d-flex flex-column justify-content-center" style={{ minHeight: 450 }}>
            <h2 className="mb-3">
              Elevate Your <span style={{ color: "rgb(73, 153, 227)" }}>Online Store</span>
            </h2>
            <h4 className="mb-4" style={{ color: "rgb(73, 153, 227)" }}>
              End-to-End E-Commerce Solutions
            </h4>
            <p className="mb-4">
              We help you build, launch, and scale high-performing e-commerce platforms. From user-friendly design to secure payment gateways and SEO-friendly product pages, our tailored solutions ensure a seamless online shopping experience.
            </p>

            {/* Services List */}
            <div>
              <div className="d-flex flex-column justify-content-start">
                {[
                  "Custom E-Commerce Website Development",
                  "Product Page Optimization",
                  "Secure Payment Integration",
                  "Inventory & Order Management",
                  "Mobile-Responsive Design",
                  "E-Commerce SEO & Analytics"
                ].map((item, index) => (
                  <a
                    className="h5 mb-3 text-decoration-none"
                    href="#"
                    key={index}
                    style={{ color: "inherit" }}
                  >
                    <i
                      className="bi bi-arrow-right me-2"
                      style={{ color: "rgb(73, 153, 227)" }}
                    />
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4" style={{ maxWidth: "100%", overflow: "hidden", borderRadius: "16px" }}>
              <img
                className="img-fluid w-100"
                src={ecomm}
                alt="ecommerce services"
                style={{ height: 300, objectFit: "cover", display: "block", width: "100%" }}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 py-5 px-4 d-flex flex-column justify-content-center" style={{ minHeight: 450 }}>
            <div style={{ maxWidth: "100%", overflow: "hidden", borderRadius: "16px", marginBottom: "1.5rem" }}>
              <img
                className="img-fluid w-100"
                src={ecomm2}
                alt="team discussing e-commerce strategy"
                style={{ height: 300, objectFit: "cover", display: "block", width: "100%" }}
              />
            </div>
            <h4 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>
              Why Choose Us?
            </h4>
            <p>
              Our expert developers and marketing strategists collaborate to deliver scalable, high-conversion e-commerce platforms. Whether you’re launching a new store or optimizing an existing one, we bring creativity and strategy to every project.
              Let’s build something exceptional together.
            </p>
          </div>
        </div>
      </div>
      {/* E-Commerce Content End */}
    </>
  );
};

export default ECommerceServices;
