import * as React from 'react';
import Box from '@mui/material/Box';
import './/App.css'
import Navigation from './Components/Navigation';
import { HashRouter } from "react-router-dom";

/**
 * MAIN FUNCTION
 * 
 */
function App() {
  return (
    <Box>
      <Navigation/>
    </Box>
  );
}

export default App;
