import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAppBar from "./MyAppBar/MyAppBar";
import TreeCards from "./TreeCards";
import MyComponent from "./MyAppBar/MyComponent";
import Main from "./MainPage/Main";
import Info from "./MyAppBar/Info";
import { AppBar, Grid, Paper, Typography } from "@mui/material";
import StateCard from "./states/StateCard";

import NewsAdvertisement from "./NewsAdvertisement/NewsAdvertisement";
import EcoBlog from "./EcoBlog/EcoBlog";

import NewsAdvertisement  from "./NewsAdvertisement/NewsAdvertisement"





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
        <MyComponent />
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
        <NewsAdvertisement />
      </div>

        <div>
        <StateCard/>
      </div>
      <div>

        <NewsAdvertisement />
      </div>


        <Info/>
      </div>
      <div>
      <AppBar position='static' sx={{ background: '#A0D206', color: '#FFFFFF', marginTop:'' }}>
      <Typography variant="h1" component='div' textAlign='start'  sx={{ fontSize: '40px',  margin: '10px 0px 10px 150px',  }}>Новости и обьявления</Typography>
        </AppBar>
  



    </div>
  );
};

export default Home;
