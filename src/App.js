import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home.js";
import Chatbot from "./components/pages/Chatbot";
import Store from "./components/pages/Store";
import Error from "./components/pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="store" element={<Store />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
