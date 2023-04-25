import {
  Box,
  Card,
  CardContent,
  Divider,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
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

//sound imports done
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#051622",
  border: "1px solid #1BA098",
  justifyContent: "center",
  textAlign: "center",
  boxShadow: 24,
  p: 4,
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function Scripts() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValueDetails, setSelectedValueDetails] = useState(null);
  const [selectedAudioFile, setSelectedAudioFile] = useState(null);

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
  const yiHiragana = { character: "　", english: "", audio: sound };
  const yuHiragana = { character: "ゆ", english: "yu", audio: soundYU };
  const yeHiragana = { character: "　", english: "", audio: sound };
  const yoHiragana = { character: "よ", english: "yo", audio: soundYO };

  const raHiragana = { character: "ら", english: "ra", audio: soundRA };
  const riHiragana = { character: "り", english: "ri", audio: soundRI };
  const ruHiragana = { character: "る", english: "ru", audio: soundRU };
  const reHiragana = { character: "れ", english: "re", audio: soundRE };
  const roHiragana = { character: "ろ", english: "ro", audio: soundRO };

  const waHiragana = { character: "わ", english: "wa", audio: soundWA };
  const wiHiragana = { character: "　", english: " ", audio: sound };
  const wuHiragana = { character: "　", english: " ", audio: sound };
  const weHiragana = { character: "　", english: " ", audio: sound };
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
  const yCharHiragana = [
    yaHiragana,
    yiHiragana,
    yuHiragana,
    yeHiragana,
    yoHiragana,
  ];
  const rCharHiragana = [
    raHiragana,
    riHiragana,
    ruHiragana,
    reHiragana,
    roHiragana,
  ];
  const wCharHiragana = [
    waHiragana,
    wiHiragana,
    wuHiragana,
    weHiragana,
    woHiragana,
  ];
  const nnCharHiragana = [nHiragana];

  const Hiragana = [
    baseCharHiragana,
    kCharHiragana,
    sCharHiragana,
    tChartHiragana,
    nCharHiragana,
    hCharHiragana,
    mCharHiragana,
    yCharHiragana,
    rCharHiragana,
    wCharHiragana,
    nnCharHiragana,
  ];

  //Katakana Script
  const aKatakana = { character: "ア", english: "a", audio: soundA };
  const iKatakana = { character: "イ", english: "i", audio: soundI };
  const uKatakana = { character: "ウ", english: "u", audio: soundU };
  const eKatakana = { character: "エ", english: "e", audio: soundE };
  const oKatakana = { character: "オ", english: "o", audio: soundO };

  const kaKatakana = { character: "カ", english: "ka", audio: soundKA };
  const kiKatakana = { character: "キ", english: "ki", audio: soundKI };
  const kuKatakana = { character: "ク", english: "ku", audio: soundKU };
  const keKatakana = { character: "ケ", english: "ke", audio: soundKE };
  const koKatakana = { character: "コ", english: "ko", audio: soundKO };

  const saKatakana = { character: "サ", english: "sa", audio: soundSA };
  const shiKatakana = { character: "シ", english: "shi", audio: soundSHI };
  const suKatakana = { character: "ス", english: "su", audio: soundSU };
  const seKatakana = { character: "セ", english: "se", audio: soundSE };
  const soKatakana = { character: "ソ", english: "so", audio: soundSO };

  const taKatakana = { character: "タ", english: "ta", audio: soundTA };
  const chiKatakana = { character: "チ", english: "chi", audio: soundCHI };
  const tsuKatakana = { character: "ツ", english: "tsu", audio: soundTSU };
  const teKatakana = { character: "テ", english: "te", audio: soundTE };
  const toKatakana = { character: "ト", english: "to", audio: soundTO };

  const naKatakana = { character: "ナ", english: "na", audio: soundNA };
  const niKatakana = { character: "ニ", english: "ni", audio: soundNI };
  const nuKatakana = { character: "ヌ", english: "nu", audio: soundNU };
  const neKatakana = { character: "ネ", english: "ne", audio: soundNE };
  const noKatakana = { character: "ノ", english: "no", audio: soundNO };

  const haKatakana = { character: "ハ", english: "ha", audio: soundHA };
  const hiKatakana = { character: "ヒ", english: "hi", audio: soundHI };
  const fuKatakana = { character: "フ", english: "fu", audio: soundFU };
  const heKatakana = { character: "ヘ", english: "he", audio: soundHE };
  const hoKatakana = { character: "ホ", english: "ho", audio: soundHO };

  const maKatakana = { character: "マ", english: "ma", audio: soundMA };
  const miKatakana = { character: "ミ", english: "mi", audio: soundMI };
  const muKatakana = { character: "ム", english: "mu", audio: soundMU };
  const meKatakana = { character: "メ", english: "me", audio: soundME };
  const moKatakana = { character: "モ", english: "mo", audio: soundMO };

  const yaKatakana = { character: "ヤ", english: "ya", audio: soundYA };
  const yiKatakana = { character: "　", english: "", audio: sound };
  const yuKatakana = { character: "ユ", english: "yu", audio: soundYU };
  const yeKatakana = { character: "　", english: "", audio: sound };
  const yoKatakana = { character: "ヨ", english: "yo", audio: soundYO };

  const raKatakana = { character: "ラ", english: "ra", audio: soundRA };
  const riKatakana = { character: "リ", english: "ri", audio: soundRI };
  const ruKatakana = { character: "ル", english: "ru", audio: soundRU };
  const reKatakana = { character: "レ", english: "re", audio: soundRE };
  const roKatakana = { character: "ロ", english: "ro", audio: soundRO };

  const waKatakana = { character: "ワ", english: "wa", audio: soundWA };
  const wiKatakana = { character: "　", english: " ", audio: sound };
  const wuKatakana = { character: "ウ", english: "wu", audio: soundWU };
  const weKatakana = { character: "　", english: " ", audio: sound };
  const woKatakana = { character: "ヲ", english: "wo", audio: soundWO };

  const nKatakana = { character: "ン", english: "n", audio: soundNN };

  const baseCharKatakana = [
    aKatakana,
    iKatakana,
    uKatakana,
    eKatakana,
    oKatakana,
  ];
  const kCharKatakana = [
    kaKatakana,
    kiKatakana,
    kuKatakana,
    keKatakana,
    koKatakana,
  ];
  const sCharKatakana = [
    saKatakana,
    shiKatakana,
    suKatakana,
    seKatakana,
    soKatakana,
  ];
  const tCharKatakana = [
    taKatakana,
    chiKatakana,
    tsuKatakana,
    teKatakana,
    toKatakana,
  ];
  const nCharKatakana = [
    naKatakana,
    niKatakana,
    nuKatakana,
    neKatakana,
    noKatakana,
  ];
  const hCharKatakana = [
    haKatakana,
    hiKatakana,
    fuKatakana,
    heKatakana,
    hoKatakana,
  ];
  const mCharKatakana = [
    maKatakana,
    miKatakana,
    muKatakana,
    meKatakana,
    moKatakana,
  ];
  const yCharKatakana = [
    yaKatakana,
    yiKatakana,
    yuKatakana,
    yeKatakana,
    yoKatakana,
  ];
  const rCharKatakana = [
    raKatakana,
    riKatakana,
    ruKatakana,
    reKatakana,
    roKatakana,
  ];
  const wCharKatakana = [
    waKatakana,
    wiKatakana,
    wuKatakana,
    weKatakana,
    woKatakana,
  ];
  const nnCharKatakana = [nKatakana];

  const Katakana = [
    baseCharKatakana,
    kCharKatakana,
    sCharKatakana,
    tCharKatakana,
    nCharKatakana,
    hCharKatakana,
    mCharKatakana,
    yCharKatakana,
    rCharKatakana,
    wCharKatakana,
    nnCharKatakana,
  ];

  const hiraganaBtnMap = (
    <div>
      {Hiragana.map((value, key) => (
        <div key={key}>
          {value.map((value, key) => (
            <Button
              key={key}
              variant="outlined"
              size="large"
              sx={{ margin: 0.5 }}
              onClick={() => {
                setSelectedValue(value.character);
                setSelectedValueDetails(value.english);
                setSelectedAudioFile(value.audio);
              }}
              value={value.character}
            >
              {value.character}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );

  const KatakanaBtnMap = (
    <div>
      {Katakana.map((value, key) => (
        <div key={key}>
          {value.map((value, key) => (
            <Button
              key={key}
              variant="outlined"
              size="large"
              sx={{ margin: 0.5 }}
              onClick={() => {
                setSelectedValue(value.character);
                setSelectedValueDetails(value.english);
                setSelectedAudioFile(value.audio);
              }}
              value={value.character}
            >
              {value.character}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );

  const audioBtn = async () => {
    const audio = new Audio(selectedAudioFile);
    audio.play();
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Grid sx={{ flexGrow: 1 }} container spacing={1} justifyContent="center">
        <Grid item xs={12} md={12} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid container justifyContent="center">
            <Card
              sx={{
                minWidth: 250,
                minHeight: 150,
                margin: 5,
                height: 700,
                background: "#051622",
                border: 1,
                borderColor: "#1BA098",
                overflow: "auto",
              }}
            >
              <CardContent sx={{ marginTop: 2, color: "#1BA098" }}>
                <Typography gutterBottom variant="h4">
                  Hiragana Characters
                </Typography>

                {hiraganaBtnMap}
              </CardContent>
            </Card>

            <Card
              sx={{
                minWidth: 250,
                minHeight: 150,
                margin: 5,
                height: 700,
                background: "#051622",
                border: 1,
                borderColor: "#1BA098",
                overflow: "auto",
              }}
            >
              <CardContent sx={{ marginTop: 2, color: "#1BA098" }}>
                <Typography gutterBottom variant="h4">
                  Katakana Characters
                </Typography>
                {KatakanaBtnMap}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        sx={{ borderColor: " #1BA098", opacity: 1 }}
        disableEnforceFocus
        open={selectedValue !== null && selectedValue !== "　"} //blank character is using Japanese keyboard do not change to the english version as it breaks
        closeAfterTransition
        onClose={() => setSelectedValue(null)}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={selectedValue !== null}>
          <Box sx={style}>
            <Typography
              gutterBottom
              id="modal-modal-title"
              variant="h4"
              sx={{ mt: 1 }}
            >
              {selectedValue}
            </Typography>

            <Button
              sx={{ marginBottom: 2 }}
              variant="outlined"
              onClick={() => {
                audioBtn();
              }}
            >
              Listen
            </Button>
            <Divider sx={{ borderColor: "#1BA098" }} variant="middle" />
            <Typography variant="h5">english reading:</Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedValueDetails}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
export default Scripts;
