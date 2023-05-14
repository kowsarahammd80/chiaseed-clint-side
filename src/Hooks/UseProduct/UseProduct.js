import React, { useEffect, useState } from 'react';

const UseProduct = () => {
   
  const [products, setProducts] = useState([])


  useEffect(() => {
      
    fetch(`http://localhost:5000/productGet`)
    .then(res =>res.json())
    .then(data => setProducts(data))
    .catch(e => console.log(e))

  },[products])

    return [products]
};

export default UseProduct;