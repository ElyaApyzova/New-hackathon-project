import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';



const MyAppBar = () => {


  return (
    <AppBar position="static" sx={{backgroundColor:' #fff', boxShadow: 'none'}}>
      <Toolbar>
        <div >
          <div>
            <SearchIcon />
            <InputBase
            placeholder="Поис"
           
            inputProps={{ 'aria-label': 'search' }}
          />
          </div>
        
        </div>
        <Typography variant="body1" color="inherit" component="div">
          <Link href="#" color="inherit">
            Ссылка
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
