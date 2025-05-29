import React from "react";
import { Link } from "react-router-dom";
import ppc1 from '../assets/services/ppc1.png'
import ppc2 from '../assets/services/ppc2.png'

const Ppc = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-white">
              Pay-Per-Click Marketing
            </h1>
            <div className="mt-2">
              <Link to="/" style={{ color: "rgb(73, 153, 227)" }} className="fw-semibold">
                Home
              </Link>
              <i
                className="far fa-square px-2"
                style={{ color: "rgb(73, 153, 227)" }}
              />
              <a href="#" style={{ color: "rgb(73, 153, 227)" }} className="fw-semibold">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container bg-secondary p-0">
        <div className="row g-0">
          {/* Left Column */}
          <div className="col-lg-6 py-5 px-4">
            <h2 className="mb-4 fw-bold text-black">
              Welcome To{" "}
              <span style={{ color: "rgb(73, 153, 227)" }}>MP Tecc</span>
            </h2>
            <h4 className="mb-4 fw-semibold" style={{ color: "rgb(73, 153, 227)" }}>
              Your Digital Marketing Partner: Pay-Per-Click Marketing
            </h4>
            <p className="mb-4 text-black">
              Pay-per-click, or PPC, is a form of digital marketing in which you
              pay a fee every time someone clicks on your digital ads. So,
              instead of paying a set amount to constantly run targeted ads on
              online marketing channels, you only pay for the ads individuals
              interact with. How and when people see your ad is a bit more
              complicated.
            </p>
            <img
              className="img-fluid w-100 mt-4 rounded"
              src={ppc1}
              alt="PPC marketing"
              style={{ height: 300, objectFit: "cover" }}
            />
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center px-4">
            <img
              className="img-fluid w-100 rounded mt-2"
              src={ppc2}
              alt="PPC concept"
              style={{ height: 350, objectFit: "cover" }}
            />
            <div className="mt-5">
              <h4 className="mb-4 fw-semibold" style={{ color: "rgb(73, 153, 227)" }}>
                Why Us for Pay-Per-Click Marketing?
              </h4>
              <p className="text-black">
                Our team of PPC specialists has extensive experience in creating
                and managing successful campaigns across various industries. We
                leverage our in-depth knowledge to ensure your ads reach the
                right audience and deliver exceptional results. We understand
                that each business is unique. Our PPC strategies are tailored to
                fit your specific goals, target audience, and budget. We conduct
                thorough market research to create personalized campaigns that
                maximize your return on investment. We believe in transparency
                and accountability. You will receive detailed reports that
                highlight key metrics such as click-through rates, conversion
                rates, and return on ad spend (ROAS). Our comprehensive insights
                help you understand the impact of your campaigns and guide
                future decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default Ppc;
