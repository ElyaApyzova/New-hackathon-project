import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import rectangle from '../../assets/Rectangle.png';
import { Container } from '@mui/material';

const MyComponent = () => {
  return (
    <Container sx={{paddingLeft:'70px'}}>
    <Typography variant="h1" component='div' textAlign='center'  sx={{ fontSize: '40px', color: '#2E2E2E', marginTop: '160px', marginBottom: '80px' }}>Какое дерево может стать семейным?</Typography>

    <Grid  container spacing={4}  >
      <Grid sx={{boxShadow:'none', borderColor:'#fff', marginLeft:'30px'}}>
        <Paper sx={{ width: '571px', height: '356px'}} >
          
        <img src={rectangle}  edge='start'  sx={{ width: '571px', height: '356px'}}      />
        </Paper>
      </Grid>
      <Grid  sx={{marginLeft:'33px'}}>
        <Paper  sx={{boxShadow:'none', borderColor:'#fff'}} >
          {/* Ваш блок с текстом */}
          <Typography sx={{fontSize:'18px', fontWeight:'600',}} >
          Выбирая дерево, важно учитывать многие факторы: <br />
          продолжительность жизни, размер, диаметр и форма <br />
           кроны, жизнестойкость, толщина ствола. Давайте <br />
            рассмотрим каждый параметр подробнее:
            <br />
            <br />
            1. Расчетная продолжительность жизни. Вековые <br />
             деревья живут более 200 лет. К ним относятся <br /> 
             черешчатый дуб, вяз, сосна, ясень. Долгоживущие (от <br />
             100 до 150 лет) – это орех маньчжурский, ель, <br /> 
             амурский бархат, тис, липа. Недолгоживущие (до 100 лет) <br />
             – яблоня, груша, береза, клен, черемуха, тополь.
          </Typography>
        </Paper>
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
    </Grid>
    </Container>
  );
}

export default MyComponent;
