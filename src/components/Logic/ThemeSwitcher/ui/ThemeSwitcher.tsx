import classNames from 'classnames';
import { Themes } from '../../../Providers/ThemeProvider/ThemeContext';
import { ReactComponent as DarkIcon } from '../assets/icons/dark-switch-icon.svg';
import { ReactComponent as LightIcon } from '../assets/icons/light-switch-icon.svg';
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '../../../../hooks/useTheme';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames(
        styles.themeSwitcher,
        { [styles.themeSwitcher_dark]: theme === Themes.DARK },
        className,
      )}
    >
      <button
        type="button"
        className={classNames(styles.circle, {
          [styles.circle_dark]: theme === Themes.DARK,
        })}
        onClick={toggleTheme}
      >
        {theme === Themes.DARK ? <DarkIcon /> : <LightIcon />}
      </button>
    </div>
  );
};
