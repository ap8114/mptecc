import React from 'react';
import datagovernance from '../assets/services/datagovernance.png'

const DataGovernance = () => {
    return (
        <>
            {/* Data Governance Intro */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">
                        <span style={{ color: 'rgb(73, 153, 227)' }}>Data Governance</span> Services
                    </h1>
                    <p className="lead mx-auto" style={{ maxWidth: '750px' }}>
                        Ensure your data is accurate, secure, and trusted. We help you implement a modern data governance 
                        strategy that enhances data quality, supports compliance, and builds confidence across your organization.
                    </p>
                </div>

                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <img
                            src={datagovernance}
                            alt="Data Governance Visual"
                            className="img-fluid"
                            style={{ maxHeight: '350px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-lg-6">
                        <h4 style={{ color: 'rgb(73, 153, 227)' }}>What We Deliver</h4>
                        <ul className="list-unstyled fs-5">
                            <li>🔐 Data Privacy & Compliance</li>
                            <li>📊 Data Quality Management</li>
                            <li>👥 Role-Based Access Control</li>
                            <li>📚 Metadata Management</li>
                            <li>🛠️ Governance Framework Design</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Strategy Highlights */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2>Our Strategic Approach</h2>
                    <hr className="w-25 mx-auto" style={{ backgroundColor: 'rgb(73, 153, 227)', height: '2px' }} />
                </div>
                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <div className="p-4 border rounded h-100 shadow-sm">
                            <h5 style={{ color: 'rgb(73, 153, 227)' }}>Assessment & Planning</h5>
                            <p>We evaluate your current data practices and build a future-proof roadmap.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border rounded h-100 shadow-sm">
                            <h5 style={{ color: 'rgb(73, 153, 227)' }}>Policy & Structure</h5>
                            <p>Establish rules, responsibilities, and workflows for data governance success.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border rounded h-100 shadow-sm">
                            <h5 style={{ color: 'rgb(73, 153, 227)' }}>Enablement & Training</h5>
                            <p>We empower your teams to own and govern data effectively with the right tools.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataGovernance;
