import { useTheme } from '@/store/theme';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';

export default function Layout() {
  const { fontSize, theme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;

    root.removeAttribute('data-theme');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.setAttribute('data-theme', systemTheme);
      return;
    }

    root.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('fs-lg', 'fs-xl');

    if (fontSize === 'base') {
      return;
    }

    root.classList.add(`fs-${fontSize}`);
  }, [fontSize]);

  return (
    <>
      <Header />
      <main className="container py-8">
        <Outlet />
      </main>
    </>
  );
}
