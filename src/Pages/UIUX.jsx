import React from 'react';
import uxx from '../assets/services/uxx.png'

const UIUX = () => {
    return (
        <>
            {/* UI/UX Hero Start */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bold">
                        <span style={{ color: 'rgb(73, 153, 227)' }}>UI/UX</span> Design Services
                    </h1>
                    <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                        Elevate your digital experience with intuitive designs, seamless interactions, and
                        user-first thinking. We create visually stunning interfaces that feel as good as they look.
                    </p>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-md-6 text-center">
                        <img
                            className="img-fluid"
                            src={uxx}
                            alt="UI UX Illustration"
                            style={{ maxHeight: '350px', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h4 style={{ color: 'rgb(73, 153, 227)' }}>What We Offer</h4>
                        <ul className="list-unstyled fs-5">
                            <li>🎨 Creative UI Design for Web & Apps</li>
                            <li>🧠 UX Research & Wireframing</li>
                            <li>📱 Responsive Design for All Devices</li>
                            <li>🔍 Usability Testing & Prototyping</li>
                            <li>🚀 Smooth Design-to-Development Handoff</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* UI/UX Hero End */}

            {/* Design Pillars Start */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2>Our Design Pillars</h2>
                    <hr className="w-25 mx-auto" style={{ backgroundColor: 'rgb(73, 153, 227)', height: '2px' }} />
                </div>
                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h5 style={{ color: 'rgb(73, 153, 227)' }}>User-Centered</h5>
                            <p>Every design decision revolves around your user’s needs, goals, and comfort.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h5 style={{ color: 'rgb(73, 153, 227)' }}>Consistent & Scalable</h5>
                            <p>We follow design systems and patterns that scale with your brand.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 border rounded shadow-sm h-100">
                            <h5 style={{ color: 'rgb(73, 153, 227)' }}>Accessible & Inclusive</h5>
                            <p>Designs that work for everyone, regardless of device, ability, or context.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Design Pillars End */}
        </>
    );
};

export default UIUX;
