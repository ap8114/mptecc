import React from 'react';
import { Link } from 'react-router-dom';
import ppc1 from '../assets/services/ppc1.png';
import ppc2 from '../assets/services/ppc2.png';

const Ppcadvertising = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-white">Pay-per-click marketing</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
            <span style={{ color: "rgb(73, 153, 227)" }}>About</span>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container bg-secondary py-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-3">
              Welcome To <span style={{ color: "rgb(73, 153, 227)" }}>MP Tecc</span>
            </h2>
            <h4 className="mb-4" style={{ color: "rgb(73, 153, 227)" }}>
              Your digital marketing part: Pay-per-click marketing
            </h4>
            <p>
              Pay-per-click, or PPC, is a form of digital marketing in which you pay
              a fee every time someone clicks on your digital ads. So, instead of
              paying a set amount to constantly run targeted ads on online marketing
              channels, you only pay for the ads individuals interact with. How and
              when people see your ad is a bit more complicated.
            </p>
            <img
              src={ppc1}
              alt="PPC Ad Preview"
              className="img-fluid rounded mt-4"
              style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
            />
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <img
              src={ppc2}
              alt="Why Choose PPC"
              className="img-fluid rounded mb-4"
              style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
            />
            <h4 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>
              Why Us for Pay-per-click marketing?
            </h4>
            <p>
              Our team of PPC specialists has extensive experience in creating and
              managing successful campaigns across various industries. We leverage
              our in-depth knowledge to ensure your ads reach the right audience
              and deliver exceptional results. We understand that each business is
              unique. Our PPC strategies are tailored to fit your specific goals,
              target audience, and budget. We conduct thorough market research to
              create personalized campaigns that maximize your return on investment.
              You will receive detailed reports that highlight key metrics such as
              click-through rates, conversion rates, and return on ad spend (ROAS).
              Our comprehensive insights help you understand the impact of your
              campaigns and guide future decisions.
            </p>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default Ppcadvertising;
