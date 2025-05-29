import React from "react";
import onlineads from "../assets/services/onlineads.png";
// Corrected spelling of philosophy image file


import { FaRegArrowAltCircleDown ,FaCircle} from "react-icons/fa";

const Onlineadvertising = () => {

  return (
    <>
      {/* About Start */}
      <div className="container-fluid bg-secondary py-5">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 px-5">
            <h1 className="display-5 mb-4">Online Advertising Services</h1>
            <p className="mb-4 fs-5">
              Welcome to MP Tecc, where we specialize in transforming your online
              presence through targeted and effective online advertising solutions.
              Our expert team is committed to helping you reach your audience, boost
              brand visibility, and drive meaningful engagement.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="h-100">
              <img
                src={onlineads}
                className="img-fluid w-100 h-100 object-fit-cover"
                alt="Online Advertising"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Key Benefits Section */}
      <div className="container py-5">
        <h1 className="text-center mb-4">Key Benefits of Online Advertising</h1>
        <div className="row g-4">
          {[
            {
              title: "Targeted Reach",
              desc:
                "Use advanced targeting options to reach specific demographics, interests, and behaviors.",
            },
            {
              title: "Cost-Effective",
              desc:
                "Control your budget with flexible spending options and pay-per-click models.",
            },
            {
              title: "Measurable Results",
              desc:
                "Track campaign performance in real-time and make data-driven decisions.",
            },
          ].map((item, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="bg-secondary text-center p-4 h-100 rounded">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Key Benefits End */}

      {/* Services Section */}
      <div className="container-fluid px-5 pt-5">
        <div className="text-center mb-5">
          <h1 className="display-5 mb-0">Our Online Advertising Services</h1>
          <hr className="w-25 mx-auto bg-primary" />
        </div>
        <div className="row g-4">
          {[
            {
              title: "Search Engine Advertising (SEA)",
              items: [
                {
                  bold: "Google Ads:",
                  text: "Reach potential customers through targeted search ads that appear on Google search results.",
                },
                {
                  bold: "Bing Ads:",
                  text: "Access a wider audience with ads displayed on the Bing search network.",
                },
              ],
            },
            {
              title: "Social Media Advertising",
              items: [
                {
                  bold: "Facebook and Instagram Ads:",
                  text: "Engage users with visually appealing ads on the world’s largest social platforms.",
                },
                {
                  bold: "LinkedIn Ads:",
                  text: "Connect with professionals and decision-makers through targeted LinkedIn campaigns.",
                },
              ],
            },
            {
              title: "Display Advertising",
              items: [
                {
                  bold: "Banner Ads:",
                  text: "Capture attention with visually striking banner ads across various websites.",
                },
                {
                  bold: "Video Ads:",
                  text: "Engage your audience with compelling video content on platforms like YouTube.",
                },
              ],
            },
            {
              title: "Retargeting Campaigns",
              items: [
                {
                  bold: "Remarketing Ads:",
                  text: "Re-engage past visitors with personalized ads that encourage them to return and convert.",
                },
                {
                  bold: "Dynamic Retargeting:",
                  text: "Show customized ads based on user behavior and interests to boost conversions.",
                },
              ],
            },
          ].map((service, idx) => (
            <div className="col-lg-6 col-md-6" key={idx}>
              <div className="bg-secondary text-start p-4 h-100 rounded">
                <h3 className="text-center mb-3">{service.title}</h3>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  {service.items.map((item, i) => (
                    <li key={i} className="mb-2">
                      <strong>{item.bold}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Services Section End */}


    </>
  );
};

export default Onlineadvertising;
