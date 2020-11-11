import React from "react";
import { graphql } from "gatsby";

import Products from "../components/products/Products";

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        title
        description
        id
        variants {
          shopifyId
          price
          priceV2 {
            amount
            currencyCode
          }
        }
        images {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
  <>
    <h1>Shop</h1>
    <Products products={data.allShopifyProduct.nodes} />
  </>
);
