"use client";
import React from 'react';
import Image from 'next/image';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

const PatilRhedaSystemPage = () => {
  useGSAPAnimations();

  const sliderData = [
    { image: '/patil_rheda_image_carousel.png' },
    { image: '/26_mobile_RHEDA_plant.jpg' },
  ];

  return (
    <div>
      <div className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen min-h-[600px] relative">
          <Image 
            src="/rhedarjeda.jpg" 
            alt="Patil RHEDA system" 
            fill
            className="object-cover object-center z-0" 
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6">
            <div className="text-center max-w-md mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
                Patil RHEDA<br />System
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg mb-4 sm:mb-6"></div>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                Advanced slab-track solution optimized for tunnels and elevated structures
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-screen">
          <Image 
            src="/rhedarjeda.jpg" 
            alt="Patil RHEDA system" 
            fill
            className="object-cover object-center z-0" 
            priority
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 z-20 w-full">
            <div className="px-6 sm:px-8 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-20">
              <h1 className="text-white font-bold leading-[0.95] text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl">
                Patil RHEDA System
              </h1>
              <p className="text-gray-200 text-base md:text-lg lg:text-xl mt-4 font-medium max-w-2xl">
                Advanced slab-track solution optimized for tunnels and elevated structures
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="bg-white py-6 sm:py-8 md:py-10 relative">
        {/* Top Left Gradient Line */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '864px',
            height: '28px',
            left: '0px',
            top: '0px',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          <p className="text-black text-lg sm:text-2xl leading-relaxed">
            The Patil RHEDA system is a slab-track solution optimized for tunnels and elevated structures. Developed with inputs from German RHEDA specifications, it provides integrated slab, rail, and fastening control within constrained alignments.
          </p>
        </div>

        {/* Bottom Right Gradient Line */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '864px',
            height: '28px',
            right: '0px',
            bottom: '40px',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
      </section>

      {/* System Overview Section */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          <div className="bg-[#F5F4F1] p-8 sm:p-10 md:p-12 rounded-lg shadow-sm">
            <p className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed">
              At Patil Group, the Patil RHEDA system adapts to the unique requirements of every project. Its core design uses modified bi‑block sleepers embedded in a monolithic concrete slab, delivering strength and durability. With highly elastic rail fastenings, it ensures the vertical rail deflection needed for balanced load distribution and smooth, reliable train travel.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 fade-in-section">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image 
                src="/rhedaimagenew.jpg" 
                alt="RHEDA system tunnel implementation" 
                width={800} 
                height={600} 
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
                loading="lazy" 
              />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-[#8A393B] text-xl sm:text-2xl md:text-3xl font-bold mb-6">
                Implemented in:
              </h3>
              <ul className="space-y-2 text-black text-lg sm:text-xl md:text-2xl">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Mumbai Metro (tunnel sections)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Chennai Metro (viaduct zones)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Katra–Banihal section (tunnel segments in J&K)
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Text */}
          <div className="mt-8 md:mt-10 fade-in-section">
            <p className="text-black text-lg sm:text-xl md:text-2xl leading-relaxed">
              This system ensures secure placement, minimal settlement, and long-term alignment—even under high dynamic loading and temperature variation.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default PatilRhedaSystemPage; 