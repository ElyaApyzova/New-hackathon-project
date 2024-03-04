import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import rectangle from '../../assets/Rectangle.png';
import { Container } from '@mui/material';

const MyComponent = () => {
  return (
    <Container sx={{paddingLeft:'70px'}}>
    <Typography variant="h1" component='div' textAlign='center'  sx={{ fontSize: '40px', fontWeight: "600", color: '#2E2E2E', marginTop: '150px', marginBottom: '100px' }}>Какое дерево может стать семейным?</Typography>

    <Grid  container spacing={4}  >
      <Grid item xs={6}sx={{boxShadow:'none', borderColor:'#fff', }}>
        <Paper sx={{ width: '571px', height: '356px', borderRadius: "10px"}} >
          
        <img src={rectangle}  edge='start'  sx={{ width: '571px', height: '356px', borderRadius: "10px"}}  alt='growTree' />
        </Paper>
      </Grid>
       <Grid item xs={6}>
        <Paper  sx={{boxShadow:'none', borderColor:'#fff'}} >
          <Typography sx={{fontSize:'18px', fontWeight:'500', marginBottom: "20px"}} >
          Выбирая дерево, важно учитывать многие факторы: 
          продолжительность жизни, размер, диаметр и форма 
           кроны, жизнестойкость, толщина ствола. Давайте 
            рассмотрим каждый параметр подробнее:
            </Typography>
            <Typography sx={{fontSize:'18px', fontWeight:'500'}} >
            1. Расчетная продолжительность жизни. Вековые 
             деревья живут более 200 лет. К ним относятся  
             черешчатый дуб, вяз, сосна, ясень. Долгоживущие (от 
             100 до 150 лет) – это орех маньчжурский, ель,  
             амурский бархат, тис, липа. Недолгоживущие (до 100 лет) 
             – яблоня, груша, береза, клен, черемуха, тополь.
          </Typography>
        </Paper>
      </Grid>
      </Grid>
      <Grid  sx={{marginTop:'50px', marginBottom:'50px' ,  marginLeft:'30px'}}>
        <Paper  sx={{boxShadow:'none', borderColor:'#fff'}} >
          {/* Ваш блок с текстом */}
          <Typography sx={{fontSize:'18px', fontWeight:'600', }} >
          2.Размер или максимальная высота. В этом вопросе думайте на перспективу: небольшой саженец может вырасти в <br />
           могучее трехметровое дерево. Помните, с ростом растения будет меняться ландшафтная картина участка. <br />
           
           3.Структура кроны. Обычно в качестве родового дерева выбирают ветвистые, пышные сорта. Если у вас небольшой <br /> 
           приусадебный участок, присмотритесь к более компактным деревьям (остролистный клен, колоновидная яблоня, декоративная береза плакучей формы, <br />
           саженцы магнолии.) <br />
           4.Жизнестойкость. Этот параметр тесно связан с продолжительностью жизни. Обычно вековые деревья более <br />
            выносливы, адаптированы к меняющимся климатическим условиям, неприхотливы. Но вместе с устойчивостью у <br />
             дерева может проявиться и его агрессивная сторона. То есть растение может подавлять соседей по участку в борьбе <br />
            за солнце, воду, питательные вещества. <br />
            5.Толщина ствола и размер листвы. Эта характеристика определяет визуальный эффект. Растение должно хорошо <br />
             вписаться в общую концепцию сада и одновременно с этим притягивать к себе внимание.
          </Typography>
        </Paper>
      </Grid>
    
    </Container>
  );
}

export default MyComponent;
