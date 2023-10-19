import { createContext, useState } from 'react';

type SidebarProviderProps = {
  children: React.ReactNode;
};

type SidebarProviderState = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleIsOpen: () => void;
};

const initialState: SidebarProviderState = {
  isOpen: false,
  setIsOpen: (open) => undefined,
  toggleIsOpen: () => undefined,
};

export const SidebarContext = createContext(initialState);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  const value = {
    isOpen,
    setIsOpen,
    toggleIsOpen,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}
