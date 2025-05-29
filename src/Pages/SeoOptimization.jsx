import React from "react";

import AOS from "aos";
import  { useEffect } from "react";
import ClientReview from "./ClientReview";
import Latestblog from "./latestblog";
import philosopy from '../assets/philosopy.png'
import seo1 from '../assets/services/seo1.png'


const SeoOptimization = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>

    
      {/* About Start */}
      <div className="container-fluid bg-secondary p-0">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5 ">
            <h1 className="display-5 mb-4">
              Welcome To <span style={{ color: "rgb(73, 153, 227)" }}>MP Tecc</span>
            </h1>
            <h4 style={{ color: "rgb(73, 153, 227)" }} className="mb-4">
              SEO Optimization Services
            </h4>
            <p className="mb-4">
              Your trusted partner in unlocking the full potential of your
              website through expert SEO optimization. Our comprehensive
              services are designed to improve your online visibility, drive
              more traffic, and increase conversions. Explore how we can help
              your business succeed in the digital world.
            </p>
          </div>
          <div className="col-lg-6 py-6 px-5 ">
            <div className="row">
              <img
                src={seo1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* service-slider-start */}
      <div className="container py-4">
        <h1 className="text-center mb-2">Our SEO Services</h1>
        <div className="faders">
          <div className="left" />
          <div className="right" />
        </div>
        <div className="items">
          <div className="entry">
            <div className="d-flex gap-4 mt-3">
              <img
                src="https://i.ibb.co/1Jj5fSVj/sem.jpg"
                className="slide_img"
                alt="E-Commerce Service"
                style={{ width: "70px", height: "70px", marginLeft: "10px" }}
              />
              <h2>Comprehensive SEO Audits</h2>
            </div>

            <p className="quote" />
            <ul>
              <li>
                Identify strengths and weaknesses in your current SEO strategy.
              </li>
              <li>
                Analyze site structure, content, and performance for improvement
                opportunities.
              </li>
            </ul>
            <p />
          </div>
          <div className="entry">
            <div className="d-flex gap-4 mt-3">
              <img
                src="https://i.ibb.co/FbPxkyz3/social-media.jpg"
                className="slide_img"
                alt="Website Designing Service"
                style={{ width: "70px", height: "70px", marginLeft: "10px" }}
              />
              <h2> Keyword Research and Strategy</h2>
            </div>

            <p className="quote" />
            <ul>
              <li>Discover the best keywords to target for your industry.</li>
              <li>
                Develop a keyword strategy to improve rankings and drive
                qualified traffic.
              </li>
            </ul>
            <p />
          </div>
          <div className="entry">
            <div className="d-flex gap-4 mt-3">
              <img
                src="https://i.ibb.co/Fb17pBGH/ppc.jpg"
                className="slide_img"
                alt="Digital Marketing Service"
                style={{ width: "70px", height: "70px", marginLeft: "10px" }}
              />
              <h2>On-Page SEO Optimization</h2>
            </div>

            <p className="quote" />
            <ul>
              <li>
                Optimize meta tags, headings, and content for search engines.
              </li>
              <li>
                Improve site structure and internal linking to enhance usability
                and ranking.
              </li>
            </ul>
            <p />
          </div>
          <div className="entry">
            <div className="d-flex gap-4 mt-3">
              <img
                src="https://i.ibb.co/rRM8pLVB/seo-image.jpg"
                className="slide_img"
                alt="SEO Services"
                style={{ width: "70px", height: "70px", marginLeft: "10px" }}
              />
              <h2>Technical SEO Enhancements</h2>
            </div>

            <p className="quote" />
            <ul>
              <li>
                Ensure your site is mobile-friendly, fast-loading, and easy to
                crawl.
              </li>
              <li>
                Implement best practices for site speed, schema markup, and
                HTTPS security.
              </li>
            </ul>
            <p />
          </div>
          {/* Repeat entries if needed */}
          <div className="entry">
            <div className="d-flex gap-4 mt-3">
              <img
                src="https://i.ibb.co/tM03HbmV/e-commerce.jpg"
                className="slide_img"
                alt="E-Commerce Service"
                style={{ width: "70px", height: "70px", marginLeft: "10px" }}
              />
              <h2>Link Building Services</h2>
            </div>

            <p className="quote" />
            <ul>
              <li>
                Build a robust backlink profile with high-quality, relevant
                links.
              </li>
              <li>
                Improve domain authority and search engine rankings through
                strategic link acquisition.
              </li>
            </ul>
            <p />
          </div>
          <div className="entry">
            <div className="d-flex gap-4 mt-3">
              <img
                src="https://i.ibb.co/6cvh7ZCm/website-image.jpg"
                className="slide_img"
                alt="Website Designing Service"
                style={{ width: "70px", height: "70px", marginLeft: "10px" }}
              />
              <h2> Content Creation and Optimization</h2>
            </div>

            <p className="quote" />
            <ul>
              <li>
                Craft engaging, SEO-friendly content that resonates with your
                audience.
              </li>
              <li>
                Optimize existing content to improve readability and search
                performance.
              </li>
            </ul>
            <p />
          </div>
          <div className="entry">
            <div className="d-flex gap-4 mt-3">
              <img
                src="https://i.ibb.co/JwQq3Z1x/digital-marketing.jpg"
                className="slide_img"
                alt="Digital Marketing Service"
                style={{ width: "70px", height: "70px", marginLeft: "10px" }}
              />
              <h2>Local SEO Strategies</h2>
            </div>

            <p className="quote" />
            <ul>
              <li>
                Enhance your presence in local search results with Google My
                Business optimization.
              </li>
              <li>
                Build local citations and manage online reviews for better local
                visibility.
              </li>
            </ul>
            <p />
          </div>
          <div className="entry">
            <div className="d-flex gap-4 mt-3">
              <img
                src="https://i.ibb.co/rRM8pLVB/seo-image.jpg"
                className="slide_img"
                alt="SEO Services"
                style={{ width: "70px", height: "70px", marginLeft: "10px" }}
              />
              <h2>E-commerce SEO Services</h2>
            </div>

            <p className="quote" />
            <ul>
              <li>
                .Optimize product pages, descriptions, and reviews for search
                engines.
              </li>
              <li>
                Improve site navigation and usability to boost sales and
                conversions.
              </li>
            </ul>
            <p />
          </div>
        </div>
      </div>
      {/* service-slider-start */}
      {/* Services Start */}
      <div className="container-fluid pt-6 px-5 ">
        <div className="text-center mx-auto mb-5">
          <h1 className="display-5 mb-0">Benefits of SEO:</h1>
          <hr className="w-25 mx-auto bg-dark" />
        </div>
        <div
          className="row g-5"
          data-aos="fade-down"
          style={{ transitionDuration: "2s" }}
        >
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center px-5">
              <div
                className="d-flex align-items-center justify-content-center bg-dark text-black rounded-circle mx-auto mb-4"
                style={{ width: 90, height: 90 }}
              >
                <i className="fa fa-user-tie fa-2x text-white" />
              </div>
              <h3 className="mb-3 ">Increased Visibility</h3>
              <p className="mb-0">
                Rank higher in search results to attract more visitors.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center text-black px-5">
              <div
                className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle mx-auto mb-4"
                style={{ width: 90, height: 90 }}
              >
                <i className="fa fa-chart-pie fa-2x" />
              </div>
              <h3 className="mb-3">Targeted Traffic</h3>
              <p className="mb-0">
                Reach users who are actively searching for your products or
                services.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center px-5">
              <div
                className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle mx-auto mb-4"
                style={{ width: 90, height: 90 }}
              >
                <i className="fa fa-chart-line fa-2x" />
              </div>
              <h3 className="mb-3">Improved User Experience</h3>
              <p className="mb-0">
                {" "}
                Optimize your site for better performance and usability.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Quote Start */}
    <section className="py-4 py-lg-5" style={{ backgroundColor: "#f1f2f5" }}>
  <div className="container">
    <div className="row align-items-stretch g-4 g-lg-5"> {/* Changed to align-items-stretch */}
      {/* Left Content - Now with equal height */}
      <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex" data-aos="fade-right">
        <div className="bg-white p-4 p-lg-5 rounded-3 shadow-sm w-100" style={{ minHeight: "100%" }}>
          <div className="h-100 d-flex flex-column justify-content-between">
            <div>
              <h2 className="fw-bold text-dark mb-3" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                OUR PHILOSOPHY
              </h2>
              <p className="text-dark mb-4" style={{ fontSize: "1.1rem" }}>
                We aim to craft impactful digital strategies that convert and drive measurable results for B2B tech businesses.
              </p>

              <h2 className="fw-bold text-dark mb-3" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                OUR VISION
              </h2>
              <p className="text-dark mb-4" style={{ fontSize: "1.1rem" }}>
                To become the go-to digital marketing agency for B2B tech and SaaS companies globally.
              </p>
            </div>

            <form className="mt-2 mt-lg-4">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control border-dark"
                    placeholder="Full Name"
                    style={{ 
                      height: "50px", 
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px"
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    className="form-control border-dark"
                    placeholder="Email Address"
                    style={{ 
                      height: "50px", 
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px"
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <select
                    className="form-select border-dark"
                    style={{ 
                      height: "50px", 
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px"
                    }}
                  >
                    <option>Select A Service</option>
                    <option>Strategy Consultancy</option>
                    <option>Tax Consultancy</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{
                      height: "50px",
                      backgroundColor: "#3498db",
                      color: "white",
                      border: "1px solid #3498db",
                      borderRadius: "8px",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#2980b9"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#3498db"}
                  >
                    Request A Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Image - Now with matching height container */}
      <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex" data-aos="fade-left">
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <img
            src={philosopy}
            alt="Quote"
            className="img-fluid shadow-sm h-100 w-100"
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "20px",
              objectFit: "cover",
              maxHeight: "100%",
              maxWidth: "100%"
            }}
          />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Quote End */}
      {/* Team Start */}
    <div className="container py-5">
    <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Our Team Members</h2>
        <div className="w-25 mx-auto border-top border-dark border-4 opacity-75 mb-4"></div>
        <p className="lead text-muted">Meet our dedicated team of professionals</p>
    </div>
    <div className="row g-4">
        <div className="col-md-4">
            <div className="team-item position-relative overflow-hidden rounded-3 shadow-sm" style={{ height: "500px" }}>
                <img className="img-fluid w-100 h-100 object-fit-cover" src="https://i.ibb.co/g6grtzz/team-1.jpg" alt="Hitesh Dube" />
                <div className="team-text position-absolute w-100 text-center py-3 bg-dark bg-opacity-90 start-0 bottom-0 translate-y-100 transition-all">
                    <h5 className="text-white mb-1">Hitesh Dube</h5>
                    <p className="text-white-50 mb-0">Position</p>
                    <div className="d-flex justify-content-center mt-2">
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="team-item position-relative overflow-hidden rounded-3 shadow-sm" style={{ height: "500px" }}>
                <img className="img-fluid w-100 h-100 object-fit-cover" src="https://i.postimg.cc/bY3fwmMd/Whats-App-Image-2025-05-20-at-10-44-34-4d791e5e.jpg" />
                <div className="team-text position-absolute w-100 text-center py-3 bg-dark bg-opacity-90 start-0 bottom-0 translate-y-100 transition-all">
                    <h5 className="text-white mb-1">Lalit Singh Thakur</h5>
                    <p className="text-white-50 mb-0">Chief Consultant</p>
                    <div className="d-flex justify-content-center mt-2">
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="team-item position-relative overflow-hidden rounded-3 shadow-sm" style={{ height: "500px" }}>
                <img className="img-fluid w-100 h-100 object-fit-cover" src="https://i.ibb.co/34T90sC/team-3.jpg" alt="Rupesh Singh" />
                <div className="team-text position-absolute w-100 text-center py-3 bg-dark bg-opacity-90 start-0 bottom-0 translate-y-100 transition-all">
                    <h5 className="text-white mb-1">Rupesh Singh</h5>
                    <p className="text-white-50 mb-0">Position</p>
                    <div className="d-flex justify-content-center mt-2">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      {/* Team End */}
      {/* Testimonial Start */}
    <ClientReview/>
      {/* Testimonial End */}
      {/* Blog Section */}
     <Latestblog/>
      {/* Blog End */}
    </>
  );
};

export default SeoOptimization;
