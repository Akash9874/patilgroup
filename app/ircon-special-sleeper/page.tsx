"use client";
import React from 'react';
import Footer from '@/components/Footer';

const IrconSpecialSleeperPage = () => {
  return (
    <div>
      <section className="relative text-white py-48">
        <div className="absolute inset-0">
          <img src="/mt train.jpg" alt="IRCON - Special Sleeper Supply" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <h1 className="font-clash font-medium text-[80px] leading-[90px] tracking-[-0.25px] text-[#F2913F]">
            IRCON - Special Sleeper Supply
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
                We supplied a range of specialized concrete sleepers to IRCON, including those used in turnouts, bridges, and level crossings. These sleepers were custom-engineered to meet non-standard geometries and high-precision requirements.
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
            <p>Compliance: Designed and manufactured to project-specific and RDSO standards</p>
            <p>Quantity Supplied: Not specified</p>
            <p>Application: Critical junctions and high-stress structural zones</p>
            <p>Manufacturing: Produced at our specialized sleeper units with custom moulding capabilities</p>
          </div>
          <p className="mt-16 text-lg text-[#8A393B]">
            This project highlights our expertise in delivering tailored sleeper solutions for complex rail configurations.
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

export default IrconSpecialSleeperPage; 