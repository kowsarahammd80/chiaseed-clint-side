import React, { useEffect, useState } from "react";
import productImage from "../../assets/chiaseed-img.jpeg";
import UseProduct from "../../Hooks/UseProduct/UseProduct";
import OrderFormDetailsMap from "./OrderFormDetailsMap";
import OrderFormDetalsPage from "../../Pages/OrderFormDetalsPage";
import { Link } from "react-router-dom";
import useClientsOrder from "../../Hooks/UseProduct/useClientsOrder";

const OrederDetails = ({
  productsValues,
  districtValue,
  plusButton,
  minus,
  plus,
  _id
}) => {


  // const [clientOrders, loading] = useClientsOrder()


  return (
    <div className="ml-0 xl:ml-10 lg:mx-10 md:ml-10 my-5">
      {/* product image and quantity set */}

      <OrderFormDetalsPage
        len={1}
        productsValues={productsValues}
        districtValue={districtValue}
        plusButton={plusButton}
        minus={minus}
        plus={plus}
      />

      <hr className="mb-2 mt-2" />

      {/* total price and order method */}

      <div className="w-full">

        <div>

          <table className="border w-full">

            <tr className="">

              <td className="border w-1/4 p-2">সাবটোটাল</td>

              <td>

                <p className="ml-1">
                  
                  {" "}
                  {plus * productsValues[productsValues.length - 1]?.price} টাকা
                </p>

              </td>

            </tr>

            <tr>
              <td className="border p-2">শিপিং</td>

              <td className="border p-2">
                <div className="">
                  {districtValue !== "Dhaka" ? (
                    <input type="radio" checked className="mr-1" value="130" />
                  ) : (
                    <input type="radio" disabled className="mr-1" />
                  )}
                  <label htmlFor="" className="">
                    Outside Dhaka Home Delivery - 130 tk - 24/48H
                  </label>
                </div>

                <div>
                  {districtValue === "Dhaka" ? (
                    <input type="radio" checked value="60" className="mr-1" />
                  ) : (
                    <input type="radio" className="mr-1" />
                  )}
                  <label htmlFor="">
                    Inside Dhaka Home Delivery - 60 tk - 24/48H
                  </label>
                </div>

                <div>
                  <p className="text-red-400 text-xs">
                    ডেলিভারি চার্জ আপনার প্রোডাক্ট এর ওজন এর ওপর বাড়তে বা কমতে
                    পারে।
                  </p>
                </div>

                <div>
                  <ul className="text-xs font-semibold">
                    <li className="mb-1">
                      {" "}
                      From 0-500gm you will be charged 60 BDT in inside dhaka
                    </li>
                    <li className="mb-1">
                      500gm to 1kg you will be charged 70 BDT
                    </li>
                    <li className="mb-1">
                      1kg to 2kg you will be charged 90 BDT
                    </li>
                    <li className="mb-1">
                      And after 2kg for every kg you will be charged 15BDT
                    </li>
                  </ul>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border p-2">সর্বমোট</td>
              <td className="border p-2">
                <p className="w-full">
                  {" "}
                  {plus * productsValues[productsValues.length - 1]?.price + (districtValue === "Dhaka" ? 60 : 130)} টাকা
                </p>
              </td>
            </tr>

            <tr>
              <td className="border p-2">পেমেন্ট মাধ্যম</td>

              <td className="border p-2">
                <input
                  name="cashOnDelivery"
                  value="Cash on Delivery"
                  type="radio"
                  checked
                  className="mr-1"
                />

                <label htmlFor="">Cash on Delivery</label>
              </td>
            </tr>
          </table>


                
           <button 
            type="submit"
            className="bg-green-700 w-full my-3 py-3 rounded-md text-white font-semibold"
           >
            Order Now
           </button>

         

          <p className="text-red-500 text-justify">
            ঢাকার বাইরে অর্ডার করলে ডেলিভারি চার্জ অবশ্যই অগ্রিম দিতে হবে এবং
            "ক্যাশ অন ডেলিভারি" তে প্রোডাক্ট নিতে হবে! Personal bKash + Nogod
            number(send money): 01674911639, Payment Number / Merchant
            Number(Make Payment): 01974322255
          </p>

          <p className="text-center text-lg">অথবা</p>
        </div>

      </div>

    </div>
  );
};

export default OrederDetails;
