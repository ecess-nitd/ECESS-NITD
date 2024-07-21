import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import './carousel-actual.css';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  const nextSlide = () => {
    setIndex((state) => (state + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((state) => (state - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      {transitions((style, i) => (
        <animated.div
          className="carousel-item"
          style={{
            ...style,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <img src={images[i]} alt={`Slide ${i}`} />
        </animated.div>
      ))}
      <button className="carousel-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;