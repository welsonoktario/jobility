import { useContext, useMemo } from 'react';

import { AuthContext } from '@/components/providers/auth-provider';

export function useAuth() {
  const auth = useContext(AuthContext);

  if (auth === undefined) {
    throw new Error('useAuth must be used within a ThemeProvider');
  }

  const value = useMemo(() => auth, [auth.user]);

  return value;
}
