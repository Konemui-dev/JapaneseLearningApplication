import * as React from 'react';
import './/App.css'
import Navigation from './Components/Navigation';
import JLPTPage from './Pages/JLPTPage';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Box, } from '@mui/material';
import Scripts from './Pages/Scripts';
import SearchPage from './Pages/SearchPage';
import './Pages/test.css';



/**
 * MAIN FUNCTION
 * 
 */
function App() {

  return (
    <Box sx={{ display: 'flex' }} >

      <Navigation/>
      <Routes>
        <Route path="/" />
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/JLPT" element={<JLPTPage/>}/>
        <Route path="/Scripts" element={<Scripts/>}/>
        <Route path="/Search" element={<SearchPage/>}/>
      </Routes>

      </Box>

  );
}

export default App;
