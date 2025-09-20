"use client";

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const OurVisionPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
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
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          {/* Patil Group Logo */}
          <div className="mb-8 sm:mb-12">
            <Image
              src="/pg.png"
              alt="Patil Group Logo"
              width={400}
              height={400}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] object-contain"
              priority
            />
          </div>
          
          {/* Our Vision Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Our Vision
            </h1>
            <div className="w-24 sm:w-32 md:w-40 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12 relative">
        {/* Left Edge Gradient Line */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '564px',
            height: '28px',
            left: '0px',
            top: '0px',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        {/* Right Edge Gradient Line */}
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
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          {/* Vision Heading */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8A393B] mb-4">
              Vision
            </h2>
          </div>
          
          {/* Vision Content */}
          <div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed text-justify">
              To be the world largest and low cost railway track component producer. To benchmark as quality producer of track components by merging the efficiencies of excellence in quality, productivity & cost. To make rail travel faster and safer.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12 relative">
        {/* Left Edge Gradient Line */}
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
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          {/* Mission Heading */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8A393B] mb-4">
              Mission
            </h2>
          </div>
          
          {/* Mission Content */}
          <div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed text-justify">
              Increasing the productivity and quality by strictly adhering to the manufacturing excellence process. Treating human resources as partners. Practicing continuous price discovery process. Bringing in customer delight with on time supply. Predominant growth by adding new customers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-black py-16 sm:py-20 md:py-24 relative">
        {/* Top Gradient Line */}
        <div 
          className="absolute h-7"
          style={{
            top: '0px',
            left: '0px',
            width: '70%',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 100%)'
          }}
        />
        
        {/* Bottom Gradient Line */}
        <div 
          className="absolute h-7"
          style={{
            bottom: '0px',
            right: '0px',
            width: '70%',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 100%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          {/* Core Values Heading */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F2913F] mb-4">
              Core Values
            </h2>
          </div>
          
          {/* Values Grid */}
          <div className="text-center">
            {/* First Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-8 sm:mb-12 md:mb-16">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Quality
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Customer Centric
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Human Centric
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Innovative
              </span>
            </div>
            
            {/* Second Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Sustainable growth
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Adaptive
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Competitive
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVisionPage;
