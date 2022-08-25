import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import Work from './components/sections/Work';
import './styles/globals.css';

function App(props) {
  return (
    <div className="App">
      <Navbar {...props}/>
        <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='work' element={<Work/>}/>
        </Routes>
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
