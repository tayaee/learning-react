import React from "react";

function MyComponent({name, children}) {
  return <div>New Component! name={name}, children={children} p96 v2</div>;
}

MyComponent.defaultProps = {
  name: 'Default name'
};

export default MyComponent;