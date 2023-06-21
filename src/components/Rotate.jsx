import React from "react";
import about1 from "../images/about_1.png";
import about2 from "../images/about_2.png";
import about3 from "../images/about_3.png";
const Rotate = () => {
  return (
    <>
      <div class="carousel_wrapper">
        <div class="carousel">
          <div class="slide one">
            <img src={about1} />
          </div>
          <div class="slide two">
            <img src={about2} />
          </div>
          <div class="slide three">
            <img src={about3} />
          </div>
          {/* b
          
          
           */}
        </div>
      </div>
    </>
  );
};

export default Rotate;
