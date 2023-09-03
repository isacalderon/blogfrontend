import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReadPost from "./pages/ReadPost";

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts/:id" Component={ReadPost}></Route>
      </Routes>
    </div>
  );
}

export default App;
