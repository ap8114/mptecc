import React from 'react';
import smartsheet from '../assets/services/smartsheet.png'

const SmartSheet = () => {
    return (
        <>
            {/* SmartSheet Service Start */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="mb-3">
                            Streamline Workflows with <span style={{ color: "rgb(73, 153, 227)" }}>SmartSheet</span>
                        </h2>
                        <h5 style={{ color: "rgb(73, 153, 227)" }} className="mb-3">
                            Collaborate. Automate. Accelerate.
                        </h5>
                        <p>
                            Empower your team with Smartsheet — the dynamic platform for project management and workflow automation. 
                            At MP Tecc, we design, implement, and optimize Smartsheet solutions that keep your business agile and efficient.
                        </p>
                        <ul>
                            <li>✔️ Project & Task Tracking</li>
                            <li>✔️ Automated Workflows</li>
                            <li>✔️ Team Collaboration</li>
                            <li>✔️ Real-Time Dashboards & Reports</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                            className="img-fluid"
                            src={smartsheet}
                            alt="Smartsheet Dashboard"
                            style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
            {/* SmartSheet Service End */}

            {/* Key Benefits Start */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="mb-0">Why Choose MP Tecc for SmartSheet?</h2>
                    <hr className="w-25 mx-auto" style={{ backgroundColor: "rgb(73, 153, 227)", height: "2px" }} />
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="p-4 border rounded text-center shadow-sm">
                            <h5 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>Certified Experts</h5>
                            <p>Our professionals tailor Smartsheet to your business processes with precision.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border rounded text-center shadow-sm">
                            <h5 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>Automation Setup</h5>
                            <p>We build smart automations that reduce manual work and increase efficiency.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border rounded text-center shadow-sm">
                            <h5 className="mb-3" style={{ color: "rgb(73, 153, 227)" }}>Seamless Integration</h5>
                            <p>Connect Smartsheet with your tools like Slack, Gmail, Teams, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Key Benefits End */}
        </>
    );
};

export default SmartSheet;
