import { Outlet } from 'react-router-dom';

import Header from '@/components/header';
import { AuthProvider, SidebarProvider, ThemeProvider } from '@/components/providers';
import { Sidebar } from '@/components/sidebar';

export default function Layout() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AuthProvider>
          <main className="drawer flex min-h-screen flex-col bg-base-200 dark:bg-base-100">
            <Header />
            <Sidebar />
            <Outlet />
          </main>
        </AuthProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
