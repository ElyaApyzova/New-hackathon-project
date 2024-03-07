import React from 'react';
import {  Link as RouterLink  } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import receivers from '../../assets/receiverpng.png';
import printer from '../../assets/printer.png';
import instagram from '../../assets/instagram.png';
import { AppBar, Container, Grid, Link, Toolbar, Typography, useTheme, Stack } from '@mui/material';




const Footer = () => {
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{ 
            marginTop: '15px ',
            paddingTop: '50px',
            paddingBottom:'50px',
            background: '#000000',  
            color:'#FFFFFF',}}>
        <Container  maxWidth="xl">
          <Toolbar>
            <Grid container spacing={3}>
            
              <Grid item xs={12} sm={4}>
              <Stack direction='row' spacing={2}  marginRight={12}   sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex', alignItems: "center" }}}>
                <img src={Logo}  edge='start'  aria-label="logo" sx={{ width: '85px', height: '66px'}} />
                
                <Typography variant='h5' component='div'  sx={{ flexGrow: 1, color: '#fff'}}>Семейный сад</Typography>
                </Stack>
              </Grid>
  
             
              <Grid item xs={12} sm={4}>
              <Stack spacing={2} sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}>
                <Link href="#" color="inherit" variant="body2" sx={{ textDecoration: 'none',    }}>
                Деревья
                </Link>
                
                <Link component={RouterLink}  to="/About us"  color="inherit" variant="body2"sx={{ marginTop:'-10px', textDecoration: 'none',    }}>
                О нас
                </Link>
                
                <Link component={RouterLink}  to="/Memories" color="inherit" variant="body2"sx={{ marginTop:'-10px',  textDecoration: 'none',    }}>
                Воспоминанания
                </Link>
               
                <Link component={RouterLink}  to="/Family tree" color="inherit" variant="body2"sx={{ marginTop:'-10px', textDecoration: 'none',    }}>
                Семейное древо
                </Link>
                </Stack>
              </Grid>
  
              {/* Третий столбец */}
              <Grid item xs={12} sm={4}>
              <Stack spacing={2} sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}> 

                <Stack direction='row' spacing={1.2}  marginRight={12}   sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}>
                   <img src={receivers}  edge='start'  aria-label="logo" sx={{ width: '17px', height: '16px'}}      />
                   <Link href="#" color="inherit" variant="body2"sx={{  marginTop:'-10px', textDecoration: 'none',    }}>
                
                   +996700123456
                  </Link>
                </Stack>
                
                <Stack direction='row' spacing={1.2}  marginRight={12}   sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}>
                   <img src={printer}  edge='start'  aria-label="logo" sx={{ width: '17px', height: '16px'}}      />
                   <Link href="#" color="inherit" variant="body2"sx={{  marginTop:'-10px', textDecoration: 'none',    }}>
                
                   @semeinyi sad
                  </Link>
                  </Stack>
                

                <Stack direction='row' spacing={1.2}  marginRight={12}   sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}>
                   <img src={instagram}  edge='start'  aria-label="logo" sx={{ width: '17px', height: '16px'}}      />
                   <Link href="#" color="inherit" variant="body2"sx={{  marginTop:'-10px', textDecoration: 'none',    }}>
                
                   semeinyi sad
                  </Link>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Footer;