import { useState, useEffect } from 'react';

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({ width, height });
      setIsMobile(width <= 768);
      setIsSmallMobile(width <= 480);
      setIsTablet(width > 768 && width <= 1024);
      setIsDesktop(width > 1024);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper functions for responsive image sizing
  const getImageSize = (baseSize, mobileReduction = 0.7, tabletReduction = 0.85) => {
    if (isSmallMobile) return Math.round(baseSize * (mobileReduction - 0.1));
    if (isMobile) return Math.round(baseSize * mobileReduction);
    if (isTablet) return Math.round(baseSize * tabletReduction);
    return baseSize;
  };

  return {
    windowSize,
    isMobile,
    isSmallMobile,
    isTablet,
    isDesktop,
    getImageSize
  };
}

// Usage:
// import { useResponsive } from './utils/responsive';
// const { isMobile, isSmallMobile, isTablet, isDesktop, getImageSize } = useResponsive();