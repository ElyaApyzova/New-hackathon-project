import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tree from  './components/Tree';
import Footer from "./components/Footer/Footer";

import TreeCards from "./components/TreeCards";
import Create from "./components/Creat/Create";





function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tree" element={<Tree />} />
          <Route path="/treeCards" element={<TreeCards />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
