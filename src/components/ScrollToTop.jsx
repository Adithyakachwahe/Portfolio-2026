// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get the scrollable container by ID
    const scrollContainer = document.getElementById('scroll-container');
    
    if (scrollContainer) {
      // Scroll to top immediately
      scrollContainer.scrollTo(0, 0);
      scrollContainer.scrollTop = 0;
    }
    
    // Fallbacks for different browsers
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;