import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery,  useScrollTrigger, Slide, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { makeStyles, useTheme } from '@mui/material/styles';
import { BrowserRouter, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import TreeIcon from '@mui/icons-material/Tree';
import PersonIcon from '@mui/icons-material/Person';
import MemoryIcon from '@mui/icons-material/Memory';
import FamilyIcon from '@mui/icons-material/Family';

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
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Семейный сад
                        </Typography>
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
                                            <TreeIcon />
                                        </ListItemIcon>
                                        Деревья
                                    </MenuItem>
                                    <MenuItem component={Link} to="/About" onClick={handleClose}>
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
                                            <FamilyIcon />
                                        </ListItemIcon>
                                        Семейное древо
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Header;


