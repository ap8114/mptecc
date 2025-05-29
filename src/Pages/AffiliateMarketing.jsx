import React from "react";
import { Link } from "react-router-dom";
import af1 from '../assets/services/af1.png'
import af2 from '../assets/services/af2.png'

const AffiliateMarketing = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-white">Affiliate Marketing</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i
              className="far fa-square px-2"
              style={{ color: "rgb(73, 153, 227)" }}
            />
            <a href="#" style={{ color: "rgb(73, 153, 227)" }}>
              Affiliate Marketing
            </a>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container-fluid bg-secondary p-0">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5">
            <h2 className="mb-4">
              Affiliate{" "}
              <span style={{ color: "rgb(73, 153, 227)" }}>Marketing:</span>
            </h2>
            <h4 style={{ color: "rgb(73, 153, 227)" }}>
              Benefits of Affiliate Marketing:
            </h4>
            <ul style={{ fontSize: 19, paddingLeft: "20px" }}>
              <li>Low cost of start-up</li>
              <li>Passive income potential</li>
              <li>Performance-based rewards</li>
              <li>Wider audience reach</li>
              <li>Scalability</li>
              <li>No customer support required</li>
            </ul>
            <p style={{ fontSize: 19 }}>
              Affiliate marketing can be a powerful tool for driving sales and
              growth when implemented effectively. By understanding the key
              players, types, benefits, challenges, and best practices,
              businesses can create successful affiliate marketing programs that
              benefit both the merchant and the affiliates.
            </p>
          </div>
          <div className="col-lg-6 mt-5">
            <img
              className="img-fluid"
              src={af1}
              alt="Affiliate Marketing"
            />
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default AffiliateMarketing;
