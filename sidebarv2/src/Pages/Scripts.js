import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import JishoAPI from "unofficial-jisho-api";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import  {useState, state}  from 'react';

import Paper from "@mui/material/Paper";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};






const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));



  // const basechar = ['あ','い','う','え','お']
  // const ka = ['か','き','く','け','こ']
  // const sa = ['さ','し','す','せ','そ']
  // const ta = ['た','ち','つ','て','と']
  // const na = ['な','に','ぬ','ね','の']
  // const ha = ['は','ひ','ふ','へ','ほ']
  // const ma = ['ま','み','む','め','も']
  // const ya = ['や','ゆ','よ']
  // const ra = ['ら','り','る','れ','ろ']
  // const wa = ['わ','を']
  // const n = ['ん']
  // const hiragana = [basechar,ka,sa,ta,na,ha,ma,ya,ra,wa,n]

  const basechar = {a:'あ',i:'い',u:'う',e:'え',o:'お'}
  const k = {ka:'か',ki:'き',ku:'く',ke:'け',ko:'こ'}
  const sa = {sa:'さ',shi:'し',su:'す',se:'せ',so:'そ'}
  const ta = {ta:'た',chi:'ち',tsu:'つ',te:'て',to:'と'}
  const na = {na:'な',ni:'に',nu:'ぬ',ne:'ね',no:'の'}
  const ha = {ha:'は',hi:'ひ',fu:'ふ',he:'へ',ho:'ほ'}
  const ma = {ma:'ま',mi:'み',mu:'む',me:'め',mo:'も'}
  const ya = {ya:'や',yu:'ゆ',yo:'よ'}
  const ra = {ra:'ら',ri:'り',ru:'る',re:'れ',ro:'ろ'}
  const wa = {wa:'わ',wo:'を'}
  const n = {n:'ん'}
  const hiragana = [basechar,k,sa,ta,na,ha,ma,ya,ra,wa,n]


function Scripts() {
  const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

const test = hiragana.map(({basechar,a}) => ({[basechar]: a}))

const MyComp = () => {
  const [text, setText] = useState('');
  const arr1 = ['one', 'two', 'three']

  const arr2 = ['button one', 'button two', 'button three']

  const mapping = () => {
      arr2.map((arr) => {
          return <p>{arr}</p>
      })
  }
  return (
      <>
          {arr1.map((data, i) =>
              <Button onClick={() => setText(arr2[i])}>
                  {data}
              </Button>
          )}
          <p>{text}</p>
      </>
  );
};

console.log(test);
  state ={
    open: false,
    characterId: null,
    characterData:[
      {id: "a", character: "あ"},
      {id: "i", number: "い"},
      {id: "u", number: "う"},
    ]
  };


    return(
      
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Scripts
        </Typography>
        <Button  value="あ" variant="outlined" onClick={handleOpen}>
          <ruby>
            あ<rp>(</rp><rt style={{fontSize: '15px'}} >a</rt><rp>)</rp>
          </ruby>
        </Button>
        <Button  variant="outlined" onClick={handleOpen}>
          <ruby>
            か<rp>(</rp><rt style={{fontSize: '10px'}} >ka</rt><rp>)</rp>
          </ruby>
        </Button>
        <Button  variant="outlined" onClick={handleOpen}>さ</Button>

        {MyComp}
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {state.characterData}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>


    </Box>
      
    );

}
export default Scripts;