import { ButtonGroup, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import SubButtons from "./SubButtons";

function CardGameJP(props) {
  const [AnswerR, setAnswerR] = useState(false);

  console.log(props);

  /**
   * SUB BUTTON ALLOW FOR RETURN IF ANSWER IS TRUE IF NOT DONT ALLOW PASS ANSWER DOWN TOO TO ALLOWS FOR THIS
   */

  const correctOpt = props.english;

  const getAnwser = () => {
    setAnswerR(true);
  };

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const randomChar = characters[Math.floor(Math.random() * characters.length)];
  const randomChar2 = characters[Math.floor(Math.random() * characters.length)];

  let result = "";

  for (let i = 0; i < Math.random() * 3; i++) {
    result += randomChar2;
  }

  const optionsArr = [randomChar, correctOpt, result];

  const randomArrOpt = optionsArr.sort((a, b) => 0.5 - Math.random());

  const test = (
    <ButtonGroup>
      {randomArrOpt.map((value, key) => (
        <SubButtons
          key={key}
          props={value}
          english={props.english}
          answer={getAnwser}
        />
      ))}
    </ButtonGroup>
  );
  const correct = <Typography>Correct</Typography>;

  return (
    <Card
      sx={{
        minWidth: 250,
        minHeight: 200,
        maxWidth: 250,
        maxHeight: 250,
        background: "#051622",
        border: 1,
        borderColor: "#1BA098",
        overflow: "auto",
        margin: 1,
      }}
    >
      <CardContent sx={{ color: "#1BA098", textAlign: "center" }}>
        <Typography id="question" variant="h4" value={props.character}>
          {props.character}
        </Typography>

        {!AnswerR && test}
        {AnswerR && correct}
      </CardContent>
    </Card>
  );
}

export default CardGameJP;
