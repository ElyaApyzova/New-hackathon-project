import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import rectangle from '../../assets/Rectangle.png';
import { Container } from '@mui/material';

const MyComponent = () => {
  return (
    <Container>
    <Typography variant="h1" component='div' textAlign='center'  sx={{ fontSize: '48px', color: '#2E2E2E', marginTop: '60px', marginBottom: '50px' }}>Какое дерево может стать семейным?</Typography>

    <Grid container spacing={4} sx={{height:'80%', margin:'auto'}}>
      <Grid item xs={5} sx={{boxShadow:'none', borderColor:'#fff'}}>
        <Paper>
          
        <img src={rectangle}  edge='start'  sx={{ width: '571px', height: '376px'}}      />
        </Paper>
      </Grid>
      <Grid item xs={6}  sx={{marginLeft:'20px'}}>
        <Paper  sx={{boxShadow:'none', borderColor:'#fff'}} >
          {/* Ваш блок с текстом */}
          <Typography sx={{fontSize:'25px'}} >
          Выбирая дерево, важно учитывать многие факторы: <br />
          продолжительность жизни, размер, диаметр и форма <br />
           кроны, жизнестойкость, толщина ствола. Давайте <br />
            рассмотрим каждый параметр подробнее:
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </Container>
  );
}

export default MyComponent;
