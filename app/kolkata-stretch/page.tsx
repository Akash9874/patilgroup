"use client";
import React from 'react';
import Footer from '@/components/Footer';

const KolkataStretchPage = () => {
  return (
    <div>
      <section className="relative text-white py-48">
        <div className="absolute inset-0">
          <img src="/mt train.jpg" alt="Kolkata Metro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <h1 className="font-clash font-medium text-[80px] leading-[90px] tracking-[-0.25px] text-[#F2913F]">
            Kolkata Metro<br />(Noapara–Barasat Corridor)
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Info */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-[#8A393B]">Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">Paras Railtech Pvt. Ltd.</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-[#8A393B]">Principal Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">Metro Authority, Kolkata</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Patil Group contributed to the expansion of the Kolkata Metro network by supplying fastening systems for the Noapara to Barasat via Bimanbandar corridor. This route includes underground, at-grade, and elevated sections.
              </p>
              <p className="text-lg text-gray-700">
                We supplied over 66,000 fastening assemblies engineered for the specific structural and vibration conditions of Kolkata’s mixed-terrain metro line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Key Specs & Tech:</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>Fastener Types: 2-hole and 4-hole elastic clip systems</p>
            <p>Quantities Supplied: 38,317 (2-hole) + 28,493 (4-hole) sets</p>
            <p>Application: Compatible with tunnel, elevated viaduct, and station slab tracks</p>
            <p>Compliance: Supplied as per Metro safety and vibration standards, RDSO-compliant</p>
          </div>
          <p className="mt-16 text-lg text-[#8A393B]">
            This project marks our growing presence in Eastern India’s transit infrastructure with robust, tested fastening solutions.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/train 2.jpg" alt="Kolkata Metro Track" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KolkataStretchPage; 