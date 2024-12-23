import React, { useState } from 'react';

function HeaderCarousel() {
  const [activeIndex, setActiveIndex] = useState(0); // Active slide state

  const slides = [
    {
      imgSrc: '/img/home1.jpg',
      title: 'Fashionable Dress',
      subtitle: '10% Off Your First Order',
    },
    {
      imgSrc: '/img/home2.jpg',
      title: 'Reasonable Price',
      subtitle: '10% Off Your First Order',
    },
    {
      imgSrc: '/img/home3.jpg',
      title: 'Reasonable Price',
      subtitle: '10% Off Your First Order',
    },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div id="header-carousel" className="carousel slide" style={{ height: '300px' }}> {/* Decreased the height here */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <img
              className="img-fluid"
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
              style={{ height: '500px', objectFit: 'cover' }} // Adjusted image height and object fit
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '700px' }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  {slide.subtitle}
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  {slide.title}
                </h3>
                <a href="#" className="btn btn-light py-2 px-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Prev Button */}
      <button
        className="carousel-control-prev btn btn-dark"
        onClick={prevSlide}
        style={{ width: '45px', height: '45px' }}
      >
        <span className="carousel-control-prev-icon mb-n2"></span>
      </button>

      {/* Custom Next Button */}
      <button
        className="carousel-control-next btn btn-dark"
        onClick={nextSlide}
        style={{ width: '45px', height: '45px' }}
      >
        <span className="carousel-control-next-icon mb-n2"></span>
      </button>
    </div>
  );
}

export default HeaderCarousel;
