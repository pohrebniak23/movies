import React from "react";
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css';
import styles from "./Range.module.sass";

type Props = {
  data: {
    min: number;
    max: number;
  };
  minValue: number;
  maxValue: number;
  setDataValue: any
};

export const Range: React.FC<Props> = ({ data, minValue, maxValue, setDataValue }) => {
  const changeMin = (value: number) => {
    if (value > minValue) {
      setDataValue((prevState: any) => ({
        ...prevState,
        min: +value,
      }))
    } else {
      setDataValue((prevState: any) => ({
        ...prevState,
        min: minValue,
      }))
    }
  }

  const changeMax = (value: number) => {
    if (value < maxValue) {
      setDataValue((prevState: any) => ({
        ...prevState,
        max: value,
      }))
    } else {
      setDataValue((prevState: any) => ({
        ...prevState,
        max: maxValue,
      }))
    }
  }

  return (
    <div className={styles.range}>
      <div className={styles.block}>
        <div className={styles.item}>
          <input
            type="number"
            className={styles.input}
            value={data.min}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeMin(+e.target.value)
            }
          />
        </div>

        <div className={styles.item}>
          <input
            type="number"
            className={styles.input}
            value={data.max}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeMax(+e.target.value)
            }
          />
        </div>
      </div>
      
      <InputRange
        maxValue={maxValue}
        minValue={minValue}
        value={data}
        onChange={(value) => setDataValue(value)}
      />
    </div>
  );
};
