import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import performance from '../assets/latestblog/performance.png'
import ux from '../assets/latestblog/ux.png'
import seo from '../assets/latestblog/seo.png'
import b2b from '../assets/latestblog/b2b.png'
import digitalmarketing from '../assets/latestblog/digitalmarketing.png'
import saas from '../assets/latestblog/saas.png'
export default function Latestblog() {
  const blogPosts = [
    {
      img: performance,
      title: "Increased Speed and Performance",
    },
    {
      img: ux,
      title: "User Experience (UX) Design",
    },
    {
      img: seo,
      title: "SEO Strategy",
    },
    {
      img: b2b,
      title: "B2B Marketing Trends",
    },
    {
      img: digitalmarketing,
      title: "The right digital marketing agency",
    },
    {
      img: saas,
      title: "Drove 3X Growth for a SaaS",
    },
  ];

  return (
    <>
      <div className="container-fluid py-4 px-4" id="latest-blog" style={{ 
        backgroundColor: "#3B8FE0",
        background: 'linear-gradient(135deg, #3B8FE0 0%, #1E5FA0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }}></div>

        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500, position: 'relative' }}>
          <h2 className="fw-bold mb-3 text-white" style={{ 
            fontSize: '3rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            position: 'relative',
            display: 'inline-block'
          }}>
            Latest Blog Post
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#FFD700',
              borderRadius: '2px'
            }}></span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          style={{
            padding: '20px 10px',
            position: 'relative',
            zIndex: 1
          }}
        >
          {blogPosts.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card-container position-relative" style={{
                perspective: '1000px',
                height: '300px'
              }}>
                <div className="card-inner" style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px -5px rgba(0,0,0,0.2)',
                  borderRadius: '10px'
                }}>
                  {/* Front */}
                  <div className="card-front" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={item.img} 
                      alt="" 
                      className="img-fluid h-100 w-100" 
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s'
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>

                  {/* Back */}
                  <div className="card-back d-flex align-items-center justify-content-center text-center rounded" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: 'rgba(30, 95, 160, 0.9)',
                    transform: 'rotateY(180deg)',
                    padding: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <h4 className="text-white px-3" style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      fontWeight: '600',
                      lineHeight: '1.4'
                    }}>
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="rounded shadow-sm mt-3 d-flex align-items-center" style={{ 
                minHeight: '100px', 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
              }}>
                <div className="d-flex flex-column justify-content-center p-3 w-100">
                  <a
                    className="h5 fw-bold text-decoration-none mb-0"
                    href="#"
                    style={{ 
                      color: '#1E5FA0', 
                      transition: 'all 0.3s',
                      position: 'relative',
                      display: 'inline-block'
                    }}
                    onMouseEnter={e => {
                      e.target.style.color = '#10487C';
                    }}
                    onMouseLeave={e => {
                      e.target.style.color = '#1E5FA0';
                    }}
                  >
                    {item.title}
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      width: '0',
                      height: '2px',
                      backgroundColor: '#FFD700',
                      transition: 'width 0.3s'
                    }}></span>
                  </a>
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}