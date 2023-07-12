import React from 'react';
import { useParams } from 'react-router-dom';
import { filmsApi } from '../../../services/filmsService';
import { BackBtn } from '../../UI/BackBtn/BackBtn';
import { Loader } from '../../Simple/Loader/Loader';
import { Tabs } from '../../UI/Tabs/Tabs';
import { ActorInfo } from './ActorInfo/ActorInfo';
import styles from './Actor.module.scss';
import { ActorFilmsSlider } from './ActorFilmsSlider/ActorFilmsSlider';

export const Actor: React.FC = () => {
  const { id = '' } = useParams();
  const { data: person } = filmsApi.useGetActorByIdQuery(id);

  return (
    <div className="container">
      {person ? (
        <div className={styles.block}>
          <BackBtn />
          <div className={styles.content}>
            <img src={person.photo} alt="" className={styles.poster} />
            <ActorInfo info={person} />
          </div>

          <Tabs
            tabsList={[
              {
                label: 'Фильмы',
                component: <ActorFilmsSlider films={person.movies} />,
              },
            ]}
          />
        </div>
      ) : (
        <Loader height="500px" />
      )}
    </div>
  );
};
