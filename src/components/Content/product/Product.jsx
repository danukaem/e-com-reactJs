import React from "react";

function Product({ product }) {
  return (
    <>
      <div
        style={{
          verticalAlign: "top",
          padding: "10px",
          width: "25%",
          display: "inline-block",
        }}
      >
        <span>title: {product.title}</span>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <div>{product.category}</div>
        <img src={product.image} alt="" style={{ height: "200px" }} />
      </div>
    </>
  );
}

export default Product;
