import React from "react";

class MoodChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Kaip jauciates?" };
  }

  changeMessage = (newMessage) => {
    this.setState({ message: newMessage });
  };

  render() {
    const messages = {
      a: "Nieko tokio, viskas bus gerai",
      b: "Gerai, nujauciu, kad greitu metu jausites puikiai",
      c: "Smagu girdeti, taip ir toliau",
    };

    return (
      <div>
        <h2>{this.state.message}</h2>
        <ul>
          <li>
            <button onClick={() => this.changeMessage(messages.a)}>
              a. Jauciuosi prastai :(
            </button>
          </li>
          <li>
            <button onClick={() => this.changeMessage(messages.b)}>
              b. Jauciuosi normaliai :|
            </button>
          </li>
          <li>
            <button onClick={() => this.changeMessage(messages.c)}>
              c. Jauciuosi puikiai :)
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default MoodChecker;