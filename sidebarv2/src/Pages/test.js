import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


// App.js

import React, { useEffect, useState } from 'react';

function Test() {
  const [searchTerm, setSearchTerm] = useState('today');
    const [test, setData] = useState(null);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const headers = new Headers();
  headers.append('User-Agent', 'MyApp/1.0');

  const handleSearch = () => {
    fetch(`/api/v1/search/words?keyword=${searchTerm}`,)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };


  const searchingTest = () =>{
    fetch(`http://localhost:3001/searchForPhrase/${searchTerm}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((json)=>{
        console.log(json.data);
        console.log("test 2");
        console.log(json.data[0].slug);
        console.log(json.data[0].japanese[0].reading);
        document.getElementById("test").innerText =json.data[0].slug
        document.getElementById("test2").innerText = json.data[0].japanese[0].reading 
        document.getElementById("test3").innerText = json.data[0].senses[0].english_definitions[0]
        //setData(json.data);
    })
    .catch(error => console.log('Error:', error));
  
  }


// useEffect( () =>
// {
//   fetch(`https://cors-anywhere.herokuapp.com/https://jisho.org/api/v1/search/words?keyword=${searchTerm}`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((json)=>{
//       console.log(json.data);
//       console.log("test 2");
//       console.log(json.data[0].slug);
//       console.log(json.data[0].japanese[0].reading);
//       // document.getElementById("test").innerText =json.data[0].slug
//       // document.getElementById("test2").innerText = json.data[0].japanese[0].reading 
//       // document.getElementById("test3").innerText = json.data[0].senses[0].english_definitions[0]
//       setData(json.data);
//   })

// },[searchTerm])
// if(setData ===null)
// {
//   return null;
// }

// const searchingTest2 = () =>{
//     fetch(`http://localhost:3001/jisho/${searchTerm}`,{headers})
//     .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then((json)=>{
//         console.log(json.data);
//     })
//      .catch(error => console.error(error));
// }

// const testreq = <div>
//   {
//     test.map((value,key) => <div key={key}>
//       <Typography>
//         {value.japanese}
//       </Typography>

//     </div>)
//   }
// </div>

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={searchingTest}>Search</button>
      <div>

        <ruby >
        <Typography style={{fontSize: '30px'}} className=' 1.2rem' id="test"></Typography> <rp>(</rp><rt style={{fontSize: '15px'}} id="test2"></rt><rp>)</rp>
        </ruby>
        <Typography style={{fontSize: '30px'}} id="test3"></Typography>

      </div>
    </div>
  );
}

export default Test;
