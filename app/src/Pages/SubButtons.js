import { Button } from "@mui/material";
import { useState } from "react";

function SubButtons(props) {
  const [currentAnswer, SetCurrentAnswer] = useState(props.english);
  const [disable, setDisable] = useState(false);


  const settingOrder = (e) => {
    if (currentAnswer === e) {
      setDisable(true);
      props.answer(true);
    }
  };

  return (
    <Button
      disabled={disable}
      onClick={() => {
        settingOrder(props.props);
      }}
    >
      {props.props}
    </Button>
  );
}

export default SubButtons;
