import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import TimeChia from '../TimeChia/TimeChia';
import WhyFromTackUs from '../WhyFromTackUs/WhyFromTackUs';
import Product from '../Product/Product';
import OrderForm from '../OrderForm/OrderForm';

const LandingPage = () => {

  return (

    <div className=''>
  
       <HeroSection/>
       <TimeChia/>
       <WhyFromTackUs/>
       <Product/>
       <OrderForm/>

    </div>
    
  );

};

export default LandingPage;