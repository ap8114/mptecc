import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa"; // for small blue dot
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import OurTechnologies from "./OurTechnologies";
import KeyProjects from "./KeyProjects";
import ClientReview from "./ClientReview";
import Latestblog from "./latestblog";
import { useLocation } from "react-router-dom";
import ReviewCarousel from "./ReviewCarousel";
import Digitalmarketing from '../assets/Digitalmarketing.gif'; // path from current file
import whychooseus from '../assets/whychooseus.png'; // path from current file
import philosopy from '../assets/philosopy.png'; // path from current file

const ScrollToHashElement = () => {                                                                                                                                                                                     
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <ScrollToHashElement />

      {/* Banner Section */}
      <section className="bannnernew text-white" style={{ backgroundColor: "rgb(59, 143, 224)", padding: "70px 0" }}>
  <div className="container hero-section py-0">
    <div className="row align-items-center">
      
      {/* Left Text Section */}
      <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0" data-aos="fade-right">
        <h1 className="fw-bolder text-white" style={{ fontSize: "clamp(40px, 8vw, 70px)", lineHeight: "1.2" }}>
          <span style={{ display: "block" }}>WELCOME TO</span>
          <span style={{ display: "block", fontWeight: 850, fontSize: "clamp(50px, 10vw, 100px)" }}>
            MP<span className="ms-2" style={{ fontWeight: "800" }}>Tecc</span>
          </span>
        </h1>
        <p className="lead mt-3 fs-4">A marketing Agency to grow Your Business.</p>
      </div>

      {/* Right Image Section */}
      {/* Right Image Section */}
<div className="col-lg-6 text-center" data-aos="fade-left">
  <img
    src="https://demo.epic-webdesign.com/tf-smart/v1/images/digital-marketing.png"
    alt="Marketing Illustration"
    className="img-fluid hero-image"
  />
</div>


    </div>
  </div>
</section>






      {/* About Section */}
   <section className="py-4 py-lg-5" style={{backgroundColor: "#f1f2f6"}}>
  <div className="container">
    <div className="row align-items-stretch g-4 g-lg-5">
      {/* Left Image */}
      <div 
        className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center p-3" 
        data-aos="fade-right"
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "0.5rem",
          backgroundColor: "white",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
        }}
      >
        <img
          src={Digitalmarketing}
          alt="Digital Marketing"
          className="img-fluid rounded-lg w-100 h-auto"
          style={{
            maxHeight: "400px",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>

      {/* Right Text */}
      <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
        <div 
          className="text-center text-lg-start p-2 p-lg-0" 
          data-aos="fade-left"
          style={{height: "100%"}}
        >
          <h1 className="fw-bold mb-3 mb-lg-4" style={{ 
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            lineHeight: "1.2",
            color: "#333"
          }}>
            Digital Marketing <br className="d-none d-lg-block" /> simplified for you
          </h1>
          
          <div className="d-flex justify-content-center justify-content-lg-start">
            <div style={{maxWidth: "600px"}}>
              <p className="text-muted mb-0" style={{ 
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: "1.6"
              }}>
                MP Tecc is a B2B Digital Marketing Agency that is committed to crafting quality campaigns for complete funnel marketing strategies for B2B Tech and SaaS companies across the globe.
              </p>
              
              <p className="text-muted mt-3 mb-0" style={{ 
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: "1.6"
              }}>
                As a content-first digital marketing agency, we deliver on both strategy and execution. Our team employs a scientific approach to inbound and outbound marketing strategies to create the ideal digital content solutions for achieving goals.
              </p>
              
              <p className="text-muted mt-3 mb-0" style={{ 
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: "1.6"
              }}>
                We ideate and execute cutting-edge digital campaigns to draw your target audience and drive leads through your sales funnel. We also have expertise in ABM marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Services */}
      <OurTechnologies />

      {/* What We Offer Section */}
      <section className="py-4" style={{ backgroundColor: "#0C1C44" }}>
  <div className="container">
    {/* Section Heading */}
    <div className="text-center mb-5">
      <h1 className="fw-bold text-white">
        What We <span style={{ color: "#3B8FE0" }}>Offer</span>
      </h1>
    </div>

    {/* Services Cards */}
    <div className="row g-4">
      
      {/* Service 1 */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
        <div className="text-center rounded-4 p-4 h-100"style={{ border: "1px solid #3B8FE0", color: "#fff" }}>
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            <i className="fa fa-chart-line text-dark fs-4"></i>
          </div>
          <h4 className="fw-bold mb-3" style={{ color: "#3B8FE0" }}>Strategy Development</h4>
          <p>We help businesses develop effective strategies that drive measurable results.</p>
        </div>
      </div>

      {/* Service 2 */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
        <div className="text-center rounded-4 p-4 h-100" style={{ border: "1px solid #3B8FE0", color: "#fff" }}>
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            <i className="fa fa-cogs text-dark fs-4"></i>
          </div>
          <h4 className="fw-bold mb-3" style={{ color: "#3B8FE0" }}>Automation Solutions</h4>
          <p>Automate your processes and improve efficiency with our tailor-made solutions.</p>
        </div>
      </div>

      {/* Service 3 */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
        <div className="text-center rounded-4 p-4 h-100" style={{ border: "1px solid #3B8FE0", color: "#fff" }}>
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            <i className="fa fa-bullhorn text-dark fs-4"></i>
          </div>
          <h4 className="fw-bold mb-3" style={{ color: "#3B8FE0" }}>Campaign Management</h4>
          <p>We design and manage campaigns that reach your target audience and generate leads.</p>
        </div>
      </div>

      {/* Service 4 */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="800">
        <div className="text-center rounded-4 p-4 h-100" style={{ border: "1px solid #3B8FE0", color: "#fff" }}>
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            <i className="fa fa-rocket text-dark fs-4"></i>
          </div>
          <h4 className="fw-bold mb-3" style={{ color: "#3B8FE0" }}>Growth Hacking</h4>
          <p>Maximize your business potential with creative growth hacking techniques.</p>
        </div>
      </div>

      {/* Service 5 */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="1000">
        <div className="text-center rounded-4 p-4 h-100" style={{ border: "1px solid #3B8FE0", color: "#fff" }}>
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            <i className="fa fa-search text-dark fs-4"></i>
          </div>
          <h4 className="fw-bold mb-3" style={{ color: "#3B8FE0" }}>SEO Optimization</h4>
          <p>Boost your website's visibility on search engines and increase organic traffic.</p>
        </div>
      </div>

      {/* Service 6 */}
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="1200">
        <div className="text-center rounded-4 p-4 h-100" style={{ border: "1px solid #3B8FE0", color: "#fff" }}>
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 60, height: 60 }}>
            <i className="fa fa-mobile-alt text-dark fs-4"></i>
          </div>
          <h4 className="fw-bold mb-3" style={{ color: "#3B8FE0" }}>Mobile Marketing</h4>
          <p>Reach your audience on their mobile devices with engaging marketing strategies.</p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Projects */}
      <KeyProjects />

      {/* Why Choose Us Section */}
   <section className="py-4 py-lg-5" style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
  <div className="container">
    <div className="text-center mb-4 mb-md-5">
      <h1 className="h2 h1-lg text-white">
        Why Choose <span style={{ color: "#3A8DDE" }}>Us!!!</span>
      </h1>
    </div>

    <div className="row justify-content-center align-items-center position-relative g-4">
      {/* Left Side Content - Shows on md and up */}
      <div className="col-12 col-md-4 d-none d-md-flex flex-column align-items-end gap-4 pe-md-4 pe-lg-5">
        {["Cost-effective", "Targeted", "Measurable"].map((title, idx) => (
          <div key={`left-${idx}`} className="text-end" data-aos="fade-up" data-aos-delay={idx * 150}>
            <h4 className="h5 d-flex align-items-center justify-content-end gap-2" style={{color:"#3A8DDE"}}>
              <FaCircle color="#3A8DDE" size={12} />
              {title}
            </h4>
            <p className="small m-0" style={{ maxWidth: "300px" }}>
              Highlighting how digital marketing can be more budget-friendly compared to traditional marketing methods due to its ability to target specific audiences and track ROI more effectively.
            </p>
          </div>
        ))}
      </div>

      {/* Center Circle Image */}
      <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
        <div
          className="rounded"
          style={{
            width: "100%",
            maxWidth: "350px",
            aspectRatio: "1/1",
            backgroundColor: "#3A8DDE",
           backgroundImage: `url(${whychooseus})`, // 👈 Use imported image here
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "4px solid #ffffff",
            boxShadow: "0 0 30px rgba(58, 141, 222, 0.4)",
          }}
        ></div>
      </div>

      {/* Right Side Content - Shows on md and up */}
      <div className="col-12 col-md-4 d-none d-md-flex flex-column align-items-start gap-4 ps-md-4 ps-lg-5">
        {["Flexible", "Global Reach", "Engagement"].map((title, idx) => (
          <div key={`right-${idx}`} className="text-start" data-aos="fade-up" data-aos-delay={idx * 150}>
            <h4 className="h5 d-flex align-items-center gap-2" style={{color:"#3A8DDE"}}>
              {title}
              <FaCircle color="#3A8DDE" size={12} />
            </h4>
            <p className="small m-0" style={{ maxWidth: "300px" }}>
              Highlighting how digital marketing can be more budget-friendly compared to traditional marketing methods due to its ability to target specific audiences and track ROI more effectively.
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Content - Shows on sm and down */}
      <div className="col-12 d-md-none">
        <div className="row g-4">
          {["Cost-effective", "Targeted", "Measurable", "Flexible", "Global Reach", "Engagement"].map((title, idx) => (
            <div key={`mobile-${idx}`} className="col-12 col-sm-6" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="text-center p-3">
                <h4 className="h5 d-flex align-items-center justify-content-center gap-2" style={{color:"#3A8DDE"}}>
                  {idx <= 2 && <FaCircle color="#3A8DDE" size={12} />}
                  {title}
                  {idx > 2 && <FaCircle color="#3A8DDE" size={12} />}
                </h4>
                <p className="small m-0 mt-2">
                  Highlighting how digital marketing can be more budget-friendly compared to traditional marketing methods due to its ability to target specific audiences and track ROI more effectively.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Philosophy & Vision Section */}
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


      {/* Client Reviews Section */}
      <ClientReview />

      {/* Latest Blog Section */}
      <Latestblog />

    {/* google review section review curosol  */}
    <ReviewCarousel/>
    </>
  );
};

export default Home;
