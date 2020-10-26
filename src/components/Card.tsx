import React from 'react'
import { useAuth } from '../contexts/auth-context'


type CardItemProps = {
  isAuthenticated: boolean;
}

export const CardItem: React.FC<CardItemProps> = ({isAuthenticated}) => {
  const [, setIsAuthenticated] = useAuth();

  function handleClick() {
    setIsAuthenticated(!isAuthenticated);
  }

  return (
    <div>
      Card Item {isAuthenticated ? 'True': 'False'}
      <button onClick={handleClick}>{isAuthenticated ? 'Login' : 'Logout'}</button>
    </div>
  )
}

type CardProps = {
  isAuthenticated: boolean;
}


export const Card: React.FC<CardProps> = ({isAuthenticated}) => {
  //
  return (
    <div>
      <CardItem isAuthenticated={isAuthenticated} />
    </div>
  )
}
