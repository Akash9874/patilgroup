"use client";

import React from 'react';
import Image from 'next/image';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const OurVisionPage = () => {
  useGSAPAnimations();

  return (
    <div className="bg-white">
      {/* Vision Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 relative">
        {/* Right Edge Gradient Line - Desktop Only */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '864px',
            height: '28px',
            right: '0px',
            top: '100px',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        {/* Mobile Gradient Line */}
        <div className="lg:hidden absolute top-0 right-0 w-3/4 h-1 bg-gradient-to-l from-[#8A393B] via-[#1E3888] to-[#F2913F] opacity-80"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          {/* Vision Heading */}
          <div className="mb-6 sm:mb-8 md:mb-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#8A393B] mb-3 sm:mb-4">
              Vision
            </h2>
            {/* Mobile underline */}
            <div className="lg:hidden w-20 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto rounded-full"></div>
          </div>
          
          {/* Vision Content */}
          <div className="text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed">
              To be the world largest and low cost railway track component producer. To benchmark as quality producer of track components by merging the efficiencies of excellence in quality, productivity & cost. To make rail travel faster and safer.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 relative">
        {/* Left Edge Gradient Line - Desktop Only */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '280px',
            height: '28px',
            left: '0px',
            bottom: '290px',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        {/* Mobile Gradient Line */}
        <div className="lg:hidden absolute bottom-0 left-0 w-3/4 h-1 bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F] opacity-80"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          {/* Mission Heading */}
          <div className="mb-6 sm:mb-8 md:mb-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#8A393B] mb-3 sm:mb-4">
              Mission
            </h2>
            {/* Mobile underline */}
            <div className="lg:hidden w-20 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto rounded-full"></div>
          </div>
          
          {/* Mission Content */}
          <div className="text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed">
              Increasing the productivity and quality by strictly adhering to the manufacturing excellence process. Treating human resources as partners. Practicing continuous price discovery process. Bringing in customer delight with on time supply. Predominant growth by adding new customers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 relative">
        {/* Top Gradient Line */}
        <div 
          className="absolute"
          style={{
            top: '0px',
            left: '0px',
            width: '40%',
            height: '28px',
            flexShrink: 0,
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 38%, #F2913F 70%, rgba(242, 145, 63, 0) 100%)'
          }}
        />
        
        {/* Bottom Gradient Line - Full Width */}
        <div 
          className="absolute h-3 sm:h-4 md:h-5 lg:h-6"
          style={{
            bottom: '0px',
            left: '1200px',
            width: '40%',
            background: 'linear-gradient(90deg, #F2913F 0%, #1E3888 25%, #8A393B 50%, #1E3888 75%, #F2913F 100%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          {/* Core Values Heading */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2913F]">
              Core Values
            </h2>
          </div>
          
          {/* Values Pills */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <span className="core-value-pill px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-full" style={{ animationDelay: '0s' }}>
              Quality
            </span>
            <span className="core-value-pill px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-full" style={{ animationDelay: '1.5s' }}>
              Customer Centric
            </span>
            <span className="core-value-pill px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-full" style={{ animationDelay: '3s' }}>
              Human Centric
            </span>
            <span className="core-value-pill px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-full" style={{ animationDelay: '4.5s' }}>
              Innovative
            </span>
            <span className="core-value-pill px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-full" style={{ animationDelay: '6s' }}>
              Sustainable growth
            </span>
            <span className="core-value-pill px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-full" style={{ animationDelay: '7.5s' }}>
              Adaptive
            </span>
            <span className="core-value-pill px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-full" style={{ animationDelay: '9s' }}>
              Competitive
            </span>
          </div>
          
          <style jsx>{`
            @keyframes colorShift {
              0% {
                background-color: #8A393B;
              }
              20% {
                background-color: #F2913F;
              }
              40%, 100% {
                background-color: #8A393B;
              }
            }
            
            .core-value-pill {
              background-color: #8A393B;
              animation: colorShift 10.5s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>
    </div>
  );
};

export default OurVisionPage;
