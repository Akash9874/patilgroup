"use client";
import React from 'react';
import Footer from '@/components/Footer';

const AhmedabadPhase2Page = () => {
  return (
    <div>
      <section className="relative text-white py-48">
        <div className="absolute inset-0">
          <img src="/mt train.jpg" alt="Ahmedabad Metro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <h1 className="font-clash font-medium text-[80px] leading-[90px] tracking-[-0.25px] text-[#F2913F]">
            Ahmedabad Metro Phase II<br />(Motera to Mahatma Mandir)
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Info */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-[#8A393B]">Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">KEC International Ltd.</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-[#8A393B]">Principal Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">Gujarat Metro Rail Corporation (GMRCL)</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                For the Phase II expansion of the Ahmedabad Metro, Patil Group supplied fastening systems for the corridor stretching from Motera Stadium to Mahatma Mandir.
              </p>
              <p className="text-lg text-gray-700">
                Over 2 lakh fastening assemblies were delivered to support the construction of ballastless track systems across elevated and at-grade sections.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Key Specs & Tech:</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>Fastener Types: 2-hole and 4-hole elastic systems</p>
            <p>Quantities Supplied: 1,80,000 (2-hole) + 20,500 (4-hole) sets</p>
            <p>Application: Engineered for elevated track sections and viaduct spans</p>
            <p>Standards: RDSO-certified systems suitable for high-speed, low-vibration metro operations</p>
          </div>
          <p className="mt-16 text-lg text-[#8A393B]">
            This delivery reinforced our continued partnership in Gujarat’s evolving metro infrastructure.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/train 2.jpg" alt="Ahmedabad Metro Track" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AhmedabadPhase2Page; 