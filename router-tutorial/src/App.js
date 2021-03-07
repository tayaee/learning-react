import './App.css';
import React from "react";
import {Link, Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return <div>
    <div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/info"}>Info</Link></li>
      </ul>
    </div>
    <hr/>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/about" component={About}/>
    <Route path="/info" component={About}/>
  </div>
};

export default App;
