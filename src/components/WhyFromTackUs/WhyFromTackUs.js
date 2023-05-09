import React from "react";

const WhyFromTackUs = () => {
  return (
    <div className="bg-green-700">
         <div className="bg-green-700 text-white mt-5 mb-5 mx-5 lg:mx-40 xl:mx-40 md:mx-10">

<div className="">
  <h1 className="text-center text-2xl lg:text-3xl xl:text-3xl font-semibold p-5 ">
    কেন আমাদের কাছ থেকে নিবেন?
  </h1>

  <p className="text-center ">
    বাজারে ইন্ডিয়ানি চিয়া সিডে ভরপুর, নিম্নমানের হওয়ায় আপনি উপকার পাচ্ছেন
    না। অনলাইন ও অফলাইন থেকে কিনে ঠকছেন বারবার।
    <br />
    আর নয় ঠকাঠকি, আমরা আপাদের দিবো সেরা মানের ব্রাজিল এর চিয়া সিড, সেরা
    দানা, ফ্রেশ ও পরিষ্কার।
  </p>
</div>

{/* card */}

<div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 gap-3">

  <div className="card w-full">

    <div className="card-body">
         
         <div className="flex justify-center">
             <i class="fa-solid text-6xl fa-truck"></i>
         </div>

         <p className="text-center font-medium text-2xl my-5">ক্যাশ অন ফ্রি হোম ডেলিভারি, ডেলিভারি ম্যান থেকে দেখে নেওয়ার সুয়োগ। ।</p>

    </div>

  </div>
  <div className="card w-full">

    <div className="card-body">
         
         <div className="flex justify-center">
         <i class="fa-sharp fa-regular text-6xl fa-circle-check"></i>
         </div>

         <p className="text-center font-medium text-2xl my-5">প্রিমিয়ািম কোয়ালিটি,ফ্রেশ এবং পরিষ্কার ও বড় দানা, ব্রাজিল থেকে আমদানিকৃত ।</p>

    </div>

  </div>
  <div className="card w-full">

    <div className="card-body">
         
         <div className="flex justify-center">
         <i class="fa-solid fa-gift text-6xl"></i>
         </div>

         <p className="text-center font-medium text-2xl my-5">স্ট্যান্ডার্ড প্যাকেজিং, ফুড গ্রেড বোয়াম,ফুয়েল ইনটেক,গিফট কার্টুনবক্স।</p>

    </div>

  </div>

</div>
</div>
    </div>
  );
};

export default WhyFromTackUs;
