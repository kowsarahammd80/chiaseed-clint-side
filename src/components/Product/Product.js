import React, { useEffect, useState } from "react";
import "./Product.css";
import ProductMap from "./ProductMap";
import UseProduct from "../../Hooks/UseProduct/UseProduct";

const Product = () => {

  const [products] = UseProduct();

  console.log(products);

  return (
    <div className="flex justify-center mx-3 lg:mx-0 xl:mx-0 md:mx-0">
      <div>
        {[...products].reverse().map((product) => (
          <ProductMap key={product._id} products={products} />
        ))}
      </div>
    </div>
  );
};

export default Product;
