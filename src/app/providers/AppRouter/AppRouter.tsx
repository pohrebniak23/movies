import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FilmsPage } from '../../../pages/FilmsPage/FilmsPage';
import { HomePage } from '../../../pages/HomePage/HomePage';
import { NotFound } from '../../../pages/NotFound/NotFound';
import { WatchFilmPage } from '../../../pages/WatchFilmPage/WatchFilmPage';
import { SerialsPage } from '../../../pages/SerialsPage/SerialsPage';
import { CartoonsPage } from '../../../pages/CartoonsPage/CartoonsPage';
import { SingleFilmPage } from '../../../pages/SingleFilmPage/SingleFilmPage';
import { ActorPage } from '../../../pages/ActorPage/ActorPage';

export enum RouteNames {
  HOME = '/',
  LOGIN = '/login',
  FILMS = '/films',
  FILMS_ITEM = '/films/:id',
  SERIALS = '/serials',
  SERIALS_ITEM = '/serials/:id',
  CARTOONS = '/cartoons',
  CARTOONS_ITEM = '/cartoons/:id',
  WATCH = '/watch/:id',
  ACTOR = '/actor/:id',
  ACCOUNT = '/account',
  SETTINGS = '/settings',
}

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<HomePage />} />
      <Route path={RouteNames.FILMS} element={<FilmsPage />} />
      <Route path={RouteNames.FILMS_ITEM} element={<SingleFilmPage />} />
      <Route path={RouteNames.SERIALS} element={<SerialsPage />} />
      <Route path={RouteNames.SERIALS_ITEM} element={<SingleFilmPage />} />
      <Route path={RouteNames.CARTOONS} element={<CartoonsPage />} />
      <Route path={RouteNames.SERIALS_ITEM} element={<SingleFilmPage />} />
      <Route path={RouteNames.WATCH} element={<WatchFilmPage />} />
      <Route path={RouteNames.ACTOR} element={<ActorPage />} />

      {/* <Route
        path={RouteNames.ACCOUNT}
        element={<PrivateRoute component={Account} isAuth={isAuth} />}
      /> */}
      {/* <Route
        path={RouteNames.SETTINGS}
        element={<PrivateRoute component={Settings} isAuth={isAuth} />}
      /> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
