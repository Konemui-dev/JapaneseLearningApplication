import React from "react";
import Button from "@mui/material/Button"

import Modal from '@mui/material/Modal';
import Paper from "@mui/material/Paper";
const styles = {
    body: {
      display: "flex",
      flexDirection: "row",
      margin: 2
    },
    button: {
      zIndex: 1000,
      height: 100,
      width: 100,
      margin: 6.5,
      borderRadius: 0
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    container: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      flexWrap: "wrap",
      margin: "5px 50px",
      backgroundColor: "white",
      padding: 6.5
    },
    modal: {
      position: "absolute",
      width: 400,
      backgroundColor: "white",
      boxShadow: "none",
      padding: 10,
      outline: "none",
      top: "15%",
      left: "50%",
      transform: `translate(-50%, -50%)`
    }
  };
  
  export class Classtest extends React.Component {
    state = {
        open: false,
        stationNumber: null,
        stationData: [
            {id: "a", number: "あ", test: "value is a"},
            {id: "i", number: "い"},
            {id: "u", number: "う"},
        ]
      };
    
      handleOpen = stationNumber => () => {
        // get which button was pressed via `stationNumber`
        // open the modal and set the `stationNumber` state to that argument
        this.setState({ open: true, stationNumber: stationNumber });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
      render() {
        const { stationData } = this.state;
    
        return (
          <div style={styles.wrapper}>
            <div style={styles.body}>
              <Paper square elevation={0} style={styles.container}>
                {stationData.map((station, index) => (
                  <div key={index}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={styles.button}
                      // pass which button was clicked as an argument
                      onClick={this.handleOpen(station.number)}
                    >
                      {station.number}
                    </Button>
                  </div>
                ))}
              </Paper>
    
              {/* add only one modal */}
              <Modal open={this.state.open} onClose={this.handleClose}>
                {/* display the content based on newly set state */}
                <div style={styles.modal}>{this.state.stationNumber} {this.state.stationData.test} </div>
              </Modal>
            </div>
          </div>
        );
      }
    }
    
