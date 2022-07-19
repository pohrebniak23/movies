import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../AppRouter/AppRouter";
import { Search } from "../Search/Search";
import {FiMenu} from "react-icons/fi";
import {ImFilm} from "react-icons/im";
import {MdOutlineLocalMovies, MdChildCare} from "react-icons/md";
import {GrClose} from "react-icons/gr";
import styles from "./Header.module.sass";
import { DropDown } from "../../UI/DropDown/DropDown";

export const Header: React.FC = () => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);

  const menuItems = useMemo(
    () => [
      { name: "Фильмы", link: RouteNames.FILMS, icon: <ImFilm /> },
      { name: "Сериалы", link: RouteNames.SERIALS, icon: <MdOutlineLocalMovies />  },
      { name: "Мультфильмы", link: RouteNames.CARTOONS, icon: <MdChildCare /> },
    ],
    []
  );

  const toggleDrop = () => {
    setIsDropOpen(!isDropOpen);
  };

  return (
    <div className="container">
      <div className={styles.header}>
        <Link to={RouteNames.HOME} className={styles.logo}>
          Logo
        </Link>

        <Search />

        {!isDropOpen && <FiMenu className={styles.humburger} onClick={toggleDrop} />}
        {isDropOpen && <GrClose className={styles.humburger} onClick={toggleDrop} />}

        <DropDown dropDownItems={menuItems} isOpen={isDropOpen} setIsDropOpen={setIsDropOpen}/>
      </div>
    </div>
  );
};
