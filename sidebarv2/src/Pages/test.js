import {
  Box,
  Paper,
  TextField,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Autocomplete,
  Grid,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LRUCache from "lru-cache";

// App.js

import React, { useEffect, useState } from "react";

function Test() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Kanji, setKanji] = useState("今");
  const [searchExamples, setSearchExamples] = useState("test");
  //set return info
  const [searchTermReturn, setSearchTermReturn] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKanjiInputChange = (event) => {
    setKanji(event.target.value);
  };

  const handleSearchExampleChange = (event) => {
    setSearchExamples(event.target.value);
  };

  if (searchTerm.length <= 1) {
  }

  const headers = new Headers();
  headers.append("User-Agent", "MyApp/1.0");

  const handleSearch = () => {
    fetch(`/api/v1/search/words?keyword=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  /**
   * testing
   */

  const searchingForPhraseTest = () => {
    //works
    fetch(`http://localhost:3001/searchForPhrase/${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json.data);

        setSearchTermReturn(json.data);
        document.getElementById("test").innerText = json.data[0].slug;
        document.getElementById("test2").innerText =
          json.data[0].japanese[0].reading;
        document.getElementById("test3").innerText =
          json.data[0].senses[0].english_definitions[0];
      })
      .catch((error) => console.log("Error:", error));
  };
  const jlptLevel = (value) => {
    if (value != "") {
      return value;
    } else {
      return "Not in JLPT";
    }
  };

  //setup card to Grow in MUI
  const searchForPhrase_map = (
    <Grid  spacing={2} container justifyContent="center">
      {searchTermReturn.map((value, key) => (
        <Grid key={key} item xs={4} >
          <Card sx={{ minWidth: 500 , minHeight: 500, maxHeight: 500, background: '#051622', border: 1, borderColor: '#1BA098'}}>
            <CardContent sx={{color: '#1BA098'}}>
              <Typography variant="h4">{value.slug}</Typography>
              <Typography gutterBottom variant="h6" component="div">
                {jlptLevel(value.jlpt)}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                English readings:
              </Typography>

              {value.senses.map((value, key) => (
                <div key={key}>
                  <br></br>
                  <div >
                    <u>{value.parts_of_speech + ""} </u>
                    <div></div>

                    {value.english_definitions.map((value, key) => (
                      <Typography style={{ fontSize: "20px" }} key={key}>
                        {value}
                      </Typography>
                    ))}
                  </div>
                </div>
              ))}
              <Typography gutterBottom variant="h6" component="div">
                Japanese readings:
              </Typography>
              {value.japanese.map((value, key) => (
                <div key={key}>
                  {" "}
                  <ruby style={{ fontSize: "25px" }}>
                    {value.word} <rp>(</rp>
                    <rt> {value.reading}</rt>
                    <rp>)</rp>
                  </ruby>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  /**
   * testing2
   */

  const searchingForPhrase = () => {
    //works
    fetch(`http://localhost:3001/searchForPhrase/${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json.data);
        document.getElementById("test").innerText = json.data[0].slug;
        document.getElementById("test2").innerText =
          json.data[0].japanese[0].reading;
        document.getElementById("test3").innerText =
          json.data[0].senses[0].english_definitions[0];
      })
      .catch((error) => console.log("Error:", error));
  };

  const searchingKanji = () => {
    //works has a different data structure though
    fetch(`http://localhost:3001/searchForKanji/${Kanji}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        document.getElementById("testKanji").innerText = json.query;
      })
      .catch((error) => console.log("Error:", error));
  };

  const searchingExamples = () => {
    fetch(`http://localhost:3001/searchForExamples/${searchExamples}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        document.getElementById("testExample").innerText =
          json.results[0].english;
        document.getElementById("testExample2").innerText =
          json.results[0].kanji;
      })
      .catch((error) => console.log("Error:", error));
  };

  /**
   * change the textfield to conditionally render like in web sem1
   *
   */
  return (
    <div>
      <TextField
      
        helperText={"Input a singular kanji into this search box"}
        variant="outlined"
        label="input kanji"
        value={Kanji}
        onChange={handleKanjiInputChange}
      />
      <button onClick={searchingKanji}>search Kanji</button>

      <TextField
        variant="outlined"
        label="input examples"
        value={searchExamples}
        onChange={handleSearchExampleChange}
      />
      <button onClick={searchingExamples}>search Examples</button>
      <div>
        <p>testarea</p>
        <Grid sx={{ flexGrow: 1 }} container spacing={1}>
        <Grid container justifyContent="center">
              <TextField 
                helperText={"Input an english word into this search box"}
                variant="outlined"
                label="input word"
                value={searchTerm}
                onChange={handleInputChange} 
 
              ></TextField>
              <Button variant="outlined" onClick={searchingForPhraseTest}>
                Search
              </Button>
            </Grid>
          <Grid item xs={12} md={12} columns={{ xs: 4, sm: 8, md: 12 }}>
            {searchForPhrase_map}
          </Grid>
        </Grid>

        <p>testarea</p>

        <ruby>
          <Typography
            style={{ fontSize: "30px" }}
            className=" 1.2rem"
            id="test"
          ></Typography>{" "}
          <rp>(</rp>
          <rt style={{ fontSize: "15px" }} id="test2"></rt>
          <rp>)</rp>
        </ruby>
        <Typography style={{ fontSize: "30px" }} id="test3"></Typography>
        <Typography style={{ fontSize: "30px" }} id="testKanji"></Typography>
        <h1>test phrasing</h1>
        <Typography style={{ fontSize: "30px" }} id="testExample"></Typography>
        <Typography style={{ fontSize: "30px" }} id="testExample2"></Typography>
      </div>
    </div>
  );
}

export default Test;
