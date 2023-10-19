import { useLayoutEffect, useState } from 'react';

// Define the state type for scroll position
type ScrollPosition = {
  x: number;
  y: number;
};

// Create the custom hook
export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: window.scrollX,
    y: window.scrollY,
  });

  const updateScrollPosition = () => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useLayoutEffect(() => {
    // Add scroll and resize event listeners
    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('resize', updateScrollPosition);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
      window.removeEventListener('resize', updateScrollPosition);
    };
  }, []);

  return scrollPosition;
}
