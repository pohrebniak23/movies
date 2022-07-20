import React from "react";
import { IMovieInfo } from "../../../types/IMovieInfo";
import { BackBtn } from "../../UI/BackBtn/BackBtn";
import { Loader } from "../../UI/Loader/Loader";
import { FilmInfo } from "../FilmInfo/FilmInfo";
import styles from "./SingleItem.module.sass";

type Props = {
  itemData: IMovieInfo;
};

export const SingleItem: React.FC<Props> = ({ itemData }) => {
  return (
    <div className="container">
      {itemData ? (
        <div className={styles.block}>
          <BackBtn />
          <div className={styles.content}>
            <img src={itemData.poster.url} alt="" className={styles.poster} />
            <FilmInfo info={itemData} />
          </div>
        </div>
      ) : (
        <Loader height="500px" />
      )}
    </div>
  );
};
