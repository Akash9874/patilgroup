"use client";

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TypingAnimation } from '@/components/TypingAnimation';
import { TiltCard } from '@/components/TiltCard';

const InsertsPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src="/insertshero1.jpg"
          alt="SGCI Inserts, Base Plates and Other Engineering Castings"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-8">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white mt-2">
              SGCI Inserts, Base Plates<br/>and Other Engineering Castings
            </h1>
          </div>
        </div>
      </div>

      {/* Precision Castings Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-8 fade-in-section">Precision Castings for Modern Mobility</h2>
          <div className="space-y-6 text-xl">
            <TypingAnimation text="Patil Group manufactures ductile iron and cast iron castings on advanced DISA ARPA 450 and ARPA 300 lines. With facilities in Bokaro (23,000 MT) and Hyderabad (13,000 MT), we deliver castings from 1 kg to 40 kg with assured consistency." className="block" speed={20} />
            <TypingAnimation text="Both plants hold RDSO and Delhi Metro approvals and are equipped with special-purpose machines and IoT systems, fully aligned with Industry 4.0 standards" className="block" speed={20} />
          </div>
        </div>
      </div>

      {/* SGCI Inserts Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-8 fade-in-section">SGCI Inserts</h2>
          <div className="space-y-6 text-xl">
            <TypingAnimation text="Patil Group produces SGCI inserts for all sleeper types, with our Bokaro plant housing the country's largest facility at a capacity of 1.3 million inserts per month." className="block" speed={20} />
          </div>
        </div>
      </div>

      {/* Two Images Section with Tilt Effect */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left flex justify-center">
              <TiltCard
                className="inline-block"
                maxTilt={10}
                scale={1}
                glareEnable={true}
                glareMaxOpacity={0.3}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                  <Image 
                    src="/inserts45.jpg" 
                    alt="SGCI Inserts" 
                    width={400} 
                    height={80} 
                    className="rounded-lg object-cover w-90 h-70" 
                  />
                </div>
              </TiltCard>
            </div>
            <div className="slide-in-right flex justify-center">
              <TiltCard
                className="inline-block"
                maxTilt={10}
                scale={1}
                glareEnable={true}
                glareMaxOpacity={0.1}
              >
                                 <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                   <Image 
                     src="/insertss69.jpg" 
                     alt="SGCI Inserts 2" 
                     width={500} 
                     height={300} 
                     className="rounded-lg object-cover w-full h-150" 
                   />
                 </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>

      {/* Base Plates Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8 fade-in-section">
          <h2 className="text-6xl md:text-7xl font-bold text-[#8A393B] mb-8">Base Plates</h2>
          <p className="text-2xl md:text-3xl mb-8">We manufacture 2-hole and 4-hole base plates for metro projects, supplying directly to MMRDA and DMRC to support reliable urban transit.</p>
          <div className="flex justify-center mt-12 fade-in-section">
            <Image
              src="/baseplates.jpg"
              alt="Base Plates for Metro Projects"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Railway Braking System Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8 fade-in-section">
          <h2 className="text-6xl md:text-7xl font-bold text-[#8A393B] mb-8">Railway Braking System</h2>
          <p className="text-2xl md:text-3xl mb-8">Our foundries deliver critical castings for railway braking assemblies, including lining holders, double eyes, hinges, levers, connectors, covers, and cylinders—ensuring safety and durability in service.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12 fade-in-section">
            <div className="flex justify-center">
              <Image
                src="/bsytem1.jpg"
                alt="Railway Braking System Components"
                width={500}
                height={350}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/bsystem2.jpg"
                alt="Railway Braking System Assembly"
                width={500}
                height={350}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Railway Suspension System Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8 fade-in-section">
          <h2 className="text-6xl md:text-7xl font-bold text-[#8A393B] mb-8">Railway Suspension System</h2>
          <p className="text-2xl md:text-3xl mb-8">We supply precision castings for suspension assemblies, covering eight labyrinth ring types and suspension tubes, engineered for stability and long service life.</p>
          <div className="flex justify-center mt-12 fade-in-section">
            <Image
              src="/suspension.jpg"
              alt="Railway Suspension System Components"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertsPage;
