import React from 'react';
import { Link } from 'react-router-dom';

const TermsandConditions = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid bg-dark p-5">
        <div className="row"> {/* Fixed the missing opening div tag here */}
          <div className="col-12 text-center">
            <h1 className="display-4 text-white fw-bold">Terms and Conditions</h1>
            <Link to="/" className=" fw-medium" style={{color:"#4999e3"}}>Home</Link>
            <i className="far fa-square px-2 "  style={{color:"#4999e3"}}/>
            <span className=" fw-medium" style={{color:"#4999e3"}}>Terms and Conditions</span>
          </div>
        </div> {/* Added closing div tag here */}
      </div>
      {/* Page Header End */}

      {/* Terms and Conditions Content */}
      <div className="container my-5">
        <div className="bg-light p-4 rounded">
          <h2 className="fs-1 fw-semibold mb-4 text-center">Terms and Conditions</h2>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Introduction</h4>
            <p className="fs-6 lh-lg text-muted">
              Welcome to our Terms and Conditions page. These terms apply to your use of our website, services, and digital marketing content. By using our services, you agree to comply with these terms.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Content Ownership</h4>
            <p className="fs-6 lh-lg text-muted">
              All content provided on this website, including text, graphics, images, and other material, is owned by us or licensed to us. Any unauthorized use, reproduction, or distribution of the content without prior written consent is strictly prohibited.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Usage Rights</h4>
            <p className="fs-6 lh-lg text-muted">
              Users are permitted to use the content for informational and personal purposes only. Commercial use, modification, or resale of our content is not allowed without our written permission.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Intellectual Property</h4>
            <p className="fs-6 lh-lg text-muted">
              All trademarks, logos, and other intellectual property displayed on this website are the property of their respective owners. No license or right is granted to use any trademark without prior consent.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Disclaimer</h4>
            <p className="fs-6 lh-lg text-muted">
              While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, reliability, or accuracy of the content. Users are advised to verify information independently before making any decisions.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Limitation of Liability</h4>
            <p className="fs-6 lh-lg text-muted">
              We shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our content or services.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Third-Party Links</h4>
            <p className="fs-6 lh-lg text-muted">
              Our website may contain links to third-party websites for informational purposes only. We are not responsible for the content, accuracy, or practices of any third-party websites.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Privacy Policy</h4>
            <p className="fs-6 lh-lg text-muted">
              Please refer to our Privacy Policy to understand how we collect, use, and protect your personal data.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Changes to Terms</h4>
            <p className="fs-6 lh-lg text-muted">
              We reserve the right to update or modify these terms at any time without prior notice. Changes will be effective immediately upon posting on this page.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Governing Law</h4>
            <p className="fs-6 lh-lg text-muted">
              These terms are governed by and construed in accordance with the laws of [Your Location], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fs-4 fw-semibold">Contact Us</h4>
            <p className="fs-6 lh-lg text-muted">
              If you have any questions or concerns regarding these terms, please contact us at <strong>info@mptecc.com</strong>.
            </p>
          </section>
        </div>
      </div>
      {/* Terms and Conditions Content End */}
    </>
  );
};

export default TermsandConditions;
