import { SaveToFavoriteBtn } from 'components/Simple/SaveToFavoriteBtn/SaveToFavoriteBtn';
import React, { Fragment, useMemo } from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { dateConverter } from '../../../../shared/helpers/dateConverter';
import { typeConverter } from '../../../../shared/helpers/typeConverter';
import { IMovieInfo } from '../../../../shared/types/IMovieInfo';
import { Button } from '../../../UI/Button/Button';
import styles from './SingleFilmInfo.module.scss';

type Props = {
  info: IMovieInfo;
};

export const SingleFilmInfo: React.FC<Props> = ({ info }) => {
  const infoList = useMemo(
    () => [
      {
        title: 'Страна: ',
        data: info.countries.map((cntr, id) => (
          <Fragment key={cntr.name}>
            {id ? ', ' : ''}
            {cntr.name}
          </Fragment>
        )),
      },
      { title: 'Слоган: ', data: info.slogan },
      {
        title: 'Жанр:',
        data: info.genres.map((gnr, id) => (
          <Fragment key={gnr.name}>
            {id ? ', ' : ''}
            {gnr.name}
          </Fragment>
        )),
      },
      {
        title: 'Время: ',
        data: info.movieLength ? `${info.movieLength} мин` : null,
      },
      { title: 'Премьера в мире: ', data: dateConverter(info.premiere?.world) },
    ],
    [
      info.countries,
      info.genres,
      info.movieLength,
      info.premiere?.world,
      info.slogan,
    ],
  );

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{info.name}</h1>
      <div className={styles.nav}>
        <Link to={`/watch/${info.id}`}>
          <Button variant="white" iconLeft={<AiOutlinePlayCircle />}>
            Смотреть
          </Button>
        </Link>
        <SaveToFavoriteBtn id={info.id} />
      </div>

      <h2 className={styles.subtitle}>О {typeConverter(info.typeNumber)}е</h2>
      <div className={styles.gridInfo}>
        {infoList.map((item) => (
          <div key={item.title} className={styles.gridItem}>
            <p>{item.title}</p>
            {item.data ? <span>{item.data}</span> : '-'}
          </div>
        ))}
      </div>
    </div>
  );
};
