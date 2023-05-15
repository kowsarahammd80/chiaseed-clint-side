import React, { useEffect, useState } from 'react';

const useClientsOrder = (_id) => {
   
  const [clientOrders, setClientsOrders] = useState([])
  
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(`http://localhost:5000/orderGet`)
    .then(res => res.json())
    .then(data => {
       setLoading(true)
        setClientsOrders(data)
       setLoading(false)
    })
      .catch(e => console.log(e))
  },[])

  return [clientOrders, loading]

};

export default useClientsOrder;