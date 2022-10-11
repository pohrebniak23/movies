import { createContext } from 'react';

export enum Themes {
  LIGHT = 'theme-light',
  DARK = 'theme-dark',
}

interface IThemeContext {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

export const ThemeContext = createContext<IThemeContext>(
  null as any as IThemeContext,
);

export const LOCAL_STORAGE_THEME_KEY = 'theme';
