import React, { useEffect, useState } from "react";
import "./Product.css";
import ProductMap from "./ProductMap";
import UseProduct from "../../Hooks/UseProduct/UseProduct";


const Product = ({len}) => {

 const [products] = UseProduct()
   

  let length = 0;
  !len ? length = products.length : length = len;

  return (

    <div className="flex justify-center mx-3 lg:mx-0 xl:mx-0 md:mx-0">

      <div>
        {[...products].reverse().slice(0, length).map((product) => (
          <ProductMap key={product._id} product={product} />
        ))}
      </div>

    </div>

  );
};

export default Product;
