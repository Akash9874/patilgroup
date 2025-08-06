"use client";

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type TypingAnimationProps = {
  text: string;
  className?: string;
};

export const TypingAnimation = ({ text, className }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 20); // Faster typing speed
      return () => clearInterval(interval);
    }
  }, [inView, text]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
    </span>
  );
};
