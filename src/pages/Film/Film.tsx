import React from 'react'
import { useParams } from 'react-router-dom';
import { SingleFilm } from '../../components/Logic/SingleFilm/SingleFilm'
import { filmsApi } from '../../services/filmsService';

export const Film: React.FC = () => {
  const { id } = useParams(); 
  const { data } = filmsApi.useGetFilmByIdQuery(id);

  return (
    <SingleFilm filmData={data} />
  )
}
