import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Slideshow.css';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
  '/images/slide5.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate('/movies');
  };

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />

      {/* Overlay text and button */}
      <div className="slideshow-overlay">
        <h2 className="slideshow-heading">Bringing the big screen to your screen</h2>
        <button className="discover-btn" onClick={handleClick}>
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
