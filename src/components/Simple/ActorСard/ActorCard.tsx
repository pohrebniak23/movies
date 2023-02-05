import React from 'react';
import { Link } from 'react-router-dom';
import { IPerson } from '../../../shared/types/IMovieInfo';
import styles from './ActorCard.module.scss';

type Props = {
  actorData: IPerson;
};

export const ActorCard: React.FC<Props> = ({ actorData }) => {
  return (
    <Link to={`/actor/${actorData.id}`} className={styles.actor}>
      <img className={styles.image} src={actorData.photo} alt="" />
      <h3 className={styles.name}>{actorData.name}</h3>
      <h4 className={styles.description}>{actorData.description}</h4>
    </Link>
  );
};
