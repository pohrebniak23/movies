import React from "react";
import { IMovieInfo } from "../../../types/IMovieInfo";
import { FilmInfo } from "../FilmInfo/FilmInfo";
import styles from "./SingleFilm.module.sass";

type Props = {
  filmData: IMovieInfo;
};

export const SingleFilm: React.FC<Props> = ({ filmData }) => {
  console.log(filmData);

  return (
    <div className={styles.container}>
      {filmData ? (
        <div className={styles.filmBlock}>
          <img src={filmData.poster.url} alt="" className={styles.poster} />
          <FilmInfo info={filmData} />
        </div>
      ) : (
        <div className="123">Loader</div>
      )}
    </div>
  );
};
