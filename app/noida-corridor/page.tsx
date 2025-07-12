"use client";
import React from 'react';
import Footer from '@/components/Footer';

const NoidaCorridorPage = () => {
  return (
    <div>
      <section className="relative text-white py-48">
        <div className="absolute inset-0">
          <img src="/mt train.jpg" alt="Delhi Metro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <h1 className="font-clash font-medium text-[96px] leading-[79px] tracking-[-0.25px] text-[#F2913F] w-[849px]">
            Delhi Metro Line-8<br />Fastening Systems
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Info */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-[#8A393B]">Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">Delhi Metro Rail Corporation (DMRC)</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-[#8A393B]">Principal Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">DMRC</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div>
              <p className="text-lg text-gray-700">
                Patil Group secured the supply of over 2.1 lakh fastening assemblies for the ballastless track on Line-8 (Janakpuri West - Majlis Park - R.K. Ashram), including 69,000 four-anchor and 1,44,150 two-anchor sets to support both elevated and underground segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Key Specs & Tech:</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>Fastener Configurations: 4-anchor & 2-anchor plate systems</p>
            <p>Quantities Supplied: ~2.13 lakh unit sets</p>
            <p>Usage Context: Ballastless track designed for speeds up to 110km/h, handling axle loads of up to 20t</p>
            <p>Compliance: Pre-approved by Ministry of Railways, tested to RDSO/DMRC safety criteria per Metro footing Annexure C-II standards</p>
          </div>
          <p className="mt-16 text-lg text-[#8A393B]">
            This deployment further establishes Patil Group’s role as a trusted partner for high-precision fastening solutions on modern metro corridors.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/train 2.jpg" alt="Noida Corridor Track" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoidaCorridorPage; 