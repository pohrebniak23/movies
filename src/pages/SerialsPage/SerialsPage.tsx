import React from 'react';
import { CategoryList } from '../../components/Logic/CategoryList/CategoryList';
import { Filters } from '../../components/Logic/Filters/Filters';
import './SerialsPage.scss';

export const SerialsPage: React.FC = () => {
  return (
    <div className="serials">
      <div className="container serials__block">
        <Filters />
        <CategoryList category="tv-series" />
      </div>
    </div>
  );
};
