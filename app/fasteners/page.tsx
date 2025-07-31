"use client";

import React from 'react';
import FastenerFeatures from '@/components/FastenerFeatures';
import FastenerProductList from '@/components/FastenerProductList';
import ContentSlider from '@/components/ContentSlider';
import HighSpeedTrack from '@/components/HighSpeedTrack';
import ExploreSolutions from '@/components/ExploreSolutions';

const FastenersPage = () => {
  const fastenerSlides = [
    { image: '/11_fastener_types.jpg' },
    { image: '/fastener_carousel_image.png' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/fastener_hero section.jpg')" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-500 tracking-tight">
              Fasteners
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-left">
            <p className="mt-1 text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
            Patil Group has already set up global manufacturing facilities under the Make in India initiative capable of supplying world class fastening systems for railway infrastructure
            </p>
            <h2 className="text-5xl font-bold tracking-tight text-red-900 sm:text-7xl mt-8">
            For Mainline
            <br />
            Ballasted Track
            </h2>
          </div>
        </div>
      </div>

      {/* Elastic Rail Clips Section */}
      <div className="py-16 sm:py-24">
        <div 
          className="relative bg-cover bg-center mx-auto max-w-7xl" 
          style={{ backgroundImage: "url('/04_fasteners_banner.jpg')", height: '738px' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center overflow-x-auto">
            <div className="flex flex-nowrap items-end gap-x-96">
              <div className="flex-shrink-0">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-500 tracking-tight">
                  Elastic Rail Clips
                </h2>
              </div>
              <div className="flex-shrink-0 bg-black bg-opacity-50 p-4 rounded-lg text-right">
                <h3 className="text-2xl font-bold text-amber-500">ERC clips: mark III and V</h3>
                <p className="text-white mt-2">
                  Manufactured in Ajmer<br />
                  Approved by RDSO for Indian Railways<br />
                  and freight corridors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-5xl font-bold tracking-tight text-red-900 sm:text-7xl">
            For High Speed
            <br />
            Ballastless Track
            </h2>
          </div>
        </div>
      </div>

      {/* System 300 & DB 336 Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* System 300 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <img src="/placeholder.jpg" alt="System 300" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
              <div className="relative bg-black bg-opacity-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-amber-500">System 300 for Ballastless Track</h3>
              </div>
            </div>
            <div>
              <ul className="space-y-4 text-lg">
                <li className="flex justify-between"><span>Maximum Axle Load (Upto)</span> <span className="text-amber-600 font-bold">22.5 Tonne</span></li>
                <li className="flex justify-between"><span>Maximum Speed (Upto)</span> <span className="text-amber-600 font-bold">300 kmph</span></li>
                <li className="flex justify-between"><span>Toe Load (per clip)</span> <span className="text-amber-600 font-bold">9 kN</span></li>
                <li className="flex justify-between"><span>Insulation</span> <span className="text-amber-600 font-bold">2.5 kΩ</span></li>
                <li className="flex justify-between"><span>Static stiffness of pad</span> <span className="text-amber-600 font-bold">22.5 kN/mm</span></li>
                <li className="flex justify-between"><span>Longitudinal restraint (as per EN 13146</span> <span className="text-amber-600 font-bold">9 kN</span></li>
              </ul>
              <p className="mt-4 text-lg">Pre assembled system suitable for all slab track installations</p>
            </div>
          </div>

          {/* System DB 336 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <img src="/placeholder.jpg" alt="System DB 336" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
              <div className="relative bg-black bg-opacity-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-amber-500">System DB 336 for Ballastless Track</h3>
              </div>
            </div>
            <div>
              <ul className="space-y-4 text-lg">
                <li className="flex justify-between"><span>Maximum Axle Load (Upto)</span> <span className="text-amber-600 font-bold">22.5 Tonne</span></li>
                <li className="flex justify-between"><span>Maximum Speed (Upto)</span> <span className="text-amber-600 font-bold">300 kmph</span></li>
                <li className="flex justify-between"><span>Toe Load (per clip)</span> <span className="text-amber-600 font-bold">9 kN</span></li>
                <li className="flex justify-between"><span>Insulation</span> <span className="text-amber-600 font-bold">2.5 kΩ</span></li>
                <li className="flex justify-between"><span>Static stiffness of pad</span> <span className="text-amber-600 font-bold">22.5 kN/mm</span></li>
                <li className="flex justify-between"><span>Longitudinal restraint (as per EN 13146</span> <span className="text-amber-600 font-bold">9 kN</span></li>
              </ul>
              <p className="mt-4 text-lg">Optimized for vibration and noise reduction. Ideal for urban rail and steel structure tracks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastenersPage;
