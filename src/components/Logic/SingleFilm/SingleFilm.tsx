import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BackBtn } from '../../UI/BackBtn/BackBtn';
import { Loader } from '../../Simple/Loader/Loader';
import { SingleFilmInfo } from './SingleFilmInfo/SingleFilmInfo';
import { Tabs } from '../../UI/Tabs/Tabs';
import { filmsApi } from '../../../services/filmsService';
import { SingleFilmActorsSlider } from './SingleFilmActorsSlider/SingleFilmActorsSlider';
import styles from './SingleFilm.module.scss';

export const SingleFilm: React.FC = () => {
  const { id } = useParams();
  const { data: filmData } = filmsApi.useGetFilmByIdQuery(id);

  const tabs = useMemo(
    () => [
      {
        label: 'Описание',
        component: (
          <p className={styles.description}>{filmData?.description}</p>
        ),
      },
      {
        label: 'Актеры',
        component: <SingleFilmActorsSlider actors={filmData?.persons} />,
      },
    ],
    [filmData],
  );

  return (
    <div className="container">
      {filmData ? (
        <div className={styles.block}>
          <BackBtn />
          <div className={styles.content}>
            <img src={filmData.poster.url} alt="" className={styles.poster} />
            <SingleFilmInfo info={filmData} />
          </div>

          <Tabs tabsList={tabs} />
        </div>
      ) : (
        <Loader height="500px" />
      )}
    </div>
  );
};
