import React, { useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import styles from './Filters.module.sass';

export const Filters: React.FC = () => {
  const { year, rating } = useAppSelector(state => state.filters);

  return (
    <div>Filters {year} {rating}</div>
  )
}
