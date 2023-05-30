import PropTypes from "prop-types";
import Button from "./Button";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((previousCount) => previousCount - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-1</button>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  );
}

function Product(props) {
  return (
    <div id="productCard">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h2>{props.title}</h2>
        <h3>{props.price}€</h3>
        <p className="descriptionText">{props.description}</p>
        <div className="availabilityKey">Availability:</div>
        <div className="availabilityValue">{props.availability} in stock</div>

        <Counter />

        <div className="categoryText">Category: {props.category}</div>
      </div>
    </div>
  );
}

Product.propTypes = {
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
};

export default Product;
