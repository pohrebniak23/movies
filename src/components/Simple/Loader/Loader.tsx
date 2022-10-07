import React from "react";
import styles from "./Loader.module.sass";

type Props = {
  height?: string;
};

export const Loader: React.FC<Props> = ({ height }) => {
  return (
    <div
      className={styles.spinnerContainer}
      style={{ height: height || "300px" }}
    >
      <div className={styles.loadingSpinner} />
    </div>
  );
};
