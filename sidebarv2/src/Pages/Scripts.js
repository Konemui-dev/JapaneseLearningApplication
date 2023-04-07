import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import  {useState}  from 'react';

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



  const basechar = ['あ','い','う','え','お']
  const ka = ['か','き','く','け','こ']
  const sa = ['さ','し','す','せ','そ']
  const ta = ['た','ち','つ','て','と']
  const na = ['な','に','ぬ','ね','の']
  const ha = ['は','ひ','ふ','へ','ほ']
  const ma = ['ま','み','む','め','も']
  const ya = ['や','　','ゆ','　','よ']
  const ra = ['ら','り','る','れ','ろ']
  const wa = ['わ','　','　','　','を']
  const n = ['ん']

   //const basechar = {a:'あ',i:'い',u:'う',e:'え',o:'お'}
  // const k = {ka:'か',ki:'き',ku:'く',ke:'け',ko:'こ'}
  // const sa = {sa:'さ',shi:'し',su:'す',se:'せ',so:'そ'}
  // const ta = {ta:'た',chi:'ち',tsu:'つ',te:'て',to:'と'}
  // const na = {na:'な',ni:'に',nu:'ぬ',ne:'ね',no:'の'}
  // const ha = {ha:'は',hi:'ひ',fu:'ふ',he:'へ',ho:'ほ'}
  // const ma = {ma:'ま',mi:'み',mu:'む',me:'め',mo:'も'}
  // const ya = {ya:'や',yu:'ゆ',yo:'よ'}
  // const ra = {ra:'ら',ri:'り',ru:'る',re:'れ',ro:'ろ'}
  // const wa = {wa:'わ',wo:'を'}
  // const n = {n:'ん'}
   //const hiragana = [basechar,sa,ta,na,ha,ma,ya,ra,wa,n]


 









function Scripts() {
  const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const testbuttons = <div>
   {
     basechar.map((value,index)=> <Button variant="outlined" size="large" value={value}>{value}</Button>)
   }
   <br/>
   {
     ka.map((value,index)=> <Button  variant="outlined" size="small" value={value}>{value}</Button>)
   }
      <br/>
   {
    sa.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
         <br/>
   {
    ta.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
         <br/>
   {
    na.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
         <br/>
   {
    ha.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
         <br/>
   {
    ma.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
         <br/>
   {
    ya.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
         <br/>
   {
    ra.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
         <br/>
   {
    wa.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
         <br/>
   {
    n.map((value) => <Button  variant="outlined"   value={value}>{value}</Button>)
   }
 </div>

    return(
      
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Scripts
        </Typography>
       


          {testbuttons}

        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">

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