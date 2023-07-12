import { Button } from 'components/UI/Button/Button';
import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
import styles from './SaveToFavoriteBtn.module.scss';

export const SaveToFavoriteBtn = ({ id }: { id: string | number }) => {
  const [isSaved, setIsSaved] = useState(
    Boolean(localStorage.getItem(`saved_film_${id}`)),
  );

  const saveToFavourite = () => {
    const saved = localStorage.getItem(`saved_film_${id}`);

    if (saved) {
      localStorage.removeItem(`saved_film_${id}`);
      setIsSaved(false);
    } else {
      localStorage.setItem(`saved_film_${id}`, 'true');
      setIsSaved(true);
    }
  };

  return (
    <Button
      classname={styles.btn}
      variant={isSaved ? 'saved' : 'notSaved'}
      iconLeft={isSaved ? <BsCheck /> : <FcLike />}
      onClick={saveToFavourite}
    >
      {isSaved ? 'Сохранено' : 'Сохранить'}
    </Button>
  );
};
