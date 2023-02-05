import classNames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';
import { MdFilterList } from 'react-icons/md';
import {
  reset,
  setGenre,
  setRating,
  setYear,
} from '../../../app/store/reducers/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux';
import { FilterItem, Genres } from '../../../shared/types/IFilter';
import { Range } from '../../Simple/Range/Range';
import { Button } from '../../UI/Button/Button';
import { CustomSelect } from '../../UI/CustomSelect/CustomSelect';
import styles from './Filters.module.scss';

export const Filters: React.FC = () => {
  const dispatch = useAppDispatch();

  const { year, rating } = useAppSelector((state) => state.filters);
  const [yearData, setYearData] = useState(year);
  const [ratingData, setRatingData] = useState(rating);
  const [filterOpen, setFilterOpen] = useState(false);

  const genreOptions = useMemo(
    () => [
      { label: 'Все жанры', value: '' },
      { label: 'Биографии', value: 'биография' },
      { label: 'Боевики', value: 'боевик' },
      { label: 'Военные', value: 'военный' },
      { label: 'Детективы', value: 'детектив' },
      { label: 'Детские', value: 'детский' },
      { label: 'Документальные', value: 'документальный' },
      { label: 'Драмы', value: 'драма' },
      { label: 'Исторические', value: 'история' },
      { label: 'Комедии', value: 'комедия' },
      { label: 'Короткометражки', value: 'короткометражка' },
      { label: 'Криминал', value: 'криминал' },
      { label: 'Музыкальные', value: 'музыка' },
      { label: 'Семейные', value: 'семейный' },
      { label: 'Новости', value: 'новости' },
      { label: 'Приключения', value: 'приключения' },
      { label: 'Спортивные', value: 'спорт' },
      { label: 'Триллеры', value: 'триллер' },
      { label: 'Ужасы', value: 'ужасы' },
      { label: 'Фантастика', value: 'фантастика' },
      { label: 'Фэнтези', value: 'фэнтези' },
    ],
    [],
  );
  const [genreOption, setGenreOption] = useState<Genres>(genreOptions[0]);

  useEffect(() => {
    setYearData(year);
    setRatingData(rating);
  }, [year, rating]);

  const filtersList = [
    {
      name: 'Год выпуска:',
      component: (
        <Range
          data={yearData}
          minValue={1920}
          maxValue={2022}
          setDataValue={setYearData}
        />
      ),
    },
    {
      name: 'Рейтинг:',
      component: (
        <Range
          data={ratingData}
          minValue={1}
          maxValue={10}
          setDataValue={setRatingData}
        />
      ),
    },
    {
      name: 'Жанр:',
      component: (
        <CustomSelect
          selectedOption={genreOption}
          setSelectedOption={setGenreOption}
          options={genreOptions}
        />
      ),
    },
  ];

  const handleSumbit = () => {
    dispatch(setYear([yearData.min, yearData.max]));
    dispatch(setRating([ratingData.min, ratingData.max]));
    dispatch(
      setGenre(
        genreOption.value !== ''
          ? `field=genres.name&search=${genreOption.value}`
          : '',
      ),
    );
    setFilterOpen(!filterOpen);
  };

  const handleClear = () => {
    dispatch(reset());
    setFilterOpen(!filterOpen);
  };

  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className={styles.filters}>
      <Button
        variant="white"
        classname={styles.toggleBtn}
        iconLeft={<MdFilterList />}
        onClick={handleFilterOpen}
      >
        Фильтры
      </Button>

      <div className={classNames(styles.block, filterOpen && styles.blockOpen)}>
        <div className={styles.content}>
          {filtersList?.map((item: FilterItem) => (
            <div key={item.name} className={styles.item}>
              <h3 className={styles.name}>{item.name}</h3>

              {item.component}
            </div>
          ))}

          <div className={styles.buttons}>
            <Button onClick={handleSumbit}>Применить</Button>

            <Button variant="outline" onClick={handleClear}>
              Сбросить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
