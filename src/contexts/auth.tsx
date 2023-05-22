import { createContext, useState, Dispatch, SetStateAction } from 'react';

type AuthProvider = {
  userAuth: boolean;
  setUserAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthProvider>({} as AuthProvider);

type AuthContextProviderProps = {
  children: React.ReactNode
}

// TODO essa context aqui teria que fazer usando o local storage para guardar o estado do app
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [userAuth, setUserAuth] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  )
}