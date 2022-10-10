import React from 'react';
import { Banner } from '../../components/Logic/Banner/Banner';
import { LatestContent } from '../../components/Logic/LatestContent/LatestContent';

export const Home: React.FC = () => {
  return (
    <>
      <Banner trailerLink="/trailer.mp4" filmId="1045056" />

      <LatestContent category="movie" title="Фильмы" />

      <LatestContent category="tv-series" title="Сериалы" />
    </>
  );
};
