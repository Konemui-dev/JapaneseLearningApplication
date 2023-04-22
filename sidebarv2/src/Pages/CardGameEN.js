import {  Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';


function CardGameEN(props){
    const [currentAnswer, SetCurrentAnswer] = useState(props.english);
    console.log(props);
    //  useEffect(()=>{
    //     props.selected(currentAnswer);
        
    //  })




 const sendToParent = () =>{
     props.selected(currentAnswer);
 }

    return(


    <Card 
    sx={{
      minWidth: 150,
      minHeight: 150,
      maxWidth: 150,
      maxHeight:150,
      background: "#051622",
      border: 1,
      borderColor: "#1BA098",
      overflow: "auto",
    }}
  >
    <CardContent  sx={{ color: "#1BA098", textAlign:'center' }}>

        <Button onClick={sendToParent} variant="outlined">
        {props.english}
        </Button>



    </CardContent>
  </Card>
)

}

export default CardGameEN;