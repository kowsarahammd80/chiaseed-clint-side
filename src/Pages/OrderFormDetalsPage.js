import React, { useEffect, useState } from "react";
import OrderFormDetailsMap from "../components/OrderForm/OrderFormDetailsMap";

const OrderFormDetalsPage = ({
  productsValues,
  districtValue,
  plusButton,
  minus,
  plus,
}) => {
  console.log(productsValues);
  return (
    <div>
      <OrderFormDetailsMap
        productsValue={productsValues}
        districtValue={districtValue}
        plusButton={plusButton}
        minus={minus}
        plus={plus}
      />
    </div>
  );
};

export default OrderFormDetalsPage;
