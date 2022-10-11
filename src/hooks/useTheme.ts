import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Themes,
} from '../components/Providers/ThemeProvider/ThemeContext';

interface IUseTheme {
  theme: Themes;
  toggleTheme: () => void;
}

export function useTheme(): IUseTheme {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme: Themes =
      theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
