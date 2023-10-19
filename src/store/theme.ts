import { FontSize, Theme } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
