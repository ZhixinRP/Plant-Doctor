import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home.js";
import Sensor from "./components/pages/Sensor";
import Chatbot from "./components/pages/Chatbot";
import Error from "./components/pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="sensor" element={<Sensor />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
