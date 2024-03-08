import React from "react";
import { Container, Grid, ButtonGroup, Button, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Calculator = () => {
    return (
      <Container sx={{ marginBottom: "100px"}}>
        <Grid container spacing={4}>
         <Grid item xs={4} sx={{ backgroundColor: "#FFFFFF", borderColor: "#C4C4C4", borderRadius: "5px"}}>
         <ButtonGroup
         edge="start"
        orientation="vertical"
        aria-label="Vertical button group">
        <Button>
        <KeyboardArrowRightIcon />
        <Typography>Галерея наших работ</Typography>
        </Button>
        <Button>
        <KeyboardArrowRightIcon />
        <Typography>Наши контакты</Typography>   
        </Button>
        <Button>
        <KeyboardArrowRightIcon />
        <Typography>Отзывы</Typography>  
        </Button>
        <Button variant="contained">
        <KeyboardArrowRightIcon />
        <Typography>Калькулятор</Typography>
        </Button>
      </ButtonGroup>
        
         </Grid>
         <Grid item xs={6} sx={{ backgroundColor: "#FFFFFF", borderColor: "#C4C4C4", borderRadius: "5px"}}>
         </Grid>
        </Grid>
      </Container>
    )
}

export default Calculator;