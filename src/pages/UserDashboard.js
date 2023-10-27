import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import TripCard from '../components/TripCard';
import About from '../components/About';


const UserDashboard = () => {
  return (
    <>
      {/* <h1 styles={{ minHeight: '600px' }}>test</h1> */}
      <h1>hi there</h1>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
      </header>
      <h1>USERS DASHBOARD!</h1>
      <SearchBar/>
      <h3 styles ={{textAlign: 'center'}}>Upcoming Trips</h3>
      <TripCard/>
      <About/>
    </>

  )
}

export default UserDashboard