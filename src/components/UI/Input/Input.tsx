import React from 'react';
import styles from './Input.module.sass';

type Props = {
  change: (value: any) => void,
  value: string,
  type?: string
}

export const Input: React.FC<Props> = ({ value, change, type }) => {
  const handleChange = (value: string) => {
    change((prevState: any) => ({
      min: prevState.min,
      max: value
    }));
  }

  return (
    <input type={type ? type : "text"} className={styles.input} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)} />
  )
}
