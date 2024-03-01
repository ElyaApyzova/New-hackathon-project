import React from "react";
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

const TreeCards = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        component="div"
        textAlign="center"
        sx={{
          fontSize: "48px",
          color: "#2E2E2E",
          marginTop: "60px",
          marginBottom: "50px",
        }}
      >
        Деревья
      </Typography>
      <Grid container rowSpacing={8} columnSpacing={2} marginBottom={8}>
        {data_tree.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 275, p: "14px", borderRadius: "6px" }}>
              <CardActionArea>
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
                    cursor: "pointer",
                    backgroundColor: "#A0D206",
                    color: "#FFFFFF",
                    p: "10px 40px",
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
      </Grid>
    </Container>
  );
};

export default TreeCards;
