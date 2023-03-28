import * as React from 'react';
import { useTheme, ThemeProvider, createTheme,styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from '@mui/material/Link';
import './//Navigation.css'

import SimpleMediaQuery from './Preferences';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',  backgroundColor: "#1BA098"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden', backgroundColor: "#1BA098",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

  }),
}));
// sx={{  color: '#1BA098',  backgroundColor: '#1BA098',
//     borderBlockColor:'#1BA098',
//     border:0,}}
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    
  }),
);


const Pages = ['JLPT', 'Scripts', 'Search', 'Resources', 'Games','Change Theme'];
const Title = Pages[0];

function Navigation() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    //changeTheme ? "darkMode" : "ligtMode";

    return (
      <Box  >
        <AppBar className='AppBar'  position="fixed" open={open} >
          <Toolbar className='AppBar'>
            <IconButton 
              color= "inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
                
              }}
            >
              <MenuIcon className='AppBar'/>
            </IconButton>
            <Typography variant="h6" noWrap component="div" >
              {Title}
            </Typography>
          </Toolbar>
        </AppBar >
        <Drawer className='AppBar' variant="permanent" open={open} >
          <DrawerHeader className='AppBar' sc>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon className='AppBar'/> : <ChevronLeftIcon className='AppBar' />}
            </IconButton>
          </DrawerHeader>
          <Divider className='AppBar' />

          <List  className='AppBar'>
            {Pages.map((text, index) => (
                <Link href={text} key={index}>
              <ListItem   className='AppBar'  key={text} disablePadding sx={{ display: 'block',height:1/8, backgroundColor:'#051622'}}>

                <ListItemButton
                  sx={{
                    
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    height:1,
                    
                  }}
                >
                  <ListItemIcon 
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: '#1BA098',
                      
                    }}
                  >
                    {index % 5 === 1 ? <InboxIcon /> : <MailIcon /> }
                    {index[1] === <AssignmentIcon/> }
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>

              </ListItem>
              </Link>
            ))}
            <ListItem onClick={colorMode.toggleColorMode}  className='AppBar' key="ad" disablePadding sx={{ display: 'block',height:1/8, backgroundColor:'#051622'}}>

                <ListItemButton                 sx={{
                    
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    height:1,
                    
                  }}>
<ListItemIcon 
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: '#1BA098',
                      
                    }}
                  >
                  </ListItemIcon>
<ListItemText  color="inherit" sx={{ ml: 1 , opacity: open ? 1 : 0 }}>
{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
</ListItemText>
                </ListItemButton>

            </ListItem>
          </List>
          <SimpleMediaQuery/>
        </Drawer >                    

      </Box>
    );
  }

  export default Navigation;

  