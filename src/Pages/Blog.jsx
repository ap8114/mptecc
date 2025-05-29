import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
  {/* Page Header Start */}
  <div className="container-fluid bg-dark p-5">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-4 text-white">Blog Grid</h1>
         <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>Home</Link>
                <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
                <a href=""style={{ color: "rgb(73, 153, 227)" }}  >Blog Detail</a>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Blog Start */}
  <div className="container-fluid py-6 px-5">
    <div className="row g-5">
      {/* Blog list Start */}
      <div className="col-lg-8">
        <div className="row g-5">
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom  text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="blog-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              </div>
              <div className="bg-secondary d-flex">
                <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-custom text-white px-4">
                  <span>01</span>
                  <h5 className="text-uppercase m-0">Jan</h5>
                  <span>2045</span>
                </div>
                <div className="d-flex flex-column justify-content-center py-3 px-4">
                  <div className="d-flex mb-2">
                    <small className="text-uppercase me-3">
                      <i className="bi bi-person me-2" />
                      Admin
                    </small>
                    <small className="text-uppercase me-3">
                      <i className="bi bi-bookmarks me-2" />
                      Web Design
                    </small>
                  </div>
                  <a className="h4" href="">
                    Magna sea dolor ipsum amet lorem eos
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-lg m-0">
                <li className="page-item disabled">
                  <a
                    className="page-link rounded-0 "
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">
                    <i class="fa-solid fa-arrow-left"></i>
                    </span>
                  </a>
                </li>
                <li className="page-item ">
                  <a className="page-link" href="#" style={{ color: "rgb(73, 153, 227)" }}>
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" style={{ color: "rgb(73, 153, 227)" }}>
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" style={{ color: "rgb(73, 153, 227)" }}>
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link rounded-0" href="#" aria-label="Next" style={{ color: "rgb(73, 153, 227)" }}>
                    <span aria-hidden="true">
                    <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Blog list End */}
      {/* Sidebar Start */}
      <div className="col-lg-4">
        {/* Search Form Start */}
        <div className="mb-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Keyword"
            />
            <button className="btn bg-custom y px-4">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
        {/* Search Form End */}
        {/* Category Start */}
        <div className="mb-5">
          <h2 className="mb-4">Categories</h2>
          <div className="d-flex flex-column justify-content-start bg-secondary p-4">
            <a className="h5 mb-3" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Web Design
            </a>
            <a className="h5 mb-3" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Web Development
            </a>
            <a className="h5 mb-3" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Web Development
            </a>
            <a className="h5 mb-3" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Keyword Research
            </a>
            <a className="h5" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Email Marketing
            </a>
          </div>
        </div>
        {/* Category End */}
        {/* Recent Post Start */}
      
        {/* Recent Post End */}
        {/* Image Start */}
     
        {/* Image End */}
        {/* Tags Start */}
        <div className="mb-5">
          <h2 className="mb-4">Tag Cloud</h2>
          <div className="d-flex flex-wrap m-n1">
            <a href="" className="btn btn-secondary m-1">
              Design
            </a>
            <a href="" className="btn btn-secondary m-1">
              Development
            </a>
            <a href="" className="btn btn-secondary m-1">
              Marketing
            </a>
            <a href="" className="btn btn-secondary m-1">
              SEO
            </a>
            <a href="" className="btn btn-secondary m-1">
              Writing
            </a>
            <a href="" className="btn btn-secondary m-1">
              Consulting
            </a>
            <a href="" className="btn btn-secondary m-1">
              Design
            </a>
            <a href="" className="btn btn-secondary m-1">
              Development
            </a>
            <a href="" className="btn btn-secondary m-1">
              Marketing
            </a>
            <a href="" className="btn btn-secondary m-1">
              SEO
            </a>
            <a href="" className="btn btn-secondary m-1">
              Writing
            </a>
            <a href="" className="btn btn-secondary m-1">
              Consulting
            </a>
          </div>
        </div>
        {/* Tags End */}
        {/* Plain Text Start */}
        <div>
          <h2 className="mb-4">Plain Text</h2>
          <div className="bg-secondary text-center" style={{ padding: 30 }}>
            <p>
              Vero sea et accusam justo dolor accusam lorem consetetur, dolores
              sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor
              magna takimata, amet sit et diam dolor ipsum amet diam
            </p>
            <a href="" className="btn bg-custom rounded-pill py-2 px-4 text-black">
              Read More
            </a>
          </div>
        </div>
        {/* Plain Text End */}
      </div>
      {/* Sidebar End */}
    </div>
  </div>
  {/* Blog End */}
</>

  )
}

export default Blog