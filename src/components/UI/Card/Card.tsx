import React from "react";
import { ICard } from "../../../types/ICard";
import { BiTimeFive } from "react-icons/bi";
import styles from "./Card.module.sass";

export const Card: React.FC<ICard> = ({ image, title, length, type }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.nav}>
        {length && (
          <div className={styles.item}>
            <BiTimeFive /> {length} min
          </div>
        )}
        {/* {type && <div className={styles.item}>{type}</div>} */}
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
