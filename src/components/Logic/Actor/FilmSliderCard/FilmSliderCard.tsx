import React from 'react';
import NotFoundImage from 'shared/assets/not-found-image.png';
import { filmsApi } from '../../../../services/filmsService';
import styles from './FilmSliderCard.module.scss';

type Props = {
  id: number;
};

export const FilmSliderCard: React.FC<Props> = ({ id }) => {
  const { data: film } = filmsApi.useGetFilmByIdQuery(id);

  return (
    <a href={`/films/${id}`} className={styles.card}>
      {film ? (
        <img
          src={film.poster?.url || film.backdrop.url || NotFoundImage}
          alt=""
          className={styles.image}
        />
      ) : (
        <div className={styles.poster} />
      )}

      <h2 className={styles.title}>{film?.name || film?.alternativeName}</h2>
    </a>
  );
};
