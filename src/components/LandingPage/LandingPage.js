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
  
       <HeroSection len={1}/>
       <TimeChia/>
       <WhyFromTackUs/>
       <Product len={1}/>
       <OrderForm len={1}/>
       <WhatsApp/>

    </div>
    
  );

};

export default LandingPage;