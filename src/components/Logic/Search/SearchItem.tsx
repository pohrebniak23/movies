import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.sass";

type Props = {
  data: any;
};

export const SearchItem: React.FC<Props> = ({ data }) => {
  return (
    <Link to={`/films/${data.id}`} className={styles.item}>
      <img src={data.poster.url} alt="" className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.name}>{data.name}</h2>
        <span className={styles.properties}>
          {data.year} {data.movieLength} мин
        </span>
      </div>
    </Link>
  );
};
