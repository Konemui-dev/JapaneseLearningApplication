import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grow,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
//sound imports
import soundA from "../VoiceVox_audio/001_Male_あ.wav";
import soundI from "../VoiceVox_audio/002_Male_い.wav";
import soundU from "../VoiceVox_audio/003_Male_う.wav";
import soundE from "../VoiceVox_audio/004_Male_え.wav";
import soundO from "../VoiceVox_audio/005_Male_お.wav";

import soundKA from "../VoiceVox_audio/001_Male_か.wav";
import soundKI from "../VoiceVox_audio/002_Male_き.wav";
import soundKU from "../VoiceVox_audio/003_Male_く.wav";
import soundKE from "../VoiceVox_audio/004_Male_け.wav";
import soundKO from "../VoiceVox_audio/005_Male_こ.wav";

import soundSA from "../VoiceVox_audio/001_Male_さ.wav";
import soundSHI from "../VoiceVox_audio/002_Male_し.wav";
import soundSU from "../VoiceVox_audio/003_Male_す.wav";
import soundSE from "../VoiceVox_audio/004_Male_せ.wav";
import soundSO from "../VoiceVox_audio/005_Male_そ.wav";

import soundTA from "../VoiceVox_audio/001_Male_た.wav";
import soundCHI from "../VoiceVox_audio/002_Male_ち.wav";
import soundTSU from "../VoiceVox_audio/003_Male_つ.wav";
import soundTE from "../VoiceVox_audio/004_Male_て.wav";
import soundTO from "../VoiceVox_audio/005_Male_と.wav";

import soundNA from "../VoiceVox_audio/001_Male_な.wav";
import soundNI from "../VoiceVox_audio/002_Male_に.wav";
import soundNU from "../VoiceVox_audio/003_Male_ぬ.wav";
import soundNE from "../VoiceVox_audio/004_Male_ね.wav";
import soundNO from "../VoiceVox_audio/005_Male_の.wav";

import soundHA from "../VoiceVox_audio/001_Male_は.wav";
import soundHI from "../VoiceVox_audio/002_Male_ひ.wav";
import soundFU from "../VoiceVox_audio/003_Male_ふ.wav";
import soundHE from "../VoiceVox_audio/004_Male_へ.wav";
import soundHO from "../VoiceVox_audio/005_Male_ほ.wav";

import soundMA from "../VoiceVox_audio/001_Male_ま.wav";
import soundMI from "../VoiceVox_audio/002_Male_み.wav";
import soundMU from "../VoiceVox_audio/003_Male_む.wav";
import soundME from "../VoiceVox_audio/004_Male_め.wav";
import soundMO from "../VoiceVox_audio/005_Male_も.wav";

import soundYA from "../VoiceVox_audio/001_Male_や.wav";
import soundYU from "../VoiceVox_audio/002_Male_ゆ.wav";
import soundYO from "../VoiceVox_audio/003_Male_よ.wav";

import soundRA from "../VoiceVox_audio/001_Male_ら.wav";
import soundRI from "../VoiceVox_audio/002_Male_り.wav";
import soundRU from "../VoiceVox_audio/003_Male_る.wav";
import soundRE from "../VoiceVox_audio/004_Male_れ.wav";
import soundRO from "../VoiceVox_audio/005_Male_ろ.wav";

import soundWA from "../VoiceVox_audio/001_Male_わ.wav";
import soundWU from "../VoiceVox_audio/002_Male_ウ.wav";
import soundWO from "../VoiceVox_audio/003_Male_を.wav";

import soundNN from "../VoiceVox_audio/001_Male_ん.wav";

import sound from "../VoiceVox_audio/001_Male_あ.wav";

import CardGameJP from "./CardGameJP";
import CardGameEN from "./CardGameEN";

function GamePage() {
    const [checked, setChecked] = useState(true);


  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


/**
 * MOST LIKELY PAGE NEEDS RESTARTING USING DRAG AND DROP GAME INSTEAD!
 * ISSUES WITH MATCHING GAME WERE the randomise position was causing changes every single click option
 * and
 * 
 * MULTICHOICE GAME INSTEAD
 */










//gen card data
  //Hiragana Scripts
  const aHiragana = { character: "あ", english: "a", audio: soundA };
  const iHiragana = { character: "い", english: "i", audio: soundI };
  const uHiragana = { character: "う", english: "u", audio: soundU };
  const eHiragana = { character: "え", english: "e", audio: soundE };
  const oHiragana = { character: "お", english: "o", audio: soundO };

  const kaHiragana = { character: "か", english: "ka", audio: soundKA };
  const kiHiragana = { character: "き", english: "ki", audio: soundKI };
  const kuHiragana = { character: "く", english: "ku", audio: soundKU };
  const keHiragana = { character: "け", english: "ke", audio: soundKE };
  const koHiragana = { character: "こ", english: "ko", audio: soundKO };

  const saHiragana = { character: "さ", english: "sa", audio: soundSA };
  const shiHiragana = { character: "し", english: "shi", audio: soundSHI };
  const suHiragana = { character: "す", english: "su", audio: soundSU };
  const seHiragana = { character: "せ", english: "se", audio: soundSE };
  const soHiragana = { character: "そ", english: "so", audio: soundSO };

  const taHiragana = { character: "た", english: "ta", audio: soundTA };
  const chiHiragana = { character: "ち", english: "chi", audio: soundCHI };
  const tsuHiragana = { character: "つ", english: "tsu", audio: soundTSU };
  const teHiragana = { character: "て", english: "te", audio: soundTE };
  const toHiragana = { character: "と", english: "to", audio: soundTO };

  const naHiragana = { character: "な", english: "na", audio: soundNA };
  const niHiragana = { character: "に", english: "ni", audio: soundNI };
  const nuHiragana = { character: "ぬ", english: "nu", audio: soundNU };
  const neHiragana = { character: "ね", english: "ne", audio: soundNE };
  const noHiragana = { character: "の", english: "no", audio: soundNO };

  const haHiragana = { character: "は", english: "ha", audio: soundHA };
  const hiHiragana = { character: "ひ", english: "hi", audio: soundHI };
  const fuHiragana = { character: "ふ", english: "fu", audio: soundFU };
  const heHiragana = { character: "へ", english: "he", audio: soundHE };
  const hoHiragana = { character: "ほ", english: "ho", audio: soundHO };

  const maHiragana = { character: "ま", english: "ma", audio: soundMA };
  const miHiragana = { character: "み", english: "mi", audio: soundMI };
  const muHiragana = { character: "む", english: "mu", audio: soundMU };
  const meHiragana = { character: "め", english: "me", audio: soundME };
  const moHiragana = { character: "も", english: "mo", audio: soundMO };

  const yaHiragana = { character: "や", english: "ya", audio: soundYA };
  const yuHiragana = { character: "ゆ", english: "yu", audio: soundYU };
  const yoHiragana = { character: "よ", english: "yo", audio: soundYO };

  const raHiragana = { character: "ら", english: "ra", audio: soundRA };
  const riHiragana = { character: "り", english: "ri", audio: soundRI };
  const ruHiragana = { character: "る", english: "ru", audio: soundRU };
  const reHiragana = { character: "れ", english: "re", audio: soundRE };
  const roHiragana = { character: "ろ", english: "ro", audio: soundRO };

  const waHiragana = { character: "わ", english: "wa", audio: soundWA };
  const woHiragana = { character: "を", english: "wo", audio: soundWO };
  const nHiragana = { character: "ん", english: "n", audio: soundNN };

  const baseCharHiragana = [
    aHiragana,
    iHiragana,
    uHiragana,
    eHiragana,
    oHiragana,
  ];
  const kCharHiragana = [
    kaHiragana,
    kiHiragana,
    kuHiragana,
    keHiragana,
    koHiragana,
  ];
  const sCharHiragana = [
    saHiragana,
    shiHiragana,
    suHiragana,
    seHiragana,
    soHiragana,
  ];
  const tChartHiragana = [
    taHiragana,
    chiHiragana,
    tsuHiragana,
    teHiragana,
    toHiragana,
  ];
  const nCharHiragana = [
    naHiragana,
    niHiragana,
    nuHiragana,
    neHiragana,
    noHiragana,
  ];
  const hCharHiragana = [
    haHiragana,
    hiHiragana,
    fuHiragana,
    heHiragana,
    hoHiragana,
  ];
  const mCharHiragana = [
    maHiragana,
    miHiragana,
    muHiragana,
    meHiragana,
    moHiragana,
  ];

  const rCharHiragana = [
    raHiragana,
    riHiragana,
    ruHiragana,
    reHiragana,
    roHiragana,
  ];


  const Hiragana = [
    baseCharHiragana,
    kCharHiragana,
    sCharHiragana,
    tChartHiragana,
    nCharHiragana,
    hCharHiragana,
    mCharHiragana,
    rCharHiragana,
  ];

//rand cards


const randomizedParent = Hiragana.sort(() => Math.random() -0.5);

const randomized = baseCharHiragana.sort(() => Math.random() -0.5);


const Card = (
    <Grid  container

    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 6, md: 12 }}
  >
    {console.log("test")}
    {randomizedParent.map((value,key) =>(
            <Grow
          key={key}
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
           <Grid  xs={3} sm={5} md={4} points="0,100 50,00, 100,100">
          {value.map((value,key) =>(

            <CardGameJP key={key} character={value.character} english={value.english} />


          ))}
          </Grid>
          
            </Grow>

    ))}





 

    </Grid>
)






return (
    <Grid
      component="main"
      sx={{ flexGrow: 1, p: 3 }}
      justifyContent="center"
      container
    >
      <DrawerHeader />
      <Grid
        justifyContent="center"
        item
        xs={12}
        md={12}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{marginLeft:5}}
      >
        
        
        {Card}
      </Grid>
    </Grid>
  );
}
export default GamePage;
