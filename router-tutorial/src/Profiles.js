import React from "react";
import {Link, Route} from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>Users</h3>
      <ul>
        <li><Link to={"/profiles/user1"}>User 1</Link></li>
        <li><Link to={"/profiles/user2"}>User 2</Link></li>
      </ul>
      <Route path={"/profiles"} exact render={() => <div>Select a user</div>}/>
      <Route path={"/profiles/:username"} component={Profile}/>
    </div>
  )
};

export default Profiles;
