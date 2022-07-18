import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setRating, setYear } from "../../../store/reducers/filtersSlice";
import { Button } from "../../UI/Button/Button";
import { Range } from "../../UI/Range/Range";
import styles from "./Filters.module.sass";

export const Filters: React.FC = () => {
  const dispatch = useAppDispatch();

  const { year, rating } = useAppSelector((state) => state.filters);
  const [yearData, setYearData] = useState(year);
  const [ratingData, setRatingData] = useState(rating);

  const filtersList = [
    {
      name: "Год выпуска:",
      component: (
        <Range
          data={yearData}
          minValue={1920}
          maxValue={2022}
          setDataValue={setYearData}
        />
      ),
    },
    {
      name: "Рейтинг:",
      component: (
        <Range
          data={ratingData}
          minValue={1}
          maxValue={10}
          setDataValue={setRatingData}
        />
      ),
    },
  ];

  const handleSumbit = () => {
    dispatch(setYear([yearData.min, yearData.max]));
    dispatch(setRating([ratingData.min, ratingData.max]));
  };

  return (
    <div className={styles.filters}>
      <h2 className={styles.title}>
        Фильтры
      </h2>
      <div className={styles.content}>
        {filtersList?.map((item: any) => (
          <div key={item.name} className={styles.item}>
            <h3 className={styles.name}>{item.name}</h3>
            {item.component}
          </div>
        ))}
        <div className={styles.buttons}>
          <Button onClick={handleSumbit}>Применить</Button>
          <Button variant="outline" onClick={handleSumbit}>
            Сбросить
          </Button>
        </div>
      </div>
    </div>
  );
};
