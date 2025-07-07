"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutUsPage = () => {
  useScrollAnimation();
  
  return (
    <div className="bg-[#1E1E1E] text-white">
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "About us" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                About us
              </h1>
            </div>
          </div>

          {/* Right side with black cut and text */}
          <div 
            className="h-full bg-[#1E1E1E] flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="space-y-6 animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16">
              <h2 className="text-5xl font-bold leading-tight">
                Engineering the Future of Railways with Precision, Innovation & Purpose
              </h2>
              <p className="font-clash font-light text-2xl leading-[39px] tracking-[-0.25px] text-white">
                For over 50 years, Patil Group has redefined standards in railway infrastructure—crafting advanced sleepers, fastening systems, and components that power India's mobility. Our commitment to quality, innovation, and sustainability drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pioneering Section */}
      <section className="bg-white text-gray-800 py-20">
        <div className="px-4 sm:px-6 lg:px-[59px]">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-clash font-medium text-[96px] leading-[85px] tracking-[-0.25px] slide-in-left">
                <span className="block text-[#8A393B] whitespace-nowrap">Pioneering the Railway</span>
                <span className="block text-amber-500 mt-2">Revolution</span>
              </h2>
            </div>
            <div className="lg:col-span-1 mt-8 lg:mt-32">
              <div className="text-lg text-gray-600 space-y-6 text-justify slide-in-right">
                <p>
                  Patil Group began its journey by trading agricultural products, laying the foundation for a legacy built on trust and innovation. Over the decades, we have become a key partner to Indian Railways—transitioning from wooden to concrete and now to composite sleepers.
                </p>
                <p>
                  Our commitment to quality, forward-thinking solutions, and industry-first advancements continues to support the evolving needs of India's railway infrastructure, ensuring safe and efficient transport across the nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="bg-white text-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Global Presence & Future Vision */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-clash font-medium text-[#8A393B] fade-in-section">
                  Global Presence & Future Vision
                </h3>
              </div>
              <div className="md:col-span-2">
                <div className="h-3 w-[366px] bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F] rounded-full mb-4 scale-in"></div>
                <p className="font-clash font-normal text-2xl leading-[30px] text-[#5E5E5E] text-justify fade-in-section">
                  With several turnkey projects under execution globally, Patil Group stands as a pioneer and a forward-thinking organization, ready to meet the evolving needs of Indian Railways and the global railway industry. As the future of rail transportation changes, Patil Group is well-prepared to continue its legacy of quality and innovation.
                </p>
              </div>
            </div>

            {/* Innovating for Metro Rail */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-clash font-medium text-[#8A393B] fade-in-section">
                  Innovating for Metro Rail
                </h3>
              </div>
              <div className="md:col-span-2">
                <div className="h-3 w-[366px] bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F] rounded-full mb-4 scale-in"></div>
                <p className="font-clash font-normal text-2xl leading-[30px] text-[#5E5E5E] text-justify fade-in-section">
                  Our commitment to innovation extends to Metro Rail projects, where we supply Fasteners for Urban Rapid Mass Transport systems in cities like Delhi and Chennai. Through technology partnerships with global leaders, we ensure our products meet international standards, providing a technological edge.
                </p>
              </div>
            </div>

            {/* Quality Commitment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-clash font-medium text-[#8A393B] fade-in-section">
                  Quality Commitment
                </h3>
              </div>
              <div className="md:col-span-2">
                <div className="h-3 w-[366px] bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F] rounded-full mb-4 scale-in"></div>
                <p className="font-clash font-normal text-2xl leading-[30px] text-[#5E5E5E] text-justify fade-in-section">
                  With 20 manufacturing facilities across India, we are dedicated to delivering the highest-quality products that ensure the safety and comfort of millions of railway passengers every day. Our unique Quality Command Center at headquarters enforces strict standards across all units, reflecting our unwavering commitment to excellence—no matter the scale or challenge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Train Image Section */}
      <section className="bg-white py-12">
        <div className="px-4 sm:px-6 lg:px-[61px]">
          <img 
            src="/mt train.jpg" 
            alt="Metro train on an elevated track" 
            className="w-full h-[500px] object-cover scale-in"
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white text-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-clash font-bold slide-in-left">
            <span className="text-[#8A393B]">Our </span>
            <span className="text-amber-500">Achievements</span>
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-xl text-gray-600 slide-in-right">
            Patil Group has played a pivotal role in revolutionizing India's rail infrastructure, consistently delivering exceptional results with a focus on innovation, efficiency, and quality. From supplying over 40 million sleepers to Indian Railways and industrial giants, to managing India's two largest rail welding depots, the company has made significant contributions to the growth and modernization of the rail sector. Some key milestones include
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-2xl h-96 flex flex-col justify-end items-center p-4 scale-in">
                <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage; 