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
            <h1 className="display-4 text-white">Social media marketing</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i
              className="far fa-square px-2"
              style={{ color: "rgb(73, 153, 227)" }}
            />
            <a href="" style={{ color: "rgb(73, 153, 227)" }}>
              About
            </a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* About Start */}
      <div className="container bg-secondary p-0">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5">
            <h2 className="mb-4">
              Welcome To{" "}
              <span style={{ color: "rgb(73, 153, 227)" }}>MP Tecc</span>
            </h2>
            <h4 className="mb-4" style={{ color: "rgb(73, 153, 227)" }}>
              Your digital marketing part: Social media marketing
            </h4>
            <p className="mb-4">
              Social media marketing means driving traffic and brand awareness by
              engaging people in discussion online. You can use social media
              marketing to highlight your brand, products, services, culture, and
              more. With billions of people spending their time engaging on social
              media platforms, focusing on social media marketing can be worthwhile.
            </p>
            <img
              className="img-fluid w-100 mt-4"
              src={social1}
              alt="digital marketing"
              style={{ height: 300, marginTop: "150px !important" }}
            />
          </div>
          <div className="col-lg-6 mt-5">
            <img
              className="img-fluid w-100"
              src={social2}
              alt="digital marketing"
              style={{ height: 350 }}
            />
            <div className="" style={{ marginTop: 70 }}>
              <h4 className="mb-4" style={{ color: "rgb(73, 153, 227)" }}>
                Why Us for Social Media Marketing?
              </h4>
              <p className="mb-4">
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