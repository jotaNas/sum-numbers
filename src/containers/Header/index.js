import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    return (
      <div className="header">
        <span>{title}</span>
      </div>
    );
  }
}

export default Header;
