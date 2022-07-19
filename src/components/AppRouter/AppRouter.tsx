import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "../../routes";
import { Login } from "../Logic/Login/Login";
import { Films } from "../../pages/Films/Films";
import { SingleFilm } from "../../pages/SingleFilm/SingleFilm";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";

export enum RouteNames {
  HOME = "/",
  LOGIN = "/login",
  FILMS = "/films",
  FILMS_ITEM = "/films/:id",
  SERIALS = "/serials",
  SERIALS_ITEM = "/serials/:id",
  CARTOONS = "/cartoons",
  CARTOONS_ITEM = "/cartoons/:id",
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
