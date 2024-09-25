import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutMe" element={<Aboutme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
