import React from "react";
import MyAppBar from "./MyAppBar/MyAppBar";
import TreeCards from "./TreeCards";
import MyComponent from "./MyAppBar/MyComponent";
import Main from "./MainPage/Main";
import StateCard from "./states/StateCard";

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
        <StateCard/>
      </div>
    </div>
  );
};

export default Home;
