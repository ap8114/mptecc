import React from 'react'
import { useEffect } from 'react';

import { FaCircle } from "react-icons/fa"; // For the small blue dots
import AOS from "aos";
import "aos/dist/aos.css"; // For animations
import comm1 from '../assets/services/comm1.png'
const CommunicationMarketing = () => {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
}, []);
  return (
    <>
      {/* Intro Section */}
      <section className="intro">
        <div className="intro__box">
          <div className="intro__text">
            <h1 className="intro__heading">
              <span>Digital</span> Dynamics <span>Marketing</span> Agency
            </h1>
            <h3 className="intro__sub-heading">
              <span>Redefining</span> what is possible
            </h3>
            <h4>
              If money is no object you've come to the right place. DDMA prides
              itself on being the premier of web design and marketing for the
              aspiring entrepreneur.
            </h4>
          </div>
        </div>
      </section>
      {/* About Start */}
      <div className="container-fluid bg-secondary p-0">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5">
            <h1 className="display-5 mb-4">
              Marketing<span style={{ color: "rgb(73, 153, 227)" }}>Communication</span>
            </h1>
            <h4 style={{ color: "rgb(73, 153, 227)" }} className="mb-4">
              Digital marketing simplified for you
            </h4>
            <p className="mb-4">
              Marketing communications refers to the various methods and tools that
              companies use to communicate with their target audience and promote
              their products, services, or brand. This encompasses a wide range of
              activities and strategies aimed at engaging customers, building brand
              awareness, and driving sales.Advertising: Paid promotion of products
              or services through various media channels such as television, radio,
              print, online, and outdoor ads. Public Relations (PR): Managing the
              public image of a company or brand through media relations, press
              releases, events, and community engagement. Sales Promotion:
              Short-term incentives to encourage the purchase or sale of a product
              or service, such as discounts, coupons, contests, and free samples.
              Direct Marketing: Communicating directly with targeted customers
              through channels like email, direct mail, telemarketing, and text
              messaging.
            </p>
            <a href="" className="btn btn-dark py-md-3 px-md-5 rounded-pill">
              Let's Talk
            </a>
          </div>
          <div className="col-lg-6">
            <div
              className=" justify-content-center"
              style={{ borderRadius: 20, marginTop: 100 }}
            >
              <div className="row">
                <img
                  src={comm1}
                  alt=""
                />
              </div>
              <div className="d-flex text-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* why choose us  */}
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
            backgroundImage: "url('https://i.postimg.cc/rmNZNb2N/final-resized-circle-image.png')",
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
      {/* Features End */}
    </>
  )
}

export default CommunicationMarketing