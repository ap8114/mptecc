import React from 'react';
import { Carousel } from 'react-bootstrap';
import avtar1 from '../assets/avtar/avtar1.png'
import avtar2 from '../assets/avtar/avtar2.png'
import avtar3 from '../assets/avtar/avtar3.png'
import avtar4 from '../assets/avtar/avtar4.png'

const ClientReview = () => {
  const reviews = [
    {
      name: 'Mr. XYZ',
      title: 'Food Blogger & Culinary Explorer',
      company: 'Raghvam Restaurant',
      image: avtar1,
      text: 'The flavors at Raghvam Restaurant are simply unforgettable. Every dish feels like a warm hug.'
    },
    {
      name: 'Ms. Asha Mehra',
      title: 'Travel Vlogger & Foodie',
      company: 'The Hungry Wheels',
      image: avtar2,
      text: 'Ive traveled the country tasting food, but Raghvam Restaurant has left a lasting impression.'
    },
    {
      name: 'Chef Rahul Singh',
      title: 'Celebrity Chef',
      company: 'Master Taste TV',
      image: avtar3,
      text: 'As a chef, I rarely praise others food easily, but Raghvam nails it. Highly recommended!'
    },
    {
      name: 'Mrs. Priya Nair',
      title: 'Food Critic',
      company: 'TasteBuds Magazine',
      image: avtar4,
      text: 'Raghvam offers a soulful food journey. A must-visit for any true food lover.'
    }
  ];

  // Grouping reviews into pairs
  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += 2) {
    groupedReviews.push(reviews.slice(i, i + 2));
  }

  return (
    <section className="text-center py-4 bg-white text-dark">
      <div className="container ">
        <h2 className="fw-bold ">What Our Client Says</h2>
        <Carousel 
          indicators={true} 
          controls={false} 
          interval={3000} 
          fade
          className="custom-carousel py-5"
        >
          {groupedReviews.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="row justify-content-center">
                {group.map((review, idx) => (
                  <div className="col-md-5 d-flex flex-column align-items-center text-center px-3" key={idx}>
                    <div
                      className="review-box rounded shadow-lg p-4 mb-4"
                      style={{ width: '100%', border: '1px solid #ddd' }}
                    >
                      {/* Centered Image Container */}
                      <div className="d-flex justify-content-center mb-3">
                        <div
                          className="rounded-circle overflow-hidden"
                          style={{ 
                            width: '100px', 
                            height: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <img
                            src={review.image}
                            alt={review.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block'
                            }}
                          />
                        </div>
                      </div>
                      <h5 className="fw-bold">{review.name}</h5>
                      <p className="text-muted small mb-1">{review.title}</p>
                      <p className="text-muted small mb-2">{review.company}</p>
                      <p className="text-dark small">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom CSS for the carousel indicators */}
        <style jsx>{`
          .custom-carousel .carousel-indicators button {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #000;
            margin: 0 5px;
            border: none;
            
          }
          .custom-carousel .carousel-indicators .active {
            background-color: #000;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClientReview;