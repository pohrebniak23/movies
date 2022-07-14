import React, { useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { filmsApi } from "../../../services/filmsService";
import { IMovie } from "../../../types/IMovie";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import styles from "./CategoryList.module.sass";

type Props = {
  category: string;
};

export const CategoryList: React.FC<Props> = React.memo(({ category }) => {
  const { year, rating } = useAppSelector((state) => state.filters);
  const [limit] = useState(8);
  const { data: list } = filmsApi.useGetContentByCategoryQuery({
    category,
    year,
    rating,
    limit,
  });

  return (
    <div className="container">
      <div className={styles.categoryList}>
        {list?.docs?.map((item: IMovie) => (
          <CategoryItem key={item.name} info={item} />
        ))}
      </div>
    </div>
  );
});
