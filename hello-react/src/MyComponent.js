import React, {Component} from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: 'Default name'
  };

  render() {
    let {name, children} = this.props;
    return <div>Switched to class component! name={name}, children={children} p96 v2</div>;
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;