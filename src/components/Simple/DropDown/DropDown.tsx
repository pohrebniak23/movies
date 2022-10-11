import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick';
import { IDropDown } from '../../../types/IDropDown';
import styles from './DropDown.module.scss';

type Props = {
  dropDownItems: IDropDown[];
  isOpen: boolean;
  setIsDropOpen: (value: boolean) => void;
};

export const DropDown: React.FC<Props> = ({
  dropDownItems,
  isOpen,
  setIsDropOpen,
}) => {
  const { innerBorderRef } = useOnOutsideClick(() => setIsDropOpen(false));

  return (
    <div
      ref={innerBorderRef}
      className={classNames(styles.dropDown, isOpen && styles.dropDownOpen)}
    >
      {dropDownItems.map((item: IDropDown) => (
        <Link
          key={item.link}
          to={item.link}
          className={styles.link}
          onClick={() => setIsDropOpen(!isOpen)}
        >
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
};
