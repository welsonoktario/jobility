import { FontSize, Theme } from '@/types/theme';
import { createContext, useEffect, useState } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultFontSize?: FontSize;
  themeStorageKey?: string;
  fontSizeStorageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  fontSize: FontSize;
  setTheme: (theme: Theme) => void;
  setFontSize: (fontSize: FontSize) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  fontSize: 'base',
  setTheme: () => undefined,
  setFontSize: () => undefined,
};

export const ThemeContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultFontSize = 'base',
  themeStorageKey = 'vite-ui-theme',
  fontSizeStorageKey = 'vite-ui-font-size',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(themeStorageKey) as Theme) || defaultTheme,
  );
  const [fontSize, setFontSize] = useState<FontSize>(
    () => (localStorage.getItem(fontSizeStorageKey) as FontSize) || defaultFontSize,
  );

  useEffect(() => {
    const root = document.querySelector('body')!;

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.dataset.theme = systemTheme;
      return;
    }

    root.dataset.theme = theme;
  }, [theme, fontSize]);

  useEffect(() => {
    const root = document.querySelector('body')!;

    root.classList.remove('fs-lg', 'fs-xl');

    if (fontSize === 'base') {
      return;
    }

    root.classList.add(`fs-${fontSize}`);
  }, [fontSize]);

  const value = {
    theme,
    fontSize,
    setTheme: (theme: Theme) => {
      localStorage.setItem(themeStorageKey, theme);
      setTheme(theme);
    },
    setFontSize: (fontSize: FontSize) => {
      localStorage.setItem(fontSizeStorageKey, fontSize);
      setFontSize(fontSize);
    },
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
