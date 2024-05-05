import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./index.module.css";

function SliderImage() {
  return (
    <div className={styles["slider-image-container"]}>
      <img
        width={327}
        height={188}
        src="https://via.placeholder.com/150"
        alt="placeholder"
      />
    </div>
  );
}

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {Array.from({ length: 5 }).map((_, index) => (
          <SliderImage key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
