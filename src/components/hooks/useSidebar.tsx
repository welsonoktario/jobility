import { useContext, useMemo } from 'react';

import { SidebarContext } from '@/components/providers/sidebar-provider';

export function useSidebar() {
  const sidebar = useContext(SidebarContext);

  if (sidebar === undefined) {
    throw new Error('useSidebar must be used within a ThemeProvider');
  }

  const value = useMemo(() => sidebar, [sidebar.isOpen]);

  return value;
}
