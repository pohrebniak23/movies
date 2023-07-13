import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { filmsApi } from '../../../services/filmsService';
import BannerImage from '../../../shared/assets/banner-bg.jpg';
import { Button } from '../../UI/Button/Button';
import styles from './Banner.module.scss';

type Props = {
  trailerLink: string;
  filmId: string;
};

export const Banner: React.FC<Props> = ({ trailerLink, filmId }) => {
  const { data: film } = filmsApi.useGetFilmByIdQuery(filmId);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  return (
    <div className={styles.banner}>
      <img className={styles.image} src={BannerImage} alt="" />

      <video
        className={classNames(styles.video, {
          [styles.videoLoaded]: isVideoLoaded,
        })}
        width="100%"
        height="100%"
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => {
          setIsVideoLoaded(true);
        }}
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
