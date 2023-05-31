import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="cards">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <h2 className="price">{product.price}</h2>
          <button className="delete" onClick={() => handleDelete(product.id)}>Ištrinti</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;