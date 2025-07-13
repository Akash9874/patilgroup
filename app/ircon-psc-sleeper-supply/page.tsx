"use client";
import React from 'react';
import Footer from '@/components/Footer';

const IrconPscSleeperSupplyPage = () => {
  return (
    <div>
      <section className="relative text-white py-48">
        <div className="absolute inset-0">
          <img src="/mt train.jpg" alt="IRCON - PSC Sleeper Supply" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <h1 className="font-clash font-medium text-[80px] leading-[90px] tracking-[-0.25px] text-[#F2913F]">
            IRCON - PSC Sleeper Supply
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Info */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-[#8A393B]">Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">IRCON International Ltd.</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-semibold text-[#8A393B]">Principal Client:</h2>
              <p className="text-3xl font-semibold text-[#F2913F]">IRCON</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                We manufactured, transported, and delivered pre-stressed concrete (PSC) sleepers to IRCON for large-scale railway development projects. The supply was executed under stringent quality protocols to meet performance and durability requirements across diverse terrains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Key Highlights:</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>Product Type: Standard PSC sleepers for mainline rail</p>
            <p>Compliance: RDSO-approved design and loading standards</p>
            <p>Quantity Supplied: Not specified</p>
            <p>Application: General railway infrastructure across multiple project sites</p>
            <p>Execution: End-to-end delivery including manufacturing and logistics</p>
          </div>
          <p className="mt-16 text-lg text-[#8A393B]">
            This project reinforced our long-standing relationship with IRCON and our role in national railway expansion.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/train 2.jpg" alt="IRCON Track" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IrconPscSleeperSupplyPage; 