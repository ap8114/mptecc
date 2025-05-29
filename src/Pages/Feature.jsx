import React from 'react'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
  <>
  <>
  {/* Page Header Start */}
  <div className="container-fluid bg-dark p-5">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-4 text-white">Features</h1>
        <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>Home</Link>
        <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
        <a href=""style={{ color: "rgb(73, 153, 227)" }}  >Features</a>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Features Start */}
  <div className="container-fluid py-6 px-5">
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
      <h1 className="display-5 mb-0">Why Choose Us!!!</h1>
      <hr className="w-25 mx-auto bg-custom" />
    </div>
    <div className="row g-5">
      <div className="col-lg-4">
        <div className="row g-5">
          <div className="col-12">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 , background: "rgb(73, 153, 227)"}}
            >
              <i className="fa fa-cubes fs-4 text-white"  />
            </div>
            <h3>Best In Industry</h3>
            <p className="mb-0">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>
          <div className="col-12">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 , background: "rgb(73, 153, 227)"}}
            >
              <i className="fa fa-percent fs-4 text-white" />
            </div>
            <h3>99% Success Rate</h3>
            <p className="mb-0">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>
          <div className="col-12">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 ,background: "rgb(73, 153, 227)"}}
            >
              <i className="fa fa-award fs-4 text-white" />
            </div>
            <h3>Award Winning</h3>
            <p className="mb-0">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="d-block  h-100 text-center" style={{ background: "rgb(73, 153, 227)" }}>
          <img className="img-fluid" src="img/feature.jpg" alt="" />
          <div className="p-4">
            <p className="text-white mb-4">
              Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et
              sadipscing rebum amet takimata amet, sed accusam eos eos dolores
              dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam
              stet stet ipsum, sit ipsum et ipsum kasd
            </p>
            <a
              href=""
              className="btn btn-light py-md-3 px-md-5 rounded-pill mb-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="row g-5">
          <div className="col-12">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 ,  background: "rgb(73, 153, 227)"}}
            >
              <i className="far fa-smile-beam fs-4 text-white" />
            </div>
            <h3>100% Happy Client</h3>
            <p className="mb-0">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>
          <div className="col-12">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60, background: "rgb(73, 153, 227)" }}
            >
              <i className="fa fa-user-tie fs-4 text-white" />
            </div>
            <h3>Professional Advisors</h3>
            <p className="mb-0">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>
          <div className="col-12">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center mb-3"
              style={{ width: 60, height: 60 , background: "rgb(73, 153, 227)"}}
            >
              <i className="fa fa-headset fs-4 text-white" />
            </div>
            <h3>24/7 Customer Support</h3>
            <p className="mb-0">
              Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos
              diam et diam dolor ea
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features Start */}
</>

  </>
  )
}


export default Feature