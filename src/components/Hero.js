import SearchBar from "./SearchBar"
import React from 'react';
import MyImage from '../images/icon.png';
import { Container } from "@mui/material";


const Hero = () => {
  return (
    <>
      <h1>GiddyUP</h1>
      <p>
        Choose your chariot today!
      </p>
      <Container
        sx={{
          backgroundImage: `url(${MyImage})`,
          backgroundSize: '20%',
          backgroundPosition: 'center', // Adjust background position as needed
          // You can add more CSS properties as necessary
          // For example, padding, margin, color, etc.
          height: '200px',
          color: 'white',
          backgroundRepeat: 'repeat-x',
        }}
      >

      </Container >
      <SearchBar />
    </>
  )
}
export default Hero
