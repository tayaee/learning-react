import React from "react";
import PropTypes from "prop-types";

function MyComponent({name, children}) {
  return <div>New Component! name={name}, children={children} p96 v2</div>;
}

MyComponent.defaultProps = {
  name: 'Default name'
};

MyComponent.propTypes = {
  name: PropTypes.string
};

export default MyComponent;