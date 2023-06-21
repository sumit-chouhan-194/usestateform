import React from "react";
import Slider from "react-slick";
import slider_img from "../images/slider_img.png";
import frame_img from "../images/slider_frame.png";
export const PracticeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
    pouseonhover: true,
    autoplaySpeed: 0,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 5000,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          speed: 5000,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 5000,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 319,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 5000,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="containe r">
        <div className="position-relative d-flex justify-content-center flex-column">
          <Slider {...settings} className="position-relative">
            <div className="px-1">
              <img className="w-100" src={slider_img} alt="nature_img" />
            </div>
            <div className="px-1">
              <img className="w-100" src={slider_img} alt="nature_img" />
            </div>
            <div className="px-1">
              <img className="w-100" src={slider_img} alt="nature_img" />
            </div>
            <div className="px-1">
              <img className="w-100" src={slider_img} alt="nature_img" />
            </div>
          </Slider>
          <div>
            <img
              className="w-100 position-absolute top-0"
              src={frame_img}
              alt="frame"
            />
          </div>
          <div className="position-absolute heading-parent text-center">
            <h1 className="text-white ff_nomedia mb-0 ">lore</h1>
          </div>
          <h2 className="h2_history ff_nomedia">history</h2>
          <h2 className="h2_faction ff_nomedia">factions</h2>
          <div></div>
        </div>
      </section>
    </>
  );
};
export default PracticeSlider;
