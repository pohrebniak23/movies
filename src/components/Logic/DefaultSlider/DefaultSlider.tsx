import React, { PropsWithChildren } from "react";
import { IPerson } from "../../../types/IMovieInfo";
import { ActorCard } from "../ActorСard/ActorCard";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DefaultSlider.sass";

type Props = {
  actors?: IPerson[];
  films?: any;
};

export const DefaultSlider: React.FC<Props> = ({ actors, films }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

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

  return (
    <>
      {actors && (
        <div className="block">
          <Slider
            {...settings}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {actors.map((actor) => (
              <ActorCard key={actor.id} actorData={actor} />
            ))}
          </Slider>
        </div>
      )}

      {films && (
        <div className="block">
          <Slider
            {...settings}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {films.map((film: any) => (
              <ActorCard key={film.id} actorData={film} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};
