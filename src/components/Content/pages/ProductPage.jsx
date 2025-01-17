import React, { useEffect, useMemo, useState } from "react";
import Product from "../product/Product";
import axios from "axios";

function ProductPage() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // const fetchProducts = useMemo(() => {
  //   return axios.get("https://fakestoreapi.com/products").then((res) => {
  //     return res.data;
  //   });
  // });

  // useEffect(() => {
  //   fetchProducts.then((res) => {
  //     setProducts(res);
  //   });
  // }, []);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, [ ]);

  return (
    <>
      {products.map((prod) => {
        return <Product key={prod.id} product={prod} />;
      })}
    </>
  );
}

export default ProductPage;
