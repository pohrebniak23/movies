import React, { useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { filmsApi } from "../../../services/filmsService";
import { IMovie } from "../../../types/IMovie";
import { Loader } from "../../UI/Loader/Loader";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import styles from "./CategoryList.module.sass";

type Props = {
  category: string;
};

export const CategoryList: React.FC<Props> = React.memo(({ category }) => {
  const { year, rating, genre } = useAppSelector((state) => state.filters);
  const [limit] = useState(8);
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
