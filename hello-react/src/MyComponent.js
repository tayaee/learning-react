import React from "react";
import PropTypes from "prop-types";

function MyComponent({name, children}) {
  return <div>New Component! name={name}, children={children} p96 v2</div>;
}

MyComponent.defaultProps = {
  name: 'Default name'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};
// This is triggered on console tab if missing.
// index.js:1 Warning: Failed prop type: The prop `favoriteNumber` is marked as required in `MyComponent`, but its value is `undefined`.
// at MyComponent (http://localhost:3000/static/js/main.chunk.js:314:3)
// at App (http://localhost:3000/static/js/main.chunk.js:168:1)

export default MyComponent;