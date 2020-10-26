import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { useAuth } from '../contexts/auth-context';

import AboutPage from './about';
import HomePage from './index';


export const Routes = () => {
  const [isAuthenticated] = useAuth();

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/about" render={() => {
            if (isAuthenticated) {
              return <AboutPage />
            }

            return null;
          }} />

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}
