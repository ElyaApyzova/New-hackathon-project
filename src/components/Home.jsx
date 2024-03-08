import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAppBar from "./MyAppBar/MyAppBar";
import TreeCards from "./TreeCards";
import Main from "./MainPage/Main";
import Info from "./MyAppBar/Info";
import { AppBar, Grid, Paper, Typography } from "@mui/material";
import StateCard from "./states/StateCard";

import NewsAdvertisement from "./NewsAdvertisement/NewsAdvertisement";
import EcoBlog from "./EcoBlog/EcoBlog";
import FamilyTree from "./MyAppBar/FamilyTree";
import Calculator from "./Calculator/Calculator";




const Home = () => {
  return (
    <div>
      <div>
        <MyAppBar />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <FamilyTree />
      </div>
      <div>
        <TreeCards />
      </div>

      <div>
        <EcoBlog />
      </div>
      <div>
        <StateCard/>
      </div>
      <div>
        <Info />
      </div>
      <div>
        <NewsAdvertisement />
      </div>
       <div>
        <Calculator />
       </div>
    </div>
  );
};

export default Home;
