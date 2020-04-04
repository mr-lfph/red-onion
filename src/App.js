import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Header/Header';
import Header from './component/Header/Header';
import { Switch, Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Header></Header>
     
  );
}

export default App;
