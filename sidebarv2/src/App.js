import * as React from 'react';
import './/App.css'
import Navigation from './Components/Navigation';
import JLPTPage from './Pages/JLPTPage';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Box, createMuiTheme } from '@mui/material';
import Scripts from './Pages/Scripts';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});





/**
 * MAIN FUNCTION
 * 
 */
function App() {
  const [currentTheme, setCurrentTheme] = React.useState(lightTheme);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

const lightTheme = createMuiTheme({
  palette:{type:'light'},
});
const darkTheme = createMuiTheme({
  palette:{
    type:'dark',
  },
});
const toggleTheme = () =>{
  setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
}
  return (
    <Box sx={{ display: 'flex' }} >

      <Navigation/>
      <Routes>
        <Route path="/" />
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/JLPT" element={<JLPTPage/>}/>
        <Route path="/Scripts" element={<Scripts/>}/>
      </Routes>

      </Box>

  );
}

export default App;
