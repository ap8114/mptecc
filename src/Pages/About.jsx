import React from 'react';
import { useEffect } from 'react';
import digital11 from '../assets/about/digital11.png'

const About = () => {


    useEffect(() => {
    const teamItems = document.querySelectorAll('.team-item');
    teamItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.team-text').classList.remove('translate-y-100');
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('.team-text').classList.add('translate-y-100');
        });
    });
}, []);
    return (
        <>
            {/* About Start */}
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="mb-3">
                            Welcome To <span style={{ color: "rgb(73, 153, 227)" }}>MP Tecc</span>
                        </h2>
                        <h5 style={{ color: "rgb(73, 153, 227)" }} className="mb-3">
                            Your digital marketing partner
                        </h5>
                        <p>
                            Your trusted partner in the ever-evolving world of digital marketing.
                            At MP Tecc, we're passionate about helping businesses like
                            yours thrive online through innovative strategies, creative solutions,
                            and measurable results.
                        </p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                            className="img-fluid"
                            src={digital11}
                            alt="digital marketing"
                            style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Team Start */}
   <div className="container py-5">
    <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Our Team Members</h2>
        <div className="w-25 mx-auto border-top border-dark border-4 opacity-75 mb-4"></div>
        <p className="lead text-muted">Meet our dedicated team of professionals</p>
    </div>
    <div className="row g-4">
        <div className="col-md-4">
            <div className="team-item position-relative overflow-hidden rounded-3 shadow-sm" style={{ height: "500px" }}>
                <img className="img-fluid w-100 h-100 object-fit-cover" src="https://i.ibb.co/g6grtzz/team-1.jpg" alt="Hitesh Dube" />
                <div className="team-text position-absolute w-100 text-center py-3 bg-dark bg-opacity-90 start-0 bottom-0 translate-y-100 transition-all">
                    <h5 className="text-white mb-1">Hitesh Dube</h5>
                    <p className="text-white-50 mb-0">Position</p>
                    <div className="d-flex justify-content-center mt-2">
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="team-item position-relative overflow-hidden rounded-3 shadow-sm" style={{ height: "500px" }}>
                <img className="img-fluid w-100 h-100 object-fit-cover" src="https://i.postimg.cc/bY3fwmMd/Whats-App-Image-2025-05-20-at-10-44-34-4d791e5e.jpg" />
                <div className="team-text position-absolute w-100 text-center py-3 bg-dark bg-opacity-90 start-0 bottom-0 translate-y-100 transition-all">
                    <h5 className="text-white mb-1">Lalit Singh Thakur</h5>
                    <p className="text-white-50 mb-0">Chief Consultant</p>
                    <div className="d-flex justify-content-center mt-2">
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="team-item position-relative overflow-hidden rounded-3 shadow-sm" style={{ height: "500px" }}>
                <img className="img-fluid w-100 h-100 object-fit-cover" src="https://i.ibb.co/34T90sC/team-3.jpg" alt="Rupesh Singh" />
                <div className="team-text position-absolute w-100 text-center py-3 bg-dark bg-opacity-90 start-0 bottom-0 translate-y-100 transition-all">
                    <h5 className="text-white mb-1">Rupesh Singh</h5>
                    <p className="text-white-50 mb-0">Position</p>
                    <div className="d-flex justify-content-center mt-2">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            {/* Team End */}
        </>
    );
};

export default About;
