import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery, Button, useScrollTrigger, Slide, Menu, MenuItem, ListItemIcon } from '@mui/material';

import { makeStyles, useTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },

    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
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
    const handlemenu = (event) => {
        setAnchor(event.currentTarget)
    };

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
               <BrowserRouter>
               <AppBar>
                <Toolbar>
                    <img src="" alt="Logo" />
                    <Typography
                    variant="h5"
                    component="p"
                    color="textSecondary"
                    className={classes.title}>
                     Family Tree
                    </Typography>
                    {isMobile ? (
                        <>
                        <IconButton
                        color="textPrimary"
                        className={classes.menuButton}
                        edge="start"
                        aria-label="menu"
                        onClick={handleMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu>
                            
                        </Menu>
                        </>
                    )}
                </Toolbar>
               </AppBar>
               </BrowserRouter> 
            </HideOnScroll>
        </div>
    )

}

export default Header;


