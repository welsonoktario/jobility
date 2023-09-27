import { Link } from 'react-router-dom';

import { useTheme } from '@/components/theme-provider';

import viteLogo from '/vite.svg';

export default function Header() {
  // const { setTheme, setFontSize } = useTheme();

  return (
    <header className="bg-base-100 sticky top-0 w-full text-foreground shadow-md transition-all dark:bg-neutral-900">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link className="inline-flex items-center gap-x-4 transition-all" to="/">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <span className="text-2xl font-bold leading-none">Jobility</span>
        </Link>
      </nav>
    </header>
  );
}
