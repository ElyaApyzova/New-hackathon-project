import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import main from "../../assets/main.png";
import { useNavigate } from "react-router-dom";


export default function Main() {
const navigate = useNavigate()

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "50px",
        marginTop: "30px",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Grid sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Создайте свое “Семейное древо” вместе с нами.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "30px" }} component="p">
            Сохраним и приумножим наши леса
          </Typography>
        </Grid>
        <Button
          sx={{
            background: "#A0D206",
            width: "max-content",
            padding: 2,
            color: "white",
            fontWeight: 600,
          }}
          onClick={() => navigate("/create")}
        >
          Создать мое дерево
        </Button>
      </Grid>
      <Grid>
        <img style={{ width: 1100 }} src={main} />
      </Grid>
    </Container>
  );
}
