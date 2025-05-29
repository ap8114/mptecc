import React from "react";
import { Link } from "react-router-dom";
import seo1 from "../assets/services/seo1.png";
import seo2 from "../assets/services/seo2.png";

const Seo = () => {
  const primaryColor = { color: "rgb(73, 153, 227)" };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-white">
              Search Engine Optimization (A.C.O.)
            </h1>
            <div className="mt-2">
              <Link to="/" style={primaryColor} className="fw-semibold">
                Home
              </Link>
              <i className="far fa-square px-2" style={primaryColor} />
              <a href="#" style={primaryColor} className="fw-semibold">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Section Start */}
      <div className="container-fluid bg-secondary py-5 px-3">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Content Section */}
            <div className="col-lg-6">
              <h2 className="mb-4 fw-bold text-black">
                Welcome To <span style={primaryColor}>MP Tecc</span>
              </h2>
              <h4 className="mb-4 fw-semibold" style={primaryColor}>
                Your Digital Marketing Partner: Search Engine Optimization
              </h4>
              <p className="mb-4 text-black">
                Search engine optimization, or SEO, is technically a marketing
                tool rather than a form of marketing in itself. The Balance
                defines it as “the art and science of making web pages attractive
                to search engines.” The "art and science" part of SEO is what’s
                most important. SEO is a science because it requires you to
                research and weigh different contributing factors to achieve the
                highest possible ranking on a search engine results page (SERP).
              </p>

              <div className="d-flex flex-column">
                <a className="h5 mb-3 text-white" href="#">
                  <i className="bi bi-arrow-right me-2" style={primaryColor} />
                  <span style={primaryColor}>Quality of Content</span>
                </a>
                <a className="h5 mb-3 text-white" href="#">
                  <i className="bi bi-arrow-right me-2" style={primaryColor} />
                  <span style={primaryColor}>Level of User Engagement</span>
                </a>
                <a className="h5 mb-3 text-white" href="#">
                  <i className="bi bi-arrow-right me-2" style={primaryColor} />
                  <span style={primaryColor}>Mobile-Friendliness</span>
                </a>
              </div>

              <div className="mt-4">
                <img
                  className="img-fluid rounded w-100"
                  src={seo1}
                  alt="SEO concept"
                  style={{ objectFit: "cover", maxHeight: "400px" }}
                />
              </div>
            </div>

            {/* Right Image & Content Section */}
            <div className="col-lg-6">
              <img
                className="img-fluid rounded w-100 mb-4 mb-lg-5"
                src={seo2}
                alt="SEO analytics"
                style={{ objectFit: "cover", maxHeight: "400px" }}
              />
              <h4 className="mb-3 fw-semibold" style={primaryColor}>
                Why Choose Us for SEO Services?
              </h4>
              <p className="text-black">
                ACOs aim to improve the quality of care for patients by
                promoting coordinated and efficient care. Content that
                highlights these benefits can attract patients looking for
                high-quality healthcare providers. ACOs focus on reducing
                unnecessary spending and improving efficiency in healthcare
                delivery. Creating content that showcases these cost-saving
                measures can appeal to both patients and healthcare
                organizations. ACOs must comply with specific regulations and
                quality benchmarks set by organizations like Medicare. Content
                that explains how an ACO meets or exceeds these standards can
                build trust and credibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}
    </>
  );
};

export default Seo;
