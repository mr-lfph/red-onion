import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/Header/Header';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Foods from './component/Home/Food/Food';
import FoodDetails from './component/Home/FoodDetails/FoodDetails';
import Login from './component/Login/Login';



import TestS from './component/TestS/TestS';
import Register from './component/Signup/Signup';




function App() {
  return (
    <div>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/Login" component={Login}></Route>
        <Route exact path="/foods/" component={Foods} />
        <Route path="/foods/:id" component={FoodDetails} />
        <Route path="/testS" component={TestS}></Route>
        <Route path="/Signup" component={Register}>
          {/* <Register></Register> */}
         </Route>
        <Route path="*">
             <NotFound></NotFound>
         </Route>
         <Route path="/Login">Login</Route>
         
          </Switch>
    </Router>
    </div>
  );
}

export default App;
