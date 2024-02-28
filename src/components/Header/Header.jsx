import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Container, Toolbar, Box, Stack, IconButton, Menu, MenuItem, ListItemIcon, Link, Typography } from '@mui/material';
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
    const [language, setLanguage] = useState('ru');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLanguageChange = () => {
        if (language === 'ru') {
            setLanguage('kg'); // Change to Kyrgyz
        } else {
            setLanguage('ru'); // Change back to Russian
        }
    };

    return (
        <AppBar position='static' sx={{ background: '#A0D206', color: '#000000' }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <img src={Logo} edge='start' aria-label="logo" sx={{ width: '85px', height: '66px' }} />
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: '#0E0E0E' }}>Семейный сад</Typography>

                    <Stack direction='row' spacing={4} marginRight={12} sx={{ fontSize: '18px', display: { xs: 'none', md: 'flex' } }}>
                        <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>Главное</Link>
                        <Link component={RouterLink} to="/TreeCards" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>Деревья</Link>
                        <Link component={RouterLink} to="/About us" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>О нас</Link>
                        <Link component={RouterLink} to="/Memories" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>Воспоминания</Link>
                        <Link component={RouterLink} to="/Family tree" sx={{ textDecoration: 'none', color: '#0E0E0E' }}>Семейное древо</Link>
                    </Stack>

                    <Stack direction='row' spacing={1} alignItems="center" sx={{ cursor: 'pointer' }} onClick={handleLanguageChange}>
                        <img src={Language} alt={language === 'ru' ? 'Russian language' : 'Kyrgyz language'} />
                        <Typography sx={{ fontSize: '14px' }}>{language === 'ru' ? 'Русский' : 'Кыргызча'}</Typography>
                    </Stack>

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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuItem to="/">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                Главное
                            </MenuItem>
                            <MenuItem to="/TreesCards">
                                <ListItemIcon>
                                    <NaturePeopleIcon />
                                </ListItemIcon>
                                Деревья
                            </MenuItem>
                            <MenuItem to="/About us">
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                О нас
                            </MenuItem>
                            <MenuItem to="/Memories">
                                <ListItemIcon>
                                    <MemoryIcon />
                                </ListItemIcon>
                                Воспоминания
                            </MenuItem>
                            <MenuItem to="/FamilyTree">
                                <ListItemIcon>
                                    <FamilyRestroomIcon />
                                </ListItemIcon>
                                Семейное древо
                            </MenuItem>
                        </Menu>
                    </Box>
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


