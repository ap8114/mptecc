import React from "react";
import { Link } from "react-router-dom";
import af1 from '../assets/services/af1.png';
import af2 from '../assets/services/af2.png';

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
            <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
            <span style={{ color: "rgb(73, 153, 227)" }}>Affiliate Marketing</span>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container-fluid bg-secondary py-5 px-3 px-md-5">
        <div className="row align-items-center g-5">
          {/* Text Content */}
          <div className="col-lg-6">
            <h2 className="mb-4">
              Affiliate <span style={{ color: "rgb(73, 153, 227)" }}>Marketing:</span>
            </h2>
            <h4 style={{ color: "rgb(73, 153, 227)" }}>Benefits of Affiliate Marketing:</h4>
            <ul style={{ fontSize: "18px", paddingLeft: "20px" }}>
              <li>Low cost of start-up</li>
              <li>Passive income potential</li>
              <li>Performance-based rewards</li>
              <li>Wider audience reach</li>
              <li>Scalability</li>
              <li>No customer support required</li>
            </ul>
            <p style={{ fontSize: "18px" }}>
              Affiliate marketing can be a powerful tool for driving sales and
              growth when implemented effectively. By understanding the key
              players, types, benefits, challenges, and best practices,
              businesses can create successful affiliate marketing programs that
              benefit both the merchant and the affiliates.
            </p>
          </div>

          {/* Image Column */}
          <div className="col-lg-6">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <img
                src={af1}
                alt="Affiliate Marketing"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "450px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default AffiliateMarketing;
