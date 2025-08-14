"use client";

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TypingAnimation } from '@/components/TypingAnimation';

const InsertsPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/insertshero1.jpg"
          alt="SGCI Insert And Base Plates"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-8">
          <div className="w-1/2">
            <h1 className="text-7xl font-bold text-white mt-2">
              SGCI Insert And<br/>Base Plates
            </h1>
          </div>
        </div>
      </div>

      {/* SGCI Inserts Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-8 fade-in-section">SGCI Inserts</h2>
          <div className="space-y-6 text-xl">
            <TypingAnimation text="Patil Group manufactures SGCI inserts at its foundry in Kallakal, near Hyderabad." className="block" speed={20} />
            <TypingAnimation text="Production began in 2018 and includes all key steps: molten metal preparation, moulding, de-gating, shot blasting, and final grinding. The unit is equipped with modern systems, including robotics and IoT." className="block" speed={20} />
            <TypingAnimation text="Approved under QA-RDSO RT 381 Alt 9 and RT 6901 Alt 5. A second manufacturing unit was commissioned in 2020 in Bokaro, Jharkhand." className="block" speed={20} />
            <TypingAnimation text="Production for wider base sleeper inserts is also underway." className="block" speed={20} />
          </div>
        </div>
      </div>

      {/* Two Images Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="slide-in-left">
              <Image src="/insertsimage.png" alt="SGCI Inserts" width={350} height={80} className="rounded-lg object-cover w-300 h-100 mx-auto" />
            </div>
            <div className="slide-in-right">
              <Image src="/insertsimage2.jpg" alt="SGCI Inserts 2" width={500} height={300} className="rounded-lg object-cover w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Base Plates Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8 fade-in-section">
          <h2 className="text-6xl md:text-7xl font-bold text-[#8A393B] mb-8">Base Plates for Metro Rails</h2>
          <p className="text-2xl md:text-3xl mb-8">Also manufactured at the same foundry. These plates are essential for slab track systems in urban rail infrastructure.</p>
          <h3 className="text-5xl md:text-6xl font-bold mb-4">Explore More Railway Solutions</h3>
          <p className="text-2xl md:text-3xl mb-4">Patil Group offers a complete portfolio of railway infrastructure products.</p>
          <a href="#" className="text-[#F2913F] font-semibold flex items-center">
            Read More 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsertsPage;
