import React from 'react'

import {AuthProvider} from '../contexts/auth-context';

import {Routes} from './_routes';

const App = () => {
  return (
    <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </>
  )
}

export default App;