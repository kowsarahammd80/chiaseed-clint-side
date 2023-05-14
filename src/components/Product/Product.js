import React, { useEffect, useState } from "react";
import "./Product.css";
import ProductMap from "./ProductMap";
import UseProduct from "../../Hooks/UseProduct/UseProduct";


const Product = () => {

 const [products] = UseProduct()

  // const [productData, setProductData] = useState([])

  // useEffect(() => {
  //    fetch(`http://localhost:5000/productGet`)
  //    .then(res=> res.json())
  //    .then(data => setProductData(data))
  //    .catch(e => console.log(e))
  // },[])


  return (

    <div className="flex justify-center mx-3 lg:mx-0 xl:mx-0 md:mx-0">

      <div>
        {[...products].reverse().map((product) => (
          <ProductMap key={product._id} product={product} />
        ))}
      </div>

    </div>

  );
};

export default Product;
