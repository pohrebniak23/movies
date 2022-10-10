import React from 'react';
import { CategoryList } from '../../components/Logic/CategoryList/CategoryList';
import { Filters } from '../../components/Logic/Filters/Filters';
import styles from './CartoonsPage.module.scss';

export const CartoonsPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.block}>
        <Filters />
        <CategoryList category="cartoon" />
      </div>
    </div>
  );
};
