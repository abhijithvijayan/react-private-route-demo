import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import {Card} from '../components/Card';

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleClick() {
    setIsAuthenticated(!isAuthenticated);
  }

  return (
    <div>
      Home Page
      <Link to="/about">
        About
      </Link>

      <br />
      <>
        {JSON.stringify(isAuthenticated, null, 2)}
      </>

      <br />
      <button onClick={handleClick}>{isAuthenticated ? 'Login' : 'Logout'}</button>


      <Card isAuthenticated={isAuthenticated} />
    </div>
  )
}

export default HomePage;