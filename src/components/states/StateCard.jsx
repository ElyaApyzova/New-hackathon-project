import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Container, Button } from "@mui/material";
import man from "../../assets/man.png";
import earth from "../../assets/earth.png";
import trees from "../../assets/trees.png";
import money from "../../assets/money.png";

const items = [
  {
    id: Math.random().toString(),
    img: man,
    count: 102,
    click: false,
    title: "Количество волонтеров",
    text: "Волонтеры — это люди, которые добровольно и безвозмездно трудятся для блага общества или отдельных его представителей.",
  },
  {
    id: Math.random().toString(),
    img: earth,
    count: 145,
    click: false,
    title: "Всего засажено участков",
    text: "Волонтеры — это люди, которые добровольно и безвозмездно трудятся для блага общества или отдельных его представителей.",
  },
  {
    id: Math.random().toString(),
    img: trees,
    count: 102,
    click: false,
    title: "Всего высажено деревьев",
    text: "Волонтеры — это люди, которые добровольно и безвозмездно трудятся для блага общества или отдельных его представителей.",
  },
  {
    id: Math.random().toString(),
    img: money,
    count: 102,
    click: true,
    title: "Собранная сумма",
    text: "Волонтеры — это люди, которые добровольно и безвозмездно трудятся для блага общества или отдельных его представителей.",
  },
];

export default function StateCard() {
  return (
    <Container>
      <Typography sx={{ textAlign: "center", fontSize: 30 }} component="h3">
        Фактически на 13.02.2024
      </Typography>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        {items.map((item) => {
          return (
            <Grid
              sx={{
                width: "250px",
                height: "500px",
                borderRadius: "20px",
                borderColor: "#A0D206",
                borderWidth: 1,
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 5
              }}
            >
              <div
                style={{
                  width: "101%",
                  height: "250px",
                  backgroundColor: item.click ? '#A0D206' : '#F5F6FA',
                  position: "absolute",
                  top: -50,
                  left: -1,
                  borderEndStartRadius: "50%",
                  borderBottomRightRadius: "50%",
                  borderColor: "#A0D206",
                  borderWidth: 1,
                  zIndex: -1
                }}
              ></div>
              <Grid sx={{display: 'flex', flexDirection: 'column',  textAlign: 'center', alignItems: 'center'}}>
                <img src={item.img} alt="" />
                <Typography sx={{fontSize: '46px', fontWeight: 600, color: item.click ? "#fff" : "#A0D206"}}>{item.count}</Typography>
              </Grid>
              <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                gap: 2,
                alignItems: 'center'
              }}>
                <Typography sx={{color: '#A0D206', fontSize: 20, fontWeight: 600}}>{item.title}</Typography>
                <Typography sx={{fontSize: 14}}>{item.text}</Typography>
                <Button
                  sx={{
                    background: "#A0D206",
                    width: "max-content",
                    color: "white",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#00821E" },
                  }}
                >
                  Подробнее
                </Button>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
