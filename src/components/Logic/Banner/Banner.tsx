import React from "react";
import { Link } from "react-router-dom";
import { filmsApi } from "../../../services/filmsService";
import { Button } from "../../UI/Button/Button";
import styles from "./Banner.module.sass";

type Props = {
  trailerLink: string;
  filmId: string;
};

export const Banner: React.FC<Props> = ({ trailerLink, filmId }) => {
  const { data: film } = filmsApi.useGetFilmByIdQuery(filmId);

  return (
    <div className={styles.banner}>
      <video
        className={styles.video}
        width="100%"
        height="100%"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={trailerLink} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className={styles.info}>
        <div className="container">
          <h2 className={styles.title}>{film?.name}</h2>
          <p className={styles.description}>{film?.description}</p>
          <Link to={`/films/${filmId}`}>
            <Button variant="white">Подробнее</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
