import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import HeroSectionMap from './HeroSectionMap';

const HeroSection = () => {

  const [heroSections, setHeroSections] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/headerGet')
    .then(res => res.json())
    .then(data => setHeroSections(data))
    .catch(e => console.log(e))
  }, [heroSections])

  return (

    <div>
        {
          heroSections.map(heroSection => <HeroSectionMap
           key={heroSection._id} heroSection = {heroSection}
           />)
        }
    </div>

  );

};

export default HeroSection;