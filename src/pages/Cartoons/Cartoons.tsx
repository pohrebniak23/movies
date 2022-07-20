import React from "react";
import { CategoryList } from "../../components/Logic/CategoryList/CategoryList";
import { Filters } from "../../components/Logic/Filters/Filters";
import "./Cartoons.sass";

export const Cartoons: React.FC = () => {
  return (
    <div className="serials">
      <div className="container serials__block">
        <Filters />
        <CategoryList category="cartoon" />
      </div>
    </div>
  );
};
