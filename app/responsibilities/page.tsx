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
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp text-center">
            Our <br /> Responsibilities
          </h1>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-24 text-gray-800 space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-3xl font-semibold text-[#8A393B]">
                <div><a href="#" className="hover:underline">CSR Policy</a></div>
                <div><a href="#" className="hover:underline">Composition of CSR Committee</a></div>
                <div><a href="#" className="hover:underline">CSR PRIL Ar 2021-22</a></div>
            </div>
        </div>
        
        <div>
            <div className="relative text-center border-t-[11px]" style={{borderImage: 'linear-gradient(to right, #8A393B, #1E3888, #F2913F, transparent) 1'}}>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 text-4xl font-bold text-[#8A393B]">CSR Annual Action Plan_FY</span>
            </div>
        
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-2xl text-gray-600">
                    <div><a href="#" className="hover:underline">2022-23</a></div>
                    <div><a href="#" className="hover:underline">2023-24</a></div>
                    <div><a href="#" className="hover:underline">2024-25</a></div>
                </div>
            </div>
        </div>

        <div>
            <div className="relative text-center border-t-[11px]" style={{borderImage: 'linear-gradient(to right, transparent, #8A393B 25%, #1E3888, #F2913F, #1E3888, #8A393B 75%, transparent) 1'}}>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 text-4xl font-bold text-[#8A393B]">Brochure</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-2xl text-gray-600">
                    <div><a href="#" className="hover:underline">Corporate Brochure</a></div>
                    <div><a href="#" className="hover:underline">Patil Group Fastening plant brochure</a></div>
                    <div><a href="#" className="hover:underline">Cme brochure</a></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibilitiesPage;
