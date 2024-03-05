import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import rectangle from '../../assets/Rectangle.png';
import { Container } from '@mui/material';

const MyComponent = () => {
  return (
    <Container>
    <Typography variant="h1" component='div' textAlign='center'  sx={{ fontSize: '40px', fontWeight: "600", color: '#2E2E2E', marginTop: '150px', marginBottom: '100px' }}>Какое дерево может стать семейным?</Typography>

    <Grid  container spacing={4}>
      <Grid item xs={6}sx={{boxShadow:'none', borderColor:'#fff', }}>
        <Paper sx={{ width: '571px', height: '356px', borderRadius: "10px"}} >
          
        <img src={rectangle}  edge='start'  sx={{ width: '571px', height: '356px', borderRadius: "10px"}}  alt='growTree' />
        </Paper>
      </Grid>
       <Grid item xs={6}>
        <Paper  sx={{boxShadow:'none', borderColor:'#fff'}} >
          <Typography component='div' sx={{fontSize:'20px', fontWeight:'600', marginBottom: "20px"}}>
          Выбирая дерево, важно учитывать многие факторы: 
          продолжительность жизни, размер, диаметр и форма 
           кроны, жизнестойкость, толщина ствола. Давайте 
            рассмотрим каждый параметр подробнее:
            </Typography>
            <Typography component='div' sx={{fontSize:'18px', fontWeight:'500'}} >
            <span style={{ fontWeight:'600' }}>1.</span> <span style={{ fontWeight:'600' }}>Расчетная продолжительность жизни.</span> Вековые деревья живут более <span style={{ fontWeight:'600' }}>200 лет</span>. К ним относятся  
             черешчатый дуб, вяз, сосна, ясень. Долгоживущие <span style={{ fontWeight:'600' }}>(от 
             100 до 150 лет)</span> – это орех маньчжурский, ель,  
             амурский бархат, тис, липа. Недолгоживущие <span style={{ fontWeight:'600' }}>(до 100 лет)</span> 
             – яблоня, груша, береза, клен, черемуха, тополь.
          </Typography>
        </Paper>
      </Grid>
      </Grid>
      <Grid container  sx={{marginTop:'70px', marginBottom:'50px'}}>
        <Paper  sx={{boxShadow:'none', borderColor:'#fff'}}>
        <Grid item xs={12}>
          <Typography component='div' sx={{fontSize:'18px', fontWeight:'500', marginBottom: "20px"}} >
          <span style={{ fontWeight:'600' }}>2</span>. <span style={{ fontWeight:'600' }}>Размер или максимальная высота.</span> В этом вопросе думайте на перспективу: небольшой саженец может вырасти в 
           могучее трехметровое дерево. Помните, с ростом растения будет меняться ландшафтная картина участка.</Typography>
           </Grid>
           <Grid item xs={12}>
           <Typography component='div' sx={{fontSize:'18px', fontWeight:'500', marginBottom: "20px"}} >
           <span style={{ fontWeight:'600' }}>3</span>. <span style={{ fontWeight:'600' }}>Структура кроны</span>. Обычно в качестве родового дерева выбирают ветвистые, пышные сорта. Если у вас небольшой  
           приусадебный участок, присмотритесь к более компактным деревьям (остролистный клен, колоновидная яблоня, декоративная береза плакучей формы, 
           саженцы магнолии.)
           </Typography>
           </Grid>
           <Grid item xs={12}> 
           <Typography component='div' sx={{fontSize:'18px', fontWeight:'500', marginBottom: "20px"}}>
           <span style={{ fontWeight:'600' }}>4</span>. <span style={{ fontWeight:'600' }}>Жизнестойкость.</span> Этот параметр тесно связан с продолжительностью жизни. Обычно вековые деревья более 
            выносливы, адаптированы к меняющимся климатическим условиям, неприхотливы. Но вместе с устойчивостью у 
             дерева может проявиться и его агрессивная сторона. То есть растение может подавлять соседей по участку в борьбе 
            за солнце, воду, питательные вещества.
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography component='div' sx={{fontSize:'18px', fontWeight:'500', }}> 
            <span style={{ fontWeight:'600' }}>5</span>. <span style={{ fontWeight:'600' }}>Толщина ствола и размер листвы.</span> Эта характеристика определяет визуальный эффект. Растение должно хорошо 
             вписаться в общую концепцию сада и одновременно с этим притягивать к себе внимание.
          </Typography>
          </Grid>
        </Paper>
      </Grid>
    
    </Container>
  );
}

export default MyComponent;
