import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { ICard } from '../../../types/ICard';
import styles from './FilmCard.module.scss';

export const FilmCard: React.FC<ICard> = ({ image, title, length }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.nav}>
        {length && (
          <div className={styles.item}>
            <BiTimeFive /> {length} min
          </div>
        )}
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
