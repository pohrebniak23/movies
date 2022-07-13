import React from "react";
import { Route, Routes } from "react-router-dom";
import { Film } from "../../pages/Film/Film";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import { PrivateRoute, PublicRoute } from "../../routes";
import { Login } from "./Login";

export enum RouteNames {
  HOME = "/",
  LOGIN = "/login",
  FILMS = "/films",
  FILMS_ITEM = "/films/:id"
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
        element={<PrivateRoute component={Home} isAuth={isAuth} />}
      />
      <Route
        path={RouteNames.FILMS_ITEM}
        element={<PrivateRoute component={Film} isAuth={isAuth} />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};
