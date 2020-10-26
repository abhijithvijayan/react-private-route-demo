import React from 'react'


type CardItemProps = {
  isAuthenticated: boolean;
}

export const CardItem: React.FC<CardItemProps> = ({isAuthenticated}) => {
  //
  return (
    <div>
      Card Item {isAuthenticated ? 'True': 'False'}
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
