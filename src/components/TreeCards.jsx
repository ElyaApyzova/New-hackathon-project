import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button} from '@mui/material';
import data_tree from "../assets/data";
import Item from "./Item/Item";

const TreeCards = () => {

  return (
    <Container>
      <Typography variant="h1" component='div' textAlign='center'  sx={{ fontSize: '48px', color: '#2E2E2E', marginTop: '100px', marginBottom: '50px' }}>Деревья</Typography>
        <Grid container rowSpacing={2} columnSpacing={2} marginTop={4}>
          <Grid item xs={3}>
          <Card sx={{ maxWidth: 275 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions alignItems="center">
        <Button  sx={{ cursor: 'pointer', backgroundColor: "#A0D206", color: 'FFFFFF' }}>
        Купить
        </Button>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
    </Container>
  );
}

export default TreeCards   
    
    
    
    
   

