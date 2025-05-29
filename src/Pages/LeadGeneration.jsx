import React from "react";
import lead11 from "../assets/services/lead11.png";

const LeadGeneration = () => {
  return (
    <>
      {/* Lead Generation Section */}
<div className="container-fluid bg-secondary py-5">
  <div className="row align-items-center">
    {/* Text Content */}
    <div className="col-lg-6 mb-4 mb-lg-0">
      <div className="px-4 px-lg-5">
        <h1 className="display-5 mb-4">Lead Generation Services</h1>
        <p className="mb-0">
          Unlock the potential of your business with MP Tecc advanced lead generation services. 
          We specialize in creating tailored strategies that attract, engage, and convert prospects 
          into loyal customers, driving sustainable growth for your business.
        </p>
      </div>
    </div>

    {/* Image */}
    <div className="col-lg-6">
      <div className="px-4 px-lg-5">
        <img
          src={lead11}
          alt="Lead Generation"
          className="img-fluid w-100 rounded"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
</div>


      {/* Service Slider Section */}
      <div className="container py-5">
        <h1 className="text-center mb-5">Our Lead Generation Services</h1>
        <div className="faders">
          <div className="left" />
          <div className="right" />
        </div>
        <div className="items row">
          <div className="entry col-md-4 mb-4">
            <h4 className="text-center">Multi-Channel Campaigns</h4>
            <ul>
              <li>
                Implement campaigns across social media, email, and search to reach
                a wider audience.
              </li>
              <li>
                Develop personalized messaging and offers for different audience
                segments.
              </li>
            </ul>
          </div>
          <div className="entry col-md-4 mb-4">
            <h4 className="text-center">Targeted Audience Segmentation</h4>
            <ul>
              <li>
                Identify and segment your target audience based on data insights.
              </li>
              <li>
                Use blogs, webinars, and infographics to engage leads effectively.
              </li>
            </ul>
          </div>
          <div className="entry col-md-4 mb-4">
            <h4 className="text-center">Landing Page Optimization</h4>
            <ul>
              <li>
                Design high-converting landing pages with clear CTAs.
              </li>
              <li>
                Run A/B tests to refine layout and messaging performance.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="container-fluid pt-6 px-5">
        <div className="text-center mx-auto mb-5">
          <h1 className="display-5 mb-0">Key Benefits of Lead Generation</h1>
          <hr className="w-25 mx-auto bg-dark" />
        </div>
        <div className="row g-5">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center px-5 py-4 h-100">
              <div
                className="d-flex align-items-center justify-content-center text-white rounded-circle mx-auto mb-4"
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "rgb(7, 43, 77)",
                }}
              >
                <i className="fa fa-user-tie fa-2x" />
              </div>
              <h3 className="mb-3">Targeted Reach</h3>
              <p>
                Connect with prospects who are genuinely interested in your
                offerings.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center px-5 py-4 h-100">
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
              <p>
                Expand your sales pipeline with qualified leads ready to convert.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-secondary text-center px-5 py-4 h-100">
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
              <p>
                Maximize your marketing spend by focusing on strategies that
                deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadGeneration;
