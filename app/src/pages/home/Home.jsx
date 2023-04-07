import React from 'react'
import Contact from '../../components/Contact';
import Map from '../../components/Map';
import Navbar from "../../components/Navbar";
import Promo from '../../components/Promo';
import Slider from '../../components/Slider';

const Home = () => {
  return (
    <>
        <Navbar />
        <Slider />
        <Promo />
        <Map />
        <Contact />
        
    </>
    )
}

export default Home