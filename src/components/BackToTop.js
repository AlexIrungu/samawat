import React from 'react';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      Back to Top
    </button>
  );
};

export default BackToTopButton;
