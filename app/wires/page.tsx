"use client";

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WiresPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen relative">
          <Image
            src="/wires123.jpg"
            alt="HTS Wires"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
          
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-6 w-full max-w-lg mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-3 drop-shadow-2xl">
                HTS WIRES
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 font-medium drop-shadow-xl leading-relaxed">
                High Tensile Steel Wires for Railway Infrastructure
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-[600px]">
          <Image
            src="/wires123.jpg"
            alt="HTS Wires"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
          <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-8">
            <div className="w-1/3">
              <h1 className="text-7xl font-bold text-white mt-2">
                HTS<br/>WIRES
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Facilities Section */}
      <div className="bg-black py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center md:text-right mb-8 sm:mb-12 md:mb-16 slide-in-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[#F2913F]">Manufacturing</span><br />
              <span className="text-[#F2913F]">across </span>
              <span className="text-[#8A393B]">three</span><br />
              <span className="text-[#F2913F]">facilities.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="md:border-r border-gray-700 md:pr-4 slide-in-left p-4 sm:p-6 border border-gray-700 md:border-0 rounded-lg md:rounded-none">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8A393B]">Bobbili</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">(Andhra Pradesh)</p>
            </div>
            <div className="md:border-r border-gray-700 md:px-4 slide-in-right p-4 sm:p-6 border border-gray-700 md:border-0 rounded-lg md:rounded-none">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8A393B]">Medchal</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">(Telangana)</p>
            </div>
            <div className="md:pl-4 slide-in-left p-4 sm:p-6 border border-gray-700 md:border-0 rounded-lg md:rounded-none sm:col-span-2 md:col-span-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8A393B]">Bokaro</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">(Jharkand)</p>
            </div>
          </div>
        </div>
      </div>

      {/* HTS Wires Introduction */}
      <div className="bg-white text-black py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12 md:mb-16 fade-in-section">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8A393B] mb-4 sm:mb-6">HTS Wires: Strength Behind Every Track</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Patil Group is India's largest HTS wire manufacturer for concrete sleepers, producing 3-ply 3 mm and 7-ply 9.5 mm strand wires at ISO 9001-certified plants.
              With a total capacity of 60,000 MTPA, we are among the largest suppliers of steel wires for ports, tunnels, major bridges, and Indian Railways' largest single order.
            </p>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#F2913F] mb-6 sm:mb-8 md:mb-12 fade-in-section">Product Types</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center border-t border-gray-200 pt-6 sm:pt-8 slide-in-left">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#8A393B] font-semibold">3 ply × 3 mm HTS stranded wires</p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">as per IS 6006:1983</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center border-t border-gray-200 pt-6 sm:pt-8 slide-in-right">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#8A393B] font-semibold">7 ply × 9.5 mm HTS stranded wires</p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">as per IS 6006:1983</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start border-t border-gray-200 pt-6 sm:pt-8 slide-in-left">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#8A393B] font-semibold mb-4 md:mb-0">4 mm HT wire (indented)</p>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 space-y-2">
                <li>as per IS 6003:1983</li>
                <li>stress-relieved, hard drawn</li>
                <li>used in spun poles and PSCC turnout sleepers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-[#F5F4F1] text-black py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div className="relative slide-in-left order-2 md:order-1">
              <Image src="/wire4321.jpg" alt="Steel wire products" width={500} height={300} className="rounded-lg w-full h-auto" />
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg md:-ml-16 slide-in-right order-1 md:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8A393B] mb-3 sm:mb-4">High tensile steel wire products for prestressed concrete applications</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Patil Group began production of HTS wire strand in 1996.
                Products include 3 mm × 3 ply, 9.5 mm × 7 ply, and 4 mm PC wire.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mt-8 sm:mt-12 md:mt-16">
            <div className="slide-in-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                <span className="text-[#F2913F]">Aluminium Conductor Steel </span>
                <span className="text-[#8A393B]">Reinforced (ACSR) Core Wire</span>
              </h3>
            </div>
            <div className="slide-in-right">
              <p className="text-base sm:text-lg md:text-xl text-gray-600">Manufactured for electric traction used in 25 kV railway systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiresPage; 
