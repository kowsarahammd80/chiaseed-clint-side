import React from 'react';
import UseProduct from '../../Hooks/UseProduct/UseProduct';

const OrderFormDetailsMap = ({product, districtValue, plusButton, minus, plus}) => {

    const {image} = product[0];

  return (

    <div className="flex items-center">

        <div className="avatar">
          <div className="w-24 rounded border">
            {/* product image */}
            <img src={image} />
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
                type="button"
                  disabled
                  onClick={() => minus()}
                  className="text-white font-semibold"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => minus()}
                  className="text-white font-semibold"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
              )}

              <span className="bg-white px-2">{plus}</span>

              <button
                type="button"
                onClick={() => plusButton()}
                className="text-white font-semibold"
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        
      </div>

  );

};

export default OrderFormDetailsMap;