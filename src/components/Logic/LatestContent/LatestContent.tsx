import React, { useState } from "react";
import { filmsApi } from "../../../services/filmsService";
import { Button } from "../../UI/Button/Button";
import { ListItems, MListItems } from "../ListItems/ListItems";
import styles from "./LatestContent.module.sass";

type Props = {
  category: string;
};

export const LatestContent: React.FC<Props> = ({ category }) => {
  const [limit, setLimit] = useState(8);
  const { data: movies } = filmsApi.useGetLatestContentQuery({ category, limit });

  const { Container, Grid } = MListItems;

  const loadMoreContent = () => {
    setLimit(limit + 4);
  };

  return (
    <div className={styles.content}>
      {movies && (
        <ListItems>
          <Container>
            <Grid cardsList={movies.docs} />
            {movies.total > limit && (
              <Button classname={styles.button} onClick={loadMoreContent}>
                Показать еще
              </Button>
            )}
          </Container>
        </ListItems>
      )}
    </div>
  );
};
