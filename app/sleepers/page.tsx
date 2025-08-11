"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SleepersPage = () => {
    useScrollAnimation();
  return (
    <div className="bg-white text-black">
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <video
          src="/sleepersvideo.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          preload="metadata"
          poster="/05_sleepers_banner.jpg"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row h-full z-20">
          {/* Left Panel */}
          <div className="w-full md:w-1/3 flex flex-col justify-center p-8 md:p-12">
            <div className="text-left">
              <p className="text-5xl lg:text-6xl font-bold text-white opacity-50">02</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-2">
                Concrete Sleepers
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pb-32">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 md:py-16">
            <div className="flex">
                <div className="w-full md:w-3/4 pr-8 md:pr-12">
                    <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed fade-in-section">
                        Patil Group manufactures pre stressed concrete sleepers designed for high load, high speed rail conditions
                    </p>
                </div>
                <div className="hidden md:block md:w-1/4 border-l border-gray-200"></div>
            </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-12 fade-in-section">
            Made for use across
          </h2>

          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 border-b border-gray-200 pb-8 fade-in-section">
                <p className="text-2xl text-[#F2913F]">Broad Gauge</p>
                <p className="text-2xl text-[#F2913F]">Guard Rail</p>
                <p className="text-2xl text-[#F2913F]">Level Crossings</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 border-b border-gray-200 pb-8 fade-in-section">
                <p className="text-2xl text-[#F2913F]">Points & Crossing</p>
                <p className="text-2xl text-[#F2913F]">Switch Expansion Joints</p>
                <p className="text-2xl text-[#F2913F]">Dual Gauge Operations</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 fade-in-section">
                <p className="text-2xl text-[#F2913F]">Turnouts</p>
                <p className="text-2xl text-[#F2913F]">Check Rail on Curves</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F4F1] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
            <h2 className="text-5xl font-bold text-[#F2913F] mb-12 text-center fade-in-section">
                Sleeper Types
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="slide-in-left">
                    <Image src="/12_sleeper_types.jpg" alt="Sleeper Types" width={600} height={400} className="rounded-lg" />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg slide-in-right">
                    <h3 className="text-3xl font-bold text-[#8A393B] mb-4">Broad Gauge</h3>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>Trapezoidal section</li>
                        <li>154 mm top width</li>
                        <li>250 mm bottom</li>
                        <li>210 mm seat height</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center mt-12 fade-in-section">
                <div className="flex space-x-2">
                    <span className="w-8 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-[#F5F4F1] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
            <h2 className="text-5xl font-bold text-[#F2913F] mb-12 text-center fade-in-section">
                Composite Sleepers
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="slide-in-left">
                    <Image src="/12_sleeper_types.jpg" alt="Composite Sleepers" width={600} height={400} className="rounded-lg" />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg slide-in-right">
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>India's largest supplier of PSC sleepers</li>
                        <li>12 plants</li>
                        <li>485 million sleeper capacity</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center mt-12 fade-in-section">
                <div className="flex space-x-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-8 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <h2 className="text-5xl font-bold text-[#8A393B] mb-12 fade-in-section">
            Manufactured for
          </h2>

          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8 border-b border-gray-200 pb-8 fade-in-section">
                <p className="text-2xl text-[#F2913F]">Broad Gauge</p>
                <p className="text-2xl text-[#F2913F]">Metros</p>
                <p className="text-2xl text-[#F2913F]">Points and Crossings</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 fade-in-section">
                <p className="text-2xl text-[#F2913F]">Guard Rail</p>
                <p className="text-2xl text-[#F2913F]">Dual Gauge Systems</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12 text-center fade-in-section">
          <div className="h-1 bg-gradient-to-r from-[#8A393B] via-[#1E3888] to-[#F2913F] mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Includes India's first ISO certified composite plant
          </h2>
          <div className="h-1 bg-gradient-to-l from-[#8A393B] via-[#1E3888] to-[#F2913F]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-12 mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-5xl font-bold text-[#F2913F]">Mass Spring System</h3>
              <p className="mt-4 text-xl">Used in slab track to reduce noise and vibration</p>
            </div>
            <div className="slide-in-right">
              <div className="relative rounded-lg overflow-hidden">
                <video
                  src="/sleepersherovideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                  poster="/12_sleeper_types.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="slide-in-left">
                    <h3 className="text-4xl font-bold text-[#F2913F] leading-tight">
                        Custom designed for urban zones<br />
                        rail via ducts and elevated metro lines
                    </h3>
                </div>
                <div className="slide-in-right">
                    <p className="text-lg">
                        Functions by isolating vibration at source<br />
                        Minimizes secondary noise in nearby buildings
                    </p>
                    <p className="mt-8 text-xl font-bold">
                        Executed on elevated corridors of Mumbai Metro
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default SleepersPage;
