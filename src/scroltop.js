import { useState, useEffect } from 'react';

// Convert to a proper React custom hook
function useScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Return the values needed by components using this hook
  return { showScrollTop, scrollToTop };
}

export default useScrollToTop;