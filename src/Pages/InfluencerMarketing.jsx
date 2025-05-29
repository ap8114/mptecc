import React from 'react'
import { Link } from 'react-router-dom'

const InfluencerMarketing = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-white">Influencer marketing</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i
              className="far fa-square px-2"
              style={{ color: "rgb(73, 153, 227)" }}
            />
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Service Start */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8 mx-auto ">
            <h3 className="text-center fw-normal" style={{ color: "rgb(73, 153, 227)" }}>
              Harness the Power of Influencer Marketing
            </h3>
            <p className="text-center">
              In today’s digital age, influencer marketing has become a game-changer
              for brands looking to connect with their target audience in an
              authentic and impactful way. By partnering with influential
              personalities who have a dedicated following, your brand can reach new
              heights and build meaningful relationships with consumers.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
            <div
              className="border mb-2 rounded text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-regular fa-star fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5 className="fw-normal" style={{ color: "rgb(73, 153, 227)" }}>
                  Enhanced Personalization:
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
            <div
              className="border mb-2 rounded text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-cogs fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5 className="fw-normal" style={{ color: "rgb(73, 153, 227)" }}>
                  Templates and Formatting Assistance
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.7s">
            <div
              className="border rounded mb-2 text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-language fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5 className="fw-normal" style={{ color: "rgb(73, 153, 227)" }}>
                  Grammar and Spell Checking
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
            <div
              className="border rounded mb-2 text-center"
              style={{ height: 150 }}
            >
              <div className="p-3">
                <h5 className="fw-normal" style={{ color: "rgb(73, 153, 227)" }}>
                  <div>
                    <i
                      className="fas fa-key mb-3 mt-2"
                      style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                    ></i>
                  </div>
                  Keyword Optimization
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
            <div
              className="border rounded mb-2 text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-laptop fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5 className="fw-normal" style={{ color: "rgb(73, 153, 227)" }}>
                  Content Suggestions
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.7s">
            <div
              className="border rounded mb-2 text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-eye fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5 className="fw-normal" style={{ color: "rgb(73, 153, 227)" }}>
                  Instant Updates and Customization
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  )
}

export default InfluencerMarketing