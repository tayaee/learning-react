import React from "react";

function MyComponent(props) {
  const { name, children } = props;
  return <div>New Component! name={name}, children={children} p96</div>;
}

MyComponent.defaultProps = {
  name: 'Default name'
};

export default MyComponent;