import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "../../routes";
import { Login } from "../Logic/Login/Login";
import { Films } from "../../pages/Films/Films";
import { SingleFilm } from "../../pages/SingleFilm/SingleFilm";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Watch } from "../../pages/Watch/Watch";
import { Serials } from "../../pages/Serials/Serials";
import { Cartoons } from "../../pages/Cartoons/Cartoons";
import { Actor } from "../../pages/Actor/Actor";

export enum RouteNames {
  HOME = "/",
  LOGIN = "/login",
  FILMS = "/films",
  FILMS_ITEM = "/films/:id",
  SERIALS = "/serials",
  SERIALS_ITEM = "/serials/:id",
  CARTOONS = "/cartoons",
  CARTOONS_ITEM = "/cartoons/:id",
  WATCH = "/watch/:id",
  ACTOR = "/actor/:id",
  ACCOUNT = "/account",
  SETTINGS = "/settings"
}

export const AppRouter: React.FC = () => {
  const isAuth = true;

  return (
    <Routes>
      <Route
        path={RouteNames.LOGIN}
        element={<PublicRoute component={Login} isAuth={isAuth} />}
      />
      <Route
        path={RouteNames.HOME}
        element={<Home />}
      />
      <Route
        path={RouteNames.FILMS}
        element={<Films />}
      />
      <Route
        path={RouteNames.FILMS_ITEM}
        element={<SingleFilm />}
      />
      <Route
        path={RouteNames.SERIALS}
        element={<Serials />}
      />
      <Route
        path={RouteNames.SERIALS_ITEM}
        element={<SingleFilm />}
      />
      <Route
        path={RouteNames.CARTOONS}
        element={<Cartoons />}
      />
      <Route
        path={RouteNames.SERIALS_ITEM}
        element={<SingleFilm />}
      />
      <Route
        path={RouteNames.WATCH}
        element={<Watch />}
      />
      <Route
        path={RouteNames.ACTOR}
        element={<Actor />}
      />

      {/* <Route
        path={RouteNames.ACCOUNT}
        element={<PrivateRoute component={Account} isAuth={isAuth} />}
      /> */}
      {/* <Route
        path={RouteNames.SETTINGS}
        element={<PrivateRoute component={Settings} isAuth={isAuth} />}
      /> */}

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};
