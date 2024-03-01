import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAppBar from "./MyAppBar/MyAppBar";
import TreeCards from "./TreeCards";
import MyComponent from "./MyAppBar/MyComponent";
import Main from "./MainPage/Main";

const Home = () => {
  return (
    <div>
      <div>
        <MyAppBar />
      </div>
      <div>
        <Main/>
      </div>
      <div>
        <MyComponent />
      </div>
      <div>
        <TreeCards />
      </div>
    </div>
  );
};

export default Home;
