import React, { useMemo, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { ImFilm } from 'react-icons/im';
import { MdChildCare, MdOutlineLocalMovies } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'shared/assets/logo.svg';
import { RouteNames } from '../../../app/providers/AppRouter/AppRouter';
import { DropDown } from '../../Simple/DropDown/DropDown';
import { Search } from '../Search/Search';
import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isDropOpen, setIsDropOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const menuItems = useMemo(
    () => [
      { name: 'Фильмы', link: RouteNames.FILMS, icon: <ImFilm /> },
      {
        name: 'Сериалы',
        link: RouteNames.SERIALS,
        icon: <MdOutlineLocalMovies />,
      },
      { name: 'Мультфильмы', link: RouteNames.CARTOONS, icon: <MdChildCare /> },
    ],
    [],
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

          <div className={styles.rightContent}>
            <ThemeSwitcher />

            <div className={styles.menu}>
              <BiSearchAlt
                className={styles.searchIcon}
                onClick={toogleSearch}
              />
              {!isDropOpen && (
                <FiMenu className={styles.humburger} onClick={toggleDrop} />
              )}
              {isDropOpen && (
                <GrClose className={styles.humburger} onClick={toggleDrop} />
              )}

              <DropDown
                dropDownItems={menuItems}
                isOpen={isDropOpen}
                setIsDropOpen={setIsDropOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
