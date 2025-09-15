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
  const [isFlipping, setIsFlipping] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'out' | 'in'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setAnimationPhase('out');
      
      // After flip-out animation completes, change content and flip-in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textVariants.length);
        setAnimationPhase('in');
        
        // Reset to idle state after flip-in completes
        setTimeout(() => {
          setIsFlipping(false);
          setAnimationPhase('idle');
        }, 1200); // Duration of flip-in animation (now 1.2s)
        
      }, 600); // Duration of flip-out animation (now 0.6s)
      
    }, 5000); // Switch every 5 seconds (increased for smoother experience)

    return () => clearInterval(interval);
  }, []);

  const currentVariant = textVariants[currentIndex];

  const getFlipClasses = (index: number, isMainTitle: boolean = true) => {
    if (!isFlipping) return '';
    
    // Smoother stagger timing - reduced delays for more fluid motion
    const staggerIndex = Math.min(index + 1, 3); // Cap at 3 to use available stagger classes
    
    if (animationPhase === 'out') {
      return `flip-out flip-stagger-${staggerIndex}`;
    } else if (animationPhase === 'in') {
      return `flip-in flip-stagger-${staggerIndex}`;
    }
    
    return '';
  };

  if (isMobile) {
    return (
      <div 
        className={`transition-all duration-1000 ease-in-out transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '800ms' }}
      >
        {/* Main Heading */}
        <div className="mb-6 flip-text-container">
          {currentVariant.mainTitle.map((line, index) => (
            <h2 
              key={`${currentIndex}-${index}`}
              className={`text-[#F2913F] font-extrabold text-5xl sm:text-6xl leading-[0.9] tracking-tight mb-1 mobile-hero-text mobile-heading drop-shadow-lg ${getFlipClasses(index, true)}`}
            >
              {line}
            </h2>
          ))}
        </div>
        
        {/* Animated Accent Line */}
        <div className="w-16 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mb-6 rounded-full accent-line mobile-smooth drop-shadow-sm"></div>
        
        {/* Subtitle */}
        <div className="space-y-1 flip-text-container">
          {currentVariant.subtitle.map((line, index) => (
            <h1 
              key={`${currentIndex}-sub-${index}`}
              className={`text-white font-semibold text-2xl leading-tight mobile-hero-text mobile-smooth drop-shadow-lg ${getFlipClasses(index, false)}`}
            >
              {line}
            </h1>
          ))}
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
        <div className="flip-text-container">
          <h2 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            {currentVariant.mainTitle.map((line, index) => (
              <span key={`${currentIndex}-main-${index}`} className={getFlipClasses(index, true)}>
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
        <div className="flip-text-container">
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight italic">
            {currentVariant.subtitle.map((line, index) => (
              <span key={`${currentIndex}-sub-${index}`} className={getFlipClasses(index, false)}>
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

