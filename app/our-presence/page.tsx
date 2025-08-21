"use client";
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import IndiaMap from '../../components/IndiaMap';

const OurPresencePage = () => {
  useScrollAnimation();
  return (
    <div className="bg-white">
      {/* Responsive Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[45vh] overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
          poster="/worldmap.png"
        >
          <source src="/lppatil.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Mobile Layout */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl">
                  Our Presence
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-6 rounded-full animate-pulse"></div>
                <p className="text-gray-200 text-sm mt-4 leading-relaxed">
                  Nationwide reach across India
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout - Original */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12">
            <h1 className="text-white font-bold leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Our Presence
            </h1>
          </div>
        </div>
      </section>
      
      {/* Responsive Map Section */}
      <div className="bg-white">
        {/* Mobile Section Header */}
        <div className="md:hidden px-4 py-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8A393B] mb-4">
            Pan-India Operations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Our manufacturing facilities and project sites span across multiple states, bringing quality railway infrastructure solutions nationwide.
          </p>
        </div>
        
        {/* Map Container */}
        <div className="mx-auto py-6 sm:py-8 md:py-10 fade-in-section flex justify-center md:justify-end pr-0 md:pr-6 lg:pr-12 px-4 md:px-0">
          <div className="w-full max-w-2xl md:max-w-7xl">
            <IndiaMap />
          </div>
        </div>
        
        {/* Mobile Location List */}
        <div className="md:hidden px-4 pb-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#8A393B] mb-6 text-center">
              Our Locations
            </h3>
            
            {/* State-wise location cards */}
            <div className="space-y-3">
              {[
                { state: "Telangana", cities: ["Medchal", "Kallakal", "Wadiyaram"] },
                { state: "Chhattisgarh", cities: ["Kargi"] },
                { state: "Jharkhand", cities: ["Bokaro"] },
                { state: "Odisha", cities: ["Kaipadar"] },
                { state: "West Bengal", cities: ["Anara"] },
                { state: "Rajasthan", cities: ["Roopangarh"] },
                { state: "Uttar Pradesh", cities: ["Burhwal"] },
                { state: "Delhi", cities: ["Delhi"] },
                { state: "Assam", cities: ["Mirza", "Bongaigaon"] },
                { state: "Gujarat", cities: ["Udvada"] },
                { state: "Karnataka", cities: ["Tumkur", "Hubli"] },
                { state: "Tamil Nadu", cities: ["Tirumangalam"] },
                { state: "Andhra Pradesh", cities: ["Bobbili", "Kovvur"] },
                { state: "Bihar", cities: ["Gaya"] },
                { state: "Haryana", cities: ["Sholaka"] },
                { state: "Madhya Pradesh", cities: ["Bhopal"] },
                { state: "Uttarakhand", cities: ["Pathri"] }
              ].filter(location => location.cities.length > 0).map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-[#8A393B] mb-1">{location.state}</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.cities.map((city, cityIndex) => (
                          <span key={cityIndex} className="text-xs bg-[#F2913F]/10 text-[#F2913F] px-2 py-1 rounded-full font-medium">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="w-3 h-3 bg-[#F2913F] rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Statistics */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-br from-[#8A393B]/10 to-[#F2913F]/10 rounded-2xl p-6 border border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#8A393B]">17</p>
                    <p className="text-xs text-gray-600 font-medium">States</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#F2913F]">25+</p>
                    <p className="text-xs text-gray-600 font-medium">Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPresencePage;
