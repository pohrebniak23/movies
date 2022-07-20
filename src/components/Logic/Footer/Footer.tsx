import React from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../AppRouter/AppRouter";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import styles from "./Footer.module.sass";

type TLink = {
  link: string;
  title: string;
};

export const Footer: React.FC = () => {
  const links = React.useMemo(
    () => [
      { link: RouteNames.FILMS, title: "Фильмы" },
      { link: RouteNames.SERIALS, title: "Сериалы" },
      { link: RouteNames.CARTOONS, title: "Мультфильмы" },
    ],
    []
  );

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.block}>
          <Link to={RouteNames.HOME} className={styles.logo}>
            <Logo />
          </Link>

          <div className={styles.links}>
            {links.map((item: TLink) => (
              <Link key={item.link} to={item.link} className={styles.link}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className={styles.copyright}>
            Copyright © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
};
