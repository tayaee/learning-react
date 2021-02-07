import React from "react";

function MyComponent(props) {
  return <div>New Component! {props.name}</div>;
}

MyComponent.defaultProps = {
  name: 'Default name'
};

export default MyComponent;