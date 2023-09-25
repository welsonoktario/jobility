import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';
type FontSize = 'base' | 'lg' | 'xl';

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
  setTheme: () => null,
  setFontSize: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

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
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme, fontSize]);

  useEffect(() => {
    const root = window.document.documentElement;

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
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
