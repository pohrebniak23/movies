import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';
import styles from './BackBtn.module.scss';

export const BackBtn: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" onClick={handleBack} className={styles.back}>
      <MdArrowBackIosNew />
      Назад
    </button>
  );
};
