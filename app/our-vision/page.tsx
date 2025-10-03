"use client";

import React from 'react';
import Image from 'next/image';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const OurVisionPage = () => {
  useGSAPAnimations();

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
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          {/* Patil Group Logo */}
          <div className="mb-6 sm:mb-8 md:mb-12">
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
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl">
              Our Vision
            </h1>
            <div className="w-16 sm:w-24 md:w-32 lg:w-40 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 relative">
        {/* Right Edge Gradient Line - Desktop Only */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '864px',
            height: '28px',
            right: '0px',
            top: '70px',
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
            bottom: '258px',
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
        {/* Top Gradient Line - Responsive */}
        <div 
          className="absolute h-3 sm:h-5 lg:h-7"
          style={{
            top: '0px',
            left: '0px',
            width: '70%',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 100%)'
          }}
        />
        
        {/* Bottom Gradient Line - Responsive */}
        <div 
          className="absolute h-3 sm:h-5 lg:h-7"
          style={{
            bottom: '0px',
            right: '0px',
            width: '70%',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 100%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          {/* Core Values Heading */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
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
              <div className="text-xl font-bold text-white px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
                Quality
              </div>
              <div className="text-xl font-bold text-white px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
                Customer Centric
              </div>
              <div className="text-xl font-bold text-white px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
                Human Centric
              </div>
              <div className="text-xl font-bold text-white px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
                Innovative
              </div>
              <div className="text-xl font-bold text-white px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
                Sustainable Growth
              </div>
              <div className="text-xl font-bold text-white px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
                Adaptive
              </div>
              <div className="text-xl font-bold text-white px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
                Competitive
              </div>
            </div>
            
            {/* Tablet and Desktop Layout */}
            <div className="hidden sm:block">
              {/* First Row */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                  Quality
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                  Customer Centric
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                  Human Centric
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                  Innovative
                </span>
              </div>
              
              {/* Second Row */}
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                  Sustainable Growth
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                  Adaptive
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                  Competitive
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVisionPage;
