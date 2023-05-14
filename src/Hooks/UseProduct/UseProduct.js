import React, { useEffect, useState } from 'react';

const UseProduct = () => {
   
  const [products, setProducts] = useState([])

  console.log(products)

  useEffect((_id) => {
      
    fetch(`http://localhost:5000/productGet`)
    .then(res =>res.json())
    .then(data => setProducts(data))
    .catch(e => console.log(e))

  },[])

  return [products]
};

export default UseProduct;