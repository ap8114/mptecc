import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const AnalyticsReport = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-fluid pt-6 px-5">
      <div className="text-center mx-auto mb-5">
        <h1 className="display-5 mb-0">Analytics & Data Reporting</h1>
        <hr className="w-25 mx-auto bg-dark" />
      </div>
      <div className="row g-5" data-aos="fade-up">
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5 py-4 text-black rounded">
            <div
              className="d-flex align-items-center justify-content-center bg-dark rounded-circle mx-auto mb-4"
              style={{ width: 90, height: 90 }}
            >
              <i className="fa fa-chart-bar fa-2x text-white" />
            </div>
            <h3 className="mb-3">Real-Time Data</h3>
            <p className="mb-0">
              Get instant insights into website traffic, user behavior, and performance metrics.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5 py-4 text-black rounded">
            <div
              className="d-flex align-items-center justify-content-center bg-dark rounded-circle mx-auto mb-4"
              style={{ width: 90, height: 90 }}
            >
              <i className="fa fa-database fa-2x text-white" />
            </div>
            <h3 className="mb-3">Custom Reports</h3>
            <p className="mb-0">
              Create tailored reports based on business goals and key performance indicators.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-secondary text-center px-5 py-4 text-black rounded">
            <div
              className="d-flex align-items-center justify-content-center bg-dark rounded-circle mx-auto mb-4"
              style={{ width: 90, height: 90 }}
            >
              <i className="fa fa-laptop-code fa-2x text-white" />
            </div>
            <h3 className="mb-3">Visual Dashboards</h3>
            <p className="mb-0">
              Interactive charts and graphs help you monitor and understand data easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReport;
