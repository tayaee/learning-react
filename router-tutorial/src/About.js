import React from "react";
import * as qs from "qs";

const About = ({location}) => {
  const queryParams = qs.parse(location.search, {ignoreQueryPrefix: true});
  const showDetails = queryParams.detail === 'true';
  const num = (queryParams.num > 0 ? parseInt(queryParams.num) : 0);
  return <div>
    <h1>About</h1>
    About Page
    {showDetails && <p>Company details enabled: num = {num}</p>}
  </div>
};

export default About;
