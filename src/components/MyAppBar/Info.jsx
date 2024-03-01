import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import mapp from '../../assets/mapp.png';
import { Container } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";


const Info = () => {
  return (
    <Container>
        <Typography variant="h1" component='div' textAlign='center'  sx={{ fontSize: '40px', color: '#2E2E2E', marginTop: '160px', marginBottom: '50px' }}>Информация о новых посадках в КР</Typography>
    <Grid container spacing={2}  >
      <Grid item xs={12} >
        {/* Первый блок с фото */}
        <Paper sx={{boxShadow:'none' , borderColor:'#fff'}} >
          <img src={mapp} alt="фото" style={{ width: '90%', height: 'auto' }} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={11} sx={{ position: 'relative',  }}>
        {/* Второй блок с тремя ссылками */}
        <Paper sx={{ backgroundColor:'#00BF4D', width:'275px', height:'140px', position: 'absolute', bottom: 0, right: 0 , textAlign:'start' , padding:'20px', }}>
          <Typography sx={{marginTop:'5px',}}>
           <Link    component={RouterLink} to="#" sx={{   textDecoration: 'none', color: '#fff',  }}>Посадка⠀⠀⠀⠀⠀⠀D002003 </Link>
          </Typography>
          <Typography sx={{marginTop:'5px',}}>
           <Link   component={RouterLink} to="#" sx={{  textDecoration: 'none', color: '#fff',  }}>Область⠀⠀⠀⠀⠀⠀Нарын</Link>
          </Typography>
          <Typography sx={{marginTop:'5px',}}>
           <Link component={RouterLink} to="#" sx={{  textDecoration: 'none', color: '#fff',  }}>Лесхоз⠀⠀⠀⠀⠀⠀⠀Фрунзенский</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </Container>
  );
}

export default Info ;
