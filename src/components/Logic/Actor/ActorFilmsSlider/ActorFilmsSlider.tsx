import React from "react";
import { IActorMovies } from "../../../../types/IActor";
import { DefaultSlider } from "../../DefaultSlider/DefaultSlider";
import { FilmSliderCard } from "../FilmSliderCard/FilmSliderCard";

type Props = {
  films: IActorMovies[] | undefined;
};

export const ActorFilmsSlider: React.FC<Props> = ({ films }) => {
  return (
    <DefaultSlider>
      {films?.slice(0, 5).map((film) => (
        <FilmSliderCard key={film.id} id={film.id} name={film.name} />
      ))}
    </DefaultSlider>
  );
};
