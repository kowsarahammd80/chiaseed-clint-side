import React, { useContext, useState } from "react";
import "./OrderForm.css";
// import productImage from "../../assets/chiaseed-img.jpeg";
import OrederDetails from "./OrederDetails";
// import { AuthContext } from "../Auth/AuthProvider/AuthProvider";


const OrderForm = () => {
  
  // const {name} = useContext(AuthContext)

  const [plus, setPlus] = useState(1);

  const [districtValue, setDistrictValue] = useState("");

  const districts = ["Dhaka", "Comilla", "Khulna", "Barisal", "Chadpur"];

  const [subDistricts, setSubDistricts] = useState([]);

  const DhakaDistricts = ["Mirpur", "Rampura", "Badda", "Uttora", "Dhanmondi", "Gulshan"];

  const ComillaDistricts = [
    "Comilla",
    "Lakhsam",
    "Chandina",
    "Comilla Adarsa Nagar",
  ];
  const KhulnaDistricts = [
    "Khulna",
    "Phultala",
    "Aliapur",
    "Chalana Bazar",
    "Digalia",
  ];
  const BarisalDistrict = [
    "Barisal",
    "Gaurandi",
    "Nalchiti",
    "Peti Road",
    "Polaspur",
  ];
  const ChadpurDistrict = [
    "Chadpur",
    "Hajiganj",
    "kalibari",
    "sholo-gar",
    "puran Bazar",
    "Chadpur Bajar",
  ];

  const plusButton = () => {
    setPlus(plus + 1);
  };

  const minus = () => {
    setPlus(plus - 1);
  };

  const handleDistricts = (e) => {

    setDistrictValue(e.target.value);
    if (e.target.value === "Dhaka") {
      setSubDistricts(DhakaDistricts);
    } else if (e.target.value === "Comilla") {
      setSubDistricts(ComillaDistricts);
    } else if (e.target.value === "Barisal") {
      setSubDistricts(BarisalDistrict);
    } else if (e.target.value === "Khulna") {
      setSubDistricts(KhulnaDistricts);
    } else if (e.target.value === "Chadpur") {
      setSubDistricts(ChadpurDistrict);
    }
    
  };

  const orderForm = (event) => {
    event.preventDefault();

    const form = event.target;

    const data = {

      name: form.name.value,
      number: form.number.value,
      homeAddress: form.homeAddress.value,
      district: form.district.value,
      city: form.city.value,
      productName: "Chiaseed",
      productQuanity: plus,
      price: 400 * plus,
      subTotal: 400 * plus + (districtValue === "Dhaka" ? 60 : 130),
      delivery: districtValue === "Dhaka" ? 60 : 130,
      // shipping: "Cash on Delivery",
      cashOnDelivery:  "Cash On Delivery",

    };

    fetch(`http://localhost:5000/order`, {
        
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    })
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.error(e));

    console.log(data);
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

          <form
            onSubmit={orderForm}
            className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2"
          >
            {/* form start */}

            <div>
              <p className="mt-4 mb-2 font-semibold">আপনার নাম *</p>
              <input
                type="text"
                name="name"
                placeholder="আপনার নাম *"
                className="input input-bordered w-full"
              />

              <p className="mt-2 mb-2 font-semibold">ফোন নম্বর*</p>

              <input
                type="text"
                name="number"
                placeholder="ফোন নম্বর*"
                className="input input-bordered w-full mb-2"
              />

              <p className="mt-2 mb-2 font-semibold">
                বাসা/রোড নাম্বার, এলাকার নাম, থানা নাম *
              </p>

              <input
                type="text"
                name="homeAddress"
                placeholder="বাসা/রোড নাম্বার, এলাকার নাম, থানা নাম *"
                className="input input-bordered w-full mb-2"
              />

              <p className="mt-2 mb-2 font-semibold">
                আপনার জেলা সিলেক্ট করুন*
              </p>

              <select
                onChange={handleDistricts}
                className="select select-bordered w-full mb-2"
                name="district"
              >
                <option selected>আপনার জেলা সিলেক্ট করুন*</option>
                {districts.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <p className="mt-2 mb-2 font-semibold">আপনার শহর সিলেক্ট করুন*</p>

              <select
                className="select select-bordered w-full mb-2"
                name="city"
              >
                <option disabled selected>
                  আপনার শহর সিলেক্ট করুন*
                </option>
                {subDistricts.map((item, index) => (
                  <option key={index} value={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </select>
            </div>

            {/* product price show */}

            <OrederDetails
              districtValue={districtValue}
              plusButton={plusButton}
              minus={minus}
              plus={plus}
            />



          </form>

          <div className="flex justify-end mx-0 xl:mx-32 lg:mx-32 md:mx-96 mr-0 md:mr-0 lg:mr-10 xl:mr-10 ">

            <button className="bg-green-700 w-full xl:w-6/12 lg:w-6/12 md:6/12 my-3 py-1 rounded-md text-white font-semibold">
              <a href="https://wa.me/01760075031">
                <i class="fa-brands fa-whatsapp text-4xl mr-2 "></i>
              </a>
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default OrderForm;
