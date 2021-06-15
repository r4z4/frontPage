// Aaron Rozanski 0718031
// Newspaper Spiral Hopefully
// Buttons Index.js

import React, { Component } from "react";
import './index.css'

class Button extends Component {
  render() {
    const {
      onClick,
      className,
      children,
      value,
    } = this.props;

    return (
      <button
      onClick={onClick}
      className={className}
      type="button"
      value={value}
      >
        {value}
      </button>
    );
  }
}

export { Button };