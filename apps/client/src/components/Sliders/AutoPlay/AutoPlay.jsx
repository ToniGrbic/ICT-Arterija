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

  const photos = [
    "https://i.ibb.co/pj8gzJb/output-onlinepngtools-2.png",
    "https://i.ibb.co/w0Z1qGm/output-onlinepngtools.png",
    "https://i.ibb.co/K6KVFX6/IMG-2.png",
  ];

  return (
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        {photos.map((url, index) => (
          <SliderImage key={index} imgUrl={url} />
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
