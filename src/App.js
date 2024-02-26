import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tree from  './components/Tree';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Tree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
