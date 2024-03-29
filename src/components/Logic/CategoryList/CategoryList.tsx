import React, { useState } from 'react';
import { useAppSelector } from '../../../shared/hooks/redux';
import { filmsApi } from '../../../services/filmsService';
import { IMovie } from '../../../shared/types/IMovie';
import { Loader } from '../../Simple/Loader/Loader';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import styles from './CategoryList.module.scss';

type Props = {
  category: string;
};

export const CategoryList: React.FC<Props> = React.memo(({ category }) => {
  const { year, rating, genre } = useAppSelector((state) => state.filters);
  const [limit] = useState(16);
  const {
    data: list,
    isFetching,
    isLoading,
  } = filmsApi.useGetContentByCategoryQuery({
    category,
    year,
    rating,
    genre,
    limit,
  });

  return (
    <div className={styles.categoryList}>
      {isFetching || isLoading ? (
        <Loader height="450px" />
      ) : (
        list?.docs?.map((item: IMovie) => (
          <CategoryItem key={item.name} info={item} />
        ))
      )}
    </div>
  );
});
