import React from "react";
import { IMovieInfo } from "../../../types/IMovieInfo";
import { FilmInfo } from "../FilmInfo/FilmInfo";
import styles from "./SingleItem.module.sass";

type Props = {
  itemData: IMovieInfo;
};

export const SingleItem: React.FC<Props> = ({ itemData }) => {
  console.log(itemData);

  return (
    <div className="container">
      {itemData ? (
        <div className={styles.filmBlock}>
          <img src={itemData.poster.url} alt="" className={styles.poster} />
          <FilmInfo info={itemData} />
        </div>
      ) : (
        <div className="123">Loader</div>
      )}
    </div>
  );
};
