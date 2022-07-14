import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { IDropDown } from "../../../types/IDropDown";
import styles from "./DropDown.module.sass";

type Props = {
  dropDownItems: IDropDown[];
  isOpen: boolean;
};

export const DropDown: React.FC<Props> = ({ dropDownItems, isOpen }) => {
  return (
    <div className={classNames(styles.dropDown, isOpen && styles.dropDownOpen)}>
      {dropDownItems.map((item: IDropDown) => (
        <Link key={item.link} to={item.link} className={styles.link}>
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
};
