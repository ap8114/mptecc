import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-5 text-white mb-3">Contact Us</h1>
            <span>
              <a href="#" style={{ color: "rgb(73, 153, 227)" }}>Contacts</a>
              <i className="far fa-square px-2" style={{ color: "rgb(73, 153, 227)" }}></i>
              <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>Home</Link>
            </span>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Form Section */}
          <div className="col-lg-6">
            <h2 className="mb-4">Contact For Any Queries</h2>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
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
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="form-floating-2"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="form-floating-2">Email Address</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="form-floating-3"
                      placeholder="Subject"
                    />
                    <label htmlFor="form-floating-3">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      id="form-floating-4"
                      style={{ height: "150px" }}
                      defaultValue={""}
                    />
                    <label htmlFor="form-floating-4">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn w-100 py-3"
                    type="submit"
                    style={{ background: "rgb(73, 153, 227)", color: "black" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="col-lg-6">
            <div className="h-100 rounded overflow-hidden shadow-sm">
              <iframe
                className="w-100 h-100 border-0"
                style={{ minHeight: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default Contact;
