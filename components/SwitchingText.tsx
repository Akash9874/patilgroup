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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textVariants.length);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50); // Small delay to ensure content change happens before fade in
        
      }, 500); // Longer fade out duration for smoother effect
      
    }, 4500); // Slightly longer display time

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
        <div className="mb-6 overflow-hidden">
          {currentVariant.mainTitle.map((line, index) => (
            <h2 
              key={`${currentIndex}-${index}`}
              className={`text-[#F2913F] font-extrabold text-3xl sm:text-4xl leading-[0.9] tracking-tight mb-1 mobile-hero-text mobile-heading drop-shadow-lg
                transition-all duration-700 ease-out transform ${
                  isTransitioning 
                    ? 'opacity-0 translate-y-4 scale-95' 
                    : 'opacity-100 translate-y-0 scale-100'
                }`}
              style={{ 
                transitionDelay: isTransitioning ? `${index * 100}ms` : `${(index * 100) + 200}ms`,
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {line}
            </h2>
          ))}
        </div>
        
        {/* Animated Accent Line */}
        <div className={`w-16 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mb-6 rounded-full accent-line mobile-smooth drop-shadow-sm
          transition-all duration-500 ease-out transform ${
            isTransitioning 
              ? 'opacity-0 scale-x-0' 
              : 'opacity-100 scale-x-100'
          }`}
          style={{ 
            transformOrigin: 'left',
            transitionDelay: isTransitioning ? '0ms' : '400ms'
          }}
        ></div>
        
        {/* Subtitle */}
        <div className="space-y-1 overflow-hidden">
          {currentVariant.subtitle.map((line, index) => (
            <h1 
              key={`${currentIndex}-sub-${index}`}
              className={`text-white font-semibold text-lg leading-tight mobile-hero-text mobile-smooth drop-shadow-lg
                transition-all duration-600 ease-out transform ${
                  isTransitioning 
                    ? 'opacity-0 translate-x-6 blur-sm' 
                    : 'opacity-100 translate-x-0 blur-0'
                }`}
              style={{ 
                transitionDelay: isTransitioning ? `${index * 80}ms` : `${(index * 80) + 600}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {line}
            </h1>
          ))}
        </div>
        
        {/* Interactive CTA Hint */}
        <div className="mt-8">
          <p className={`text-gray-200 text-sm font-medium tracking-wide swipe-hint drop-shadow-md
            transition-all duration-500 ease-out ${
              isTransitioning 
                ? 'opacity-0 translate-y-2' 
                : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: isTransitioning ? '0ms' : '800ms' }}
          >
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
        <div className="overflow-hidden">
          <h2 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            {currentVariant.mainTitle.map((line, index) => (
              <span key={`${currentIndex}-main-${index}`} className="block">
                <span className={`inline-block transition-all duration-800 ease-out transform ${
                  isTransitioning 
                    ? 'opacity-0 translate-y-8 scale-95 rotate-1' 
                    : 'opacity-100 translate-y-0 scale-100 rotate-0'
                  } ${isAnimated ? (index === 0 ? 'text-[#F2913F]' : 'text-[#8A393B]') : 'text-white'}`}
                  style={{ 
                    transitionDelay: isTransitioning ? `${index * 150}ms` : `${(index * 150) + 300}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    filter: isTransitioning ? 'blur(2px)' : 'blur(0px)'
                  }}
                >
                  {line}
                </span>
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
        <div className="overflow-hidden">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight italic">
            {currentVariant.subtitle.map((line, index) => (
              <span key={`${currentIndex}-sub-${index}`} className="block">
                <span className={`inline-block transition-all duration-700 ease-out transform ${
                  isTransitioning 
                    ? 'opacity-0 translate-x-8 translate-y-4 scale-90 skew-x-2' 
                    : 'opacity-100 translate-x-0 translate-y-0 scale-100 skew-x-0'
                  }`}
                  style={{ 
                    transitionDelay: isTransitioning ? `${index * 120}ms` : `${(index * 120) + 500}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    filter: isTransitioning ? 'blur(1px)' : 'blur(0px)'
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
}

