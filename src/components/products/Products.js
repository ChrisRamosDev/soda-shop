import React from "react";
import Image from "gatsby-image";

import Product from "./Product";

import "../global.css";

// renders all products
const Products = ({ products }) => {
  return (
    <div className='products-grid'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
