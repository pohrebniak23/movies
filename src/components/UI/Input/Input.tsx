import React from 'react';
import styles from './Input.module.sass';

type Props = {
  change: (value: any) => void,
  value: string,
  maxValue?: number,
  type?: string
}

export const Input: React.FC<Props> = ({ value, change, maxValue, type }) => {
  const handleChange = (value: string) => {
    console.log(maxValue)
    console.log(+value)
    if (maxValue && +value <= maxValue) {
      change((prevState: any) => ({
        min: prevState.min,
        max: value
      }));
    }

    // if (!maxValue) {
    //   change(value);
    // }
  }

  return (
    <input type={type ? type : "text"} className={styles.input} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)} />
  )
}
