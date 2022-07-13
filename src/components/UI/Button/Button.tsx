import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./Button.module.sass";

export interface IButton {
  classname?: string;
  variant?: string;
  iconLeft?: any;
  iconRight?: any;
  onClick?: () => void;
}

export const Button: React.FC<PropsWithChildren<IButton>> = ({
  children,
  classname,
  variant,
  iconLeft,
  iconRight,
  ...props
}) => {
  return (
    <button
      className={classNames(
        classname,
        styles.button,
        variant === "stroke" && styles.stroke,
        variant === "outline" && styles.outline,
        variant === "saved" && styles.saved,
        variant === "notSaved" && styles.notSaved
      )}
      {...props}
    >
      {iconLeft}
      <span
        className={classNames(
          iconLeft ? styles.leftM : "",
          iconRight ? styles.rightM : ""
        )}
      >
        {children}
      </span>
      {iconRight}
    </button>
  );
};
