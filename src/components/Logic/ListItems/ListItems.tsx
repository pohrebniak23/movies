import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../../types/IMovie";
import { FilmCard } from "../../Simple/FilmCard/FilmCard";
import styles from "./ListItems.module.sass";

export const ListItems: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.listItems}>{children}</div>;
};

module MListItems {
  export const Container: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return <div className="container">{children}</div>;
  };

  type Props = {
    cardsList: IMovie[] | undefined;
  };

  export const Grid: React.FC<Props> = React.memo(({ cardsList }) => {
    return (
      <div className={styles.grid}>
        {cardsList?.map((card: IMovie) => (
          <Link to={`/films/${card.id}`} className={styles.link} key={card.id}>
            <FilmCard
              image={card.poster.url}
              title={card.names[0].name}
              length={card.movieLength}
              type={card.type}
            />
          </Link>
        ))}
      </div>
    );
  });
}

export { MListItems };
