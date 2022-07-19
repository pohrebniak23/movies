import React from "react";
import { LatestContent } from "../../components/Logic/LatestContent/LatestContent";

export const Home: React.FC = () => {
  return (
    <>
      <LatestContent category="movie" title="Фильмы" />

      <LatestContent category="tv-series" title="Сериалы" />
    </>
  );
};
