import React, { useMemo } from "react";
import { BackBtn } from "../../UI/BackBtn/BackBtn";
import { Loader } from "../../Simple/Loader/Loader";
import { FilmInfo } from "./FilmInfo/FilmInfo";
import { Tabs } from "../../UI/Tabs/Tabs";
import { filmsApi } from "../../../services/filmsService";
import { useParams } from "react-router-dom";
import styles from "./Film.module.sass";
import { FilmActorsSlider } from "./FilmActorsSlider/FilmSlider";

export const Film: React.FC = () => {
  const { id } = useParams();
  const { data: filmData } = filmsApi.useGetFilmByIdQuery(id);
  
  const tabs = useMemo(
    () => [
      { label: "Описание", component: <p className={styles.description}>{filmData?.description}</p> },
      {
        label: "Актеры",
        component: <FilmActorsSlider actors={filmData?.persons} />,
      },
    ],
    [filmData]
  );

  return (
    <div className="container">
      {filmData ? (
        <div className={styles.block}>
          <BackBtn />
          <div className={styles.content}>
            <img src={filmData.poster.url} alt="" className={styles.poster} />
            <FilmInfo info={filmData} />
          </div>

          <Tabs tabsList={tabs}></Tabs>
        </div>
      ) : (
        <Loader height="500px" />
      )}
    </div>
  );
};
