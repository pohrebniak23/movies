import React, { Fragment, useMemo, useState } from "react";
import { dateConverter } from "../../../helpers/dateConverter";
import { typeConverter } from "../../../helpers/typeConverter";
import { IMovieInfo } from "../../../types/IMovieInfo";
import { Button } from "../../UI/Button/Button";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import styles from './FilmInfo.module.sass';

type Props = {
  info: IMovieInfo;
};

export const FilmInfo: React.FC<Props> = ({ info }) => {
  const [isSaved, setIsSaved] = useState(false);

  const saveToFavourite = () => {
    setIsSaved(!isSaved);
  }

  const infoList = useMemo(() => ([
    { title: "Страна: ", data: info.countries.map((cntr, id) => <Fragment key={cntr.name}>{id ? ", " : ""}{cntr.name}</Fragment>) },
    { title: "Слоган: ", data: info.slogan },
    { title: "Жанр:", data: info.genres.map((gnr, id) => <Fragment key={gnr.name}>{id ? ", " : ""}{gnr.name}</Fragment>)},
    { title: "Время: ", data: info.movieLength ? `${info.movieLength} мин` : null},
    { title: "Премьера в мире: ", data: dateConverter(info.premiere.world) }
  ]), [info.countries, info.genres, info.movieLength, info.premiere.world, info.slogan]);

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{info.name}</h1>
      <div className={styles.nav}>

      <Button variant="stroke" iconLeft={<AiOutlinePlayCircle />}>
        Смотреть
      </Button>

      <Button variant={isSaved ? "saved" : "notSaved"} iconLeft={isSaved ? <FcLike /> : <FcLikePlaceholder />} onClick={saveToFavourite}>
        Смотреть позже
      </Button>
      </div>

      <h2 className={styles.subtitle}>О {typeConverter(info.typeNumber)}е</h2>
      <div className={styles.gridInfo}>
        {infoList.map((item) => (
          <div key={item.title} className={styles.gridItem}>
            <p>{item.title}</p>
            {item.data ? <span>{item.data}</span> : "-"}
          </div>
        ))}
      </div>
    </div>
  );
};