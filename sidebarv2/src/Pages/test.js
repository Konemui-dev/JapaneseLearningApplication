import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import LRUCache from "lru-cache";

// App.js

import React, { useEffect, useState } from 'react';

function Test() {
  const [searchTerm, setSearchTerm] = useState('');
  const [Kanji, setKanji] = useState('今');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKanjiInputChange = (event) =>{
    setKanji(event.target.value);
  }


  const headers = new Headers();
  headers.append('User-Agent', 'MyApp/1.0');

  const handleSearch = () => {
    fetch(`/api/v1/search/words?keyword=${searchTerm}`,)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };


  const searchingTest = () =>{ //works change the naming scheme though
    fetch(`http://localhost:3001/searchForPhrase/${searchTerm}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((json)=>{
        console.log(json.data);
        document.getElementById("test").innerText =json.data[0].slug
        document.getElementById("test2").innerText = json.data[0].japanese[0].reading 
        document.getElementById("test3").innerText = json.data[0].senses[0].english_definitions[0]
    })
    .catch(error => console.log('Error:', error));
  
  }


  const searchingForPhrase = () =>{
    fetch(`http://localhost:3001/searchForPhrase/${searchTerm}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((json)=>{
        console.log(json.data);
        document.getElementById("test").innerText =json.data[0].slug
        document.getElementById("test2").innerText = json.data[0].japanese[0].reading 
        document.getElementById("test3").innerText = json.data[0].senses[0].english_definitions[0]
    })
    .catch(error => console.log('Error:', error));
  
  }


  const searchingKanji = () =>{ //works has a different data structure though
    fetch(`http://localhost:3001/searchForKanji/${Kanji}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((json)=>{
        console.log(json);
        document.getElementById("testKanji").innerText = json.query
    })
    .catch(error => console.log('Error:', error));
  
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={searchingTest}>Search</button>
      <input type="text" value={Kanji} onChange={handleKanjiInputChange}/>
      <button onClick={searchingKanji}>search Kanji</button>
      <div>

        <ruby >
        <Typography style={{fontSize: '30px'}} className=' 1.2rem' id="test"></Typography> <rp>(</rp><rt style={{fontSize: '15px'}} id="test2"></rt><rp>)</rp>
        </ruby>
        <Typography style={{fontSize: '30px'}} id="test3"></Typography>
        <Typography style={{fontSize: '30px'}} id="testKanji"></Typography>
      </div>
    </div>
  );
}

export default Test;
