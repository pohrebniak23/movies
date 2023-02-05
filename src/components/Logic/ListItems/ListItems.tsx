import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../shared/types/IMovie';
import { FilmCard } from '../../Simple/FilmCard/FilmCard';
import styles from './ListItems.module.scss';

interface ListItemsProps {
  cardsList: IMovie[];
}

module MListItems {
  export const Container: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return <div className="container">{children}</div>;
  };

  export const ListItems: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.listItems}>{children}</div>;
  };

  export const Grid: React.FC<ListItemsProps> = React.memo(({ cardsList }) => {
    return (
      <div className={styles.grid}>
        {cardsList.map((card: IMovie) => (
          <Link to={`/films/${card.id}`} className={styles.link} key={card.id}>
            <FilmCard
              image={card.poster?.previewUrl}
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
