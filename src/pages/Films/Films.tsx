import React from 'react'
import { CategoryList } from '../../components/Logic/CategoryList/CategoryList'

export const Films: React.FC = () => {
  return (
    <div className="films">
      <CategoryList category="movie" />
    </div>
  )
}
