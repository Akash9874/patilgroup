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
      <section className="bg-gray-100 py-24 text-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* White V-shape background */}
          <div 
            className="absolute inset-0 bg-white"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 15%, 50% 100%, 0 15%)'
            }}
          ></div>
          
          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-y-10 text-center pt-8 pb-16">
            {/* CSR Policy */}
            <div className="md:col-start-1">
              <h3 className="font-bold text-xl underline">CSR Policy</h3>
            </div>
            
            {/* Composition of CSR Committee */}
            <div className="md:col-start-2">
              <h3 className="font-bold text-xl underline">Composition of CSR Committee</h3>
            </div>
            
            {/* CSR PRIL Ar 2021-22 */}
            <div className="md:col-start-3">
              <h3 className="font-bold text-xl underline">CSR PRIL<br/>Ar 2021-22</h3>
            </div>
            
            {/* CSR Annual Action Plan_FY */}
            <div className="md:col-start-2 mt-8">
              <h4 className="text-xl font-semibold">CSR Annual Action Plan_FY</h4>
            </div>

            {/* 2022-23 */}
            <div className="md:col-start-1 mt-8">
              <a href="#" className="underline text-lg">2022-23</a>
            </div>

            {/* 2023-24 */}
            <div className="md:col-start-2 mt-2">
              <a href="#" className="underline text-lg">2023-24</a>
            </div>

            {/* 2024-25 */}
            <div className="md:col-start-3 mt-8">
              <a href="#" className="underline text-lg">2024-25</a>
            </div>
            
            {/* Brochure */}
            <div className="md:col-start-2 mt-8">
              <h3 className="font-bold text-xl">Brochure</h3>
            </div>

            {/* Corporate Brochure */}
            <div className="md:col-start-1 mt-12">
              <p className="text-lg">Corporate</p>
              <a href="#" className="underline text-lg">Brochure</a>
            </div>

            {/* Patil Group Fastening plant brochure */}
            <div className="md:col-start-2 mt-2">
              <p className="text-lg">Patil Group Fastening<br/>plant brochure</p>
            </div>

            {/* Cme brochure */}
            <div className="md:col-start-3 mt-12">
              <p className="text-lg">Cme</p>
              <a href="#" className="underline text-lg">brochure</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibilitiesPage; 