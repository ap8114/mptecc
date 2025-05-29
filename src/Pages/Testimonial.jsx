import React from 'react'
import { Link } from 'react-router-dom'
const Testimonial = () => {
  return (
    <>
  {/* Page Header Start */}
  <div className="container-fluid bg-dark p-5">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-4 text-white">Testimonial</h1>
         <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>Home</Link>
                    <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
                    <a href="" style={{ color: "rgb(73, 153, 227)" }}>Testimonial</a>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Testimonial Start */}
  <div className="container-fluid bg-secondary p-0">
    <div className="row g-0">
      <div className="col-lg-6" style={{ minHeight: 500 }}>
        <div className="position-relative h-100">
          <img
            className="position-absolute w-100 h-100"
            src="https://i.ibb.co/D1F47ww/testimonial.jpg"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-6 py-6 px-5">
        <h1 className="display-5 mb-4">What Say Our Client!!!</h1>
        <div
  id="carouselExampleControls"
  className="carousel slide pt-4"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
   
            <div className="testimonial-item">
              <p className="fs-4 fw-normal mb-4 justify1">
                <i className="fa fa-quote-left text-primary me-3" />
                "Choosing Kiaan Technology for our digital marketing needs was one
                of the best decisions we've made as a company. Their strategic
                guidance and hands-on approach have helped us navigate the complex
                world of digital marketing with ease."
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid rounded-circle"
                  src="https://i.ibb.co/jDGHFQN/testimonial.jpg"
                  alt="" style={{width:"50px"}}
                />
                <div className="ps-4">
                  <h3>Client Name</h3>
                  <span className="text-uppercase">
                    Michael Brown, Director of Marketing at JKL Corporation
                  </span>
                </div>
              </div>
            </div>
      
    </div>
    <div className="carousel-item">
    <div className="testimonial-item">
              <p className="fs-4 fw-normal mb-4 justify1">
                <i className="fa fa-quote-left text-primary me-3" />
                "I've had the pleasure of working with MP Tecc for several years
                now, and they've become an indispensable part of my business. From
                social media management to PPC advertising, they handle all
                aspects of our digital marketing efforts with professionalism and
                attention to detail."
              </p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid rounded-circle"
                  src="https://i.ibb.co/jDGHFQN/testimonial.jpg"
                  alt="" style={{width:"50px"}}
                />
                <div className="ps-4">
                  <h3>Client Name</h3>
                  <span className="text-uppercase">
                    Emily Wong, Founder of GHI Boutique
                  </span>
                </div>
              </div>
           
          </div>
    </div>
  
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

  )
}

export default Testimonial