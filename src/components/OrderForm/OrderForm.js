import React, { useState } from "react";
import "./OrderForm.css";
import productImage from "../../assets/chiaseed-img.jpeg";

const OrderForm = () => {
  const [plus, setPlus] = useState(1);

  const plusButton = () => {
    setPlus(plus + 1);
  };

  const minus = () => {
    setPlus(plus - 1);
  };

  return (
    <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-10 my-10 border-2">
      <div className="p-1">
        {/* orderSection headline */}

        <div className=" p-2">
          <div className="bg-yellow-300 test mx-0 lg:mx-10 xl:mx-10 md:mx-10">
            <h1 className="text-center text-2xl lg:text-3xl md:3xl xl:3xl p-2 font-semibold">
              অর্ডার করতে নিচের ফর্মটি সম্পূর্ণ পূরন করুন
            </h1>
          </div>

          {/* order Form */}

          <form className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2">
            {/* form start */}

            <div>
              <p className="mt-4 mb-2 font-semibold">আপনার নাম *</p>
              <input
                type="text"
                placeholder="আপনার নাম *"
                className="input input-bordered w-full"
              />

              <p className="mt-2 mb-2 font-semibold">ফোন নম্বর*</p>
              <input
                type="text"
                placeholder="ফোন নম্বর*"
                className="input input-bordered w-full mb-2"
              />

              <p className="mt-2 mb-2 font-semibold">
                বাসা/রোড নাম্বার, এলাকার নাম, থানা নাম *
              </p>
              <input
                type="text"
                placeholder="বাসা/রোড নাম্বার, এলাকার নাম, থানা নাম *"
                className="input input-bordered w-full mb-2"
              />

              <p className="mt-2 mb-2 font-semibold">
                আপনার জেলা সিলেক্ট করুন*
              </p>
              <select className="select select-bordered w-full mb-2">
                <option disabled selected>
                  আপনার জেলা সিলেক্ট করুন*
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>

              <p className="mt-2 mb-2 font-semibold">আপনার শহর সিলেক্ট করুন*</p>
              <select className="select select-bordered w-full mb-2">
                <option disabled selected>
                  আপনার শহর সিলেক্ট করুন*
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>

            {/* product price show */}

            <div className="ml-0 xl:ml-10 lg:mx-10 md:ml-10 my-5">
              {/* product image and quantity set */}

              <div className="flex items-center">
                <div className="avatar">
                  <div className="w-24 rounded border">
                    {/* product image */}
                    <img src={productImage} />
                  </div>
                </div>

                <div className="w-full ml-3">
                  {/* name price */}

                  <div className="flex justify-between w-full">
                    <p>Best Chia Seed 200 gm</p>

                    <p> {400 * plus} টাকা </p>
                  </div>

                  {/* quantity (+ -) button */}

                  <div className="mt-5">
                    <div className="minus-button w-1/2 lg:w-1/4 flex justify-around border-set">
                      {plus < 2 ? (
                        <button
                          disabled
                          onClick={() => minus()}
                          className="text-white font-semibold"
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      ) : (
                        <button
                          onClick={() => minus()}
                          className="text-white font-semibold"
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      )}

                      <span className="bg-white px-2">{plus}</span>

                      <button
                        onClick={() => plusButton()}
                        className="text-white font-semibold"
                      >
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-2 mt-2" />

              {/* total price and order method */}

              <div className="w-full">
                <div>
                  <table className="border w-full">
                    <tr className="">
                      <td className="border w-1/4 p-2">সাবটোটাল</td>
                      <td>
                        <input
                          type="text"
                          readOnly
                          name=""
                          value={plus * 400}
                          id=""
                          className="w-2/12 ml-2"
                        />
                        টাকা
                      </td>
                    </tr>

                    <tr>
                      <td className="border p-2">শিপিং</td>

                      <td className="border p-2">
                        <div className="">
                          <input type="radio" className="mr-1" />
                          <label htmlFor="" className="">
                            Outside Dhaka Home Delivery - 130 tk - 24/48H
                          </label>
                        </div>

                        <div>
                          <input type="radio" className="mr-1" />
                          <label htmlFor="">
                            Inside Dhaka Home Delivery - 60 tk - 24/48H
                          </label>
                        </div>

                        <div>
                          <p className="text-red-400 text-xs">
                            ডেলিভারি চার্জ আপনার প্রোডাক্ট এর ওজন এর ওপর বাড়তে
                            বা কমতে পারে।
                          </p>
                        </div>

                        <div>
                          <ul className="text-xs font-semibold">
                            <li className="mb-1">
                              {" "}
                              From 0-500gm you will be charged 60 BDT in inside
                              dhaka
                            </li>
                            <li className="mb-1">
                              500gm to 1kg you will be charged 70 BDT
                            </li>
                            <li className="mb-1">
                              1kg to 2kg you will be charged 90 BDT
                            </li>
                            <li className="mb-1">
                              And after 2kg for every kg you will be charged
                              15BDT
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="border p-2">সর্বমোট</td>
                      <td className="border p-2">{plus * 400} টাকা</td>
                    </tr>

                    <tr>
                      <td className="border p-2">পেমেন্ট মাধ্যম</td>
                      <td className="border p-2">
                        <input type="radio" checked className="mr-1" />

                        <label htmlFor="">Cash on Delivery</label>
                      </td>
                    </tr>
                  </table>
                   
                   <button className="bg-green-700 w-full my-3 py-3 rounded-md text-white font-semibold">Order Now</button>
                     
                     <p className="text-red-500 text-justify">ঢাকার বাইরে অর্ডার করলে ডেলিভারি চার্জ অবশ্যই অগ্রিম দিতে হবে এবং "ক্যাশ অন ডেলিভারি" তে প্রোডাক্ট নিতে হবে! Personal bKash + Nogod number(send money): 01674911639, Payment Number / Merchant Number(Make Payment): 01974322255</p>

                     <p className="text-center text-lg">অথবা</p>

                     <button className="bg-green-700 w-full my-3 py-1 rounded-md text-white font-semibold">
                     <i class="fa-brands fa-whatsapp text-4xl mr-2 "></i>
                     </button>

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
