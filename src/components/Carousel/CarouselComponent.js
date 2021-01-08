import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../../styles/index.scss';


export const CarouselComponent = (props) => {
  return (
    <div className="__carousel_styles">
      <Carousel 
      infiniteLoop={true}
      autoPlay={true}
      stopOnHover={true}
      interval={4000}
      showArrows={true} 
      showThumbs={false} showStatus={false} showIndicators={false}>
        <div>
          <img src={props.image1} alt="imag" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={props.image2} alt="imag" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={props.image3} alt="imag" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};
