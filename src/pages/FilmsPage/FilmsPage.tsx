import React from 'react';
import { CategoryList } from '../../components/Logic/CategoryList/CategoryList';
import { Filters } from '../../components/Logic/Filters/Filters';
import './FilmsPage.scss';

export const FilmsPage: React.FC = () => {
  return (
    <div className="films">
      <div className="container films__block">
        <Filters />
        <CategoryList category="movie" />
      </div>
    </div>
  );
};
