import React from 'react';
import { Carousel } from 'react-bootstrap';

const ReviewCarousel = () => {
  const googleReviews = [
    { name: 'Priya Desai', time: '1 week ago', text: 'Excellent service and timely delivery. The team was supportive throughout the project.', initial: 'P' },
    { name: 'Rajat Kumar', time: '3 months ago', text: 'Very creative designs and smooth user experience. Would love to collaborate again!', initial: 'R' },
    { name: 'Sneha Kapoor', time: '2 weeks ago', text: 'Their team handled everything with professionalism. My app was built exactly to spec.', initial: 'S' },
    { name: 'Vikram Joshi', time: '5 days ago', text: 'Quick response times and efficient problem-solving. Highly recommend their services!', initial: 'V' },
    { name: 'Tanvi Malhotra', time: '1 month ago', text: 'The website they created exceeded my expectations. Great attention to detail.', initial: 'T' }
  ];

  const fiverrReviews = [
    { name: 'creative_minds', time: '4 weeks ago', text: 'Absolutely amazing experience! They delivered ahead of schedule and exceeded expectations.', initial: 'C' },
    { name: 'design_genius88', time: '1 month ago', text: 'Fantastic design and clean code. Will be coming back for future projects!', initial: 'D' },
    { name: 'tech_pro23', time: '2 months ago', text: 'Reliable and efficient team. They handled revisions quickly and professionally.', initial: 'T' },
    { name: 'web_wizardz', time: '3 weeks ago', text: 'High-quality work with great attention to detail. My website looks stunning now.', initial: 'W' },
    { name: 'startup_hustle', time: '6 days ago', text: 'Superb communication and excellent delivery. Would highly recommend!', initial: 'S' }
  ];

  const renderCarousel = (reviews) => (
    <div className="bg-white rounded-3 p-4  shadow h-100">
      <Carousel interval={4000} controls={false} indicators={false} pause={false}>
        {reviews.map((review, idx) => (
          <Carousel.Item key={idx}>
            <div className="p-2">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: 50, height: 50, fontSize: 22 }}
                >
                  {review.initial}
                </div>
                <div className="ms-3">
                  <strong className="text-dark">{review.name}</strong>
                  <div className="text-muted" style={{ fontSize: '0.8rem' }}>{review.time}</div>
                </div>
              </div>
              <div>
                <div className="text-warning mb-2" style={{ fontSize: '1.2rem' }}>★★★★★</div>
                <p className="text-dark mb-0" style={{ fontSize: '0.95rem' }}>{review.text}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );

  return (
    <section style={{ backgroundColor: '#09254a', padding: '4rem 0' }}>
      <div className="container text-center">
        <div className="mb-4">
          <div className="text-warning py-2" style={{ fontSize: '1.5rem' }}>
            ★★★★★
          </div>
          <h2 className="text-white mt-2">Google Reviews</h2>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-6">
            {renderCarousel(googleReviews)}
          </div>
          <div className="col-md-6">
            {renderCarousel(fiverrReviews)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
