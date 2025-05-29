import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import ecommerceservice from "../assets/logo/ecommerce-services.png"; // Ensure this path is correct
import websitedesign from "../assets/logo/websitedesign.png"; // Ensure this path is correct
import digitalmarketing from "../assets/logo/digitalmarketing.png"; // Ensure this path is correct
import seoservices from "../assets/logo/seoservices.png"; // Ensure this path is correct
import contentMarketing from "../assets/logo/contentmarketing.png"; // Ensure this path is correct
import aisoftware from "../assets/logo/aisoftware1.png"; // Ensure this path is correct
import searchengine from "../assets/logo/searchengine.png"; // Ensure this path is correct
import payperclick from "../assets/logo/payperclick.png"; // Ensure this path is correct
import affiliateMarketing from "../assets/logo/affiliatemarketing.png"; // Ensure this path is correct
import socialmedia from "../assets/logo/socialmedia.png"; // Ensure this path is correct
import influencerMarketing from "../assets/logo/infulencermarketing.png"; // Ensure this path is correct
import analyticdata from "../assets/logo/analyticdata.png"; // Ensure this path is correct
import communicationMarketing from "../assets/logo/communication marketing.png"; // Ensure this path is correct
import leadgeneration from "../assets/logo/leadgeneration.png"; // Ensure this path is correct
import onlineads from "../assets/logo/onlineads.png"; // Ensure this path is correct
import powerbi from "../assets/logo/powerbi.png"; // Ensure this path is correct
import smartsheet from "../assets/logo/smartsheet.png"; // Ensure this path is correct
import uiuxdesign from "../assets/logo/uiuxdesign.png"; // Ensure this path is correct
import datagovernance from "../assets/logo/datagovernance.png"; // Ensure this path is correct
import conversionrate from "../assets/logo/conversionrate.png"; // Ensure this path is correct
const OurTechnologies = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const technologies = [
    {
      name: "E-Commerce Services",
      src: ecommerceservice, // Updated with a valid image URL
      link: "Ecommerceservice",
      alt: "E-Commerce Services",
    },
    {
      name: "Website Designing",
      src: websitedesign,
      link: "Websitedesign",
      alt: "Website Designing",
    },
    {
      name: "Digital Marketing",
      src: digitalmarketing,
      link: "Digitalmarketing",
      alt: "Digital Marketing",
    },
    {
      name: "SEO Services",
      src: seoservices,
      link: "seo",
      alt: "SEO Services",
    },
    {
      name: "Content Marketing",
      src: contentMarketing,
      link: "contentMarketing",
      alt: "Content Marketing",
    },
    {
      name: "AI Software",
      src: aisoftware,
      link: "ai",
      alt: "AI Software",   
    },
    {
      name: "Search Engine Marketing",
      src: searchengine,
      link: "seooptimization",
      alt: "Search Engine Marketing",
    },
    {
      name: "Pay-Per-Click Marketing",
      src: payperclick,
      link: "ppc",
      alt: "Pay-Per-Click Marketing",
    },
    {
      name: "Affiliate Marketing",
      src: affiliateMarketing,
      link: "affiliateMarketing",
      alt: "Affiliate Marketing",
    },
    {
      name: "Social Media",
      src: socialmedia,
      link: "socialmedia",
      alt: "Social Media",
    },
    {
      name: "Influencer Marketing",
      src: influencerMarketing,
      link: "influencerMarketing",
      alt: "Influencer Marketing",
    },
    {
      name: "Communication Marketing",
      src: communicationMarketing,
      link: "communicationMarketing",
      alt: "Communication Marketing",
    },
    {
      name: "Analytics and Data Reporting",
      src: analyticdata,
      link: "Analyticsdatareporting",
      alt: "Analytics and Data Reporting",
    },
    {
      name: "Lead Generation",
      src: leadgeneration,
      link: "leadgeneration",
      alt: "Lead Generation",
    },
    {
      name: "Online Advertising Services",
      src: onlineads,
      link: "onlineadvertising",
      alt: "Online Advertising Services",
    },
    {
      name: "Power BI",
      src: powerbi,
      link: "Powerbi",
      alt: "Conversion Rate Optimization",
    },
    {
      name: "Smart Sheet",
      src: smartsheet,
      link: "smartsheet",
      alt: "Conversion Rate Optimization",
    },
    {
      name: "UI/UX Design",
      src: uiuxdesign,
      link: "uiux",
      alt: "Conversion Rate Optimization",
    },
    {
      name: "Data Governance",
      src: datagovernance,
      link: "Datagovernance",
      alt: "Conversion Rate Optimization",
    },
    {
      name: "Conversion Rate Optimization",
      src: conversionrate,
      link: "cro",
      alt: "Conversion Rate Optimization",
    },

  ];

  return (
    <div
      className="ourTech-container container-fluid pt-4"
      style={{ padding: "4rem"}}
    >
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <h4 className="ourTech-heading mb-5 display-4 ">Our Amazing Services</h4>
        </div>

        {/* <div className="row ">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`col-lg-3 mb-3 ourTech-card  ${ // Reduced mb-5 to mb-3
                tech.name === "Online Advertising Services" ? "d-flex justify-content-center align-items-center" : ""
              }`}
              data-aos="fade-down"
              data-aos-duration={1000 + Math.floor(index / 4) * 500}
            >
              <div className="row mt-3">
                <div className="col-sm-4">
                  <a href={tech.link}>
                    <img
                      className="ourTech-img image-hover-effect"
                      src={tech.src}
                      loading="eager"
                      decoding="async"
                      alt={tech.alt}
                    />
                  </a>
                </div>
                <div className="col-sm-8 text-center">
                  <a
                    href={tech.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p
                      className="ourTech-title card-title text_hover"
                      style={{ fontWeight: "bold" }}
                    >
                      {tech.name.split(" ").map((word, i) => (
                        <span key={i}>
                          {word}
                          {i === 0 && tech.name.includes(" ") ? <br /> : " "}
                        </span>
                      ))}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
<div className="row g-3">
  {technologies.map((tech, index) => (
    <div
      key={index}
      className="col-lg-3  col-12"
      data-aos="fade-down"
      data-aos-duration={1000 + Math.floor(index / 4) * 500}
    >
      <div
        className="card h-100 p-2 d-flex flex-row align-items-center gap-3 border-0 shadow-sm"
        style={{
          transform: "none",           // ✅ Remove any existing transform
          transition: "none",          // ✅ Disable animation
          willChange: "auto",          // ✅ Prevent pre-animating transform
        }}
      >
        <a href={tech.link}>
          <img
            className="ourTech-img"
            src={tech.src}
            loading="eager"
            decoding="async"
            alt={tech.alt}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </a>
        <div className="flex-grow-1">
          <a
            href={tech.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="card-title mb-0 text-center text-sm-start fw-bold fs-6">
              {tech.name}
            </p>
          </a>
        </div>
      </div>
    </div>
  ))}
</div>



      </div>
    </div>
  );
};

export default OurTechnologies;
