import React, { useState } from 'react';
import Nav from '../Components/Nav'
import Carousel from '../Components/Carousel'
import Calendar from '../Components/Calendar'
import Morefeatures from '../Components/Morefeatures';
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Countdown from '../Components/Countdown';
function Home() {
  

  return (
    <div> 
      <Nav/>
      <Carousel/>
      <Slider/>
      <Calendar/>
      <Morefeatures/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home