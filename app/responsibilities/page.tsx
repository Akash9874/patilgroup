"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ResponsibilitiesPage = () => {
  useScrollAnimation();

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 h-full w-full">
          <img src="/train 2.jpg" alt="Train at a station" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start pl-16 md:pl-24">
          <h1 className="text-8xl font-bold text-white text-left">
            Our <br /> Responsibilities
          </h1>
        </div>
      </section>

      {/* CSR Section */}
      <section className="bg-[#F5F5F7] py-24 text-gray-800 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="border-r border-gray-300 pr-8 space-y-12 text-center md:text-left">
              <h3 className="text-4xl font-bold text-[#8A393B]">CSR Policy</h3>
              <div className="space-y-6 -ml-4 sm:-ml-6 lg:-ml-8">
                <div className="h-2 bg-gradient-to-r from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                <div className="w-2/3 h-2 bg-gradient-to-r from-blue-600 via-orange-500 to-transparent rounded-full"></div>
              </div>
              <p className="text-2xl text-gray-600">Corporate Brochure</p>
            </div>

            {/* Column 2 */}
            <div className="border-r border-gray-300 px-8 text-center space-y-16">
              <div>
                <h3 className="text-4xl font-bold text-orange-500">Composition of CSR Committee</h3>
                <p className="text-xl text-gray-500 mt-2">CSR Annual Action Plan_FY</p>
                <div className="flex justify-between items-center mt-8 text-2xl font-semibold px-4">
                  <span>2022-23</span>
                  <span>2024-25</span>
                </div>
                <p className="text-2xl font-semibold mt-4">2023-24</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-orange-500">Brochure</h3>
                <p className="text-2xl text-gray-600 mt-4">Patil Group Fastening plant brochure</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="pl-8 space-y-12 text-center md:text-left">
              <h3 className="text-4xl font-bold text-[#8A393B]">CSR PRIL Ar 2021 - 22</h3>
              <div className="space-y-6 -mr-4 sm:-mr-6 lg:-mr-8">
                <div className="h-2 bg-gradient-to-l from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                <div className="w-2/3 h-2 bg-gradient-to-l from-blue-600 via-orange-500 to-transparent rounded-full"></div>
              </div>
              <p className="text-2xl text-gray-600">Cme brochure</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibilitiesPage;

