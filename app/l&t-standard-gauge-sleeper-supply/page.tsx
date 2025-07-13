"use client";
import React from 'react';
import Footer from '@/components/Footer';

const LAndTPage = () => {
  return (
    <div>
      <section className="relative text-white py-48">
        <div className="absolute inset-0">
          <img src="/mt train.jpg" alt="L&T - Standard Gauge Sleeper Supply" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <h1 className="font-clash font-medium text-[80px] leading-[90px] tracking-[-0.25px] text-[#F2913F]">
            L&T - Standard Gauge Sleeper Supply
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Info */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-[#8A393B]">Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">Larsen & Toubro (L&T)</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-[#8A393B]">Principal Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">L&T Rail Projects</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                We supplied over 17,000 pre-stressed concrete (PSC) sleepers to L&T for standard gauge urban rail construction. These sleepers were produced to match L&T's specifications while meeting Indian Railway and metro compliance norms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Key Highlights:</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>Product Type: PSC sleepers for standard gauge application</p>
            <p>Compliance: Designed as per L&T technical requirements and metro standards</p>
            <p>Quantity Supplied: 17,649 units</p>
            <p>Application: Urban transit corridors and depot track</p>
            <p>Manufacturing: Supplied from our certified PSC sleeper plants</p>
          </div>
          <p className="mt-16 text-lg text-[#8A393B]">
            This project added to our growing collaborations with India’s largest EPC contractors in modern rail infrastructure.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/train 2.jpg" alt="L&T Track" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LAndTPage; 