// src/components/ScrollToTop.tsx
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUp as ArrowUpIcon } from 'lucide-react';

const ScrollToTop = (): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUpIcon size={20} />
    </Button>
  );
};

export default ScrollToTop;
