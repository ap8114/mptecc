import React from 'react';
import { Link } from 'react-router-dom';
import webdesign from '../assets/services/webdesign.png'
import webdesign1 from '../assets/services/webdesign1.png'

const WebDesignServices = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid py-5 bg-dark" >
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-5 text-white mb-3">Web Designing</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
            <span style={{ color: "rgb(73, 153, 227)" }}>Web Designing</span>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Web Design Section Start */}
      <div className="container bg-secondary p-0">
        <div className="row g-0">
          {/* Left Column */}
          <div className="col-lg-6 py-5 px-4">
            <h2 className="mb-3">
              Crafting <span style={{ color: "rgb(73, 153, 227)" }}>Visually Stunning</span> Websites
            </h2>
            <h4 className="mb-4" style={{ color: "rgb(73, 153, 227)" }}>
              Responsive. Engaging. Effective.
            </h4>
            <p className="mb-4">
              Your website is your digital storefront. We design websites that not only look great
              but also convert visitors into customers. From wireframes to launch, our team ensures
              a seamless user experience across all devices.
            </p>

            {/* Services List */}
            <div className="bg-secondary">
              <div className="d-flex flex-column justify-content-start">
                {[
                  "UI/UX Design",
                  "Responsive Web Design",
                  "Landing Page Design",
                  "Corporate & Portfolio Websites",
                  "Custom WordPress Design",
                  "Website Redesign Services"
                ].map((service, index) => (
                  <a className="h5 mb-3" href="#" key={index}>
                    <i
                      className="bi bi-arrow-right me-2"
                      style={{ color: "rgb(73, 153, 227)" }}
                    />
                    {service}
                  </a>
                ))}
              </div>
            </div>

            <img
              className="img-fluid w-100 mt-4 rounded-4"
              src={webdesign1}
              alt="Web design showcase"
              style={{ height: 300, objectFit: "cover" }}
            />
          </div>

          {/* Right Column */}
          <div className="col-lg-6 py-5 px-4">
            <img
              className="img-fluid w-100 mb-5 rounded-4"
              src={webdesign}
              alt="Team designing websites"
              style={{ height: 400, objectFit: "cover" }}
            />
            <h4 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>
              Why Our Design Works?
            </h4>
            <p>
              We combine modern aesthetics with UX best practices. Our creative designers and
              developers collaborate to deliver interactive websites that elevate brand identity.
              We focus on mobile-first design, fast load times, and intuitive navigation to enhance
              user satisfaction and SEO rankings.
            </p>
          </div>
        </div>
      </div>
      {/* Web Design Section End */}
    </>
  );
};

export default WebDesignServices;
