import React from "react";
import Image from "gatsby-image";

// renders each product
const Product = ({ product }) => {
  return (
    <div className='card product-card'>
      <Image
        className='fluid-image'
        fluid={product.images[0].localFile.childImageSharp.fluid}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button>Buy for {product.variants[0].price}</button>
    </div>
  );
};

export default Product;
