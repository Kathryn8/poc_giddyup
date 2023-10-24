import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Navbar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';
import { ThemeProvider } from '@mui/material';
import muiTheme from './muiTheme';
import ResponsiveAppBar from './components/ResponsiveAppBar';


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={muiTheme}>
        <ResponsiveAppBar />
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Services />
        <Tours />
        <Footer />
      </ThemeProvider>
    </React.Fragment >
  );
}

export default App;
