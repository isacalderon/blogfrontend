import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ReadPost from "./pages/ReadPost";

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/readpost/:id" element={<ReadPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
