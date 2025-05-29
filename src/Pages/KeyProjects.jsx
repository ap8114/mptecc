import React, { useRef, useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const projects = [
  {
    title: "Raghvam",
    subtitle: "Raghvam Cafe & Restaurant",
    image: "https://i.postimg.cc/d3xgYFhX/Screenshot-2025-05-19-121839.png",
  },
  {
    title: "Mumbasa cafe",
    subtitle: "Mumbasa Cafe & Restaurant",
    image: "https://i.postimg.cc/264nDVSm/c803-Mumbasa-Cafe-design.jpg",
  },
  {
    title: "FC4U",
    subtitle: "Flying colors 4 U",
    image: "https://i.postimg.cc/XY9RmK59/Whats-App-Image-2025-04-18-at-11-31-09-5dff3523.jpg",
  },
  {
    title: "Banger",
    subtitle: "Continental, Asian, Bar Food, Beverages",
    image: "https://i.postimg.cc/jjrsCGh0/Whats-App-Image-2025-04-22-at-13-50-03-90e384c7.jpg",
  },
  {
    title: "English-Samjho",
    subtitle: "Redefining English",
    image: "https://i.postimg.cc/wTHTmPb5/f73919e0-e801-40e7-a9ce-ea3d3e38bf21.png",
  },
  {
    title: "Magician Film",
    subtitle: "Magician Film Production",
    image: "https://i.postimg.cc/tJRdbScF/Whats-App-Image-2025-04-22-at-13-56-27-74ca6b6d.jpg",
  },
  {
    title: "Colector Ki Chai",
    subtitle: "Shape Of your Dream With A Cup Of Tea",
    image: "https://i.postimg.cc/65ZM3ngT/Screenshot-2025-05-19-121406.png",
  },
];

const KeyProjects = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth;
      let cardsPerView = 4;

      if (width < 576) {
        cardsPerView = 1;
      } else if (width < 768) {
        cardsPerView = 2;
      } else if (width < 992) {
        cardsPerView = 3;
      }

      const containerWidth = scrollRef.current?.offsetWidth || 0;
      const newCardWidth = containerWidth / cardsPerView - 16;
      setCardWidth(newCardWidth);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scroll = (direction) => {
    const scrollAmount = cardWidth + 16;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="container py-5 position-relative d-flex flex-column align-items-center">
      <h1 className="text-center mb-4 fw-bold">
        <span style={{ color: "#222" }}>KEY </span>
        <span style={{ color: "#3A8DDE" }}>PROJECT</span>
      </h1>

      {/* Enhanced Scroll Buttons */}
      <button
        className="position-absolute top-50 start-0 translate-middle-y d-flex align-items-center justify-content-center z-3 border-0"
        style={{ 
          width: "50px", 
          height: "50px", 
          backgroundColor: "white", 
          borderRadius: "50%", 
          cursor: "pointer",
          left: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          border: "2px solid #3A8DDE"
        }}
        onClick={() => scroll("left")}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#3A8DDE";
          e.currentTarget.querySelector('svg').style.color = "white";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.querySelector('svg').style.color = "#3A8DDE";
        }}
      >
        <HiArrowLeft size={24} color="#3A8DDE" style={{ transition: "all 0.3s ease" }} />
      </button>
      
      <button
        className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-center z-3 border-0"
        style={{ 
          width: "50px", 
          height: "50px", 
          backgroundColor: "white", 
          borderRadius: "50%", 
          cursor: "pointer",
          right: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          border: "2px solid #3A8DDE"
        }}
        onClick={() => scroll("right")}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#3A8DDE";
          e.currentTarget.querySelector('svg').style.color = "white";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.querySelector('svg').style.color = "#3A8DDE";
        }}
      >
        <HiArrowRight size={24} color="#3A8DDE" style={{ transition: "all 0.3s ease" }} />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="d-flex flex-row px-3 py-2 gap-3 w-100 overflow-auto hide-scroll"
        style={{
          scrollBehavior: "smooth",
          paddingLeft: "70px",
          paddingRight: "70px"
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center justify-content-center flex-shrink-0 text-white rounded-4 overflow-hidden position-relative"
            style={{
              width: `${cardWidth}px`,
              height: "320px",
              minWidth: `${cardWidth}px`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-100 h-100"
              style={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                filter: "brightness(0.7)",
              }}
            />
            
            <div 
              className="position-absolute bottom-0 w-100 text-center p-3"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(2px)"
              }}
            >
              <h5 className="fw-bold mb-1 fs-5 text-white">{project.title}</h5>
              <p className="fw-semibold mb-0 fs-6 text-secondary">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyProjects;

// CSS styles (you can add these to your stylesheet)
const styles = `
  .hide-scroll {
    scrollbar-width: none; /* Firefox */
  }
  
  .hide-scroll::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  
  /* Hover effect */
  .d-flex.flex-row > div:hover {
    transform: scale(1.05);
    z-index: 2;
  }
`;

// Add styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}