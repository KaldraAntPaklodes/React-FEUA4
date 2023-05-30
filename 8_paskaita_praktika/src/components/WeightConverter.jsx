import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(null);


  const handleWeightChange = (e) => {
    setWeight(+e.target.value);
  };

  const convertToTons = () => {
    setWeight((kg) => kg / 1000);
  };

  const convertToGrams = () => {
    setWeight((kg) => kg * 1000);
  };

  const convertToPounds = () => {  
    setWeight((kg) => kg * 2.20462262185);
  };

  return (
    <div>
      <label htmlFor="weight">Įveskite kilogramus:</label>
      <input type="number" id="weight" onChange={handleWeightChange} />

      <button onClick={convertToTons}>Paversti į tonas</button>
      <button onClick={convertToGrams}>Paversti į gramus</button>
      <button onClick={convertToPounds}>Paversti į svarus</button>

      <h2>{weight}</h2>
    </div>
  );
};

export default App;