import { Outlet } from 'react-router-dom';

import { Flex } from '@chakra-ui/react';

import Header from '@/components/header';
import { AuthProvider, SidebarProvider, ThemeProvider } from '@/components/providers';
import { Sidebar } from '@/components/sidebar';

export default function Layout() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AuthProvider>
          <Flex
            flexDirection={'column'}
            minH={'$100vh'}
            backgroundColor={'whiteAlpha.200'}
            maxW={'100vw'}
          >
            <Header />
            <Sidebar />
            <Outlet />
          </Flex>
        </AuthProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
