import React from 'react';
import { Link } from 'react-router-dom';
import cm1 from '../assets/services/cm1.png'
import cm2 from '../assets/services/cm2.png'
const ContentMarketing = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-5 text-white mb-3 ">Content Marketing</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
            <a href="#" style={{ color: "rgb(73, 153, 227)" }}>
              About
            </a>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Content Marketing Start */}
      <div className="container bg-secondary p-0">
        <div className="row g-0">
          {/* Left Section */}
          <div className="col-lg-6 py-5 px-4">
            <h2 className="mb-3">
              Welcome To <span style={{ color: "rgb(73, 153, 227)" }}>MP Tecc</span>
            </h2>
            <h4 className="mb-4" style={{ color: "rgb(73, 153, 227)" }}>
              Your digital marketing part: Content Marketing
            </h4>
            <p className="mb-4">
              As mentioned, the quality of your content is a key component of an optimized page. As a result,
              SEO is a major factor in content marketing, a strategy based on the distribution of relevant
              and valuable content to a target audience. As in any marketing strategy, the goal of content
              marketing is to attract leads that ultimately convert into customers.
            </p>

            {/* Categories */}
            <div className="bg-secondary">
              <div className="d-flex flex-column justify-content-start">
                {[
                  "Blog posts",
                  "E-books",
                  "Newsletters",
                  "Video or audio transcripts",
                  "Whitepapers",
                  "Infographics"
                ].map((item, index) => (
                  <a className="h5 mb-3" href="#" key={index}>
                    <i
                      className="bi bi-arrow-right me-2"
                      style={{ color: "rgb(73, 153, 227)" }}
                    />
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <img
              className="img-fluid w-100 mt-4 rounded-4"
              src={cm1}
              alt="digital marketing"
              style={{ height: 300, objectFit: "cover" }}
            />
          </div>

          {/* Right Section */}
          <div className="col-lg-6 py-5 px-4">
            <img
              className="img-fluid w-100 mb-5"
              src={cm2}
              alt="digital marketing"
              style={{ height: 400, objectFit: "cover" }}
            />
            <h4 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>
              Why Us for Content Marketing?
            </h4>
            <p>
              We know every organization has its own goals, competition, vision, and missions.
              Our digital marketing specialists don’t just manage your content – they craft
              effective strategies tailored to your business. We provide high-quality website,
              social media, blog, video, and email content that generates more revenue and leads.
              Let’s connect and take your brand to the next level with the best content marketing
              agency in Pune.
            </p>
          </div>
        </div>
      </div>
      {/* Content Marketing End */}
    </>
  );
};

export default ContentMarketing;
