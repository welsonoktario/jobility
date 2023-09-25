import { FontSizeIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import viteLogo from '/vite.svg';

export default function Header() {
  const { setTheme, setFontSize } = useTheme();

  return (
    <header className="sticky top-0 w-full bg-background dark:bg-neutral-900 text-foreground shadow-md transition-all">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link className="inline-flex items-center gap-x-4 transition-all" to="/">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <span className="text-2xl font-bold leading-none">Jobility</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="transition-all">Mulai</NavigationMenuTrigger>
              <NavigationMenuContent className="rounded-lg p-4">
                <ul>
                  <li>
                    <NavigationMenuLink href="#">Masuk</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="#">Daftar</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <FontSizeIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
                  <span className="sr-only">Font size</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setFontSize('base')}>Default</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFontSize('lg')}>Large</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFontSize('xl')}>Extra Large</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
