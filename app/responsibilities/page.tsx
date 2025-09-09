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
      <section className="relative bg-black">
        {/* Mobile Layout */}
        <div className="md:hidden relative h-screen flex flex-col">
          <div className="absolute inset-0">
            <img src="/ourrespoheroimage.jpg" alt="Our Resources" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 flex-1 flex items-center justify-center px-6">
            <div className="text-center max-w-lg mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight drop-shadow-2xl animate-fadeInUp">
                Our Resources
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-8 rounded-full animate-pulse shadow-lg"></div>
              <p className="text-white text-xl sm:text-2xl mt-8 font-medium tracking-wide drop-shadow-xl leading-relaxed">
                Empowering communities through responsibility
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative h-screen">
          <div className="absolute inset-0 h-full w-full">
            <img src="/ourrespoheroimage.jpg" alt="Our Resources" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-left px-4">
              Our <br /> Resources
            </h1>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="bg-[#F5F5F7] text-gray-800 overflow-x-hidden">
        {/* Mobile Layout */}
        <div className="lg:hidden py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Mobile Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#8A393B] mb-4">
                Our Resources
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 text-lg">Corporate social responsibility and documentation</p>
            </div>

            <div className="space-y-8">
              {/* CSR Policy Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8A393B] mb-4">CSR Policy</h3>
                <div className="space-y-3 mb-4">
                  <div className="h-1.5 bg-gradient-to-r from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                  <div className="w-2/3 h-1.5 bg-gradient-to-r from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                </div>
                <p className="text-lg text-gray-600">Corporate Brochure</p>
              </div>

              {/* CSR Committee Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">Composition of CSR Committee</h3>
                <p className="text-base text-gray-500 mb-6">CSR Annual Action Plan_FY</p>
                <div className="flex justify-between items-center mb-4 text-lg font-semibold bg-gray-50 rounded-lg p-4">
                  <span className="text-[#8A393B]">2022-23</span>
                  <span className="text-orange-500">2024-25</span>
                </div>
                <p className="text-lg font-semibold text-center bg-gray-50 rounded-lg p-3">2023-24</p>
              </div>

              {/* Brochures Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-4">Brochures</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-lg text-gray-700 font-medium">Patil Group Fastening plant brochure</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-lg text-gray-700 font-medium">CME brochure</p>
                  </div>
                </div>
              </div>

              {/* CSR Annual Report Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8A393B] mb-4">CSR PRIL AR 2021-22</h3>
                <div className="space-y-3 mb-4">
                  <div className="h-1.5 bg-gradient-to-l from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                  <div className="w-2/3 h-1.5 bg-gradient-to-l from-blue-600 via-orange-500 to-transparent rounded-full ml-auto"></div>
                </div>
                <p className="text-lg text-gray-600">Annual Report Documentation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="lg:border-r border-gray-300 lg:pr-8 space-y-12 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8A393B]">CSR Policy</h3>
                <div className="space-y-6 -ml-4 sm:-ml-6 lg:-ml-8">
                  <div className="h-2 bg-gradient-to-r from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                  <div className="w-2/3 h-2 bg-gradient-to-r from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                </div>
                <p className="text-2xl text-gray-600">Corporate Brochure</p>
              </div>

              {/* Column 2 */}
              <div className="lg:border-r border-gray-300 lg:px-8 text-center space-y-16">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">Composition of CSR Committee</h3>
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
              <div className="lg:pl-8 space-y-12 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8A393B]">CSR PRIL Ar 2021 - 22</h3>
                <div className="space-y-6 -mr-4 sm:-mr-6 lg:-mr-8">
                  <div className="h-2 bg-gradient-to-l from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                  <div className="w-2/3 h-2 bg-gradient-to-l from-blue-600 via-orange-500 to-transparent rounded-full"></div>
                </div>
                <p className="text-2xl text-gray-600">Cme brochure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibilitiesPage;

