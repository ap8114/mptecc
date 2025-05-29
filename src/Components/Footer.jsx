import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Function to handle smooth scroll to top when navigating
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Stay Updated Section */}
      <div style={{ backgroundColor: '#f7f5f0' }} className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
            Stay Update!!!
          </h2>
          <form className="d-flex justify-content-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <input
              type="email"
              className="form-control rounded-0 p-3"
              placeholder="Enter your email"
              style={{ border: '1px solid #ccc', flex: 1 }}
            />
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: '#3498db',
                color: '#fff',
                padding: '0 30px',
                borderRadius: '0',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ backgroundColor: '#09254a' }} className="text-white pt-5 pb-4">
        <div className="container">
          <div className="row gy-4">
            {/* Popular Links */}
            <div className="col-6 col-md-4 col-lg-2">
              <h5 className="mb-4 text-white">Popular Links</h5>
              <ul className="list-unstyled">
                <li><Link className="text-white-50 text-decoration-none" to="/contentMarketing" onClick={handleLinkClick}>Content Marketing</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/ai" onClick={handleLinkClick}>AI Software</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/socialmedia" onClick={handleLinkClick}>Social Media Marketing</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/affiliateMarketing" onClick={handleLinkClick}>Affiliate Marketing</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/ppc" onClick={handleLinkClick}>Pay-per-click Marketing</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-md-4 col-lg-2">
              <h5 className="mb-4 text-white">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link className="text-white-50 text-decoration-none" to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/about" onClick={handleLinkClick}>About Us</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/detail" onClick={handleLinkClick}>Services</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/contact" onClick={handleLinkClick}>Contact</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div className="col-6 col-md-4 col-lg-2">
              <h5 className="mb-4 text-white">Policies</h5>
              <ul className="list-unstyled">
                <li><Link className="text-white-50 text-decoration-none" to="/privacy" onClick={handleLinkClick}>Privacy</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/refundandReturns" onClick={handleLinkClick}>Refund</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/termsandConditions" onClick={handleLinkClick}>Terms</Link></li>
                <li><Link className="text-white-50 text-decoration-none" to="/blog" onClick={handleLinkClick}>Blog</Link></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="mb-4 text-white">Get In Touch</h5>
              <p className="text-white-50 mb-2">Indore, India</p>
              <p className="text-white-50 mb-2">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mptecc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-50 text-decoration-none"
                >
                  info@mptecc.com
                </a>
              </p>
              <p className="text-white-50">
                <a href="tel:+919303322263" className="text-white-50 text-decoration-none">
                  +91-9303322263
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="col-12 col-md-6 col-lg-3 ">
              <h5 className="mb-4 text-white">Connect With Us</h5>
              <p className="text-white-50 mb-3">Your audience is on social media. You should be too.</p>
              <div className="d-flex">
                <a href="https://x.com/mp_tecc" className="btn btn-outline-light btn-sm rounded-circle me-2" style={{ width: '40px', height: '40px' }}>
                  <i className="fab fa-twitter py-2"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575728087904" className="btn btn-outline-light btn-sm rounded-circle me-2" style={{ width: '40px', height: '40px' }}>
                  <i className="fab fa-facebook-f py-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/mp-tecc-b2908b365/" className="btn btn-outline-light btn-sm rounded-circle me-2" style={{ width: '40px', height: '40px' }}>
                  <i className="fab fa-linkedin-in py-2"></i>
                </a>
                <a href="https://www.instagram.com/mp_tecc/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm rounded-circle" style={{ width: '40px', height: '40px' }}>
                  <i className="fab fa-instagram py-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 mt-4 border-top border-light">
            <p className="mb-0 text-white-50 small">
              © 2024 <span className="fw-bold text-white">MP Tecc</span>. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="position-fixed bottom-0 end-0 p-4" style={{ zIndex: 999 }}>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn rounded-circle"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none"
          }}
        >
          <FaWhatsapp style={{ fontSize: "32px" }} />
        </a>
      </div>
    </>
  );
};

export default Footer;