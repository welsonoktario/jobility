import { useDisclosure, UseDisclosureProps } from '@chakra-ui/react';
import { createContext } from 'react';

type SidebarProviderProps = {
  children: React.ReactNode;
};

type SidebarProviderState = UseDisclosureProps;

const initialState: SidebarProviderState = {
  isOpen: false,
  onOpen: () => undefined,
  onClose: () => undefined,
};

export const SidebarContext = createContext<SidebarProviderState>(initialState);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <SidebarContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
