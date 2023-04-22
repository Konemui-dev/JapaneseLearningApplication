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
import GamePage from './Pages/GamePage';
import ResourcesPage from './Pages/ResourcesPage';

/**
 * MAIN FUNCTION
 * 
 */
function App() {

  return (
    <Box sx={{ display: 'flex' }} >
      <Navigation/>
      <Routes>
        <Route path="/" element={<JLPTPage/>}/>
        <Route path="/JLPT" element={<JLPTPage/>}/>
        <Route path="/Scripts" element={<Scripts/>}/>
        <Route path="/Search" element={<SearchPage/>}/>
        <Route path="/Games" element={<GamePage/>}/>
        <Route path="/Resources" element={<ResourcesPage/>}/>
      </Routes>
      </Box>
  );
}

export default App;
