import React from "react";
import { Link } from "react-router-dom";

const AI = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-white">AI Service</h1>
            <Link to="/" style={{ color: "rgb(73, 153, 227)" }}>
              Home
            </Link>
            <i
              className="far fa-square px-2 "
              style={{ color: "rgb(73, 153, 227)" }}
            />
            <a href="" style={{ color: "rgb(73, 153, 227)" }}>
              About
            </a>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              {" "}
              AI-Powered Resume Builders{" "}
            </li>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(20, 24, 62, 0.7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn btn-square bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: 600 }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-light p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-light px-4">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End */}
      {/* Service Start */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8 mx-auto ">
            <h3
              className="text-center fw-normal"
              style={{ color: "rgb(73, 153, 227)" }}
            >
              AI-Powered Resume Builders
            </h3>
            <p className="text-center">
              Revolutionize your job hunt with cutting-edge AI-powered resume
              builders, crafting professional resumes effortlessly for your
              dream career success.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
            <div
              className="border mb-2 rounded text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-regular fa-star fa-2xl mt-5 "
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5
                  className="fw-normal"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  Enhanced Personalization:
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
            <div
              className="border mb-2 rounded text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-cogs fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5
                  className="fw-normal"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  Templates and Formatting Assistance
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.7s">
            <div
              className="border rounded mb-2 text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-language fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5
                  className="fw-normal"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  Grammar and Spell Checking
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
            <div
              className="border rounded mb-2 text-center"
              style={{ height: 150 }}
            >
              <div className="p-3">
                <h5
                  className="fw-normal"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  <div>
                    <i
                      className="fas fa-key mb-3 mt-2"
                      style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                    ></i>
                  </div>
                  Keyword Optimization
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
            <div
              className="border rounded mb-2 text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-laptop fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5
                  className="fw-normal md-4"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  Content Suggestions
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.7s">
            <div
              className="border rounded mb-2 text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-eye fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5
                  className="fw-normal"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  Instant Updates and Customization
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
            <div
              className="border rounded mb-2 py-3 text-center"
              style={{ height: 150 }}
            >
              <div>
                <i
                  className="fa-solid fa-magnifying-glass fa-2xl mt-5"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5
                  className="fw-normal"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  Data Privacy and Security
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
            <div
              className="border rounded mb-2 py-3 text-center"
              style={{ height: 130 }}
            >
              <div>
                <i
                  className="fa-solid fa-pen-to-square fa-2xl py-4"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5
                  className="fw-normal"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  Insights and Analytics
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.7s">
            <div
              className="border rounded mb-2 py-3 text-center"
              style={{ height: 130 }}
            >
              <div>
                <i
                  className="fas fa-signal fa-2xl py-4"
                  style={{ color: "rgb(73, 153, 227)", fontSize: 50 }}
                />
              </div>
              <div className="p-3">
                <h5
                  className="fw-normal"
                  style={{ color: "rgb(73, 153, 227)" }}
                >
                  Skill Gaps Identification
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* accordin section start */}
      <div className="container py-2">
        <div className="row mt-5">
          <div className="col-md-8 mx-auto ">
            <h3 className="text-center fw-normal ">
              {" "}
              FAQ about AI-Powered Resume Builders{" "}
            </h3>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-12">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div
                className="accordion-item wow fadeIn"
                data-wow-delay="0.3s"
              >
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What specific features or functionalities are you looking
                    for in an AI-powered resume builder?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body ">
                    <div className="">
                      <p className="fst-normal ">
                        In an AI-powered resume builder, I seek intuitive
                        interface design coupled with robust AI algorithms that
                        offer tailored suggestions for content optimization,
                        formatting, and keyword integration. Additionally,
                        seamless integration with job boards and the ability to
                        track application progress would enhance efficiency in
                        the job search process
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeIn"
                data-wow-delay="0.4s"
              >
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Do you have a preferred AI resume builder platform, or are
                    you open to exploring different options?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div>
                      <p className="">
                        While I don't have a specific preference, I'm open to
                        exploring various AI resume builder platforms. I value
                        platforms that prioritize user experience, offer
                        comprehensive features like custom templates and keyword
                        optimization, and provide seamless integration with job
                        search platforms. Flexibility and effectiveness in
                        enhancing my resume are key considerations in my
                        selection process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeIn"
                data-wow-delay="0.5s"
              >
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Are there any specific industries or job roles you're
                    targeting with your resume?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div>
                      <p>
                        I'm primarily targeting roles within the technology
                        industry, particularly software development and data
                        analysis. However, I'm also open to opportunities in
                        related fields such as cybersecurity and artificial
                        intelligence. My skill set and experience align well
                        with these sectors, and I'm enthusiastic about
                        contributing to innovation and problem-solving within
                        them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeIn"
                data-wow-delay="0.6s"
              >
                <h2 className="accordion-header" id="flush-headingfour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefour"
                    aria-expanded="false"
                    aria-controls="flush-collapsefour"
                  >
                    How comfortable are you with technology and using AI-driven
                    tools?
                  </button>
                </h2>
                <div
                  id="flush-collapsefour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingfour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div>
                      <p>
                        I'm highly comfortable with technology and proficient in
                        using AI-driven tools. Having a background in
                        technology-related fields, I regularly leverage various
                        software and applications for work and personal
                        projects. I'm enthusiastic about adopting new tools and
                        technologies to enhance productivity and streamline
                        processes in both professional and personal endeavors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeIn"
                data-wow-delay="0.8s"
              >
                <h2 className="accordion-header" id="flush-headingfive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefive"
                    aria-expanded="false"
                    aria-controls="flush-collapsefive"
                  >
                    Would you like the AI resume builder to offer personalized
                    suggestions for improving your resume content or layout?
                  </button>
                </h2>
                <div
                  id="flush-collapsefive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingfive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div>
                      <p>
                        Absolutely, I value personalized suggestions from an AI
                        resume builder to enhance both the content and layout of
                        my resume. Tailored recommendations based on my skills,
                        experience, and industry norms would significantly boost
                        the effectiveness of my resume, increasing its chances
                        of capturing the attention of hiring managers and
                        securing interviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item wow fadeIn"
                data-wow-delay="0.9s"
              >
                <h2 className="accordion-header" id="flush-headingsix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsesix"
                    aria-expanded="false"
                    aria-controls="flush-collapsesix"
                  >
                    Are there any concerns you have about privacy or data
                    security when using an AI-powered resume builder?
                  </button>
                </h2>
                <div
                  id="flush-collapsesix"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingsix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div>
                      <p>
                        I do have concerns about privacy and data security when
                        using an AI-powered resume builder. It's essential that
                        the platform adheres to strict privacy standards,
                        securely storing and protecting personal information.
                        Additionally, transparency regarding how data is
                        collected, used, and shared is crucial to ensure
                        confidentiality and trust among users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* accordin section end */}
    </>
  );
};

export default AI;
