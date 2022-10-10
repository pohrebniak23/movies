import React from 'react';
import { Navigate } from 'react-router-dom';

export interface IRoute {
  isAuth: boolean;
  component: React.ComponentType;
  redirectPath?: string;
}

export const PublicRoute: React.FC<IRoute> = ({
  isAuth,
  component,
  redirectPath,
}) => {
  if (!isAuth) {
    return React.createElement(component);
  }

  return redirectPath ? <Navigate to={redirectPath} /> : <Navigate to="/" />;
};

export const PrivateRoute: React.FC<IRoute> = ({
  isAuth,
  component,
  redirectPath,
}) => {
  if (isAuth) {
    return React.createElement(component);
  }

  return redirectPath ? (
    <Navigate to={redirectPath} />
  ) : (
    <Navigate to="/login" />
  );
};
