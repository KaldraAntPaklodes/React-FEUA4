import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Contained", variant: "text" }; // Variant - text, contained, or outlined
  }

  render() {
    const { title, variant } = this.state;

    return (
      <button
        className={ variant === "text"
            ? "textButton"
            : variant === "contained"
            ? "containedButton"
            : variant === "outlined"
            ? "outlinedButton"
            : ""
        }
      >
        {title}
      </button>
    );
  }
}

export default Button;