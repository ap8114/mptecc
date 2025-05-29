import React from 'react'
import { Link } from 'react-router-dom'
import social1 from '../assets/services/social1.png'
import social2 from '../assets/services/social2.png'

const Socialmedia = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-white">Social Media Marketing</h1>
            <div className="mt-2">
              <Link to="/" style={{ color: "rgb(73, 153, 227)" }} className="fw-semibold">
                Home
              </Link>
              <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
              <a href="#" style={{ color: "rgb(73, 153, 227)" }} className="fw-semibold">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container bg-secondary p-0">
        <div className="row g-0">
          {/* Left Column */}
          <div className="col-lg-6 d-flex flex-column justify-content-center py-5 px-4">
            <h2 className="mb-4 fw-bold text-black">
              Welcome To{" "}
              <span style={{ color: "rgb(73, 153, 227)" }}>MP Tecc</span>
            </h2>
            <h4 className="mb-4 fw-semibold" style={{ color: "rgb(73, 153, 227)" }}>
              Your Digital Marketing Partner: Social Media Marketing
            </h4>
            <p className="mb-4 text-black">
              Social media marketing means driving traffic and brand awareness by
              engaging people in discussion online. You can use social media
              marketing to highlight your brand, products, services, culture, and
              more. With billions of people spending their time engaging on social
              media platforms, focusing on social media marketing can be worthwhile.
            </p>
            <img
              className="img-fluid w-100 mt-4 rounded"
              src={social1}
              alt="social marketing"
              style={{ height: 300, objectFit: "cover" }}
            />
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center px-4 py-5">
            <img
              className="img-fluid w-100 rounded"
              src={social2}
              alt="social strategy"
              style={{ height: 300, objectFit: "cover" }}
            />
            <div className="mt-5">
              <h4 className="mb-4 fw-semibold" style={{ color: "rgb(73, 153, 227)" }}>
                Why Us for Social Media Marketing?
              </h4>
              <p className="text-black">
                Social media platforms have billions of active users, providing a
                vast audience for your content. This allows you to reach potential
                customers who might not be accessible through traditional marketing
                channels. Social media enables direct interaction with your audience.
                You can engage with customers through comments, likes, shares, and
                messages, fostering a community around your brand. Regular posting on
                social media keeps your brand visible to your audience. This
                continuous exposure helps in building and maintaining brand
                awareness. Compared to traditional marketing methods, social media
                marketing can be more cost-effective. Many platforms offer free
                profiles and low-cost advertising options, making it accessible for
                businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  )
}

export default Socialmedia
