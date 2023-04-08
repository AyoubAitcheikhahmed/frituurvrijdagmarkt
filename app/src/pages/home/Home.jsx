import React from 'react'
import Contact from '../../components/Contact';
import Map from '../../components/Map';
import Navbar from "../../components/Navbar";
import Promo from '../../components/Promo';
import Slider from '../../components/Slider';
import NewNav from '../../components/Nav/Navbar'

const Home = () => {
  return (
    <>
        <NewNav />
        <Slider />
        <Promo />
        <Map />
        <Contact />
        
    </>
    )
}

export default Home