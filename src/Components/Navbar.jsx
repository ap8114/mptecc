import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* Topbar Start */}
      {/* <div className="container-fluid bg-dark ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <Link className="py-2 px-3 border-end text-white text-decoration-none fs-6" to="/privacy">
                Privacy
              </Link>
              <Link className="py-2 px-3 border-end text-white text-decoration-none fs-6" to="/refundandReturns">
                Refund
              </Link>
              <Link className="py-2 px-3 border-end text-white text-decoration-none fs-6" to="/termsandConditions">
                Terms
              </Link>
              <Link className="py-2 px-3 text-white text-decoration-none fs-6" to="/#latest-blog">
                Blog
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center bg-dark text-white px-4 py-2">
              ✅ Gmail Compose Link 
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mptecc.com&su=Inquiry%20from%20Website&body=Hi%20Team%2C%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="me-4 text-white text-decoration-none fs-6"
              >
                <i className="fa fa-envelope me-2"></i> info@mptecc.com
              </a>
              <a href="tel:+918871111868" className="text-white text-decoration-none fs-6">
                <i className="fa fa-phone-alt me-2"></i> +91-8871111868
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm px-4  bg-white " >
        <Link className="navbar-brand p-0" to="/">
          <img
            src="https://i.postimg.cc/FFMZcp5X/Black-and-White-Modern-Minimalist-Streetwear-Logo-removebg-preview.png"
            style={{ width: "200px", height: "80px" }}
            alt="MPTecC Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav ms-auto align-items-center">
            <Link className="nav-link fw-semibold fs-6 text-dark" to="/">Home</Link>
            <Link className="nav-link fw-semibold fs-6 text-dark" to="/about">About</Link>

            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-semibold fs-6 text-dark" href="#" data-bs-toggle="dropdown">
                Service
              </a>
              <div className="dropdown-menu border-0 shadow-sm">
                <Link className="dropdown-item fs-6" to="/contentMarketing">Content Marketing</Link>
                <Link className="dropdown-item fs-6" to="/ai">AI Software</Link>
                <Link className="dropdown-item fs-6" to="/Seo">Search Engine Marketing</Link>
                <Link className="dropdown-item fs-6" to="/ppc">Pay-per-click Marketing</Link>
                <Link className="dropdown-item fs-6" to="/AffiliateMarketing">Affiliate Marketing</Link>
                <Link className="dropdown-item fs-6" to="/Socialmedia">Social Media</Link>
                <Link className="dropdown-item fs-6" to="/communicationMarketing">Communication Marketing</Link>
                <Link className="dropdown-item fs-6" to="Analyticsdatareporting">Analytics and Data Reporting</Link>
                <Link className="dropdown-item fs-6" to="/influencerMarketing">Influencer Marketing</Link>
                <Link className="dropdown-item fs-6" to="/seooptimization">SEO Optimization</Link>
                <Link className="dropdown-item fs-6" to="/ppcadvertising">PPC Advertising</Link>
                <Link className="dropdown-item fs-6" to="/leadgeneration">Lead Generation</Link>
                <Link className="dropdown-item fs-6" to="/onlineadvertising">Online Advertising</Link>
                <Link className="dropdown-item fs-6" to="/cro">Conversion Optimization</Link>
                <Link className="dropdown-item fs-6" to="/Ecommerceservice">E-Commerce Services</Link>
                <Link className="dropdown-item fs-6" to="/Websitedesign">Website Designing</Link>
                <Link className="dropdown-item fs-6" to="/Digitalmarketing">Digital Marketing</Link>
                <Link className="dropdown-item fs-6" to="/Powerbi">Power BI</Link>
                <Link className="dropdown-item fs-6" to="/smartsheet">Smart Sheet</Link>
                <Link className="dropdown-item fs-6" to="/uiux">UI-UX</Link>
                <Link className="dropdown-item fs-6" to="/Datagovernance">Data Governance</Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-semibold fs-6 text-dark" href="#" data-bs-toggle="dropdown">
                Pages
              </a>
              <div className="dropdown-menu border-0 shadow-sm">
                <Link className="dropdown-item fs-6" to="/OurTechnologies">Our Services</Link>
                <Link className="dropdown-item fs-6" to="/KeyProjects">Our Projects</Link>
                <Link className="dropdown-item fs-6" to="/LatestBlog">Latest Blog</Link>
              </div>
            </div>

            <Link className="nav-link fw-semibold fs-6 text-dark" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
