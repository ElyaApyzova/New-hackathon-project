import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Stack, MenuItem, IconButton } from '@mui/material'
import { Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../../assets/Logo.png';



const Header = () => {
  

  return (
    <AppBar position='static' sx={{ 
        background: '#A0D206',  
        color:'#000000',}}>
       <Toolbar>
        <img src={Logo}  edge='start' aria-label="logo" sx={{ width: '85px', height: '66px'}}  />
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: '#0E0E0E'}}>Семейный сад</Typography>
        <Stack direction='row' spacing={4} sx={{  fontSize: '18px'}}>
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
        <IconButton>
        <LanguageIcon />
        <Typography sx={{ fontSize: '14px'}}>Русский</Typography>
        </IconButton>
       </Toolbar>
    </AppBar>
  );
};

export default Header;



/*import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery,  useScrollTrigger, Slide, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import PersonIcon from '@mui/icons-material/Person';
import MemoryIcon from '@mui/icons-material/Memory';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

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
                
                        {isMobile && (
                            <>
                                <IconButton
                                    className={classes.menuButton}
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchor}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem component={Link} to="/" onClick={handleClose}>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        Главное
                                    </MenuItem>
                                    <MenuItem component={Link} to="/Trees" onClick={handleClose}>
                                        <ListItemIcon>
                                        <NaturePeopleIcon />
                                        </ListItemIcon>
                                        Деревья
                                    </MenuItem>
                                    <MenuItem component={Link} to="/About us" onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        О нас
                                    </MenuItem>
                                    <MenuItem component={Link} to="/Memories" onClick={handleClose}>
                                        <ListItemIcon>
                                            <MemoryIcon />
                                        </ListItemIcon>
                                        Воспоминания
                                    </MenuItem>
                                    <MenuItem component={Link} to="/FamilyTree" onClick={handleClose}>
                                        <ListItemIcon>
                                            <FamilyRestroomIcon/>
                                        </ListItemIcon>
                                        Семейное древо
                                    </MenuItem>
                                </Menu>
                            </>
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


