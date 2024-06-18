import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Analytics from './Analytics';
import './ScrollAnimation.css';

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const animatedElement = document.getElementById('animatedElement');
    const footer = document.querySelector('.footer');
  
    if (animatedElement && footer) {
      const scrollThreshold = scrollTop + windowHeight * 0.75; // Adjust threshold as needed
  
      setIsVisible(scrollThreshold > animatedElement.offsetTop);
  
      // Check if the user has scrolled past the footer
      const footerOffset = footer.offsetTop;
      if (scrollTop > footerOffset) {
        document.querySelector('.back-to-top').style.display = 'block';
      } else {
        document.querySelector('.back-to-top').style.display = 'none';
      }
    }
  };
  
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  };

  // React Spring animation config
  const animationProps = useSpring({
    transform: isVisible ? 'translateY(0)' : 'translateY(100%)', // Slide in from bottom
    opacity: isVisible ? 1 : 0,
    from: { transform: 'translateY(100%)', opacity: 0 }, // Start from bottom and invisible
  });

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="animatedElement" className="animation-container">
      <animated.div className="animation-item" style={animationProps}>
        {/* Content to be animated */}
        <Home />
        <About />
        <Analytics />
        <Contact />
      </animated.div>
      {/* Back to Top button */}
      <div className="back-to-top" onClick={scrollToTop}>
        Back to Top
      </div>
    </div>
  );
};

export default ScrollAnimation;
