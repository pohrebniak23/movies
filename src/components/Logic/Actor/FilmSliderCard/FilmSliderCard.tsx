import React from "react";
import { filmsApi } from "../../../../services/filmsService";
import styles from "./FilmSliderCard.module.sass";

type Props = {
  id: number;
  name: string;
};

export const FilmSliderCard: React.FC<Props> = ({ id, name }) => {
  const { data: image } = filmsApi.useGetActorImageByIdQuery(id);
  return (
    <div className={styles.card}>
      {image?.docs[0] ? (
        <img src={image?.docs[0].url} alt="" className={styles.image} />
      ) : (
        <div className={styles.poster}></div>
      )}

      <h2 className={styles.title}>{name}</h2>
    </div>
  );
};
