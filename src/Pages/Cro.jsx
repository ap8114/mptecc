import React from 'react'
import { Link } from 'react-router-dom'
import cro1 from '../assets/services/cro1.png'
const Cro = () => {
  return (
    <>
    {/* Page Header Start */}
    <div className="container-fluid bg-dark p-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4 text-white">
            Conversion Rate Optimization (CRO)
          </h1>
          <a href="index.html">
            <index className="html" />
          </a>
         <Link to="/" className="fw-medium" style={{color:"#4999e3"}}>
                       Home
                     </Link>
          <i className="far fa-square  px-2 " style={{color:"rgb(73, 153, 227)"}} />
          <a href="" style={{color:"rgb(73, 153, 227)"}}>Conversion Rate Optimization (CRO)</a>
        </div>
      </div>
    </div>
    {/* Page Header End */}
    {/* Intro Section */}
    <section className="intro"></section>
    {/* About Start */}
    <div className="container-fluid bg-secondary p-0">
      <div className="row g-0">
        <div className="col-lg-6 py-6 px-5">
          <h1 className="display-5 mb-4">
            Conversion Rate Optimization
            <span className=""style={{color:"rgb(73, 153, 227)"}}> (CRO)</span>
          </h1>
          <h4 className=" mb-4" style={{color:"rgb(73, 153, 227)"}}>
            Digital marketing simplified for you
          </h4>
          <p className="mb-4">
            Conversion Rate Optimization (CRO) is a systematic process of
            increasing the percentage of website visitors who take a desired
            action — whether that’s filling out a form, becoming customers, or
            otherwise. CRO involves understanding how users move through your
            site, what actions they take, and what’s stopping them from completing
            your goals.
          </p>
          <a href="" className="btn  py-md-3 px-md-5 rounded-pill"style={{background:"rgb(73, 153, 227)", color:"black"}}>
            Let's Talk
          </a>
        </div>
        <div className="col-lg-6">
          <div
            className=" justify-content-center"
            style={{ borderRadius: 20, marginTop: 100 }}
          >
            <div className="row">
              <img
                src="https://www.sender.net/wp-content/uploads/2022/02/Conversion-Rate-Optimization-smaller.png"
                alt=""
              />
            </div>
            <div className="d-flex text-white">
              {/* <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style="width: 60px; height: 60px; font-weight: bold;">
                03
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Features Start */}
    <div className="container-fluid py-6 px-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
        <h1 className="display-5 mb-0">Conversion Rate Optimization (CRO)</h1>
        <hr className="w-25 mx-auto bg-primary" />
      </div>
      <div className="row g-5">
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12">
              <h3>User Experience (UX) Design</h3>
              <p className="mb-0">
                Definition: Designing products that provide meaningful and
                relevant experiences to users. Focus Areas: Ease of navigation,
                intuitive layout, clear calls-to-action, mobile-friendliness, and
                fast loading times. Principles: Consistency, simplicity, feedback,
                and user control.
              </p>
            </div>
            <div className="col-12">
              <h3>Data Analysis</h3>
              <p className="mb-0">
                Definition: The process of inspecting, cleansing, transforming,
                and modeling data to discover useful information. Metrics to
                Track: Bounce rate, exit rate, time on site, page views,
                conversion rate, and click-through rate (CTR). Tools: Google
                Analytics, Mixpanel, Hotjar.
              </p>
            </div>
            <div className="col-12">
              <h3>Heatmaps:</h3>
              <p className="mb-0">
                Definition: Visual representations of data that show how users
                interact with a webpage. Types: Click heatmaps (where users
                click), scroll heatmaps (how far users scroll), and move heatmaps
                (where users move their mouse). Usage: Identify which areas of a
                page are getting the most attention and which are being ignored.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="d-block  h-100 text-center"style={{background:"rgb(73, 153, 227)"}}>
            <img
              className="img-fluid"
              src="https://webzguru.net/wp-content/uploads/2021/04/croo2.png"
              alt=""
            />
            <div className="p-4">
              <p className="text-white mb-4">
                Improving individual web pages that users land on after clicking
                an ad or link to maximize conversions.Headlines, subheadlines,
                images, videos, forms, CTAs, and social proof.Keep it simple,
                match the message with the ad, focus on benefits, and use
                persuasive design.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12">
              <h3>User Surveys</h3>
              <p className="mb-0">
                Definition: Collecting feedback directly from users to understand
                their experience, preferences, and pain points. Methods: On-site
                surveys, email surveys, and exit-intent surveys. Questions to Ask:
                What was your reason for visiting today? Did you find what you
                were looking for? What prevented you from completing your
                purchase?
              </p>
            </div>
            <div className="col-12">
              <h3>Funnel Analysis</h3>
              <p className="mb-0">
                Definition: Analyzing the steps that users take to complete a
                specific goal on your site. Purpose: Identify where users drop off
                in the conversion process and understand why. Stages: Awareness,
                interest, consideration, intent, purchase, and retention.
              </p>
            </div>
            <div className="col-12">
              <h3>Personalization</h3>
              <p className="mb-0">
                Definition: Customizing the user experience based on individual
                behavior, preferences, and past interactions. Techniques: Dynamic
                content, personalized recommendations, and targeted messaging.
                Benefits: Increased engagement, higher conversion rates, and
                improved customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Features Start */}
  </>
  
  )
}

export default Cro