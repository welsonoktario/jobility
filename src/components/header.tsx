import { MenuIcon, MonitorIcon, MoonIcon, SunIcon, TypeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';

import { Button } from '@/components/button';
import { HeaderItem, HeaderMenu, HeaderMenuItem } from '@/components/header-menu';
import { useAuth, useScroll, useSidebar, useTheme } from '@/components/hooks';

export default function Header() {
  const { theme, setTheme, setFontSize } = useTheme();
  const { user } = useAuth();
  const { toggleIsOpen } = useSidebar();
  const { y } = useScroll();

  const themeMenuIcon = () => {
    if (theme === 'light') {
      return <SunIcon />;
    }

    if (theme === 'dark') {
      return <MoonIcon />;
    }

    return <MonitorIcon />;
  };

  return (
    <header
      className={cn(
        'text-foreground sticky top-0 w-full transition-all',
        y > 80
          ? 'bg-base-100 bg-opacity-75 shadow-md backdrop-blur-md dark:bg-base-200 dark:bg-opacity-75'
          : 'bg-base-200 dark:bg-base-100',
      )}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex gap-x-2">
          <HeaderItem
            icon={<MenuIcon />}
            onClick={() => {
              toggleIsOpen();
            }}
          />
          <Link
            className="inline-flex items-center gap-x-4 text-2xl font-bold leading-none transition-all"
            to="/"
          >
            Jobility
          </Link>
        </div>

        <div className="inline-flex items-center gap-x-4">
          <HeaderMenu icon={themeMenuIcon()} srText="Toggle theme">
            <HeaderMenuItem onClick={() => setTheme('light')}>Light</HeaderMenuItem>
            <HeaderMenuItem onClick={() => setTheme('dark')}>Dark</HeaderMenuItem>
            <HeaderMenuItem onClick={() => setTheme('system')}>System</HeaderMenuItem>
          </HeaderMenu>

          <HeaderMenu icon={<TypeIcon />} srText="Toggle font size">
            <HeaderMenuItem onClick={() => setFontSize('base')}>Default</HeaderMenuItem>
            <HeaderMenuItem onClick={() => setFontSize('lg')}>Large</HeaderMenuItem>
            <HeaderMenuItem onClick={() => setFontSize('xl')}>Extra Large</HeaderMenuItem>
          </HeaderMenu>

          {user ? (
            <Button></Button>
          ) : (
            <Link to={'/auth/login'}>
              <Button className="h-fit" color="info">
                Login
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
