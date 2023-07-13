import { RouteNames } from 'app/providers/AppRouter/AppRouter';
import React from 'react';
import { Banner } from '../../components/Logic/Banner/Banner';
import { LatestContent } from '../../components/Logic/LatestContent/LatestContent';

export const HomePage: React.FC = () => {
  return (
    <>
      <Banner trailerLink="/trailer.mp4" filmId="1045056" />

      <LatestContent category="movie" title="Фильмы" link={RouteNames.FILMS} />

      <LatestContent
        category="tv-series"
        title="Сериалы"
        link={RouteNames.SERIALS}
      />
    </>
  );
};
