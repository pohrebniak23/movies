import { Link } from 'react-router-dom';
import { IMovie } from '../../../../shared/types/IMovie';
import styles from './SearchItem.module.scss';

type Props = {
  data: IMovie;
  setIsActive: (value: boolean) => void;
  setIsSearchOpen: (value: boolean) => void;
};

export const SearchItem: React.FC<Props> = ({
  data,
  setIsActive,
  setIsSearchOpen,
}) => {
  const hideHandle = () => {
    setIsActive(false);
    setIsSearchOpen(false);
  };

  return (
    <Link to={`/films/${data.id}`} className={styles.item} onClick={hideHandle}>
      {data.poster !== null ? (
        <img src={data.poster.url} alt="" className={styles.image} />
      ) : (
        <div className={styles.plugged} />
      )}

      <div className={styles.info}>
        <h2 className={styles.name}>{data.name}</h2>
        <span className={styles.properties}>
          {data.year} {data.movieLength} мин
        </span>
      </div>
    </Link>
  );
};
