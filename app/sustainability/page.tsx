import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SustainabilityPage = () => {
  useScrollAnimation();
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-48" style={{ backgroundImage: "url('/01_hero_train.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-7xl font-bold text-orange-400">
            Sustainability
          </h1>
        </div>
      </div>
      {/* Page content will go here */}
      <section className="py-24 overflow-hidden fade-in-section">
        <div className="flex items-center">
          <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-5xl font-bold text-[#8A393B]">
              Quiet changes. Tangible outcomes.<br />
              Built into every plant, every process.
            </p>
          </div>
          <div 
            className="flex-shrink-0 w-96 h-36 bg-[#8A393B]"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          ></div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <div>
            <h2 className="text-6xl font-bold">
              <span className="text-orange-400">Clean power </span>
              <span className="text-black">Clean cycles</span>
            </h2>
          </div>
          <div className="mt-24 space-y-16">
            <div>
              <h3 className="text-4xl font-bold text-[#8A393B]">Solar generation</h3>
              <div className="mt-6 space-y-2 text-2xl text-gray-700">
                <p>18 sites across India</p>
                <p>5.4 megawatts on-grid</p>
                <p>Reduced dependence on fossil sources</p>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#8A393B]">Water reuse</h3>
              <div className="mt-6 space-y-2 text-2xl text-gray-700">
                <p>Recycled curing water through closed-loop WTPs</p>
                <p>Reduced consumption</p>
                <p>Zero discharge processes in place</p>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#8A393B]">Dust control</h3>
              <div className="mt-6 space-y-2 text-2xl text-gray-700">
                <p>Factory air managed at source</p>
                <p>Multi-stage dust extraction across units</p>
                <p>Cleaner environment for every worker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-5xl">
            <span className="text-orange-400 font-bold">Every decision</span>
            <br />
            <span className="text-black">audited for efficiency</span>
            <span className="text-orange-400 font-bold ml-4">Every plant</span>
            <br />
            <span className="text-black">aligned with green intent</span>
          </p>
        </div>
      </section>

      <section className="py-32 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-between items-end mb-4">
            <p className="text-2xl text-[#8A393B] font-bold text-left">
              This is sustainability<br />
              by design
            </p>
            <p className="text-2xl text-black font-bold text-right">
              Not just a policy
            </p>
          </div>
          <div className="h-1 bg-gradient-to-r from-[#F2913F] via-[#1E3888] to-[#8A393B]"></div>
          <p className="mt-4 text-6xl text-[#8A393B] font-bold">
            A responsibility
          </p>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
