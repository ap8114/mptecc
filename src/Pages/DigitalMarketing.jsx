import React from 'react';
import { Link } from 'react-router-dom';
import digital from '../assets/services/digital.png'
import digital1 from '../assets/services/digital1.png'

const DigitalMarketing = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid py-5 bg-dark">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-5 text-white mb-3">Digital Marketing</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
            <span style={{ color: "rgb(73, 153, 227)" }}>Digital Marketing</span>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Main Content Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="row align-items-center g-5 px-3 px-lg-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <h2 className="mb-4" style={{ color: "#212529" }}>
              Data-Driven <span style={{ color: "rgb(73, 153, 227)" }}>Digital Strategies</span>
            </h2>
            <p className="mb-4">
              Digital marketing is more than just online visibility — it’s about performance,
              personalization, and results. We design ROI-driven strategies tailored to your
              audience and goals. From SEO to PPC and social media, we do it all.
            </p>

            {/* Service Badges */}
            <div className="d-flex flex-wrap gap-3 ">
              {[
                "Search Engine Optimization (SEO)",
                "Social Media Marketing (SMM)",
                "Google Ads (PPC)",
                "Email Campaigns",
                "Content Strategy",
                "Conversion Rate Optimization"
              ].map((service, index) => (
                <span
                  key={index}
                  className="badge text-bg-dark px-3 py-2"
                  style={{
                    fontSize: "0.95rem",
                    backgroundColor: "rgba(73, 153, 227, 0.1)",
                    color: "rgb(73, 153, 227)",
                    border: "1px solid rgb(73, 153, 227)",
                    borderRadius: "30px",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>

            <img
              className="img-fluid rounded-4 mt-4"
              src={digital}
              alt="Digital strategy"
              style={{ height: 300, width: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <img
              className="img-fluid rounded-4 mb-4"
              src={digital1}
              alt="Marketing team"
              style={{ height: 400, width: "100%", objectFit: "cover" }}
            />
            <h4 style={{ color: "rgb(73, 153, 227)" }}>Why Choose Us?</h4>
            <p>
              Our marketing experts blend creativity with analytics to grow your online presence.
              We don’t just run ads — we craft full-funnel campaigns that drive traffic,
              engage users, and convert leads. Whether you’re a startup or an established brand,
              we help amplify your message where it matters most.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
