import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { filmsApi } from "../../../services/filmsService";
import styles from "./Video.module.sass";

export const Video: React.FC = () => {
  const { id } = useParams();
  const { data: movie } = filmsApi.useGetFilmByIdQuery(id);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobd.ru/js/player_.js";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className={styles.video}>
      <div className="container">
        <h1 className={styles.title}>{movie?.name}</h1>
        <div data-kinopoisk={id} id="kinobd"></div>
      </div>
    </div>
  );
};
