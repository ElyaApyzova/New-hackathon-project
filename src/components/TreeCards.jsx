import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import data_tree from "../assets/data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



  const TreeCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data_tree.length - 4 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data_tree.length);
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
      marginBottom: "70px",
      fontSize: '40px',
      fontWeight: "600"
    }}
  >
    Экомагазин
  </Typography>
  <Grid container justifyContent="center" rowSpacing={8} columnSpacing={2}>
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div onClick={goToPrev} style={{ cursor: "pointer" }}>
        <ArrowBackIosIcon sx={{ "&:hover": { color: "#00821E" }}}/>
      </div>
      {data_tree.slice(currentIndex, currentIndex + 4).map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 240, p: "10px", borderRadius: "6px" }}>
            <CardActionArea sx={{ bg: "none" }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ borderRadius: "6px" }}
              />
              <CardContent sx={{ height: 110, overflow: "hidden" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ color: "#00821E", textAlign: "center" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#6D6C6C", textAlign: "center" }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  fontSize: "14px",
                  cursor: "pointer",
                  backgroundColor: "#A0D206",
                  color: "#FFFFFF",
                  p: "6px 25px",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#00821E" },
                }}
              >
                Купить
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <div onClick={goToNext} style={{ cursor: "pointer" }}>
        <ArrowForwardIosIcon  sx={{ "&:hover": { color: "#00821E" }}}/>
      </div>
    </Grid>
  </Grid>
</Container>
  );
};

export default TreeCards;
