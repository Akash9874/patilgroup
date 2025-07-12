"use client";
import React from 'react';
import Footer from '@/components/Footer';

const DelhiPhase3Page = () => {
  return (
    <div>
      <section className="relative text-white py-48">
        <div className="absolute inset-0">
          <img src="/mt train.jpg" alt="Delhi Metro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <h1 className="font-clash font-medium text-[96px] leading-[79px] tracking-[-0.25px] text-[#F2913F] w-[849px]">
            Delhi Metro Phase III<br />Fastening Systems
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
              <p className="text-lg text-gray-700 mb-6">
                Patil Group was entrusted with the supply and installation of fastening systems across key corridors of Delhi Metro Phase III. The project covered multiple extensions — including Kalindi Kunj to Botanical Garden, Noida City Centre to Sector 62, Dilshad Garden to Ghaziabad, and Escorts Mujesar to Ballabhgarh.
              </p>
              <p className="text-lg text-gray-700">
                We delivered and installed over 2 lakh fastening assemblies, supporting both elevated and underground track structures. The project demanded high precision and performance under challenging urban transit conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Technology & Specifications:</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>Fastener Types: 2-hole and 4-hole elastic rail clip systems</p>
            <p>Models Used: Vossloh 336 (standard), ADFF-6 (for vibration-sensitive underground zones)</p>
            <p>Compliance: RDSO standards (IRS-T-39), ISO 2631 (vibration control), and Metro safety norms</p>
            <p>Application: Suitable for ballastless and ballasted track sections across the corridor</p>
          </div>
          <p className="mt-16 text-lg text-[#8A393B]">
            This project reflects our continued partnership with DMRC in shaping India’s most advanced metro networks.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="/train 2.jpg" alt="Delhi Metro Track" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DelhiPhase3Page; 