import React, { Fragment, useMemo } from 'react';
import { IActor } from '../../../../shared/types/IActor';
import styles from './ActorInfo.module.scss';
import { dateConverter } from '../../../../shared/helpers/dateConverter';

type Props = {
  info: IActor;
};

export const ActorInfo: React.FC<Props> = ({ info }) => {
  const infoList = useMemo(
    () => [
      {
        title: 'Профессия:',
        data: info.profession.map((prof, id) => (
          <Fragment key={prof.value}>
            {id ? ', ' : ''}
            {prof.value}
          </Fragment>
        )),
      },
      { title: 'Дата рождения: ', data: dateConverter(info.birthday) },
      {
        title: 'Пол: ',
        data: info.sex,
      },
      { title: 'Рост: ', data: info.growth },

      {
        title: 'Всего фильмов: ',
        data: info.movies.length,
      },
    ],
    [info.profession, info.sex, info.growth, info.movies, info.birthday],
  );

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{info.name}</h1>

      <h2 className={styles.subtitle}>О актере</h2>
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
