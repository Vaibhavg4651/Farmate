import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import '../../styles/Home.css';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide + 2) % 3);
  };

  return (
    <header className='header'>
      <div className='Images-slide'>
        <div className={`slides ${currentSlide === 0 ? 'active' : ''}`}>
          <img src='/imgss2.jpg' alt='' />
          <div className='info'>
            <h2>slide 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe id q</p>
            <Button variant="text" href='/help'>Learn more...</Button>
          </div>
        </div>
        <div className={`slides ${currentSlide === 1 ? 'active' : ''}`}>
          <img src='/cropp.jpg' alt='' />
          <div className='info'>
            <h2>slide 2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe id q</p>
            <Button variant="text" href='/help'>Learn more...</Button>
          </div>
        </div>
        <div className={`slides ${currentSlide === 2 ? 'active' : ''}`}>
          <img src='/imgss1.jpg' alt='' />
          <div className='info'>
            <h2>slide 3</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe id q</p>
            <Button variant="text" href='/help'>Learn more...</Button>
          </div>
        </div>
        <div className='navigation'>
          <button className='btn' onClick={prevSlide}></button>
          <button className='btn' onClick={nextSlide}></button>
          <button className='btn' onClick={nextSlide}></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
