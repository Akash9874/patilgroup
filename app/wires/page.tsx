"use client";

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WiresPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/wireshero.jpg" // placeholder
          alt="HTS Wires"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-8">
          <div className="w-1/3">
            <p className="text-7xl font-bold text-[#8A393B] opacity-75">03</p>
            <h1 className="text-7xl font-bold text-white mt-2">
              HTS<br/>WIRES
          </h1>
          </div>
        </div>
      </div>

      {/* Manufacturing Facilities Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-right mb-16 slide-in-right">
            <h2 className="text-5xl font-bold">
              <span className="text-[#F2913F]">Manufacturing</span><br />
              <span className="text-[#F2913F]">across </span>
              <span className="text-[#8A393B]">three</span><br />
              <span className="text-[#F2913F]">facilities.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="border-r border-gray-700 pr-4 slide-in-left">
              <h3 className="text-4xl font-semibold text-[#8A393B]">Bobbili</h3>
              <p className="text-2xl text-gray-400">(Andhra Pradesh)</p>
            </div>
            <div className="border-r border-gray-700 px-4 slide-in-right">
              <h3 className="text-4xl font-semibold text-[#8A393B]">Ajmer</h3>
              <p className="text-2xl text-gray-400">(Andhra Pradesh)</p>
            </div>
            <div className="pl-4 slide-in-left">
              <h3 className="text-4xl font-semibold text-[#8A393B]">Bokaro</h3>
              <p className="text-2xl text-gray-400">(Jharkand)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Types Section */}
      <div className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#F2913F] mb-12 fade-in-section">Product Types</h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center border-t border-gray-200 pt-8 slide-in-left">
              <p className="text-2xl text-[#8A393B] font-semibold">3 ply × 3 mm HTS stranded wires</p>
              <p className="text-lg text-gray-600">as per IS 6006:1983</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center border-t border-gray-200 pt-8 slide-in-right">
              <p className="text-2xl text-[#8A393B] font-semibold">7 ply × 9.5 mm HTS stranded wires</p>
              <p className="text-lg text-gray-600">as per IS 6006:1983</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start border-t border-gray-200 pt-8 slide-in-left">
              <p className="text-2xl text-[#8A393B] font-semibold">4 mm HT wire (indented)</p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                <li>as per IS 6003:1983</li>
                <li>stress-relieved, hard drawn</li>
                <li>used in spun poles and PSCC turnout sleepers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-[#F5F4F1] text-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative slide-in-left">
              <Image src="/wireimage.jpg" alt="Steel wire products" width={500} height={300} className="rounded-lg" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg -ml-16 slide-in-right">
              <h3 className="text-2xl font-bold text-[#8A393B] mb-4">High tensile steel wire products for prestressed concrete applications</h3>
              <p className="text-lg text-gray-600">
                Patil Group began production of HTS wire strand in 1996.
                Products include 3 mm × 3 ply, 9.5 mm × 7 ply, and 4 mm PC wire.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <div className="slide-in-left">
              <h3 className="text-3xl font-bold">
                <span className="text-[#F2913F]">Aluminium Conductor Steel </span>
                <span className="text-[#8A393B]">Reinforced (ACSR) Core Wire</span>
              </h3>
            </div>
            <div className="slide-in-right">
              <p className="text-xl text-gray-600">Manufactured for electric traction used in 25 kV railway systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiresPage; 
