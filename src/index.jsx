import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import "./homepage.css";

import MainHome from "./components/MainHome";
import HomePage from "./components/Homepage";
import Token from "./components/Token";
import Sucess from "./components/bad";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:name" element={<Token />} />
          <Route exact path="connect" element={<MainHome />} />
          <Route exact path="success" element={<Sucess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
