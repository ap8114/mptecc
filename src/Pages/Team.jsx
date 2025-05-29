import React from 'react'
import { Link } from 'react-router-dom'
const Team = () => {
  return (
    <>
    {/* Page Header Start */}
    <div className="container-fluid bg-dark p-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4 text-white">Our Team</h1>
         <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>Home</Link>
         <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }} />
          <a href="" style={{ color: "rgb(73, 153, 227)" }}>Our Team</a>
        </div>
      </div>
    </div>
    {/* Page Header End */}
    {/* Team Start */}
    <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h1 className="display-5 mb-0">Our Team Members</h1>
          <hr className="w-25 mx-auto bg-primary" />
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="src/img/team-1.jpg"
                alt=""
              />
              <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                <h3 className="text-white">Hitesh Dube</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="src/img/team-2.jpg"
                alt=""
              />
              <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                <h3 className="text-white">Anmol Singh</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img
                className="img-fluid w-100"
                src="src/img/team-3.jpg"
                alt=""
              />
              <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                <h3 className="text-white">Rupesh Singh</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* Team End */}
  </>
  
  )
}

export default Team