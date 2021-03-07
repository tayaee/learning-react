import './App.css';
import React from "react";
import {Link, Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return <div>
    <div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/about?detail=true&num=777"}>About with details</Link></li>
        <li><Link to={"/info"}>Info</Link></li>
        <li><Link to={"/profiles"}>Profiles</Link></li>
        <li><Link to={"/profile/user1"}>User 1 profile</Link></li>
        <li><Link to={"/profile/user2"}>User 2 profile</Link></li>
        <li><Link to={"/history"}>History Demo</Link></li>
      </ul>
    </div>
    <hr/>
    <Route path="/" component={Home} exact={true}/>
    <Route path={["/about", "/info"]} component={About}/>
    <Route path="/profile/:username" component={Profile} exact={true}/>
    <Route path="/profiles" component={Profiles}/>
    <Route path="/history" component={HistorySample}/>
  </div>
};

export default App;
