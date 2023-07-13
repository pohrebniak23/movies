import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { filmsApi } from '../../../services/filmsService';
import { Loader } from '../../Simple/Loader/Loader';
import { Button } from '../../UI/Button/Button';
import { MListItems } from '../ListItems/ListItems';
import styles from './LatestContent.module.scss';

type Props = {
  link: string;
  category: string;
  title: string;
};

export const LatestContent: React.FC<Props> = ({ category, title, link }) => {
  const [limit, setLimit] = useState(8);
  const {
    data: movies,
    isFetching,
    isLoading,
  } = filmsApi.useGetLatestContentQuery({
    category,
    limit,
  });

  const { Container, Grid, ListItems } = MListItems;

  const loadMoreContent = () => {
    setLimit(limit + 4);
  };

  return (
    <div className={styles.content}>
      {movies?.docs && (
        <ListItems>
          <Container>
            <h2 className={styles.title}>
              <a href={`${link}`}>{title}</a> <IoIosArrowForward />
            </h2>
            <Grid cardsList={movies.docs} />

            {isLoading || (isFetching && <Loader height="200px" />)}

            {movies.total > limit && (
              <Button
                variant="white"
                classname={styles.button}
                onClick={loadMoreContent}
              >
                Показать еще
              </Button>
            )}
          </Container>
        </ListItems>
      )}
    </div>
  );
};
