import { IMovie } from '../../../../shared/types/IMovie';
import { SearchItem } from '../SearchItem/SearchItem';
import styles from './SearchContent.module.scss';

interface SearchContentProps {
  list: any;
  setIsActive: (value: boolean) => void;
  setIsSearchOpen: (value: boolean) => void;
}

export const SearchContent = ({
  list,
  setIsActive,
  setIsSearchOpen,
}: SearchContentProps) => {
  return (
    <div className={styles.content}>
      {list?.docs?.length > 0 ? (
        list?.docs?.map((item: IMovie) => (
          <SearchItem
            key={item.id}
            data={item}
            setIsActive={setIsActive}
            setIsSearchOpen={setIsSearchOpen}
          />
        ))
      ) : (
        <div className={styles.notFound}>Film is not found</div>
      )}
    </div>
  );
};
