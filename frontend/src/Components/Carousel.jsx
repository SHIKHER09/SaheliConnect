
import React, { useState, useEffect } from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVptrS7kVop1PAa6f4I6_znlj926FliWqW_I7_6vV7TQkGYGMAA40osUb6xWyVnaB00N0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhJXfqjtoA5eHjS8gg2Zn9Q6TgzL9EFyBmawzA1XjXicGP3YPYHxf7aLAXi19CPB3XoE&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7nW7NUXsdRcVcQK0Xx8BxUrw5ZzeUFAwH_zNtpwSuHHZX3VPPLufe-nBEYFTHFBy0RM&usqp=CAU'];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div style={{ Width:"80vw",height:"82vh",padding:"2vw 5vw" }}>
      <Paper elevation={3} style={{ position: 'relative',borderRadius:"30px",overflow:"hidden",width:"100%",height:"100%",border:"1px",borderColor:"cyan",borderStyle:"groove" }}>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          style={{ width: '100%',height: '100%',objectFit:"cover" }}
        />
        <Button
          onClick={goToPreviousSlide}
          style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
        >
          <KeyboardArrowLeft />
        </Button>
        <Button
          onClick={goToNextSlide}
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
        >
          <KeyboardArrowRight />
        </Button>
      </Paper>
      
    </div>
  );
};

export default Carousel;
