import React from "react";
import "./TimeChia.css";

const TimeChiaCardMap = ({ cardDetail }) => {
  const { id, image, title, details } = cardDetail;

  return (
    // <div className="card w-full height-set bg-green-700 text-white shadow-xl">

    //       <figure className="px-10 pt-10">
    //         <img
    //           src={image}
    //           alt=""
    //           className="rounded-xl set-image"
    //         />
    //       </figure>

    //       <div className="card-body items-center">
    //         <h2 className="text-center text-xl my-3">{title}</h2>
    //         <p className="w-full text-justify">চিয়া সিড হজমে সাহায্য করে ও কোষ্ঠকাঠিন্যের সমস্যা কমায়। সেইসঙ্গে অ্যানিমিয়ার মত সমস্যাও দূর করে ভাল ঘুম হতে সাহায্য করে ক্যান্সার রোধ করে হাঁটু ও জয়েন্টের ব্যথা দূর করে ত্বক, চুল ও নখ সুন্দর রাখে শরীর থেকে টক্সিন (বিষাক্ত পদার্থ) বের করে দেয়ব্লাড সুগার (রক্তের চিনি) স্বাভাবিক রাখে মলাশয় (colon) পরিষ্কার রাখে ।</p>

    //       </div>
    //     </div>

    <div className="card w-full text-white bg-green-700 shadow-sm">

      <div className="flex justify-center my-4">
        <img src={image} alt="" className="rounded-xl set-image" />
      </div>

      <div className="card-body p-3">

        <h1 className="text-center text-xl my-2">{title}</h1>
         <p className="text-justify">{details}</p>
      </div>

    </div>

  );
};

export default TimeChiaCardMap;
