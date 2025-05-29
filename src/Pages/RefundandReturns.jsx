import React from 'react';
import { Link } from 'react-router-dom';

const RefundandReturns = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-white fw-bold">Refund and Returns Policy</h1>
            <Link to="/" className="fw-medium"  style={{color:"#4999e3"}}>Home</Link>
            <i className="far fa-square px-2 " style={{color:"#4999e3"}} />
            <span className=" fw-medium" style={{color:"#4999e3"}}>Refund and Return Policy</span>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Content Start */}
      <div className="container my-5">
        <div className="bg-light p-4 rounded">
          <h2 className="fs-1 fw-semibold mb-4 text-center">Refund and Cancellation Policy</h2>
          <p className="fs-6 lh-lg text-muted">
            This Refund and Cancellation Policy applies to all services provided by MP Tecc through this website or any other communication channel.
          </p>

          <div className="mt-4">
            <h4 className="fs-4 fw-semibold">1. Service Nature</h4>
            <p className="fs-6 lh-lg text-muted">
              All our offerings are service-based, customized, and require dedicated resources, strategy, and time investment from our team. Therefore, all payments made towards our services are non-refundable.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="fs-4 fw-semibold">2. Cancellation Policy</h4>
            <p className="fs-6 lh-lg text-muted">
              If you wish to cancel any ongoing service, you must notify us in writing at <strong>info@mptecc.com</strong> within 24 hours of the purchase. Cancellation requests after 24 hours will not be entertained.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="fs-4 fw-semibold">3. Refund Policy</h4>
            <p className="fs-6 lh-lg text-muted">
              As our services are digital, customized, and effort-driven, refunds are not provided for any completed or in-progress work. Refunds may only be considered in exceptional cases where:
            </p>
            <ul className="fs-6 lh-lg text-muted">
              <li>Service not delivered at all.</li>
              <li>Duplicate payment made by the client.</li>
              <li>Wrong amount charged due to technical error.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="fs-4 fw-semibold">4. Refund Processing Time</h4>
            <p className="fs-6 lh-lg text-muted">
              Eligible refunds (if applicable) will be processed within 7–10 working days to the original payment method.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="fs-4 fw-semibold">5. No Guarantee of Results</h4>
            <p className="fs-6 lh-lg text-muted">
              Digital Marketing results depend on various factors beyond our control such as competition, market behavior, algorithm changes, etc. Therefore, we do not guarantee specific outcomes or results.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="fs-4 fw-semibold">6. Dispute Resolution</h4>
            <p className="fs-6 lh-lg text-muted">
              In case of any dispute, our decision will be considered final after reviewing the case details.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="fs-4 fw-semibold">7. Contact Us</h4>
            <p className="fs-6 lh-lg text-muted">
              For any refund or cancellation queries, please contact us at <strong>info@mptecc.com</strong> or call us at <strong>+91-8871111868</strong>.
            </p>
          </div>
        </div>
      </div>
      {/* Content End */}
    </>
  );
};

export default RefundandReturns;
