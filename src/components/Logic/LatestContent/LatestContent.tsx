import React, { useState } from "react";
import { filmsApi } from "../../../services/filmsService";
import { Button } from "../../UI/Button/Button";
import { Loader } from "../../Simple/Loader/Loader";
import { ListItems, MListItems } from "../ListItems/ListItems";
import styles from "./LatestContent.module.sass";

type Props = {
  category: string;
  title: string;
};

export const LatestContent: React.FC<Props> = ({ category, title }) => {
  const [limit, setLimit] = useState(8);
  const {
    data: movies,
    isFetching,
    isLoading,
  } = filmsApi.useGetLatestContentQuery({
    category,
    limit,
  });

  const { Container, Grid } = MListItems;

  const loadMoreContent = () => {
    setLimit(limit + 4);
  };

  return (
    <div className={styles.content}>
      {movies && (
        <ListItems>
          <Container>
            <h2 className={styles.title}>{title}</h2>
            <Grid cardsList={movies.docs} />

            {isLoading || isFetching && (
              <Loader height="200px" />
            )}
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
