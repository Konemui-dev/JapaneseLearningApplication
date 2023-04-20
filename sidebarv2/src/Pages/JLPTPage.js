import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box, Button, Card, CardContent, CircularProgress, Divider, Grow, Switch, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import CardQuestionComponent from './CardQuestionComponent';



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

function JLPT() {
  const [searchTermReturn, setSearchTermReturn] = useState([]);
  const [selectedValue, setSelectedValue] = useState("ま＊＊＊");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const [SearchWordBtn, setSearchWordBtn] = useState(true);


const testwordArr = {option1: "た＊＊", option2:"あ＊＊", option3: "い＊＊", option4:"な＊****", option5: "う***", option6:"え***", option7:"お***"}

const randomProperty = (testwordArr) => {
  const keys = Object.keys(testwordArr);
  if (keys.length > 0) {
      const index = Math.floor(keys.length * Math.random());
      const key = keys[index];
      const value = testwordArr[key];
      setSelectedValue(value);

  }
  return null;
};

const test = (e) =>{
   if(e != undefined)
   {
    return e
   }
   else
   {
    e ="た＊＊＊"
    return e
   }
}

  //questions fetch
  const searchingForWord = (e) => {
     fetch(`http://localhost:3001/searchForPhrase/${e}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }, setLoading(true),
      setSearchWordBtn(false)
      )
      .then((json) => {
        setLoading(false);
        setSearchWordBtn(true)
        setSearchTermReturn(json.data);
        handleChange();
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(true);
      });
  };
  const handleChange = () => {
    if (checked === false) {
      setChecked((prev) => !prev);
    } else {
      setChecked((prev) => prev);
    }
  };




{/**
 * 1 - seperate text inputs  --done
 * 2 - seperate button inputs
 * 3 - assign checked for each individual card
 * 4 - check if an array contains certain words for english response

 */}
const Card = (
  <Grid
  container
  spacing={{ xs: 2, md: 3 }}
  columns={{ xs: 4, sm: 8, md: 12 }}
>
  {searchTermReturn.map((value, key) => (
    <Grow
      key={key}
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Grid item xs={3} sm={4} md={4} points="0,100 50,00, 100,100">
        <CardQuestionComponent props={value} dev={devMode}/>
      </Grid>
        </Grow>
      ))}
    </Grid>)



  const handleChangeSwt = () =>{
    setDevMode((prev) => !prev);
  };

    return (
        <Grid component="main" sx={{flexGrow: 1, p:3}}
        justifyContent="center"
        container
        >        <DrawerHeader />
                

             
            <Grid        justifyContent="center" item xs={12} md={12} columns={{ xs: 4, sm: 8, md: 12 }}>
              
            {/**coditional render of response Cards */}
          <Grid
                  justifyContent="center"
                  container
          >
          <Button variant="outlined" onClick={() =>{randomProperty(testwordArr);searchingForWord( selectedValue)}}>Click to start</Button>
                <Switch checked={devMode} onClick={handleChangeSwt}>test</Switch>
                
          </Grid>
          <Grid
                            justifyContent="center"
                            container
          >
          {loading && (
            <CircularProgress
              sx={{
                justifyContent:"center",
                color: "#1BA098",
                position: "relative",
                marginTop: "5%",
              }}
              xs={10}
            />
          )}
          </Grid>
<br/>


            {SearchWordBtn && Card}

           

          </Grid>

        </Grid>
    );
  }
  
  export default JLPT;
  