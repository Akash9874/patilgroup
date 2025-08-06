"use client";

import React from 'react';
import Image from 'next/image';

const InsertsPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/engineering-infra.jpg" // placeholder
          alt="SGCI Insert And Base Plates"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-8">
          <div className="w-1/2">
            <p className="text-7xl font-bold text-[#8A393B] opacity-75">04</p>
            <h1 className="text-7xl font-bold text-white mt-2">
              SGCI Insert And<br/>Base Plates
            </h1>
          </div>
        </div>
      </div>

      {/* SGCI Inserts Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-8">SGCI Inserts</h2>
          <div className="space-y-6 text-xl">
            <p>Patil Group manufactures SGCI inserts at its foundry in Kallakal, near Hyderabad.</p>
            <p>Production began in 2018 and includes all key steps: molten metal preparation, moulding, de-gating, shot blasting, and final grinding. The unit is equipped with modern systems, including robotics and IoT.</p>
            <p>Approved under QA-RDSO RT 381 Alt 9 and RT 6901 Alt 5. A second manufacturing unit was commissioned in 2020 in Bokaro, Jharkhand.</p>
            <p>Production for wider base sleeper inserts is also underway.</p>
          </div>
        </div>
      </div>

      {/* Two Images Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Image src="/fs300.jpg" alt="Base Plate" width={500} height={300} className="rounded-lg" />
            <Image src="/fs300.jpg" alt="Base Plate" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Base Plates Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-8">Base Plates for Metro Rails</h2>
          <p className="text-xl mb-8">Also manufactured at the same foundry. These plates are essential for slab track systems in urban rail infrastructure.</p>
          <h3 className="text-4xl font-bold mb-4">Explore More Railway Solutions</h3>
          <p className="text-xl mb-4">Patil Group offers a complete portfolio of railway infrastructure products.</p>
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
