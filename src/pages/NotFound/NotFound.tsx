import React from "react";
import styles from "./NotFound.module.sass";

export const NotFound: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.notFound}>
        <span className={styles.bigText}>404</span> Page is not found
      </div>
    </div>
  );
};
