"use client";

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type TypingAnimationProps = {
  text: string;
  className?: string;
  showCursor?: boolean;
  speed?: number;
  startAfterMs?: number;
  cursorColor?: string;
};

export const TypingAnimation = ({ text, className, showCursor = false, speed = 150, startAfterMs = 0, cursorColor }: TypingAnimationProps) => {
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
      const starter = setTimeout(() => {
        const interval = setInterval(() => {
          if (i < text.length) {
            setDisplayedText(text.substring(0, i + 1));
            i++;
          } else {
            clearInterval(interval);
            if (!showCursor) {
              setIsAnimating(false);
            }
          }
        }, speed);
        // clear interval when unmounting
        (ref as any).current && ((ref as any).current._typingInterval = interval);
      }, startAfterMs);
      return () => {
        clearTimeout(starter);
        const intervalRef = (ref as any).current && (ref as any).current._typingInterval;
        if (intervalRef) clearInterval(intervalRef);
      };
    }
  }, [inView, text, showCursor, speed, startAfterMs, ref]);

  return (
    <span ref={ref} className={className} style={{ whiteSpace: 'pre-wrap' }}>
      {displayedText}
      {showCursor && (
        <span
          className={`inline-block w-px border-l-2 ${isAnimating ? 'animate-blink' : ''}`}
          style={{ height: '1em', marginLeft: '2px', borderColor: cursorColor ?? 'currentColor' }}
        >&nbsp;</span>
      )}
    </span>
  );
};
