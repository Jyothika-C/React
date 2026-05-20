import React from "react";
import "./ProductCard.css";

function ProductCard({ product, price }) {
  let styles = { backgroundColor: price >= 11000 ? "bisque" : null, color: price >= 11000 ? "red" : null };
  const features = ["feature 1", "feature 2", "feature 3", "feature 4", "feature 5", "feature 6"];
  return (
    <div className="card" style={styles}>
      <h3>Product Name : {product} </h3>
      <p>Price : {price} </p>
      {price > 11000 ? <p> Congrats You got 20% discount </p> : null}
      <ol>
        {features.map((feature , index) => (
          <li key={index}>{feature}</li>
        ))}
      </ol>
    </div>
  );
}

export default ProductCard;
