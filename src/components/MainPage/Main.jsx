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
        marginTop: "50px",
        marginBottom: "100px"
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Grid sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Создайте свое <span style={{ color: "#00821E"}}>“Семейное древо”</span> вместе с нами.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "30px" }} component="p">
            Сохраним и приумножим наши леса
          </Typography>
        </Grid>
        <Button
          sx={{
            background: "#A0D206",
            width: "220px",
            padding: "14px",
            color: "white",
            borderRadius: "10px",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#00821E" },
          }}
          onClick={() => navigate("/create")}
        >
          Создать мое дерево
        </Button>
      </Grid>
      <Grid>
        <img style={{ width: 1100, borderRadius: "10px" }} src={main} alt="Mainimage" />
      </Grid>
    </Container>
  );
}
