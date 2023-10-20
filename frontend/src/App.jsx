import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Login from './Screens/Login';
import Registration from './Screens/Registration';
import Home from './Screens/Home';


function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Registration/>}></Route>
            
          </Routes>
        </div>
      </Router>
  );
}

export default App;
