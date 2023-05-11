import React from "react";
import './Product.css'
import productImage from "../../assets/chiaseed-img.jpeg"

const Product = () => {

  return (

    <div className="flex justify-center mx-3 lg:mx-0 xl:mx-0 md:mx-0">

      <div className="my-10 card-border">

        <div className="card rounded-none w-full lg:w-96 xl:w-96 md:w-96 bg-base-100 shadow-xl p-1">
             
             <div>
                <img src={productImage} alt="" />
             </div>

             <p className="text-center text-green-700 font-semibold"> এই প্রোডাক্টের ভিডিও দেখতে ক্লিক করুন </p>

          <div className="card-body">
                 
            <div className="flex w-full">
                
            <button>
               <img src={productImage} alt="" className=" h-24 border-set" />
             </button>   

              <button>

                 <img src="https://cutpricebd.com/img/video-thumb.webp" alt="" className="ml-2" />  

              </button> 

            </div>  

            <p className="text-2xl font-semibold">
              Best Chia Seed 200 gm
            </p>
            
            <p className="text-xl font-semibold"> 400 টাকা </p>   

            <div className="flex gap-2 text-white">

                <button className="w-full bg-pink-600 p-2 rounded-sm">
                 <i class="fa-solid fa-cart-shopping"></i>  এখনই কিনুন
                </button>

                <button className="w-20 bg-pink-600 p-2 rounded-sm">
                 <i class="fa-brands text-2xl fa-whatsapp"></i>
                </button>

            </div>   
 
          </div>

        </div>

      </div>

    </div>

  );

};

export default Product;
