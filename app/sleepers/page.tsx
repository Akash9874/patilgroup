"use client";

import React from 'react';
import SleeperFeatures from '@/components/SleeperFeatures';
import SleeperVarieties from '@/components/SleeperVarieties';
import ContentSlider from '@/components/ContentSlider';
import CompositeSleepers from '@/components/CompositeSleepers';
import ExploreSolutions from '@/components/ExploreSolutions';
import { ArrowRight } from 'lucide-react';

const SleepersPage = () => {
  const sleeperSlides = [
    { image: '/12_sleeper_types.jpg' },
    { image: '/concrete_carousel_sleeper.png' }
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/05_sleepers_banner.jpg')" }}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h1 className="font-clash font-medium text-[96px] leading-[64px] tracking-[-0.25px] text-[#F2913F]">
                Concrete Sleepers
              </h1>
            </div>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              Patil Group manufactures pre stressed concrete sleepers designed for high load, high speed rail conditions
            </p>
            <h2 className="mt-16 text-7xl font-bold text-orange-400">
              Made for use across
            </h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-6 text-2xl text-[#8A393B] font-medium">
              <p>Broad Gauge</p>
              <p>Points & Crossing</p>
              <p>Turnouts</p>
              <p>Guard Rail</p>
              <p>Level Crossings</p>
              <p>Switch Expansion Joints</p>
              <p>Check Rail on Curves</p>
              <p>Dual Gauge Operations</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white overflow-hidden">
          <div className="relative">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:px-8">
                <h2 className="text-7xl font-bold text-[#8A393B]">Sleeper Types</h2>
                <h3 className="mt-8 text-4xl font-bold text-[#8A393B]">Broad Gauge</h3>
                <ul className="mt-6 space-y-2 text-2xl text-gray-700 list-disc pl-6">
                  <li>Trapezoidal section</li>
                  <li>154 mm top width</li>
                  <li>250 mm bottom</li>
                  <li>210 mm seat height</li>
                </ul>
                <div className="mt-8 flex space-x-2">
                  <span className="w-8 h-2 bg-gray-400 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gray-200" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex">
                    <div className="w-11/12">
                        <img src="/12_sleeper_types.jpg" alt="Sleeper Types" className="w-full h-[600px] object-cover" />
                    </div>
                    <div className="w-1/12 bg-[#8A393B] flex items-center justify-center">
                        <button 
                            className="w-16 h-16 rounded-full border-2 border-orange-400 text-orange-400 flex items-center justify-center hover:bg-orange-400 hover:text-white transition-colors"
                        >
                            <ArrowRight size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 bg-white overflow-hidden">
          <div className="relative">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:px-8">
                <h2 className="text-7xl font-bold text-[#8A393B]">
                  Composite<br />Sleepers
                </h2>
                <ul className="mt-6 space-y-2 text-2xl text-gray-700 list-disc pl-6">
                  <li>India's largest supplier of PSC sleepers</li>
                  <li>12 plants</li>
                  <li>485 million sleeper capacity</li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gray-200" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h3 className="text-4xl font-bold text-orange-400">Manufactured for</h3>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-2xl text-gray-500">
                <p>Broad Gauge</p>
                <p>Metros</p>
                <p>Points and Crossings</p>
                <p className="text-[#8A393B] font-medium">Guard Rail</p>
                <p>Dual Gauge Systems</p>
              </div>
            </div>
            <hr className="my-12 border-orange-200" />
            <div>
              <h3 className="text-4xl font-bold text-orange-400">Key locations include</h3>
              <p className="mt-6 text-2xl text-gray-700">
                Ara, Bhubaneswar, Bina, Tumkur, Udwada, Wadiyam
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white text-center">
          <div className="h-2 bg-gradient-to-r from-[#1E3888] via-[#F2913F] to-transparent mb-12"></div>
          <h2 className="text-7xl font-bold text-[#8A393B]">
            Includes India's first ISO<br />
            certified composite plant
          </h2>
          <div className="h-2 bg-gradient-to-l from-[#1E3888] via-[#F2913F] to-transparent mt-12"></div>
        </section>

        <section className="py-24 bg-white overflow-hidden">
          <div className="relative">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 w-full lg:w-1/2 ml-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-7xl font-bold text-[#8A393B]">
                  Mass Spring<br />System
                </h2>
                <p className="mt-6 text-2xl text-gray-700">
                  Used in slab track to reduce noise and vibration
                </p>
              </div>
            </div>
            <div className="hidden lg:block absolute top-0 left-0 w-1/2 h-full bg-gray-200" style={{ clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)' }}></div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-bold text-orange-400">
                  Custom designed for urban zones<br />
                  rail via ducts<br />
                  and elevated metro lines
                </h3>
              </div>
              <div>
                <p className="text-xl text-gray-700">
                  Functions by isolating vibration at source<br />
                  Minimizes secondary noise in nearby buildings
                </p>
                <p className="mt-8 text-2xl font-bold text-black">
                  Executed on elevated corridors of Mumbai Metro
                </p>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-7xl font-bold text-[#8A393B]">Under Sleeper Pads (USP)</h2>
              <p className="mt-6 text-2xl text-gray-700 max-w-2xl">
                Learn more about our Under Sleeper Pads for vibration and noise reduction.
              </p>
              <a href="/under-sleeper-pads" className="mt-8 inline-flex items-center gap-3 bg-[#8A393B] text-white text-xl px-6 py-3 rounded-md hover:bg-[#793032] transition-colors group">
                Read more
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-white/50">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SleepersPage; 