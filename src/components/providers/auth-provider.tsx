import { User } from '@/types';
import { createContext, useEffect, useState } from 'react';

import { $get } from '@/lib/helpers';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthProviderState = {
  user?: User | null;
  isLoading: boolean;
  setUser: (user?: User | null) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const initialState: AuthProviderState = {
  user: null,
  isLoading: false,
  setUser: (user?: User | null) => null,
  setIsLoading: (isLoading: boolean) => null,
};

export const AuthContext = createContext<AuthProviderState>(initialState);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | undefined | null>(null);

  useEffect(() => {
    setTimeout(() => {
      $get<User | null>('/auth/check')
        .then((res) => {
          const { status, data, message } = res;

          setUser(data);
        })
        .catch((e) => console.error('Failed to load user data'))
        .finally(() => setIsLoading(false));
    }, 1000);
  }, []);

  const value = {
    user,
    isLoading,
    setUser,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
