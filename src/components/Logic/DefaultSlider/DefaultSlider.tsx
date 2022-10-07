import React, { PropsWithChildren, ReactNode, useMemo } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DefaultSlider.sass";

const NextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <button type="button" className="next-arrow" onClick={onClick}>
      <GrNext />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;

  return (
    <button type="button" className="prev-arrow" onClick={onClick}>
      <GrPrevious />
    </button>
  );
};

interface DefaultSliderProps {
  children: ReactNode;
}

export const DefaultSlider = ({ children }: DefaultSliderProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="block">
      <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        {children}
      </Slider>
    </div>
  );
};
