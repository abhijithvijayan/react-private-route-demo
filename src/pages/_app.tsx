import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { AuthProvider } from '../contexts/auth-context';

import AboutPage from './about';
import HomePage from './index';

const App = () => {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App;