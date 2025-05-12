import { useEffect } from 'react';

const useAnimationObserver = () => {
  useEffect(() => {
    const animationElements = document.querySelectorAll('.animation-element');
    
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add or remove the in-view class based on visibility
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    
    // Observe each animation element
    animationElements.forEach(element => {
      observer.observe(element);
    });
    
    // Cleanup function to disconnect the observer
    return () => {
      animationElements.forEach(element => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);
};

export default useAnimationObserver;