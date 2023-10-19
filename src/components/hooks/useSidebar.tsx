import { useContext, useMemo } from 'react';

import { SidebarContext } from '@/components/providers';

export function useSidebar() {
  const { isOpen, setIsOpen, toggleIsOpen } = useContext(SidebarContext);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      toggleIsOpen,
    }),
    [isOpen],
  );

  return value;
}
