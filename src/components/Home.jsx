import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAppBar from "./MyAppBar/MyAppBar";
import Image from "../assets/main.png";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <div>
      <div>
        <MyAppBar />
      </div>
      <Grid
        sx={{
          margin: "auto",
          width: 1200,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid className="flex flex-col">
          <h1>Создайте свое “Семейное древо” вместе с нами.</h1>
          <p>Сохраним и приумножим наши леса</p>
          <button className="bg-green-600">Создать мое дерево</button>
        </Grid>
        <Grid>
          <img src={Image} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
