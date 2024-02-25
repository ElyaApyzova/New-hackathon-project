import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Box, Stack, IconButton, Menu, MenuItem, ListItemIcon  } from '@mui/material'
import { Typography } from "@mui/material";
import Language from '../../assets/language.png';
import Logo from '../../assets/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import PersonIcon from '@mui/icons-material/Person';
import MemoryIcon from '@mui/icons-material/Memory';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';



const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
   

  return (
    <AppBar position='static' sx={{ 
        background: '#A0D206',  
        color:'#000000',}}>
        <Container maxWidth="xl">
       <Toolbar>
        <img src={Logo}  edge='start' aria-label="logo" sx={{ width: '85px', height: '66px'}}  />
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: '#0E0E0E'}}>Семейный сад</Typography>
        
        <Box edge='end' sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
                 <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                                    <MenuItem  to="/" >
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        Главное
                                    </MenuItem>
                                    <MenuItem  to="/Trees" >
                                        <ListItemIcon>
                                        <NaturePeopleIcon />
                                        </ListItemIcon>
                                        Деревья
                                    </MenuItem>
                                    <MenuItem  to="/About us" >
                                        <ListItemIcon>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        О нас
                                    </MenuItem>
                                    <MenuItem  to="/Memories" >
                                        <ListItemIcon>
                                            <MemoryIcon />
                                        </ListItemIcon>
                                        Воспоминания
                                    </MenuItem>
                                    <MenuItem  to="/FamilyTree" >
                                        <ListItemIcon>
                                            <FamilyRestroomIcon/>
                                        </ListItemIcon>
                                        Семейное древо
                                    </MenuItem>
                                </Menu>
          </Box>
          
        <Stack direction='row' spacing={4} edge='center' sx={{  fontSize: '18px', display: { xs: 'none', md: 'flex' }}}>
        <MenuItem  to="/">Главное
        </MenuItem>
        <MenuItem  to="/Tree">Деревья 
        </MenuItem>
        <MenuItem  to="/About us">О нас
        </MenuItem>
        <MenuItem  to="/Memories">Воспоминания
        </MenuItem>
        <MenuItem  to="/Family tree">Семейное древо
        </MenuItem>     
        </Stack>
        <Stack direction='row' spacing={1}>
        <img src={Language} edge='end' aria-label="language" />
        <Typography sx={{ fontSize: '14px'}}>Русский</Typography>
        </Stack>
       </Toolbar>
       </Container>
    </AppBar>
  );
};

export default Header;



/*import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery,  useScrollTrigger, Slide, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
            <BrowserRouter>
                
                        
                        )}
                    </Toolbar>
                </AppBar>
                <Switch>
            <Route exact path="/" component={Главная} />
            <Route exact path="/Trees" component={Деревья} />
            <Route exact path="/About us" component={О нас} />
            <Route exact path="/Memories" component={Воспоминания} />
            <Route exact path="/FamilyTree" component={Семейное древо} />
          </Switch>
                </BrowserRouter>
            </HideOnScroll>
        </div>
    );
};

export default Header;*/


