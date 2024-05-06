import React from "react";
import Slider from "react-slick";
import styles from "./index.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderImage({ imgUrl = null }) {
  return (
    <div className={styles["slider-image-container"]}>
      <img
        width={355}
        height={188}
        src={imgUrl || "https://via.placeholder.com/355x188"}
        alt="slider-image"
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
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        {Array.from({ length: 5 }).map((_, index) => (
          <SliderImage key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
