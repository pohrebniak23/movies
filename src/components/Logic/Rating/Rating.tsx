import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './Rating.module.scss';

type Props = {
  rating: number;
};

export const Rating: React.FC<Props> = React.memo(({ rating, ...props }) => {
  return (
    <div className={styles.rating} {...props}>
      <AiOutlineStar className={styles.icon} />
      {rating}
    </div>
  );
});
