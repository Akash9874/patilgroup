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
      setIsAnimating(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [inView, text]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      <span
        className={`inline-block w-px border-l-2 ${isAnimating ? 'animate-blink' : ''}`}
        style={{ height: '1em', marginLeft: '2px' }}
      >&nbsp;</span>
    </span>
  );
};
