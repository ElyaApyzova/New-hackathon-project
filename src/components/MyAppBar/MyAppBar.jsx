import React from 'react';
import { AppBar, Toolbar, InputBase, Typography, Link, InputAdornment, Stack } from '@mui/material';
import arrow from '../../assets/arrow.png';
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';



const MyAppBar = () => {


  return (
    <AppBar position="static" sx={{backgroundColor:' #fff', boxShadow: 'none'}}>
      <Toolbar style={{ justifyContent: 'flex-end' }}>
        <div >
          <div>
          
            <InputBase  sx={{borderColor:'#000', borderWidth:'1px' , borderRadius:'25px' , paddingLeft:'7px'}} 
            
            placeholder="Поиск"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: 'black' }} />
              </InputAdornment>
            }
            inputProps={{ 'aria-label': 'search' }}
          />
          </div>
        
        </div>
        <div style={{marginLeft:'50px'}} >
        <Typography variant="body1"  component="div">
        <Stack direction='row' spacing={0}  marginRight={12}   sx={{  fontSize: '18px',  display: { xs: 'none', md: 'flex' }}}>
        <Link component={RouterLink} to="#" sx={{ textDecoration: 'none', color: '#0E0E0E',  }}>Войти</Link>
        <img src={arrow}  edge='start'  aria-label="logo" sx={{ width: '17px', height: '16px'}}      />
        </Stack>
        </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
