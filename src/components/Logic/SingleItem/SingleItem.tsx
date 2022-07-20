import React, { useMemo } from "react";
import { IMovieInfo } from "../../../types/IMovieInfo";
import { BackBtn } from "../../UI/BackBtn/BackBtn";
import { Loader } from "../../UI/Loader/Loader";
import { DefaultSlider } from "../DefaultSlider/DefaultSlider";
import { FilmInfo } from "../FilmInfo/FilmInfo";
import styles from "./SingleItem.module.sass";
import "./SingleItem.module.sass"
import { Tabs } from "../../UI/Tabs/Tabs";

type Props = {
  itemData: IMovieInfo;
};

export const SingleItem: React.FC<Props> = ({ itemData }) => {
  const tabs = useMemo(
    () => [
      { label: "Описание", component: <p className={styles.description}>{itemData?.description}</p> },
      {
        label: "Актеры",
        component: <DefaultSlider actors={itemData?.persons} />,
      },
    ],
    [itemData]
  );

  return (
    <div className="container">
      {itemData ? (
        <div className={styles.block}>
          <BackBtn />
          <div className={styles.content}>
            <img src={itemData.poster.url} alt="" className={styles.poster} />
            <FilmInfo info={itemData} />
          </div>

          <Tabs tabsList={tabs}></Tabs>
        </div>
      ) : (
        <Loader height="500px" />
      )}
    </div>
  );
};
