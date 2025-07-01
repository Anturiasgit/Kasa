import { useState } from 'react';
import './Slideshow.scss';

function Slideshow({ logement }) {
  const pictures = logement.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      {pictures.length > 0 && (
        <>
          <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image"/>

          {/* Flèches navigation */}
          {pictures.length > 1 && (
            <>
              <button className="left-arrow" onClick={prevSlide}>‹</button>
              <button className="right-arrow" onClick={nextSlide}>›</button>
            </>
          )}

          {/* Compteur */}
          <div className="slide-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow