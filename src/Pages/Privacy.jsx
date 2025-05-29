import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-white fw-bold">Privacy</h1>
            <Link to="/" className="fw-medium" style={{color:"#4999e3"}}>
              Home
            </Link>
            <i className="far fa-square px-2 "  style={{color:"#4999e3"}}/>
            <span className=" fw-medium"  style={{color:"#4999e3"}}>Privacy</span>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Content Start */}
      <div className="container my-5">
        <div className="bg-light p-4 rounded">
          <h2 className="mb-5 fs-1 text-center fw-semibold">
            Privacy Practices in Digital Marketing
          </h2>
          <div className="row mt-4">
            <div className="col-md-6 mb-4">
              <h4 className="fs-4 fw-semibold">Data Collection</h4>
              <p className="fs-6 lh-lg text-muted">
                We collect necessary data to provide better digital marketing
                services. This may include contact details, website activity,
                device information, cookies, and campaign-related interactions.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4 className="fs-4 fw-semibold">Purpose of Data Collection</h4>
              <p className="fs-6 lh-lg text-muted">
                We collect data to optimize marketing strategies, improve user
                experience, run targeted campaigns, and for analytical purposes
                only.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4 className="fs-4 fw-semibold">Cookies Usage</h4>
              <p className="fs-6 lh-lg text-muted">
                Our website uses cookies to enhance user experience and measure
                website traffic. Users can control cookie preferences through
                their browser settings.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4 className="fs-4 fw-semibold">Data Sharing</h4>
              <p className="fs-6 lh-lg text-muted">
                We do not sell personal data. We may share data with trusted
                partners for campaign execution, analytics, or legal compliance
                under strict confidentiality agreements.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4 className="fs-4 fw-semibold">Data Security</h4>
              <p className="fs-6 lh-lg text-muted">
                We follow industry-standard security practices to protect your
                data from unauthorized access, loss, or misuse.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4 className="fs-4 fw-semibold">Compliance with Law</h4>
              <p className="fs-6 lh-lg text-muted">
                We comply with applicable laws like GDPR, IT Act, and local data
                protection regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-light p-4 rounded mt-4">
          <h2 className="mb-4 fs-2 fw-semibold">User Data Rights</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4 className="fs-4 fw-semibold">Access & Correction</h4>
              <p className="fs-6 lh-lg text-muted">
                Users may request access to their data or correction of
                inaccurate data by contacting us at info@mptecc.com.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4 className="fs-4 fw-semibold">Opt-Out & Deletion</h4>
              <p className="fs-6 lh-lg text-muted">
                Users can opt-out from marketing communications or request
                deletion of their data anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-light p-4 rounded mt-4">
          <h2 className="mb-4 fs-2 fw-semibold">Limitation of Liability</h2>
          <p className="fs-6 lh-lg text-muted">
            While we take all reasonable measures to secure user data, we are
            not responsible for any unauthorized access or data breaches caused
            by third-party actions beyond our control.
          </p>
        </div>

        <div className="bg-light p-4 rounded mt-4">
          <h2 className="mb-4 fs-2 fw-semibold">Policy Updates</h2>
          <p className="fs-6 lh-lg text-muted">
            We reserve the right to modify this privacy policy at any time. Any
            changes will be posted on this page with an updated effective date.
          </p>
        </div>

        <div className="bg-light p-4 rounded mt-4">
          <h2 className="mb-4 fs-2 fw-semibold">Contact Us</h2>
          <p className="fs-6 lh-lg text-muted">
            For any queries regarding this privacy policy, please contact us at
            info@mptecc.com.
          </p>
        </div>
      </div>
      {/* Content End */}
    </>
  );
};

export default Privacy;
