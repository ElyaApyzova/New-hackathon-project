import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TreeCards from "./components/TreeCards";





function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TreeCards" element={<TreeCards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
