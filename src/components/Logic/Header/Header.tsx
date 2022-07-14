import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../AppRouter";
import { Search } from "../Search/Search";
import styles from "./Header.module.sass";

export const Header: React.FC = () => {
  const menuItems = useMemo(
    () => [
      { text: "Фильмы", link: RouteNames.FILMS },
      { text: "Сериалы", link: RouteNames.SERIALS },
      { text: "Мультфильмы", link: RouteNames.CARTOONS },
    ],
    []
  );

  console.log(menuItems);

  return (
    <div className="container">
      <div className={styles.header}>
        <Link to={RouteNames.HOME} className={styles.logo}>
          Logo
        </Link>

        <Search />

        <div className={styles.menu}>
          {menuItems.map((item) => (
            <Link to={item.link} className={styles.menuItem}>{item.text}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};
