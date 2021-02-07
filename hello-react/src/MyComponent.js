import React from "react";

function MyComponent(props) {
  return <div>New Component! name={props.name}, children={props.children}</div>;
}

MyComponent.defaultProps = {
  name: 'Default name'
};

export default MyComponent;