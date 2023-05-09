import React, { useEffect, useState } from "react";
import TimeChiaCardMap from "./TimeChiaCardMap";

const TimeChia = () => {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    fetch("dataCard.json")
      .then((res) => res.json())
      .then((data) => {
        setCardDetails(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-10">
      <h1 className="my-5 text-center text-3xl text-green-700 lg:text-4xl xl:text-4xl font-semibold">
        নিয়মিত চিয়া সিড কেন খাবেন ? এবং পুষ্টিগুণ কি ?
      </h1>

      {/* card section */}

      <div className=" my-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-3">
        {cardDetails.map((cardDetail) => (
          <TimeChiaCardMap key={cardDetail.id} cardDetail={cardDetail} />
        ))}
      </div>

      {/* eating rolls */}

      <div className="my-5 lg:my-14 xl:my-14">

        <div className="card w-full bg-base-200 shadow-lg rounded-md border-2">

          <div className="card-body text-center">
              
              <h1 className=" text-2xl lg:text-3xl xl:text-3xl font-semibold mb-2"> চিয়া বীজ কি পরিমাণ খাবেন? খাবার নিয়মঃ- </h1>

              <p className="text-lg text-justify">✔ প্রতিদিন ২০-২৫গ্রাম চিয়া বীজ আপনার খাবার তালিকায় রাখুন। এর বেশি কখনই খাবেন না, খেলে গ্যাসের সমস্যাসহ, আরও অনান্য সমস্যা হতে পারে।</p>

              <p className="text-lg text-justify">✔ সকালে খালি পেটে ১গ্লাস পানিতে একচিমটি পরিমাণ পিংক সল্ট ও ২চামিচ চিয়াসিড দিয়ে নেড়ে খেয়ে নিন ।এই পদ্ধতিতে খেলে দ্রুত উপকার পাবেন।</p>

              <p className="text-lg text-justify">✔ যারা ডায়েট করেন তারা সকালে লেবুর রসের সাথে চিয়াপানির শরবত বানিয়ে খেতে পারেন, তবে শরবতে চিনি ব্যাবহার না করার পরামর্শ থাকলো।</p>

              <p className="text-lg text-justify">✔ এছাড়া নারকেলের পানি বা পছন্দ মতো যে কোন ফলের রসের সাথে ২-৩ চামচ চিয়া বীজ মিশিয়ে খেতে পারেন।</p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TimeChia;
