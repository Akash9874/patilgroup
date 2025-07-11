"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';

const LeadershipCard = () => (
  <div>
    <div className="bg-[#D9D9D9] h-80"></div>
    <div className="bg-gray-300 h-20"></div>
  </div>
);

const ManagementPage = () => {
  useScrollAnimation();
  
  return (
    <div className="bg-[#1E1E1E] text-white">
      <Navbar />
      
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "Management" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Management
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
                Built on Legacy, Driven by Innovation
              </h2>
              <p className="font-clash font-light text-2xl leading-[39px] tracking-[-0.25px] text-white">
                With decades of expertise, Patil Group has led the transformation of India's railway infrastructure, from introducing Concrete Sleepers to shaping the future with advanced track solutions. Our legacy of quality, innovation, and dedication to progress continues to fuel the evolution of global rail networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="bg-white text-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-clash font-bold text-[#8A393B] mb-16">
            Our leadership
          </h2>
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-8">
                <LeadershipCard />
                <LeadershipCard />
                <LeadershipCard />
              </div>
              <div className="grid grid-cols-3 gap-8">
            <LeadershipCard />
            <LeadershipCard />
              </div>
            </div>
          </div>

          <div 
            className="absolute top-0 right-0 w-2/5 h-[calc(50%_-_1rem)] bg-[#8A393B]"
            style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-amber-500" />
            </div>
          </div>
          <div 
            className="absolute bottom-0 right-0 w-2/5 h-[calc(50%_-_1rem)] bg-[#8A393B]"
            style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 30% 100%)' }}
          >
            <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-amber-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementPage; 