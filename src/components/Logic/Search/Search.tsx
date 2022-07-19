import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useDebounce } from "../../../hooks/useDebounce";
import { filmsApi } from "../../../services/filmsService";
import { IMovie } from "../../../types/IMovie";
import { Loader } from "../../UI/Loader/Loader";
import { SearchItem } from "./SearchItem";
import styles from "./Search.module.sass";
import { useOnOutsideClick } from "../../../hooks/useOnOutsideClick";

export const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const { debouncedValue } = useDebounce(search, 300);
  const [isActive, setIsActive] = useState(false);

  const {
    data: list,
    isFetching,
    isLoading,
  } = filmsApi.useGetFilmByNameQuery(debouncedValue);

  const searchHandle = (value: string) => {
    setSearch(value);
  };

  const { innerBorderRef } = useOnOutsideClick(() => setIsActive(false));

  return (
    <div ref={innerBorderRef} className={styles.wrapper}>
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
      <BiSearchAlt className={styles.searchIcon} />

      {search.length > 0 && isActive && (
        <div className={styles.list}>
          {isFetching || isLoading ? (
            <Loader height="100px" />
          ) : (
            list?.docs?.map((item: IMovie) => (
              <SearchItem key={item.id} data={item} />
            ))
          )}
        </div>
      )}
    </div>
  );
};
