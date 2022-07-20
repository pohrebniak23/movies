import React from 'react'
import { useParams } from 'react-router-dom'
import { filmsApi } from '../../services/filmsService';

export const Actor: React.FC = () => {
  const { id } = useParams();
  const { data: person } = filmsApi.useGetActorByIdQuery(id);

  console.log(person)
  return (
    <div>Actor</div>
  )
}
