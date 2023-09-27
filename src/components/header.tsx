import { useTheme } from '@/store/theme';
import { MonitorIcon, MoonIcon, SunIcon, TypeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import viteLogo from '/vite.svg';

export default function Header() {
  const { theme, setTheme, setFontSize } = useTheme();

  return (
    <header className="text-foreground sticky top-0 w-full bg-base-100 shadow-md transition-all dark:bg-neutral-900">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link className="inline-flex items-center gap-x-4 transition-all" to="/">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <span className="text-2xl font-bold leading-none">Jobility</span>
        </Link>

        <div className="inline-flex">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn btn-circle btn-primary btn-ghost">
              {theme === 'light' && <SunIcon />}
              {theme === 'dark' && <MoonIcon />}
              {theme === 'system' && <MonitorIcon />}
              <span className="sr-only">Toggle theme</span>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow transition-all"
            >
              <li>
                <a onClick={() => setTheme('light')}>Light</a>
              </li>
              <li>
                <a onClick={() => setTheme('dark')}>Dark</a>
              </li>
              <li>
                <a onClick={() => setTheme('system')}>System</a>
              </li>
            </ul>
          </div>
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn btn-circle btn-primary btn-ghost">
              <TypeIcon />
              <span className="sr-only">Toggle font size</span>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a onClick={() => setFontSize('base')}>Default</a>
              </li>
              <li>
                <a onClick={() => setFontSize('lg')}>Large</a>
              </li>
              <li>
                <a onClick={() => setFontSize('xl')}>Extra Large</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
