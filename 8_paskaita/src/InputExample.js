import { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");

  const [age, setAge] = useState(null);


  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(+e.target.value);
  };

  const addYears = (e) => {
    setAge((prevAge) => prevAge + 10);
  };

  return (
    <div>
      <label htmlFor="name">First Name: </label>
      <input id="name" type="text" onChange={handleNameChange} />
      <br /> <label htmlFor="age">Age: </label>
      <input id="age" type="number" onChange={handleAgeChange} />{" "}
      <button onClick={addYears}>Add 10 years</button>{" "}
      <h2>
        {name} your age is {age}
      </h2>{" "}
    </div>
  );
};

export default Input;
