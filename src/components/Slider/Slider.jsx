import React, { useState, useEffect, useRef } from "react";
import s from "./Slider.module.scss";
import slide1 from "../../assets/img/slide_1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import slide4 from "../../assets/img/slide4.jpeg";
import slide5 from "../../assets/img/slide6.png";
import slide6 from "../../assets/img/slide7.jpg";
import slide7 from "../../assets/img/slide9.jpg";
import { Container } from "../../layout/Container";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval); 
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={s.sliderContainer}>
      <Container>
        <div
          className={s.slider}
          ref={sliderRef}
          onClick={(e) => {
            const rect = sliderRef.current.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            if (clickX > rect.width / 2) {
              goToNext();
            } else {
              goToPrevious();
            }
          }}
        >
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt={`Slide ${currentIndex - 1}`}
            className={s.imgPrev}
          />
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className={s.img}
          />
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt={`Slide ${currentIndex + 1}`}
            className={s.imgNext}
          />
        </div>
      </Container>
    </div>
  );
};
