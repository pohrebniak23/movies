import React from 'react';
import styles from './Loading.module.sass';

export const Loading: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  )
}
