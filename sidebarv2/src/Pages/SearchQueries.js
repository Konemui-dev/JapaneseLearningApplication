import {
  TextField,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  CircularProgress,
  Grow,
  ButtonGroup,
  Divider,
} from "@mui/material";
import LRUCache from "lru-cache"; //stretch goal.
import React, {  useState } from "react";

function SearchQueries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [Kanji, setKanji] = useState(""); 
  const [searchExamples, setSearchExamples] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchTermReturn, setSearchTermReturn] = useState([]);
  const [exampleReturn, setExampleReturn] = useState([]);
  const [kanjiReturn, setKanjiReturn] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    if (checked === false) {
      setChecked((prev) => !prev);
    } else {
      setChecked((prev) => prev);
    }
  };

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

  const searchingForWord = () => {
    fetch(`http://localhost:3001/searchForPhrase/${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }, setLoading(true))
      .then((json) => {
        setLoading(false);
        setSearchTermReturn(json.data);
        handleChange();
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(true);
      });
  };

  const jlptLevel = (value) => {
    if (value !== "") {
      return value;
    } else {
      return "Not in JLPT";
    }
  };

  //setup card to Grow in MUI
  const searchForWord_map = (
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
                <Typography variant="h4">{value.slug}</Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {jlptLevel(value.jlpt + "")}
                </Typography>
                <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
                <Typography gutterBottom variant="h6" component="div">
                  English readings:
                </Typography>

                {value.senses.map((value, key) => (
                  <div key={key}>
                    <br></br>
                    <div>
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
                <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
                <Typography gutterBottom variant="h6" component="div">
                  Japanese readings:
                </Typography>
                {value.japanese.map((value, key) => (
                  <Typography key={key}>
                    <ruby style={{ fontSize: "25px" }}>
                      {value.word} <rp>(</rp>
                      <rt> {value.reading} </rt>
                      <rp>)</rp>
                    </ruby>
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grow>
      ))}
    </Grid>
  );

  const searchingKanji = () => {
    fetch(`http://localhost:3001/searchForKanji/${Kanji}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }, setLoading(true))
      .then((json) => {
        setLoading(false);
        console.log(json);
        if (json.found == false) {
          console.error("this search query cannot be completed");
        } else {
          setKanjiReturn([json]);
        }

        handleChange();
      })
      .catch((error) => {
        console.log("Error:", error);
        setLoading(true);
      });
  };
  const searchForKanji_map = (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Grid item xs={3} sm={4} md={12} points="0,100 50,00, 100,100">
          {kanjiReturn.map((value, key) => (
            <Card
              key={key}
              sx={{
                minWidth: 250,
                minHeight: 150,
                height: 800,
                background: "#051622",
                border: 1,
                borderColor: "#1BA098",
                overflow: "auto",
                color: "#1BA098",
                textAlign: "center",
              }}
            >
              <Typography gutterBottom variant="h3">
                Search Query: {value.query}
              </Typography>
              <Typography gutterBottom variant="h4">
                JLPT level {value.jlptLevel ? value.jlptLevel : "Not in JLPT"}
              </Typography>
              <Typography variant="h4"> stroke order</Typography>
              <CardMedia
                component="img"
                sx={{
                  display: "initial",
                  float: "center",
                  padding: 2,
                  width: 200,
                  height: 200,
                }}
                src={value.strokeOrderGifUri}
                alt="gif couldnt be loaded"
              />
              <Typography>Stroke Count: {value.strokeCount}</Typography>
              <Typography gutterBottom variant="h5">
                Kanji Meaning
              </Typography>
              <Typography gutterBottom>{value.meaning}</Typography>
              <Typography variant="h5">kunyomi readings:</Typography>
              {value.kunyomi.map((value, key) => (
                <div key={key}>
                  <Typography>{value}</Typography>
                  <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
                </div>
              ))}
              <Typography gutterBottom variant="h5">
                kunyomi Examples:
              </Typography>
              {value.kunyomiExamples.map((value, key) => (
                <div key={key}>
                  <ruby style={{ fontSize: "25px" }}>
                    {value.example}
                    <rp>(</rp>
                    <rt> {value.reading} </rt>
                    <rp>)</rp>
                  </ruby>
                  <Typography gutterBottom>{value.meaning}</Typography>
                </div>
              ))}
              <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
              <Typography gutterBottom variant="h5">
                onyomi
              </Typography>
              {value.onyomi.map((value, key) => (
                <div key={key}>
                  <Typography gutterBottom>{value}</Typography>
                </div>
              ))}
              <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
              <Typography gutterBottom variant="h5">
                Onyomi Examples
              </Typography>
              {value.onyomiExamples.map((value, key) => (
                <div key={key}>
                  <Typography gutterBottom>
                    {value.example}, {value.meaning}, {value.reading}
                  </Typography>
                </div>
              ))}
              <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
              <Typography gutterBottom variant="h5">
                Parts of Kanji
              </Typography>
              {value.parts.map((value, key) => (
                <div key={key}>
                  <Typography>{value}</Typography>
                </div>
              ))}
              <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
              <Typography gutterBottom variant="h5">
                radicals
              </Typography>
              {value.radical.symbol}
              {value.radical.forms.map((value, key) => (
                <div key={key}>
                  <Typography>{value}</Typography>
                </div>
              ))}
              <Typography>{value.radical.meaning}</Typography>
            </Card>
          ))}
        </Grid>
      </Grow>
    </Grid>
  );

  const searchingExamples = () => {
    fetch(`http://localhost:3001/searchForExamples/${searchExamples}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }, setLoading(true))
      .then((json) => {
        console.log(json.results);
        setLoading(false);
        setExampleReturn(json.results);
        handleChange();
      })
      .catch((error) => console.log("Error:", error));
  };

  const liftedValue = (value) => {
    if (value !== "") {
      return value;
    } else {
      return "no conversion";
    }
  };

  const searchForExamples_map = (
    <Grid
      value="test"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {exampleReturn.map((value, key) => (
        <Grow
          key={key}
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Grid item xs={3} sm={4} md={4} points="0,100 50,00, 100,100">
            <Card
              key={key}
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
                <Typography gutterBottom variant="h5">
                  english sentence examples
                </Typography>

                <Typography gutterBottom component="div">
                  {value.english}
                </Typography>
                <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
                <Typography gutterBottom variant="h5" component="div">
                  Japanese sentence
                </Typography>
                <Typography gutterBottom component="div">
                  kanji: <br></br>
                  {value.kanji}
                </Typography>
                <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
                <Typography gutterBottom component="div">
                  kana: <br></br>
                  {value.kana}
                </Typography>
                <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
                <Typography gutterBottom component="div" variant="h5">
                  pieces of sentences
                </Typography>
                {value.pieces.map((value, key) => (
                  <Typography
                    key={key}
                    gutterBottom
                    sx={{ marginBottom: "10px" }}
                  >
                    <ruby style={{ fontSize: "20px" }}>
                      {value.unlifted}
                      <rp>(</rp>
                      <rt style={{ fontSize: "13px" }}>
                        {" "}
                        {liftedValue(value.lifted)}
                      </rt>
                      <rp>)</rp>
                    </ruby>
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grow>
      ))}
    </Grid>
  );

  /**
   * Task 1 : change the textfield to conditionally render like in web sem1 --Done
   * Task 2 : change Buttons to render same way -- Done
   * Task 3 : have other search formats correctly render --Done
   * Task 4 : display results in a grid again like the other method (can probably reuse the same grid and have them output different times) -- Done
   * Task 5 : loading -- Done
   * Task 6 : added loading effect -- Done
   * Task 7 : added resizing on page size difference -- Done
   * Task 8 : added fade in for effect -- Done
   */
  const [SearchKanjiBtn, setSearchKanjiBtn] = useState(false);
  const [SearchExamplesBtn, setSearchExamplesBtn] = useState(false);
  const [SearchWordBtn, setSearchWordBtn] = useState(true);

  const handleSearchKanji = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Search Kanji") {
      setSearchKanjiBtn(true);
      setSearchExamplesBtn(false);
      setSearchWordBtn(false);
    }
    if (e.target.value === "Search Examples") {
      setSearchKanjiBtn(false);
      setSearchExamplesBtn(true);
      setSearchWordBtn(false);
    }
    if (e.target.value === "Search Words") {
      setSearchKanjiBtn(false);
      setSearchExamplesBtn(false);
      setSearchWordBtn(true);
    }
  };

  return (
    <div>
      <div>
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={1}
          justifyContent="center"
        >
          <ButtonGroup
            size="small"
            sx={{ marginBottom: "2%", marginTop: "2%" }}
          >
            <Button onClick={handleSearchKanji} value="Search Kanji">
              Search Kanji
            </Button>
            <Button onClick={handleSearchKanji} value="Search Examples">
              Search Examples
            </Button>
            <Button onClick={handleSearchKanji} value="Search Words">
              Search Words
            </Button>
          </ButtonGroup>
          <Grid container justifyContent="center">
            {/**button 1 */}
            {SearchWordBtn && (
              <Grid container justifyContent="center">
                <TextField
                  helperText={"Input an English or Japanese word"}
                  variant="outlined"
                  label="Search Word"
                  value={searchTerm}
                  onChange={handleInputChange}
                ></TextField>
                <Button
                  variant="outlined"
                  onClick={searchingForWord}
                  checked={checked}
                >
                  Search
                </Button>
              </Grid>
            )}
            {/**button 2 */}
            {SearchKanjiBtn && (
              <Grid container justifyContent="center">
                <TextField
                  helperText={"Input Kanji"}
                  variant="outlined"
                  label="Search Kanji"
                  value={Kanji}
                  onChange={handleKanjiInputChange}
                  checked={checked}
                />
                <Button variant="outlined" onClick={searchingKanji}>
                  search
                </Button>
              </Grid>
            )}
            {/**button 3 */}
            {SearchExamplesBtn && (
              <Grid container justifyContent="center">
                <TextField
                  helperText={"Input an English or Japanese word"}
                  variant="outlined"
                  label="Search Examples"
                  value={searchExamples}
                  onChange={handleSearchExampleChange}
                  checked={checked}
                />
                <Button variant="outlined" onClick={searchingExamples}>
                  search
                </Button>
              </Grid>
            )}
          </Grid>
          {loading && (
            <CircularProgress
              sx={{
                color: "#1BA098",
                position: "relative",
                marginTop: "5%",
              }}
              xs={10}
            />
          )}
          <Grid item xs={12} md={12} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/**coditional render of response Cards */}
            {SearchExamplesBtn && searchForExamples_map}
            {SearchWordBtn && searchForWord_map}
            {SearchKanjiBtn && searchForKanji_map}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SearchQueries;
