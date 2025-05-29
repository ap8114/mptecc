import React from "react";
import onlineads from '../assets/services/onlineads.png'
const Onlineadvertising = () => {
  return (
    <>
      {/* About Start */}
      <div className="container-fluid bg-secondary py-5">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5 animate-on-load">
            <h1 className="display-5 mb-4">Online Advertising Services</h1>
            <p className="mb-4 fs-4">
              Welcome to MP Tecc, where we specialize in transforming your online
              presence through targeted and effective online advertising solutions.
              Our expert team is committed to helping you reach your audience, boost
              brand visibility, and drive meaningful engagement.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src={onlineads}
              className="img-fluid h-75"
              alt="Online Advertising"
            />
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Key Benefits Section */}
      <div className="container py-5">
        <h1 className="text-center mb-4">Key Benefits of Online Advertising</h1>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="bg-secondary text-center p-4 rounded">
              <h3>Targeted Reach</h3>
              <p>
                Use advanced targeting options to reach specific demographics,
                interests, and behaviors.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-secondary text-center p-4 rounded">
              <h3>Cost-Effective</h3>
              <p>
                Control your budget with flexible spending options and pay-per-click
                models.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-secondary text-center p-4 rounded">
              <h3>Measurable Results</h3>
              <p>
                Track campaign performance in real-time and make data-driven
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Key Benefits Section End */}

      {/* Services Section */}
      <div className="container-fluid pt-6 px-5">
        <div className="text-center mx-auto mb-5">
          <h1 className="display-5 mb-0">Our Online Advertising Services</h1>
          <hr className="w-25 mx-auto bg-primary" />
        </div>
        <div className="row g-5">
          <div className="col-lg-6 col-md-6">
            <div className="service-item bg-secondary text-center px-5 py-4 rounded">
              <h3>Search Engine Advertising (SEA)</h3>
              <ul style={{ listStyle: "disc", textAlign: "justify" }}>
                <li>
                  <strong>Google Ads:</strong> Reach potential customers through
                  targeted search ads that appear on Google search results.
                </li>
                <li>
                  <strong>Bing Ads:</strong> Access a wider audience with ads
                  displayed on the Bing search network.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="service-item bg-secondary text-center px-5 py-4 rounded">
              <h3>Social Media Advertising</h3>
              <ul style={{ listStyle: "disc", textAlign: "justify" }}>
                <li>
                  <strong>Facebook and Instagram Ads:</strong> Engage users with
                  visually appealing ads on the world’s largest social platforms.
                </li>
                <li>
                  <strong>LinkedIn Ads:</strong> Connect with professionals and
                  decision-makers through targeted LinkedIn campaigns.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="service-item bg-secondary text-center px-5 py-4 rounded">
              <h3>Display Advertising</h3>
              <ul style={{ listStyle: "disc", textAlign: "justify" }}>
                <li>
                  <strong>Banner Ads:</strong> Capture attention with visually
                  striking banner ads across various websites.
                </li>
                <li>
                  <strong>Video Ads:</strong> Engage your audience with compelling
                  video content on platforms like YouTube.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="service-item bg-secondary text-center px-5 py-4 rounded">
              <h3>Retargeting Campaigns</h3>
              <ul style={{ listStyle: "disc", textAlign: "justify" }}>
                <li>
                  <strong>Remarketing Ads:</strong> Re-engage past visitors with
                  personalized ads that encourage them to return and convert.
                </li>
                <li>
                  <strong>Dynamic Retargeting:</strong> Show customized ads based on
                  user behavior and interests to boost conversions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section End */}

      {/* Why Choose Us Section */}
      <div className="container-fluid bg-secondary px-5 py-6">
        <div className="row g-5">
          <div className="col-lg-6">
            <h1 className="display-5 mb-4">Why Choose Us?</h1>
            <ul style={{ textAlign: "justify" }}>
              <li>
                <strong>Experienced Team:</strong> Our team of experts has years of
                experience in online advertising and a track record of delivering
                successful campaigns.
              </li>
              <li>
                <strong>Customized Strategies:</strong> We tailor our advertising
                strategies to meet your specific business needs and goals.
              </li>
              <li>
                <strong>Data-Driven Approach:</strong> We use advanced analytics to
                monitor and optimize your campaigns, ensuring maximum efficiency and
                effectiveness.
              </li>
              <li>
                <strong>Transparent Reporting:</strong> Stay informed with detailed
                reports that show the performance and ROI of your campaigns.
              </li>
              <li>
                <strong>Proven Results:</strong> Our clients have seen significant
                improvements in traffic, conversions, and revenue through our online
                advertising services.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img
              src="https://i.ibb.co/56GN81c/quote.jpg"
              className="img-fluid"
              alt="Why Choose Us"
            />
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}
    </>
  );
};

export default Onlineadvertising;