
import React, {createContext, useContext, useState} from 'react'

type Context = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
const AuthStateContext = createContext<Context|undefined>(undefined);

function useAuth() {
  const context = useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}

const AuthProvider:React.FC = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthStateContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
      {children}
    </AuthStateContext.Provider>
  )
}

export {AuthProvider, useAuth}