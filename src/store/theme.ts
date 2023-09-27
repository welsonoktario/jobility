import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';
type FontSize = 'base' | 'lg' | 'xl';

export type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (fontSize: FontSize) => void;
};

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme: Theme) => set(() => ({ theme })),
      fontSize: 'base',
      setFontSize: (fontSize: FontSize) => set(() => ({ fontSize })),
    }),
    { name: 'jobility' },
  ),
);
