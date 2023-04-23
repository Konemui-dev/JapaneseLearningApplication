import { Grid } from "@mui/material";
import SearchQueries from './SearchQueries';
import { styled } from '@mui/material/styles';
import * as React from 'react';
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

function SearchPage(){
    return(
    <Grid component="main" sx={{flexGrow: 1, p:3}}>        
    <DrawerHeader /> 
    <SearchQueries/>
  </Grid>
    );
}
export default SearchPage;