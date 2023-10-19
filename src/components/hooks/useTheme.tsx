import { useContext, useMemo } from 'react';

import { ThemeContext } from '@/components/providers/theme-provider';

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const value = useMemo(() => theme, [theme.theme, theme.fontSize]);

  return value;
}
