import { createContext, useEffect, useState } from 'react';

import { User } from '@/types';

import { $get, $post } from '@/lib/helpers';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextProps = {
  user?: User | null;
  isLoading: boolean;
  setUser: (user?: User | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  register: (fullname: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const initialState: AuthContextProps = {
  user: null,
  isLoading: false,
  setUser: (user?: User | null) => null,
  setIsLoading: (isLoading: boolean) => null,
  register: async (fullname: string, email: string, password: string) => {},
  login: async (email: string, password: string) => {},
  logout: async () => {},
};

export const AuthContext = createContext<AuthContextProps>(initialState);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | undefined | null>(null);

  const register = async (fullname: string, email: string, password: string) => {
    const { data, status, message } = await $post<User>('/auth/register', {
      fullname,
      email,
      password,
    });

    if (status === 'fail') {
      throw new Error(message);
    }

    setUser(data);
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    const { data, status, message } = await $post<User | null>('/auth/login', {
      email,
      password,
    });

    if (status === 'fail') {
      throw new Error(message);
    }

    setUser(data);
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);

    const { status, message } = await $post('/auth/logout');

    if (status !== 'ok') {
      throw new Error(message);
    }

    setUser(null);
    setIsLoading(false);
  };

  /* useEffect(() => {
    setTimeout(() => {
      $get<User | null>('/auth/check')
        .then((res) => {
          const { status, data, message } = res;

          setUser(data);
        })
        .catch((e) => console.error('Failed to load user data'))
        .finally(() => setIsLoading(false));
    }, 1000);
  }, []); */

  const value = {
    user,
    isLoading,
    setUser,
    setIsLoading,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
