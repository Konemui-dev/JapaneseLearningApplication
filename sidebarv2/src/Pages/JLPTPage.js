import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

function JLPT() {
    return (
        <Grid component="main" sx={{flexGrow: 1, p:3}}>        <DrawerHeader />
        <Typography>
         JLPT page
        </Typography>
      </Grid>
    );
  }
  
  export default JLPT;
  