
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAppBar from "./MyAppBar/MyAppBar";

const Home = () => {
    return (
  <div>

    <div>
    <MyAppBar/>
    </div>
      <div>
       <h1>Hello</h1> 
      </div>
  </div>
    );
  };
  
  export default Home;