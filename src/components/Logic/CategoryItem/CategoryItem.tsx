import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IMovie } from "../../../types/IMovie";
import { Button } from "../../UI/Button/Button";
import { Rating } from "../Rating/Rating";
import styles from "./CategoryItem.module.sass";

type Props = {
  info: IMovie;
};

export const CategoryItem: React.FC<Props> = React.memo(({ info }) => {
  const [isSaved, setIsSaved] = useState(false);

  const saveToFavourite = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className={styles.categoryItem}>
      <div className={styles.leftContent}>
        <img src={info.poster.url} alt="" className={styles.image} />
        <div className={styles.info}>
          <h2 className={styles.title}>{info.name}</h2>
          <span className={styles.properties}>
            {info.year} {info.movieLength} мин
          </span>
          <p className={styles.description}>{info.description}</p>
        </div>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.rating}>
          {info.rating.imdb && <Rating rating={info.rating.imdb} />}
        </div>
        <Button
          variant={isSaved ? "saved" : "notSaved"}
          iconLeft={isSaved ? <FcLike /> : <FcLikePlaceholder />}
          onClick={saveToFavourite}
        >
          Смотреть позже
        </Button>
      </div>
    </div>
  );
});
