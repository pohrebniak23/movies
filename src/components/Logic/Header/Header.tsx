import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { ImFilm } from "react-icons/im";
import { MdOutlineLocalMovies, MdChildCare } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { BiSearchAlt } from "react-icons/bi";
import { Search } from "../Search/Search";
import { RouteNames } from "../../Providers/AppRouter/AppRouter";
import { DropDown } from "../../Simple/DropDown/DropDown";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import styles from "./Header.module.sass";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Header: React.FC = () => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const menuItems = useMemo(
    () => [
      { name: "Фильмы", link: RouteNames.FILMS, icon: <ImFilm /> },
      {
        name: "Сериалы",
        link: RouteNames.SERIALS,
        icon: <MdOutlineLocalMovies />,
      },
      { name: "Мультфильмы", link: RouteNames.CARTOONS, icon: <MdChildCare /> },
    ],
    []
  );

  const toggleDrop = () => {
    setIsDropOpen(!isDropOpen);
  };

  const toogleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.block}>
          <Link to={RouteNames.HOME} className={styles.logo}>
            <Logo />
          </Link>

          <Search
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />

          <ThemeSwitcher />

          <DropDown
            dropDownItems={menuItems}
            isOpen={isDropOpen}
            setIsDropOpen={setIsDropOpen}
          />

          <div className={styles.nav}>
            <BiSearchAlt className={styles.searchIcon} onClick={toogleSearch} />
            {!isDropOpen && (
              <FiMenu className={styles.humburger} onClick={toggleDrop} />
            )}
            {isDropOpen && (
              <GrClose className={styles.humburger} onClick={toggleDrop} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
