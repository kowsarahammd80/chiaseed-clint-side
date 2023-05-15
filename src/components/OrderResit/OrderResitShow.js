import React from "react";

const OrderResitShow = ({ clientOrder }) => {
  const {
    _id,
    name,
    number,
    productName,
    productQuanity,
    price,
    subTotal,
    delivery,
    cashOnDelivery,
  } = clientOrder;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div>
          <p>Order Number: {_id} </p>
          <p>Name: {name}</p>
          <p>Phone: {number}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>SI</th>
                <th>Description</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>{productName}</td>
                <td>{price}</td>
                <td>{productQuanity}</td>
                <td>{price * productQuanity}</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                
                <td></td>
                <td></td>
                <td>Total</td>
                <td></td>
                <td>{price * productQuanity}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th></th>
                <td></td>
                <td>Shipping Charge</td>
                <td></td>
                <td>{delivery}</td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <td>Grand Total</td>
                <td></td>
                <td>{subTotal}</td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <td>Shipping Method</td>
                <td></td>
                <td>{cashOnDelivery}</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>

  );
};

export default OrderResitShow;
