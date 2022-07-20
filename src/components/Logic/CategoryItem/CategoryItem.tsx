import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { BsCheck } from "react-icons/bs";
import { IMovie } from "../../../types/IMovie";
import { Button } from "../../UI/Button/Button";
import { Rating } from "../Rating/Rating";
import styles from "./CategoryItem.module.sass";
import { Link } from "react-router-dom";

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
        <Link to={`/films/${info.id}`}>
          <img src={info.poster.url} alt="" className={styles.image} />
        </Link>
        <div className={styles.info}>
          <Link to={`/films/${info.id}`}>
            <h2 className={styles.title}>{info.name}</h2>
          </Link>
          <span className={styles.properties}>
            {info.year}, {info.movieLength} мин
          </span>
          <p className={styles.description}>{info.description}</p>
        </div>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.rating}>
          {info.rating.imdb > 0 && <Rating rating={info.rating.imdb} />}
        </div>
        <Button
          variant={isSaved ? "savedBlack" : "notSavedBlack"}
          iconLeft={isSaved ? <BsCheck /> : <FcLike />}
          onClick={saveToFavourite}
        >
          {isSaved ? "Сохранено" : "Сохранить"}
        </Button>
      </div>
    </div>
  );
});
