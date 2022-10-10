import React from 'react';
import { IPerson } from '../../../../types/IMovieInfo';
import { ActorCard } from '../../../Simple/ActorСard/ActorCard';
import { DefaultSlider } from '../../DefaultSlider/DefaultSlider';

type Props = {
  actors: IPerson[] | undefined;
};

export const SingleFilmActorsSlider: React.FC<Props> = ({ actors }) => {
  return (
    <DefaultSlider>
      {actors?.map((actor) => (
        <ActorCard key={actor.id} actorData={actor} />
      ))}
    </DefaultSlider>
  );
};
