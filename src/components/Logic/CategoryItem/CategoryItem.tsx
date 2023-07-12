import { SaveToFavoriteBtn } from 'components/Simple/SaveToFavoriteBtn/SaveToFavoriteBtn';
import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from 'shared/assets/not-found-image.png';
import { IMovie } from '../../../shared/types/IMovie';
import { Rating } from '../Rating/Rating';
import styles from './CategoryItem.module.scss';

type Props = {
  info: IMovie;
};

export const CategoryItem: React.FC<Props> = React.memo(({ info }) => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.leftContent}>
        <Link to={`/films/${info.id}`}>
          <img
            src={info.poster?.url || NotFoundImage}
            alt=""
            className={styles.image}
          />
        </Link>
        <div className={styles.info}>
          <Link to={`/films/${info.id}`}>
            <h2 className={styles.title}>{info.name}</h2>
          </Link>
          <span className={styles.properties}>
            {info.year}, {info.movieLength} мин
          </span>
          <p className={styles.description}>{info.description}</p>
        </div>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.rating}>
          {info.rating.imdb > 0 && <Rating rating={info.rating.imdb} />}
        </div>
        <SaveToFavoriteBtn id={info.id} />
      </div>
    </div>
  );
});
