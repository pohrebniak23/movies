import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundImage from 'shared/assets/not-found-image.png';
import { filmsApi } from '../../../services/filmsService';
import { Loader } from '../../Simple/Loader/Loader';
import { BackBtn } from '../../UI/BackBtn/BackBtn';
import { Tabs } from '../../UI/Tabs/Tabs';
import styles from './SingleFilm.module.scss';
import { SingleFilmActorsSlider } from './SingleFilmActorsSlider/SingleFilmActorsSlider';
import { SingleFilmInfo } from './SingleFilmInfo/SingleFilmInfo';

export const SingleFilm: React.FC = () => {
  const { id = '' } = useParams();
  const { data: filmData } = filmsApi.useGetFilmByIdQuery(id);

  const tabs: any = useMemo(() => {
    const tabsArray = [
      filmData?.description && {
        label: 'Описание',
        component: (
          <p className={styles.description}>{filmData?.description}</p>
        ),
      },
      filmData?.persons && {
        label: 'Актеры',
        component: <SingleFilmActorsSlider actors={filmData?.persons} />,
      },
    ];

    return tabsArray.filter(Boolean);
  }, [filmData]);

  return (
    <div className="container">
      {filmData ? (
        <div className={styles.block}>
          <BackBtn />
          <div className={styles.content}>
            <img
              src={
                filmData.poster?.url || filmData.backdrop.url || NotFoundImage
              }
              alt=""
              className={styles.poster}
            />
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
