'use client';

import { useState, useEffect } from 'react';

interface TextVariant {
  mainTitle: string[];
  subtitle: string[];
}

const textVariants: TextVariant[] = [
  {
    mainTitle: ['RAILWAY', 'ENGINEERING'],
    subtitle: ['SMARTER TRACK', 'SOLUTIONS,', 'SAFER MOBILITY']
  },
  {
    mainTitle: ['PRECISION', 'COMPONENTS'],
    subtitle: ['BUILT FOR ENDURING', 'PERFORMANCE']
  },
  {
    mainTitle: ['INNOVATIVE', 'DESIGN'],
    subtitle: ['RELIABILITY AT', 'EVERY STEP']
  }
];

interface SwitchingTextProps {
  isMobile?: boolean;
  isAnimated?: boolean;
}

export default function SwitchingText({ isMobile = false, isAnimated = false }: SwitchingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textVariants.length);
        setIsVisible(true);
      }, 300); // Half of transition duration for smooth effect
      
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentVariant = textVariants[currentIndex];

  if (isMobile) {
    return (
      <div 
        className={`transition-all duration-1000 ease-in-out transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '800ms' }}
      >
        {/* Main Heading */}
        <div className={`mb-6 transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {currentVariant.mainTitle.map((line, index) => (
            <h2 
              key={`${currentIndex}-${index}`}
              className="text-[#F2913F] font-extrabold text-3xl sm:text-4xl leading-[0.9] tracking-tight mb-1 mobile-hero-text mobile-heading drop-shadow-lg"
            >
              {line}
            </h2>
          ))}
        </div>
        
        {/* Animated Accent Line */}
        <div className="w-16 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mb-6 rounded-full accent-line mobile-smooth drop-shadow-sm"></div>
        
        {/* Subtitle */}
        <div className={`space-y-1 transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {currentVariant.subtitle.map((line, index) => (
            <h1 
              key={`${currentIndex}-sub-${index}`}
              className="text-white font-semibold text-lg leading-tight mobile-hero-text mobile-smooth drop-shadow-lg"
            >
              {line}
            </h1>
          ))}
        </div>
        
        {/* Interactive CTA Hint */}
        <div className="mt-8">
          <p className="text-gray-200 text-sm font-medium tracking-wide swipe-hint drop-shadow-md">
            Swipe to explore →
          </p>
        </div>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="w-full px-6 lg:px-8 xl:px-16">
      {/* Left Side Text */}
      <div 
        className={`absolute left-6 lg:left-8 xl:left-16 top-1/2 transform -translate-y-1/2 pt-8 transition-opacity duration-1000 ease-in-out ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className={`transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            {currentVariant.mainTitle.map((line, index) => (
              <span key={`${currentIndex}-main-${index}`}>
                <span className={`transition-colors duration-1000 ${isAnimated ? (index === 0 ? 'text-[#F2913F]' : 'text-[#8A393B]') : 'text-white'}`}>
                  {line}
                </span>
                {index < currentVariant.mainTitle.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Right Side Text */}
      <div 
        className={`absolute right-6 lg:right-8 xl:right-16 top-1/2 transform -translate-y-1/2 pt-8 transition-opacity duration-1000 ease-in-out ${isAnimated ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1200ms' }}
      >
        <div className={`transition-opacity duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight italic">
            {currentVariant.subtitle.map((line, index) => (
              <span key={`${currentIndex}-sub-${index}`}>
                {line}
                {index < currentVariant.subtitle.length - 1 && <br />}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
}
