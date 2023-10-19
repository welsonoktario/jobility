import { User } from '@/types';
import { createContext, useState } from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthProviderState = {
  user?: User;
  setUser: (user: User) => void;
};

const initialState: AuthProviderState = {
  user: undefined,
  setUser: (user) => undefined,
};

export const AuthContext = createContext<AuthProviderState>(initialState);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
