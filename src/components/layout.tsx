import { Outlet } from 'react-router-dom';

import Header from '@/components/header';
import { AuthProvider, ThemeProvider } from '@/components/providers';
import { Sidebar } from '@/components/sidebar';
import { Flex } from '@chakra-ui/react';

export default function Layout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Flex flexDirection={'column'} minH={'$100vh'} backgroundColor={'whiteAlpha.200'} maxW={'100vw'}>
          <Header />
          <Sidebar />
          <Outlet />
        </Flex>
      </AuthProvider>
    </ThemeProvider>
  );
}
