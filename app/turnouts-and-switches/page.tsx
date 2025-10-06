"use client";

import React from 'react';
import Image from 'next/image';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const TurnoutsAndSwitchesPage = () => {
  useGSAPAnimations();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/engineering-infra.jpg" // placeholder
          alt="Turnouts and switches"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-8">
          <div className="w-1/2">
            <p className="text-7xl font-bold text-[#8A393B] opacity-75">05</p>
            <h1 className="hero-title font-bold text-white mt-2">
              Turnouts and<br/>Switches
            </h1>
          </div>
        </div>
      </div>

      {/* Key Applications Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-8">
          <div className="pr-8 slide-in-left">
            <h2 className="text-3xl font-semibold mb-6">Engineered for precise movement and control</h2>
            <h3 className="text-5xl font-bold text-[#8A393B] mb-6">Key Applications:</h3>
            <ul className="list-disc list-inside space-y-2 text-xl">
              <li>High-speed and heavy haul rail</li>
              <li>Urban metro systems</li>
              <li>Slab track and ballasted track systems</li>
              <li>All gauges and fastening types</li>
            </ul>
          </div>
          <div className="border-l border-gray-700 slide-in-right">
            {/* Divider */}
          </div>
        </div>
      </div>

      {/* Why Patil Turnouts? Section */}
      <div className="bg-[#F5F4F1] text-black py-16">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10 slide-in-left">
              <Image src="/engineering-infra.jpg" alt="Patil Turnouts" width={500} height={300} className="rounded-lg" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg -ml-24 relative z-20 slide-in-right">
              <h3 className="text-3xl font-bold text-[#8A393B] mb-4">Why Patil Turnouts?</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Lower maintenance</li>
                <li>Longer service life</li>
                <li>Compatible with all major track formats</li>
                <li>Custom solutions for technical requirements</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left fade-in-section">
            <p className="text-xl text-[#F2913F] font-semibold">
              Each switch is designed for balanced force transfer. It reduces wear, improves ride quality, and extends operational life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnoutsAndSwitchesPage;
