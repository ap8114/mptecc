import React from "react";
import lead11 from '../assets/services/lead11.png'
const LeadGeneration = () => {
  return (
    <>
      {/* About Start */}
      <div className="container-fluid bg-secondary py-4">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5 animate-on-load">
            <h1 className="display-5 mb-4">Lead Generation Services</h1>
            <p className="mb-4">
              Unlock the potential of your business with MP Tecc advanced lead
              generation services. We specialize in creating tailored strategies
              that attract, engage, and convert prospects into loyal customers,
              driving sustainable growth for your business.
            </p>
          </div>
          <div className="col-lg-6 mt-5">
            <img
              src={lead11}
              className="img-fluid h-75"
              alt="Lead Generation"
            />
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Slider Start */}
      <div className="container py-5">
        <h1 className="text-center mb-2">Our Lead Generation Services</h1>
        <div className="faders">
          <div className="left" />
          <div className="right" />
        </div>
        <div className="items">
          <div className="entry">
            <h2 className="text-center">Multi-Channel Campaigns</h2>
            <ul>
              <li>
                Implement campaigns across multiple channels, including social
                media, email, and search engines, to reach a wider audience.
              </li>
              <li>
                Develop personalized messaging and offers that resonate with each
                segment.
              </li>
            </ul>
          </div>
          <div className="entry">
            <h2 className="text-center">Targeted Audience Segmentation</h2>
            <ul>
              <li>
                Identify and segment your target audience based on demographics,
                behavior, and interests.
              </li>
              <li>
                Utilize a mix of content types, such as blogs, webinars, and
                infographics, to engage prospects.
              </li>
            </ul>
          </div>
          <div className="entry">
            <h2 className="text-center">Landing Page Optimization</h2>
            <ul>
              <li>
                Design and optimize landing pages to maximize conversions with
                clear CTAs and user-friendly layouts.
              </li>
              <li>
                Conduct A/B testing to identify the most effective page elements
                and layouts.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Service Slider End */}

      {/* Key Benefits Section */}
      <div className="container-fluid pt-6 px-5">
        <div className="text-center mx-auto mb-5">
          <h1 className="display-5 mb-0">Key Benefits of Lead Generation</h1>
          <hr className="w-25 mx-auto bg-dark" />
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center px-5">
              <div
                className="d-flex align-items-center justify-content-center text-white rounded-circle mx-auto mb-4"
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "rgb(7, 43, 77)",
                }}
              >
                <i className="fa fa-user-tie fa-2x " />
              </div>
              <h3 className="mb-3">Targeted Reach</h3>
              <p className="mb-0">
                Connect with prospects who are genuinely interested in your
                offerings.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center px-5">
              <div
                className="d-flex align-items-center justify-content-center text-white rounded-circle mx-auto mb-4"
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "rgb(7, 43, 77)",
                }}
              >
                <i className="fa fa-chart-pie fa-2x" />
              </div>
              <h3 className="mb-3">Increased Sales Opportunities</h3>
              <p className="mb-0">
                Expand your sales pipeline with qualified leads ready to convert.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center px-5">
              <div
                className="d-flex align-items-center justify-content-center text-white rounded-circle mx-auto mb-4"
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "rgb(7, 43, 77)",
                }}
              >
                <i className="fa fa-chart-line fa-2x" />
              </div>
              <h3 className="mb-3">Improved ROI</h3>
              <p className="mb-0">
                Maximize your marketing spend by focusing on strategies that
                deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Key Benefits Section End */}
    </>
  );
};

export default LeadGeneration;