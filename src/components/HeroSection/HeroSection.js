import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import HeroSectionMap from './HeroSectionMap';

const HeroSection = ({len}) => {

  const [heroSections, setHeroSections] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/headerGet')
    .then(res => res.json())
    .then(data => setHeroSections(data))
    .catch(e => console.log(e))
  }, [heroSections])

  let length = 0;
  !len ? length = heroSections.length : length = len;

  return (

    <div>
        {
         [...heroSections].reverse().slice(0, length).map(heroSection => <HeroSectionMap
           key={heroSection._id} heroSection = {heroSection}
           />)
        }
    </div>

  );

};

export default HeroSection;