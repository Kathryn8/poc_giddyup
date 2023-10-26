import SearchBar from "./SearchBar"
import React from 'react';
import MyImage from '../images/icon.png';
import { Container, Box } from "@mui/material";


const Hero = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Box
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
      </Box >
      <h1>F*ck the user</h1>
      <SearchBar />
    </Container>
  )
}
export default Hero
