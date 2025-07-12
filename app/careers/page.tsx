"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ApplyForm from '@/components/ApplyForm';

const CareersContent = () => {
  useScrollAnimation();
  
  return (
    <>
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "Careers" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Careers
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
                Join the Patil Group Family
              </h2>
              <p className="font-clash font-light text-2xl leading-[39px] tracking-[-0.25px] text-white">
                At Patil Group, we believe that our people are our greatest strength. As a leader in railway infrastructure and engineering, we offer an environment where innovation, excellence, and growth thrive. Whether you&apos;re an experienced professional or a young talent eager to make an impact, we provide opportunities to work on cutting-edge railway projects that shape the future of transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ApplyForm />
    </>
  );
};

const CareersPage = () => {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <CareersContent />
    </div>
  );
};

export default CareersPage; 