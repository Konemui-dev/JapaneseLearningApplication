const express = require("express");
const JishoAPI = require("unofficial-jisho-api");
const jisho = new JishoAPI();
const app = express();

app.get("/searchForKanji/:searchTerm", async function (req, res) {
  const text = jisho.searchForKanji(req.params.searchTerm).then((data) => {
    console.log(data);
    res.send(data);
  });
  res.send(await text);
  console.log(await text);
  console.log("new req end");
});

app.get("/searchForPhrase/:searchTerm", async function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    jisho.searchForPhrase(req.params.searchTerm).then((data) => {
    res.send(data);
    console.log(data);
  });



});

app.get("/searchForExamples/:searchTerm", async function (req, res) {
  const text = jisho.searchForExamples(req.params.searchTerm).then((data) => {
    res.send(data);
  });
  res.send(await text);
  console.log(await text);
  console.log("new req end");
});

app.listen(3001, () => console.log("API listening on 3001"));
