import React from 'react';
import powerbi1 from '../assets/services/powerbi1.png'
import powerbi2 from '../assets/services/powerbi2.png'

const PowerBI = () => {
    return (
        <>
            {/* Power BI Service Start */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="mb-3">
                            Power Up with <span style={{ color: "rgb(73, 153, 227)" }}>Power BI</span>
                        </h2>
                        <h5 style={{ color: "rgb(73, 153, 227)" }} className="mb-3">
                            Turn Data into Smart Decisions
                        </h5>
                        <p>
                            Unlock the power of your data with our expert Power BI services.
                            From building interactive dashboards to advanced data modeling,
                            we help businesses gain deep insights, track performance,
                            and make data-driven decisions.
                        </p>
                        <ul>
                            <li>✔️ Custom Dashboards</li>
                            <li>✔️ Real-time Reporting</li>
                            <li>✔️ Data Integration & Modeling</li>
                            <li>✔️ Business Intelligence Consulting</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                            className="img-fluid"
                            src={powerbi1}
                            alt="Power BI Analytics"
                            style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
            {/* Power BI Service End */}

            {/* Why Choose Us Start */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="mb-0">Why Choose MP Tecc for Power BI?</h2>
                    <hr className="w-25 mx-auto" style={{ backgroundColor: "rgb(73, 153, 227)", height: "2px" }} />
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="p-4 border rounded text-center shadow-sm">
                            <h5 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>Experienced Analysts</h5>
                            <p>Our certified professionals ensure accurate insights and industry best practices.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border rounded text-center shadow-sm">
                            <h5 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>Tailored Dashboards</h5>
                            <p>We design reports that align with your goals and audience needs.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border rounded text-center shadow-sm">
                            <h5 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>Full Lifecycle Support</h5>
                            <p>From setup to maintenance, we support every stage of your BI journey.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose Us End */}
        </>
    );
};

export default PowerBI;
