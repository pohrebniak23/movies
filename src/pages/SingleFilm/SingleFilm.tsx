import React from 'react'
import { useParams } from 'react-router-dom';
import { SingleItem } from '../../components/Logic/SingleItem/SingleItem';
import { filmsApi } from '../../services/filmsService';

export const SingleFilm: React.FC = () => {
  const { id } = useParams(); 
  const { data } = filmsApi.useGetFilmByIdQuery(id);

  return (
    <SingleItem itemData={data} />
  )
}
