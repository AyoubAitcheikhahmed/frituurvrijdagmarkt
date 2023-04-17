import React from 'react'
import Contact from '../../components/Contact';
import Map from '../../components/Map';
import Navbar from "../../components/Navbar";
import Promo from '../../components/Promo';
import Slider from '../../components/Slider';
import NewNav from '../../components/Nav/Navbar'
import Payment from '../../components/Payment';
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <>
        <NewNav />
        <Slider />
        <Payment />
        <Promo />
        <Map />
        <Footer />
        <Contact />
    </>
    )
}

export default Home