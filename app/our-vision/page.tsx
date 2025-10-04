"use client";

import React from 'react';
import Image from 'next/image';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import { useInView } from 'react-intersection-observer';

const OurVisionPage = () => {
  useGSAPAnimations();
  
  // Intersection observers for each section
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [coreValuesRef, coreValuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/ourvisionhero.jpg"
            alt="Our Vision Hero Background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Black translucent overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div ref={heroRef} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          {/* Patil Group Logo */}
          <div 
            className={`mb-6 sm:mb-8 md:mb-12 transition-all duration-800 will-change-transform ${
              heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Image
              src="/pg.png"
              alt="Patil Group Logo"
              width={400}
              height={400}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] object-contain"
              priority
            />
          </div>
          
          {/* Our Vision Heading */}
          <div 
            className={`transition-all duration-700 will-change-transform ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl">
              Our Vision
            </h1>
            <div className="w-16 sm:w-24 md:w-32 lg:w-40 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="bg-white py-12 sm:py-16 md:py-20 relative">
        {/* Right Edge Gradient Line - Desktop Only */}
        <div 
          className={`absolute hidden lg:block transition-all duration-1000 will-change-transform ${
            visionInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            width: '864px',
            height: '28px',
            right: '0px',
            top: '70px',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
            transformOrigin: 'right',
            transitionDelay: '300ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        
        {/* Mobile Gradient Line */}
        <div 
          className={`lg:hidden absolute top-0 right-0 w-3/4 h-1 bg-gradient-to-l from-[#8A393B] via-[#1E3888] to-[#F2913F] opacity-80 transition-all duration-1000 will-change-transform ${
            visionInView ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            transformOrigin: 'right',
            transitionDelay: '300ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        ></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Heading */}
          <div 
            className={`mb-6 sm:mb-8 md:mb-12 text-center lg:text-left transition-all duration-700 will-change-transform ${
              visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '100ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#8A393B] mb-3 sm:mb-4">
              Vision
            </h2>
            {/* Mobile underline */}
            <div className="lg:hidden w-20 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto rounded-full"></div>
          </div>
          
          {/* Vision Content */}
          <div 
            className={`text-center lg:text-left transition-all duration-700 will-change-transform ${
              visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '400ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed">
              To be the world largest and low cost railway track component producer. To benchmark as quality producer of track components by merging the efficiencies of excellence in quality, productivity & cost. To make rail travel faster and safer.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="bg-white py-12 sm:py-16 md:py-20 relative">
        {/* Left Edge Gradient Line - Desktop Only */}
        <div 
          className={`absolute hidden lg:block transition-all duration-1000 will-change-transform ${
            missionInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            width: '280px',
            height: '28px',
            left: '0px',
            bottom: '258px',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)',
            transformOrigin: 'left',
            transitionDelay: '300ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        
        {/* Mobile Gradient Line */}
        <div 
          className={`lg:hidden absolute bottom-0 left-0 w-3/4 h-1 bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F] opacity-80 transition-all duration-1000 will-change-transform ${
            missionInView ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            transformOrigin: 'left',
            transitionDelay: '300ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        ></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Heading */}
          <div 
            className={`mb-6 sm:mb-8 md:mb-12 text-center lg:text-left transition-all duration-700 will-change-transform ${
              missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '100ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#8A393B] mb-3 sm:mb-4">
              Mission
            </h2>
            {/* Mobile underline */}
            <div className="lg:hidden w-20 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto rounded-full"></div>
          </div>
          
          {/* Mission Content */}
          <div 
            className={`text-center lg:text-left transition-all duration-700 will-change-transform ${
              missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '400ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed">
              Increasing the productivity and quality by strictly adhering to the manufacturing excellence process. Treating human resources as partners. Practicing continuous price discovery process. Bringing in customer delight with on time supply. Predominant growth by adding new customers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={coreValuesRef} className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 relative">
        {/* Top Gradient Line - Responsive */}
        <div 
          className={`absolute h-3 sm:h-5 lg:h-7 transition-all duration-1000 will-change-transform ${
            coreValuesInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            top: '0px',
            left: '0px',
            width: '70%',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 100%)',
            transformOrigin: 'left',
            transitionDelay: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        
        {/* Bottom Gradient Line - Responsive */}
        <div 
          className={`absolute h-3 sm:h-5 lg:h-7 transition-all duration-1000 will-change-transform ${
            coreValuesInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            bottom: '0px',
            right: '0px',
            width: '70%',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 100%)',
            transformOrigin: 'right',
            transitionDelay: '400ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Core Values Heading */}
          <div 
            className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-700 will-change-transform ${
              coreValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '100ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F2913F] mb-3 sm:mb-4">
              Core Values
            </h2>
            {/* Mobile underline */}
            <div className="lg:hidden w-24 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto rounded-full"></div>
          </div>
          
          {/* Values Grid - Mobile Optimized */}
          <div className="text-center">
            {/* Mobile Layout - Stack in single column on small screens */}
            <div className="block sm:hidden space-y-6">
              {['Quality', 'Customer Centric', 'Human Centric', 'Innovative', 'Sustainable Growth', 'Adaptive', 'Competitive'].map((value, index) => (
                <div 
                  key={value}
                  className={`text-xl font-bold text-white px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm transition-all duration-600 will-change-transform ${
                    coreValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 80}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {value}
                </div>
              ))}
            </div>
            
            {/* Tablet and Desktop Layout */}
            <div className="hidden sm:block">
              {/* First Row */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                {['Quality', 'Customer Centric', 'Human Centric', 'Innovative'].map((value, index) => (
                  <span 
                    key={value}
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white transition-all duration-600 will-change-transform ${
                      coreValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 80}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {value}
                  </span>
                ))}
              </div>
              
              {/* Second Row */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                {['Sustainable Growth', 'Adaptive', 'Competitive'].map((value, index) => (
                  <span 
                    key={value}
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white transition-all duration-600 will-change-transform ${
                      coreValuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{
                      transitionDelay: `${920 + index * 80}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVisionPage;
