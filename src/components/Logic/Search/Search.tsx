import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useDebounce } from "../../../hooks/useDebounce";
import { filmsApi } from "../../../services/filmsService";
import { IMovie } from "../../../types/IMovie";
import { SearchItem } from "./SearchItem";
import { Loader } from "../../Simple/Loader/Loader";
import { useOnOutsideClick } from "../../../hooks/useOnOutsideClick";
import styles from "./Search.module.sass";
import classNames from "classnames";

type Props = {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
};

export const Search: React.FC<Props> = ({ isSearchOpen, setIsSearchOpen }) => {
  const [skip, setSkip] = useState(true);
  const [search, setSearch] = useState<string>("");
  const { debouncedValue } = useDebounce(search, 300);
  const [isActive, setIsActive] = useState(false);

  const {
    data: list,
    isFetching,
    isLoading,
  } = filmsApi.useGetFilmByNameQuery(debouncedValue, { skip });

  const searchHandle = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    if (debouncedValue.length > 0) {
      setSkip(false)
    } else {
      setSkip(true)
    }
  }, [debouncedValue])

  const { innerBorderRef } = useOnOutsideClick(() => {
    setSkip(true)
    setIsActive(false)
  });

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div
      ref={innerBorderRef}
      className={classNames(
        styles.wrapper,
        isSearchOpen && styles.wrapperActive
      )}
    >
      <input
        type="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          searchHandle(e.target.value)
        }
        onFocus={() => setIsActive(true)}
        className={styles.input}
        placeholder="Поиск"
      />

      {!isSearchOpen ? (
        <BiSearchAlt className={styles.searchIcon} />
      ) : (
        <IoMdClose className={styles.searchIcon} onClick={closeSearch} />
      )}

      {search.length > 0 && isActive && (
        <div className={styles.list}>
          {isFetching || isLoading ? (
            <Loader height="100px" />
          ) : (
            list?.docs?.map((item: IMovie) => (
              <SearchItem
                key={item.id}
                data={item}
                setIsActive={setIsActive}
                setIsSearchOpen={setIsSearchOpen}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};
