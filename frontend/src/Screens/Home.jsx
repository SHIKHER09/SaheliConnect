import React, { useState } from 'react';
import Nav from '../Components/Nav'
import Carousel from '../Components/Carousel'
import Calendar from '../Components/Calendar'
import Morefeatures from '../Components/Morefeatures';
function Home() {
  

  return (
    <> 
      <Nav></Nav>
      <Carousel></Carousel>
      <Calendar></Calendar>
      <Morefeatures></Morefeatures>
      <div style={{width:"30vw",height:"40vw"}}>
      
      </div>
    </>
  )
}

export default Home