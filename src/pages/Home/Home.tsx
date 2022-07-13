import React from "react";
import {
  ListItems,
  MListItems,
} from "../../components/Logic/ListItems/ListItems";
import { filmsApi } from "../../services/filmsService";

export const Home: React.FC = () => {
  const { data: movies } = filmsApi.useGetLatestFilmsQuery("");

  const { Container, Grid } = MListItems;

  return (
    <div>
      {movies && (
        <ListItems>
          <Container>
            <Grid cardsList={movies.docs} />
          </Container>
        </ListItems>
      )}
    </div>
  );
};
