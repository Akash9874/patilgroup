"use client";
import React from 'react';
import Footer from '@/components/Footer';

const MumbaiLine7XPage = () => {
  return (
    <div>
      <section className="relative text-white py-48">
        <div className="absolute inset-0">
          <img src="/mt train.jpg" alt="Mumbai Metro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <h1 className="font-clash font-medium text-[80px] leading-[90px] tracking-[-0.25px] text-[#F2913F]">
            Mumbai Metro Line 7<br />Extension (Gundavali to CSIA)
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
              <p className="text-3xl font-semibold text-[#F2913F]">DMRC</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Patil Group supplied fastening systems for the extension of Mumbai Metro Line 7, connecting Gundavali to the Chhatrapati Shivaji International Airport (CSIA). This strategic link enhances airport connectivity via the western suburbs.
              </p>
              <p className="text-lg text-gray-700">
                We delivered over 86,000 fastening assemblies, engineered for durability in high-traffic urban transit.
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
            <p>Quantities Supplied: 56,420 (2-hole) + 29,800 (4-hole) sets</p>
            <p>Application: Ballastless tracks in elevated and airport corridor sections</p>
            <p>Standards: Conforms to RDSO and DMRC metro infrastructure guidelines</p>
          </div>
          <p className="mt-16 text-lg text-[#8A393B]">
            This project marks our continued involvement in Mumbai’s next-generation urban mobility solutions.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/train 2.jpg" alt="Mumbai Metro Track" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MumbaiLine7XPage; 