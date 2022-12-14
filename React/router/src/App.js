import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import card from "./components/card";
import { BrowserRouter , Route, Routes } from 'react-router-dom';  //Switch
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <Routes>
        {/* <Switch> */}
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/:user" element={<card/>} />
        {/* </Switch> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
