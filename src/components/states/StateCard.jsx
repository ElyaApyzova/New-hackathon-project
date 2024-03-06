import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Container, Button } from "@mui/material";
import items from "../../assets/items";



export default function StateCard() {
  return (
    <Container>
      <Typography sx={{ textAlign: "center", fontSize: 40, marginBottom: "70px", fontWeight: "600" }} component="div">
        Фактически на 13.02.2024
      </Typography>
      <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
        {items.map((item) => {
          return (
            <Grid
              sx={{
                width: "250px",
                height: "490px",
                borderRadius: "20px",
                borderColor: "#A0D206",
                borderWidth: 1,
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 4
              }}
            >
              <div
                style={{
                  width: "101%",
                  height: "250px",
                  backgroundColor: item.click ? '#A0D206' : '#F5F6FA',
                  position: "absolute",
                  top: -60,
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
                <Typography sx={{fontSize: '45px', fontWeight: 600, color: item.click ? "#fff" : "#A0D206"}}>{item.count}</Typography>
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
                    padding: "6px 20px",
                    borderRadius: "10px",
                    color: "white",
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
