import React, { useState } from "react";

// import productImage from "../../assets/chiaseed-img.jpeg";

const ProductMap = ({products}) => {

  
  const { productVideoLink, productName, price, image } = products[0];
 
  const [productData, setProductData] = useState("")
  
  const imageButton = () => {
    setProductData("")
  } 

  const videoButton = () => {
    setProductData("video")
  }

  return (

    <div className="my-10 card-border">
      <div className="card rounded-none w-full lg:w-96 xl:w-96 md:w-96 bg-base-100 shadow-xl p-1">


        {
          productData === "" ? 

          <div>
          <img src={image} alt="" className="w-full" />
        </div>

        :

    <div>
        <iframe  src={productVideoLink} className="w-full h-72" frameborder="0"></iframe>
     </div>


        }

        

       
            
        <p onClick={videoButton}  className="text-center cursor-pointer text-green-700 font-semibold mt-2">
          এই প্রোডাক্টের ভিডিও দেখতে ক্লিক করুন
        </p>


        <div className="card-body">
          <div className="flex w-full">

            <button onClick={imageButton}>
              <img src={image} alt="" className=" h-24 border-set" />
            </button>

            <button onClick={videoButton}>

              <img
                src="https://cutpricebd.com/img/video-thumb.webp"
                alt=""
                className="ml-2"
              />
            </button>

          </div>

          <p className="text-2xl font-semibold">{productName}</p>

          <p className="text-xl font-semibold"> {price} টাকা </p>

          <div className="flex gap-2 text-white">

            <button  className="w-full bg-pink-600 p-2 rounded-sm">
              এখনই কিনুন
            </button>

            <button  className="w-20 bg-pink-600 p-2 rounded-sm">
              <i class="fa-brands text-2xl fa-whatsapp"></i>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductMap;
