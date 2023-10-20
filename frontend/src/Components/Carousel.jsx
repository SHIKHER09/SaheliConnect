
import React, { useState, useEffect } from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const images = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    'https://media.istockphoto.com/id/1410391090/photo/crystal-globe-putting-on-moss.webp?b=1&s=612x612&w=0&k=20&c=CksdIKZkvwKrOzoCk1VdBzbWK5nP0LXmddXvpaQO5tA=',
    'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_640.jpg',
    'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_640.jpg',
];

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
    <div style={{ Width:"80vw",height:"65vh",padding:"2vw 5vw" }}>
      <Paper elevation={3} style={{ position: 'relative' }}>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          style={{ width: '100%', maxHeight: '55vh',objectFit:"cover" }}
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
      {/* <Typography variant="h6" align="center">
        Slide {activeIndex + 1}
      </Typography> */}
    </div>
  );
};

export default Carousel;
