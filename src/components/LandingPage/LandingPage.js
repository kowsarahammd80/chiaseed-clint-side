import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import TimeChia from '../TimeChia/TimeChia';
import WhyFromTackUs from '../WhyFromTackUs/WhyFromTackUs';
import Product from '../Product/Product';
import OrderForm from '../OrderForm/OrderForm';
import WhatsApp from '../WhatsApp/WhatsApp';

const LandingPage = () => {

  return (

    <div className=''>
  
       <HeroSection/>
       <TimeChia/>
       <WhyFromTackUs/>
       <Product/>
       <OrderForm/>
       <WhatsApp/>

       {/* <div className='flex justify-end'>
       <button className=' whatsApp '><i class="fa-brands fa-whatsapp text-4xl mr-2 "></i></button>
    </div> */}

    </div>
    
  );

};

export default LandingPage;