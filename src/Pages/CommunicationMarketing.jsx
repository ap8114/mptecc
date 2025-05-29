import React, { useEffect } from 'react';
import { FaCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import comm1 from '../assets/services/comm1.png';
import whychooseus from '../assets/whychooseus.png'

const CommunicationMarketing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>


      {/* About Section */}
      <div className="container-fluid bg-secondary py-5 px-3 px-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h1 className="display-5 mb-4">
              Marketing <span style={{ color: "rgb(73, 153, 227)" }}>Communication</span>
            </h1>
            <h4 className="mb-4" style={{ color: "rgb(73, 153, 227)" }}>
              Digital marketing simplified for you
            </h4>
            <p className="mb-4">
              Marketing communications refers to the various methods and tools that companies use to communicate with their target audience and promote their products, services, or brand. This includes:
              <br /><br />
              <strong>Advertising:</strong> Paid promotion through TV, radio, print, online, and outdoor ads.
              <br />
              <strong>Public Relations (PR):</strong> Managing the brand image through press releases, media relations, and events.
              <br />
              <strong>Sales Promotion:</strong> Short-term incentives like discounts, coupons, contests.
              <br />
              <strong>Direct Marketing:</strong> Email, direct mail, telemarketing, and SMS campaigns.
            </p>
            <a href="#" className="btn btn-dark py-md-3 px-md-5 rounded-pill">
              Let's Talk
            </a>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={comm1}
              alt="Marketing Communication"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
        <section className="py-4 py-lg-5" style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}>
       <div className="container">
         <div className="text-center mb-4 mb-md-5">
           <h1 className="h2 h1-lg text-white">
             Why Choose <span style={{ color: "#3A8DDE" }}>Us!!!</span>
           </h1>
         </div>
     
         <div className="row justify-content-center align-items-center position-relative g-4">
           {/* Left Side Content - Shows on md and up */}
           <div className="col-12 col-md-4 d-none d-md-flex flex-column align-items-end gap-4 pe-md-4 pe-lg-5">
             {["Cost-effective", "Targeted", "Measurable"].map((title, idx) => (
               <div key={`left-${idx}`} className="text-end" data-aos="fade-up" data-aos-delay={idx * 150}>
                 <h4 className="h5 d-flex align-items-center justify-content-end gap-2" style={{color:"#3A8DDE"}}>
                   <FaCircle color="#3A8DDE" size={12} />
                   {title}
                 </h4>
                 <p className="small m-0" style={{ maxWidth: "300px" }}>
                   Highlighting how digital marketing can be more budget-friendly compared to traditional marketing methods due to its ability to target specific audiences and track ROI more effectively.
                 </p>
               </div>
             ))}
           </div>
     
           {/* Center Circle Image */}
           <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
             <div
               className="rounded"
               style={{
                 width: "100%",
                 maxWidth: "350px",
                 aspectRatio: "1/1",
                 backgroundColor: "#3A8DDE",
                backgroundImage: `url(${whychooseus})`, // 👈 Use imported image here
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 border: "4px solid #ffffff",
                 boxShadow: "0 0 30px rgba(58, 141, 222, 0.4)",
               }}
             ></div>
           </div>
     
           {/* Right Side Content - Shows on md and up */}
           <div className="col-12 col-md-4 d-none d-md-flex flex-column align-items-start gap-4 ps-md-4 ps-lg-5">
             {["Flexible", "Global Reach", "Engagement"].map((title, idx) => (
               <div key={`right-${idx}`} className="text-start" data-aos="fade-up" data-aos-delay={idx * 150}>
                 <h4 className="h5 d-flex align-items-center gap-2" style={{color:"#3A8DDE"}}>
                   {title}
                   <FaCircle color="#3A8DDE" size={12} />
                 </h4>
                 <p className="small m-0" style={{ maxWidth: "300px" }}>
                   Highlighting how digital marketing can be more budget-friendly compared to traditional marketing methods due to its ability to target specific audiences and track ROI more effectively.
                 </p>
               </div>
             ))}
           </div>
     
           {/* Mobile Content - Shows on sm and down */}
           <div className="col-12 d-md-none">
             <div className="row g-4">
               {["Cost-effective", "Targeted", "Measurable", "Flexible", "Global Reach", "Engagement"].map((title, idx) => (
                 <div key={`mobile-${idx}`} className="col-12 col-sm-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                   <div className="text-center p-3">
                     <h4 className="h5 d-flex align-items-center justify-content-center gap-2" style={{color:"#3A8DDE"}}>
                       {idx <= 2 && <FaCircle color="#3A8DDE" size={12} />}
                       {title}
                       {idx > 2 && <FaCircle color="#3A8DDE" size={12} />}
                     </h4>
                     <p className="small m-0 mt-2">
                       Highlighting how digital marketing can be more budget-friendly compared to traditional marketing methods due to its ability to target specific audiences and track ROI more effectively.
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>
    </>
  );
};

export default CommunicationMarketing;
