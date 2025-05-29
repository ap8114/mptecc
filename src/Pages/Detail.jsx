import React from 'react'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
   <>
   <>
  {/* Page Header Start */}
  <div className="container-fluid bg-dark p-5">
    <div className="row">
      <div className="col-12 text-center">
        <h1 className="display-4 text-white">Blog Detail</h1>
        <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
         Home
         </Link>
        <i className="far fa-square px-2"style={{color:"rgb(73, 153, 227)"}} />
        <a href="" style={{color:"rgb(73, 153, 227)"}}>Blog Detail</a>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Blog Start */}
  <div className="container-fluid py-6 px-5">
    <div className="row g-5">
      <div className="col-lg-8">
        {/* Blog Detail Start */}
        <div className="mb-5">
          <img className="img-fluid w-100 mb-5" src="img/blog-1.jpg" alt="" />
          <h1 className="mb-4">
            Diam dolor est labore duo ipsum clita sed et lorem tempor duo
          </h1>
          <p>
            Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum
            sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et
            lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd
            accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit
            gubergren dolores et, consetetur justo invidunt at et aliquyam ut et
            vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit
            stet no diam kasd vero.
          </p>
          <p>
            Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
            aliquyam dolores vero stet consetetur elitr takimata rebum sanctus.
            Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem
            kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos
            et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit
            vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
            justo dolore sit invidunt.
          </p>
          <p>
            Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
            voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
            kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
            Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
            labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
            kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren
            at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam
            dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea
            eos.
          </p>
        </div>
        {/* Blog Detail End */}
        {/* Comment List Start */}
      
        {/* Comment List End */}
        {/* Comment Form Start */}
        <div className="p-5">
          <h2 className="mb-4">Leave a comment</h2>
          <form>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  className="form-control bg-white border-0"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="email"
                  className="form-control bg-white border-0"
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control bg-white border-0"
                  placeholder="Website"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control bg-white border-0"
                  rows={5}
                  placeholder="Comment"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn  w-100 py-3" type="submit"style={{ background: "rgb(73, 153, 227)" ,color:"black"}}>
                  Leave Your Comment
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Comment Form End */}
      </div>
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
            <button className="btn  px-4"style={{ background: "rgb(73, 153, 227)" }}>
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
            <a href="" className="btn  rounded-pill py-2 px-4"style={{ background: "rgb(73, 153, 227)",color:"black" }}>
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

   </>
  )
}

export default Detail