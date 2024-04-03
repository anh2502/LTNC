import { Typography } from '@mui/material';
import '../../App.css'
import React, { useState } from "react";

function HomePage() {
  return (
    <div className="App" style={{ height: '100%', width: '100%', textAlign: 'center', paddingTop: '20%' }}>
      <Typography variant='h1' fontWeight={900} fontFamily={'Lato'} color={'#303972'}>HELLO WORLD!</Typography>
    </div >
  );
}

export default HomePage;
