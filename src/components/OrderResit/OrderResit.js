import React, { useState } from 'react';
import useClientsOrder from '../../Hooks/UseProduct/useClientsOrder';
import { useParams } from 'react-router-dom';
import OrderResitShow from './OrderResitShow';

const OrderResit = ({len}) => {
  
  const [clientOrders, loading] = useClientsOrder()

   
  let length = 0;
  !len ? length = clientOrders.length : length = len;


  return (

    <div>

      <div className="my-10 mx-3 xl:mx-20 lg:mx-20 md:mx-10">

       {
         [...clientOrders].reverse().slice(0, length).map(clientOrder => <OrderResitShow
            
          key={clientOrder._id}
          clientOrder={clientOrder}

         ></OrderResitShow>)
       }
         
      </div>
         
          

    </div>

  );

};

export default OrderResit;