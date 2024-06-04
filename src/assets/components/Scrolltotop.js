import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Scrolltotop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top on button click
  const scrolltotop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <Button
          onClick={scrolltotop}
          variant="contained"
          color="primary"
          sx={{ position: 'fixed', bottom: 16, right: 16,zIndex:2 }}
          startIcon={<KeyboardArrowUpIcon />}
        >
          Back to Top
        </Button>
      )}
    </div>
  );
};

export default Scrolltotop;
