import React from "react";
import "./TimeChia.css";

const TimeChiaCardMap = ({ cardDetail }) => {
  const { id, image, title, details } = cardDetail;

  return (

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
