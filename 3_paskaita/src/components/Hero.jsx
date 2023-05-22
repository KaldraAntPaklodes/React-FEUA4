import React from "react";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "j", subtitle: "b" };
  }

  isTitleAndSubtitleExists = () => {
    const { title, subtitle } = this.state;
    if (title && subtitle) {
      return (
        <div className="heroDiv">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      );
    }
  };

  render() {
    return <div>{this.isTitleAndSubtitleExists()}</div>;
  }
}

export default Hero;