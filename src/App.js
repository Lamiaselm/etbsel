import React from 'react';
import NavBar from './Components/NavBar'
import {Route, Router} from "react-router";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Home from './Screens/Home';

function App() {
  return (
<BrowserRouter>

<Home/>
</BrowserRouter>
   
  )
}

export default App;
