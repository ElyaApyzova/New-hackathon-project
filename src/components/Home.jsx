
import React from "react";
import MyAppBar from "./MyAppBar/MyAppBar";
import TreeCards from "./TreeCards";
import MyComponent from "./MyAppBar/MyComponent";

const Home = () => {
    return (
  <div>

    <div>
    <MyAppBar/>
    </div>
      <div>
       <h1>Hello</h1> 
      </div>
      <div>
    <MyComponent/>
    </div>
      <div>
    <TreeCards/>
    </div>
  </div>
    );
  };
  
  export default Home;