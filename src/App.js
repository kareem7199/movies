import "./App.scss";
import Home from "./Pages/Home";
import Filmpage from "./Pages/Filmpage";
import Errorpage from "./Pages/Errorpage"
import { useState ,useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    
    <Router>
      <Routes>
        
        {/* <Route element={<Login/>} path="/login"/> */}
        <Route element={<Home/>} path="/"/>
        <Route element={<Filmpage/>} path="/:id"  />
        <Route element={<Errorpage/>} path="error/404"  />
        <Route element={<Errorpage/>} path="*"/>

      </Routes>
    </Router>
  );
}

export default App;
