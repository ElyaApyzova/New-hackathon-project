import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import eco_data from "../../assets/ecoData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



  const EcoBlog = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? eco_data.length - 4 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eco_data.length);
    };
  return (
    <Container sx={{marginBottom: "100px"}}>
  <Typography
    variant="h1"
    component="div"
    textAlign="center"
    sx={{
      color: "#2E2E2E",
      marginTop: "50px",
      marginBottom: "50px",
      fontSize: "40px",
      fontWeight: "600"
    }}
  >
    Эко блог
  </Typography>
  <Grid container justifyContent="center" rowSpacing={8} columnSpacing={2}>
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div onClick={goToPrev} style={{ cursor: "pointer" }}>
        <ArrowBackIosIcon />
      </div>
      {eco_data.slice(currentIndex, currentIndex + 4).map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 240, p: "10px", borderRadius: "6px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ borderRadius: "6px" }}
              />
              <CardContent sx={{ height: 130, overflow: "hidden" }}>
                <Typography
                  gutterBottom
                  variant="subtitle"
                  component="div"
                  sx={{ color: "#00821E", textAlign: "center", fontWeight: "600" }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      <div onClick={goToNext} style={{ cursor: "pointer" }}>
        <ArrowForwardIosIcon />
      </div>
    </Grid>
  </Grid>
</Container>
  );
};

export default EcoBlog;
