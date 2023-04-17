import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box, Button, Card, CardContent, Divider, Grow, TextField, Typography } from '@mui/material';
import { useState } from 'react';



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

function JLPT() {
  const [searchTerm, setSearchTerm] = useState();
  const [searchTermReturn, setSearchTermReturn] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
const testword ="た＊＊"

const testwordArr = {option1: "た＊＊", option2:"あ＊＊"}
  //questions fetch
  const searchingForWord = () => {
    fetch(`http://localhost:3001/searchForPhrase/${testwordArr.option2}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }, setLoading(true))
      .then((json) => {
        console.log(json.data);
        setLoading(false);
        setSearchTermReturn(json.data);
        console.log(json.data[0].japanese[0].word);
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
let count = 1;

const checkInput = (e) =>{
  if(searchTerm !== searchTermReturn[0].senses[0].english_definitions[0].english_definitions  && searchTerm !== searchTermReturn[0].senses[0].english_definitions[1]){
    console.log("incorrect");
    
  }
  else
  { 
    console.log("correct");
    count = count +1;
    console.log(count);
}

}

const checkInput2 = (e) =>
{
  if(Object.values(searchTermReturn[0].senses[0].english_definitions).indexOf(e) > -1)
  {
    console.log("here");
  }
  else
  {
    console.log("failed");
  }
}


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };



  //card to hold question in each one content needs changing

  const cards = (<Grid
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
          <Card
            sx={{
              minWidth: 250,
              minHeight: 150,
              height: 500,
              background: "#051622",
              border: 1,
              borderColor: "#1BA098",
              overflow: "auto",
            }}
          >
            <CardContent sx={{ color: "#1BA098" }}>
              {value.japanese[0].word}


            {/**             {value.senses.map((value,key)=>(
              <div key={key}>
                {value.english_definitions + " "}
              </div>
            ))}*/}
            {value.senses[0].english_definitions.map((value,key) =>(
              <div key={key}>
                {value}



              </div>
            ))}

                       <TextField
              id={value}
              onChange={handleInputChange}
              >

              </TextField>

{/**
 * 1 - seperate text inputs  --done
 * 2 - seperate button inputs
 * 3 - assign checked for each individual card
 * 4 - check if an array contains certain words for english response

 */}


                <Button disabled={!searchTerm} variant="outlined" onClick={() =>{setSelectedValue(searchTerm);console.log(searchTerm); checkInput2(searchTerm)}}> {/**checkInput */}
      submit answer
    </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grow>
    ))}
  </Grid>)

const [SearchWordBtn, setSearchWordBtn] = useState(true);




    return (
        <Grid component="main" sx={{flexGrow: 1, p:3}}>        <DrawerHeader />
                <Button variant="outlined" onClick={searchingForWord}>Click to start</Button>
                  
                <Box>
              Answers correct: {count}
              </Box>
                

            <Grid item xs={12} md={12} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/**coditional render of response Cards */}

            {SearchWordBtn && cards}

          </Grid>

        </Grid>
    );
  }
  
  export default JLPT;
  