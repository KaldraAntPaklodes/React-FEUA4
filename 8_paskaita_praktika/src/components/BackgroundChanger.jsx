import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  let appStyle = {
    minHeight: "100vh",
    background: "red"
  };

  if (value.length <= 3) {
    appStyle.background = "white";
  } else if (value.length <= 6) {
    appStyle.background = "yellow";
  } else if (value.length <= 9) {
    appStyle.background = "green";
  }

  return (
    <div style={appStyle}>
      <label htmlFor="value">Value input: </label>
      <input id="value" type="text" onChange={handleValueChange} />
    </div>
  );
};

export default App;
