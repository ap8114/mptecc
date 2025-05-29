import React from 'react'
import { Link } from 'react-router-dom'
const Quote = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-white">Free Quote</h1>
             <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>Home</Link>
            <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
            <a href="" style={{ color: "rgb(73, 153, 227)" }}>Free Quote</a>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Quote Start */}
      <div className="container-fluid bg-secondary px-0">
        <div className="row g-0">
          <div className="col-lg-6 py-6 px-5">
            <h1 className="display-5 mb-4">Request A Free Quote</h1>
            <p className="mb-4">
              Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr sea
              kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit nonumy vero
              lorem amet stet diam at. Ea at lorem sed et, lorem et rebum ut eirmod
              gubergren, dolor ea duo diam justo dolor diam ipsum dolore stet stet
              elitr ut. Ipsum amet labore lorem lorem diam magna sea, eos sed dolore
              elitr.
            </p>
            <form>
              <div className="row gx-3">
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="form-floating-1"
                      placeholder="John Doe"
                    />
                    <label htmlFor="form-floating-1">Full Name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="form-floating-2"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="form-floating-2">Email Address</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Financial Consultancy"
                    >
                      <option selected="">Financial Consultancy</option>
                      <option value={1}>Strategy Consultancy</option>
                      <option value={2}>Tax Consultancy</option>
                    </select>
                    <label htmlFor="floatingSelect">Select A Service</label>
                  </div>
                </div>
                <div className="col-6">
                  <button
                    className="btn w-100 h-100"
                    type="submit"
                    style={{ backgroundColor: "rgb(73, 153, 227)", color: "white" }}
                  >
                    Request A Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6" style={{ minHeight: 400 }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src="https://i.ibb.co/KcHfm9wm/qoute.jpg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Quote End */}
    </>
  )
}

export default Quote