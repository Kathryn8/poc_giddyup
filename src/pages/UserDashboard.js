import React from 'react'
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <>
      {/* <h1 styles={{ minHeight: '600px' }}>test</h1> */}
      <h1>hi htere</h1>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
      </header>
      <h1>USERS DASHBOARD!</h1>
    </>

  )
}

export default UserDashboard