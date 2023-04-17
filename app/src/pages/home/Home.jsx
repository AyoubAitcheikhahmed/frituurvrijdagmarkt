import React from 'react'
import Contact from '../../components/Contact';
import Map from '../../components/Map';
import Promo from '../../components/Promo';
import Slider from '../../components/Slider';
import NewNav from '../../components/Nav/Navbar'
import Payment from '../../components/Payment';
import Slideshow from '../../components/Slideshow/Slideshow'
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <>
        <NewNav />
        <Slider />
        <Payment />
        <Promo />
        <Map />
        <Slideshow />
        <Contact />
        <Footer />
    </>
    )
}

export default Home