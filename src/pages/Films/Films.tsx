import React from 'react';
import { CategoryList } from '../../components/Logic/CategoryList/CategoryList';
import { Filters } from '../../components/Logic/Filters/Filters';
import './Films.scss';

export const Films: React.FC = () => {
  return (
    <div className="films">
      <div className="container films__block">
        <Filters />
        <CategoryList category="movie" />
      </div>
    </div>
  );
};
