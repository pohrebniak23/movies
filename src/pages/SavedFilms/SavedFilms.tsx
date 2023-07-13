import { CategoryItem } from 'components/Logic/CategoryItem/CategoryItem';
import React, { useEffect, useState } from 'react';
import { filmsApi } from '../../services/filmsService';
import styles from './SavedFilms.module.scss';

export const SavedFilms: React.FC = () => {
  const [savedFilmsData, setSavedFilmsData] = useState([]);
  const [getSavedFilms] = filmsApi.useLazyGetSavedFilmsQuery();

  useEffect(() => {
    const storageItems = { ...localStorage };

    const savedFilms = Object.keys(storageItems).filter((film) =>
      film.includes('saved_film'),
    );

    const idsList = savedFilms.map((film) =>
      film
        .split('')
        .splice(11, film.length - 1)
        .join(''),
    );

    getSavedFilms(idsList)
      .unwrap()
      .then((list: any) => {
        setSavedFilmsData(list);
      });
  }, [getSavedFilms]);

  return (
    <div className={styles.saved}>
      <div className={`${styles.block} container`}>
        <h1 className={styles.title}>Сохраненные фильмы</h1>

        {!savedFilmsData.length && (
          <p className={styles.text}>У вас еще нет сохраненных фильмов</p>
        )}

        {savedFilmsData.map((info) => (
          <CategoryItem info={info} />
        ))}
      </div>
    </div>
  );
};
