import React from "react";
import MyAppBar from "./MyAppBar/MyAppBar";
import TreeCards from "./TreeCards";
import MyComponent from "./MyAppBar/MyComponent";
import Main from "./MainPage/Main";
import StateCard from "./states/StateCard";
import NewsAdvertisement from "./NewsAdvertisement/NewsAdvertisement";
import EcoBlog from "./EcoBlog/EcoBlog";

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
    </div>
  );
};

export default Home;
