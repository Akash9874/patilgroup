"use client";

import React from 'react';
import Image from 'next/image';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import { TypingAnimation } from '@/components/TypingAnimation';
import { TiltCard } from '@/components/TiltCard';

const InsertsPage = () => {
  useGSAPAnimations();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen relative">
          <Image
            src="/insertshero1.jpg"
            alt="SGCI Inserts, Base Plates, and Other Engineering Castings"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
          
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-6 w-full max-w-lg mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3 drop-shadow-2xl">
                SGCI Inserts and Castings
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 font-medium drop-shadow-xl leading-relaxed">
                Precision Engineering for Railway Infrastructure
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-[600px]">
          <Image
            src="/insertshero1.jpg"
            alt="SGCI Inserts, Base Plates, and Other Engineering Castings"
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
      </div>

      {/* Precision Castings Section */}
      <div className="bg-white text-black py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="fade-in-section">
            {/* Mobile Layout */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#8A393B] mb-3 sm:mb-4">
              Precision Castings
            </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F2913F] mb-6 sm:mb-8 md:mb-12">
              for Modern Mobility
            </h3>
            </div>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed">
              <p className="text-justify">
                Patil Group manufactures ductile-iron and cast-iron castings on advanced DISA ARPA 450 and ARPA 300 lines. With facilities in Bokaro (23,000 MT) and Hyderabad (13,000 MT), we deliver castings from 1 kg to 40 kg with assured consistency.
              </p>
              <p className="text-justify">
                Both plants hold RDSO and Delhi Metro approvals and are equipped with special-purpose machines and IoT systems, fully aligned with Industry 4.0 standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SGCI Inserts Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="fade-in-section">
            
            {/* Mobile-First Layout */}
            <div className="lg:hidden">
              {/* Mobile Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8A393B] leading-tight mb-4">
                  SGCI Inserts
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto mb-4 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Patil Group produces SGCI inserts for all sleeper types, with our Bokaro plant housing the country's largest facility, with a capacity of 1.3 million inserts per month.
                </p>
              </div>
              
              {/* Mobile Product Grid */}
              <div className="space-y-8">
                {/* SGCI Insert RT 6901 */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <Image 
                        src="/inserts45.png" 
                        alt="SGCI Insert RT 6901" 
                        width={200} 
                        height={200} 
                        className="object-contain h-32 sm:h-40 w-auto rounded-lg" 
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-bold text-black mb-2">SGCI INSERT</h4>
                      <p className="text-base text-gray-600 mb-1">RT 6901</p>
                      <p className="text-base font-medium text-[#F2913F]">1.484 kg</p>
                    </div>
                  </div>
                </div>

                {/* SGCI Insert RT 3705 */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <Image 
                        src="/insertss69.png" 
                        alt="SGCI Insert RT 3705" 
                        width={200} 
                        height={200} 
                        className="object-contain h-32 sm:h-40 w-auto rounded-lg" 
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-bold text-black mb-2">SGCI INSERT</h4>
                      <p className="text-base text-gray-600 mb-1">RT 3705</p>
                      <p className="text-base font-medium text-[#F2913F]">1.97 kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            {/* Left side - Product Images */}
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-12">
                
                {/* SGCI Insert RT 6901 */}
                <div className="text-center">
                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <Image 
                      src="/inserts45.png" 
                      alt="SGCI Insert RT 6901" 
                      width={300} 
                      height={350} 
                      className="mx-auto object-contain h-64 w-auto" 
                    />
                  </div>
                  <div className="space-y-1">
                      <h4 className="text-xl font-bold text-black">SGCI INSERT</h4>
                      <p className="text-xl text-black">RT 6901</p>
                      <p className="text-xl text-black">1.484 kg</p>
              </div>
            </div>

                {/* SGCI Insert RT 3705 */}
                <div className="text-center">
                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <Image 
                      src="/insertss69.png" 
                      alt="SGCI Insert RT 3705" 
                      width={300} 
                      height={350} 
                      className="mx-auto object-contain h-64 w-auto" 
                    />
                  </div>
                  <div className="space-y-1">
                      <h4 className="text-xl font-bold text-black">SGCI INSERT</h4>
                      <p className="text-xl text-black">RT 3705</p>
                      <p className="text-xl text-black">1.97 kg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
              <div className="col-span-1 relative">
              <div className="flex items-center mb-6">
                  <h2 className="text-5xl font-bold text-[#8A393B] leading-tight whitespace-nowrap">
                  SGCI Inserts
                </h2>
                {/* Inline Gradient Line */}
                <div 
                    className="ml-4 flex-shrink-0"
                  style={{
                    width: '400px',
                    height: '28px',
                    background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 100%)'
                  }}
                />
              </div>
                <p className="text-4xl text-gray-700 leading-relaxed text-justify">
                Patil Group produces SGCI inserts for all sleeper types, with our Bokaro plant housing the country's largest facility, with a capacity of 1.3 million inserts per month.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base Plates Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12 relative">
        {/* Left Edge Gradient Line - Desktop Only */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '164px',
            height: '28px',
            left: '0px',
            top: '70px',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="fade-in-section">
            
            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Mobile Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8A393B] mb-4">
                  Base Plates
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto mb-4 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  We manufacture two-hole and four-hole base plates for metro projects, supplying directly to MMRDA and DMRC to support reliable urban transit.
                </p>
              </div>
              
              {/* Mobile Product Card */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full max-w-xs">
                    <Image
                      src="/baseplates.png"
                      alt="MMRDA project coated four-hole base plate" 
                      width={300} 
                      height={300}
                      className="w-full h-48 sm:h-56 object-contain rounded-lg" 
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-black mb-2">MMRDA project</h4>
                    <p className="text-base text-gray-600 mb-1">Coated four-hole base plate</p>
                    <p className="text-base font-medium text-[#F2913F]">9.30 kg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
          {/* Section Header */}
              <div className="text-left mb-12">
                <h2 className="text-7xl font-bold text-[#8A393B]">
              Base Plates
            </h2>
          </div>

              <div className="grid grid-cols-3 gap-12 items-center">
            
            {/* Left side - Content */}
                <div className="col-span-2">
                  <p className="text-4xl text-gray-700 leading-relaxed text-justify">
                We manufacture two-hole and four-hole base plates for metro projects, supplying directly to MMRDA and DMRC to support reliable urban transit.
              </p>
            </div>

            {/* Right side - Product Image and Specs */}
                <div className="col-span-1 text-center">
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <Image
              src="/baseplates.png"
                  alt="MMRDA project coated four-hole base plate" 
                  width={500} 
              height={500}
                  className="mx-auto object-contain h-96 w-auto" 
                />
              </div>
              <div className="space-y-1">
                    <h4 className="text-xl font-bold text-black">MMRDA project</h4>
                    <p className="text-xl text-black">Coated four-hole base plate</p>
                    <p className="text-xl text-black">9.30 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Railway Braking System Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="fade-in-section">
            
            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Mobile Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8A393B] mb-4">
                  Railway Braking System
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto mb-4 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our foundries deliver critical castings for railway braking assemblies, including lining holders, double eyes, hinges, levers, connectors, covers, and cylinders—ensuring safety and durability in service.
                </p>
              </div>
              
              {/* Mobile Product Grid */}
              <div className="space-y-6">
                {/* Hinge Component */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/bsytem1.png"
                        alt="DAKO-CZ India Pvt Ltd hinge" 
                        width={150} 
                        height={150} 
                        className="object-contain h-24 sm:h-32 w-auto rounded-lg" 
                      />
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h4 className="text-sm font-bold text-black mb-1">DAKO-CZ India Pvt Ltd, Hyderabad</h4>
                      <p className="text-sm text-gray-600 mb-1">Hinge</p>
                      <p className="text-sm text-gray-600 mb-1">BK 5551</p>
                      <p className="text-sm font-medium text-[#F2913F]">13.0 kg</p>
                    </div>
                  </div>
                </div>

                {/* Lining Holder Component */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/bsystem2.png"
                        alt="DAKO-CZ India Pvt Ltd lining holder" 
                        width={150} 
                        height={150} 
                        className="object-contain h-24 sm:h-32 w-auto rounded-lg" 
                      />
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h4 className="text-sm font-bold text-black mb-1">DAKO-CZ India Pvt Ltd, Hyderabad</h4>
                      <p className="text-sm text-gray-600 mb-1">Lining holder (LH and RH)</p>
                      <p className="text-sm text-gray-600 mb-1">20270-163 & 20270-164</p>
                      <p className="text-sm font-medium text-[#F2913F]">8.10 kg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-5 gap-12 items-center">
            
            {/* Left side - Product Images */}
              <div className="col-span-2">
              <div className="space-y-12">
                
                {/* Hinge Component */}
                <div className="flex flex-col items-start">
                  <div className="bg-gray-50 rounded-lg p-6 mb-4 w-full max-w-sm">
              <Image
                src="/bsytem1.png"
                        alt="DAKO-CZ India Pvt Ltd hinge" 
                        width={300} 
                        height={200} 
                        className="mx-auto object-contain h-40 w-auto" 
              />
            </div>
                  <div className="space-y-1">
                      <h4 className="text-xl font-bold text-black">DAKO-CZ India Pvt Ltd, Hyderabad</h4>
                      <p className="text-xl text-black">Hinge</p>
                      <p className="text-xl text-black">BK 5551</p>
                      <p className="text-xl text-black">13.0 kg</p>
                  </div>
                </div>

                {/* Lining Holder Component */}
                <div className="flex flex-col items-start">
                  <div className="bg-gray-50 rounded-lg p-6 mb-4 w-full max-w-sm">
              <Image
                src="/bsystem2.png"
                        alt="DAKO-CZ India Pvt Ltd lining holder" 
                        width={300} 
                        height={200} 
                        className="mx-auto object-contain h-40 w-auto" 
                      />
                    </div>
                  <div className="space-y-1">
                      <h4 className="text-xl font-bold text-black">DAKO-CZ India Pvt Ltd, Hyderabad</h4>
                      <p className="text-xl text-black">Lining holder (LH and RH)</p>
                      <p className="text-xl text-black">20270-163 & 20270-164</p>
                      <p className="text-xl text-black">8.10 kg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
              <div className="col-span-3 relative">
              <div className="flex items-center mb-6">
                  <h2 className="text-5xl font-bold text-[#8A393B] leading-tight whitespace-nowrap">
                  Railway Braking System
                </h2>
                {/* Inline Gradient Line */}
                <div 
                    className="ml-4 flex-shrink-0"
                  style={{
                    width: '500px',
                    height: '28px',
                    background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 100%)'
                  }}
                />
              </div>
                <p className="text-4xl text-gray-700 leading-relaxed text-justify">
                Our foundries deliver critical castings for railway braking assemblies, including lining holders, double eyes, hinges, levers, connectors, covers, and cylinders—ensuring safety and durability in service.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Railway Suspension System Section */}
      <section className="bg-white py-8 sm:py-10 md:py-12 relative">
        {/* Left Edge Gradient Line - Desktop Only */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '264px',
            height: '28px',
            left: '0px',
            top: '30px',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="fade-in-section">
            
            {/* Mobile Layout */}
            <div className="lg:hidden">
              {/* Mobile Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8A393B] mb-4">
                  Railway Suspension System
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#8A393B] to-[#F2913F] mx-auto mb-4 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  We supply precision castings for suspension assemblies, covering eight labyrinth ring types and suspension tubes, engineered for stability and long service life.
                </p>
              </div>
              
              {/* Mobile Product Card */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-full max-w-xs">
                    <Image
                      src="/suspension.png"
                      alt="Indore Nitriders lining labyrinth ring" 
                      width={250} 
                      height={250} 
                      className="w-full h-48 sm:h-56 object-contain rounded-lg" 
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-base font-bold text-black mb-2">Indore Nitriders; Indore Lining</h4>
                    <p className="text-sm text-gray-600 mb-1">Labyrinth ring (eight different parts)</p>
                    <p className="text-sm text-gray-600 mb-1">1209-01-211-927</p>
                    <p className="text-sm font-medium text-[#F2913F]">10.00 to 30.00 kg</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-12 items-start -mt-4">
              
              {/* Left side - Content */}
              <div className="col-span-2">
                <div className="mb-4">
                  <h2 className="text-5xl font-bold text-[#8A393B] leading-tight whitespace-nowrap mb-4">
                    Railway Suspension System
                  </h2>
                </div>
                <p className="text-4xl text-gray-700 leading-relaxed text-justify">
                We supply precision castings for suspension assemblies, covering eight labyrinth ring types and suspension tubes, engineered for stability and long service life.
              </p>
            </div>

            {/* Right side - Product Image and Specs */}
              <div className="col-span-1 text-center">
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <Image
              src="/suspension.png"
                  alt="Indore Nitriders lining labyrinth ring" 
                  width={300} 
                  height={300} 
                  className="mx-auto object-contain h-64 w-auto" 
                />
              </div>
              <div className="space-y-1 text-left">
                  <h4 className="text-xl font-bold text-black">Indore Nitriders; Indore Lining</h4>
                  <p className="text-xl text-black">Labyrinth ring (eight different parts)</p>
                  <p className="text-xl text-black">1209-01-211-927</p>
                  <p className="text-xl text-black">10.00 to 30.00 kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsertsPage;
