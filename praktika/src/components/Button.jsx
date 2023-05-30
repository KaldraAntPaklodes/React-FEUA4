import { useState } from "react";


  return (
    <div>
      <div className="counter">
        <button onClick={decrement}>-1</button>
        <h2>{count}</h2>        
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
};

export default Counter;