

/**
 *  store state within the component rather than the parent
 * 1 - seperate text inputs  --done
 * 2 - seperate button inputs
 * 3 - assign checked for each individual card
 * 4 - check if an array contains certain words for english response

 */

import {  Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';


function CardQuestionComponent(value) {
  const [searchTerm, setSearchTerm] = useState();
  const [AnswerR, setAnswerR] = useState(null);
  const [AnswerW, setAnswerW] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [disable, setDisable] = useState(true);
  useEffect(()=>{
    value.anwsers(correct);
  })




  const handleInputChange = (event) => {
    let t = event.target.value.toLowerCase();
    setSearchTerm(t);
    setDisable(false);
  };
  const CheckQuestion =(e) =>{
      if(Object.values(value.props.senses[0].english_definitions).indexOf(e) > -1)
      {
        setAnswerR(true);
        setAnswerW(false);
        setDisable(true);

        setCorrect(correct+1)
      }
      else
      {
        setAnswerR(false);
        setAnswerW(true);
      }
  }




const statusR = (
  <Typography>
    correct!
  </Typography>
)

const statusW = (
  <Typography gutterBottom>
    incorrect try again
  </Typography>
)



return (

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
              <CardContent sx={{ color: "#1BA098", textAlign:'center' }}>
                <Typography gutterBottom variant="h5">
                  What is the english translation for ?
                </Typography>

                <Typography gutterBottom variant="h4">
                  <ruby>
                  {value.props.japanese[0].word}
                  <rp>(</rp>
                      <rt> {value.props.japanese[0].reading} </rt>
                      <rp>)</rp>
                  </ruby>

                </Typography>
                
  
  

            {/**demo code disable permanently if not using */}  {value.dev&& 
                              <div>
                              {value.props.senses[0].english_definitions.map((value,key) =>(
                <div key={key}>
                  {value}
  
  
  
                </div>
              ))}
                              </div>}

              <br/>
              <div>
              <TextField 
                onChange={handleInputChange}
                >
  
                </TextField>
              </div>
              <br/>
                <Button disabled={disable} variant="outlined" onClick={() =>{CheckQuestion(searchTerm); }}> {/**checkInput */}
        submit answer
      </Button>
                  {AnswerR&& statusR}
                  {AnswerW&& statusW}
  

              </CardContent>
            </Card>
)
}
export default CardQuestionComponent;