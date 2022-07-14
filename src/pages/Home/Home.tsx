import React from "react";
import { LatestContent } from "../../components/Logic/LatestContent/LatestContent";

export const Home: React.FC = () => {
  return (
    <>
      <LatestContent type="movie" />

      <LatestContent type="tv-series" />
    </>
  );
};
