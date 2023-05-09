import React from 'react';
import './HeroSection.css';

const HeroSection = () => {

  return (

    <div className='my-5 mx-5 lg:mx-40 xl:mx-40 md:mx-10'>

        <h1 className="font-semibold text-center text-2xl lg:text-3xl xl:text-3xl md:text-3xl text-green-700 my-5">বিশ্বের 1 নম্বর সুপার ফুড চিয়া সিড,আপনার ডায়াবেটিস রাখবে নিয়ন্ত্রণে</h1>

       <h2 className="text-center text-xl">চিয়া সিড সম্পর্কে বিস্তারিত জানতে ভিডিও শেষ পর্যন্ত দেখুন</h2>


       <div className='flex justify-center w-full my-5'>

        <iframe 
        
        src="https://www.youtube.com/embed/lx-u13R3cR4"  
        frameborder="0" className='set-video h-72 lg:h-96 xl:h-96 border-set'>

        </iframe>

       </div>


    </div>

  );

};

export default HeroSection;