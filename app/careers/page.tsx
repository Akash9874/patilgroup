"use client";

import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ApplyForm from '@/components/ApplyForm';
import { Linkedin, ArrowRight } from 'lucide-react';

const CareersContent = () => {
  useScrollAnimation();
  const [activeTab, setActiveTab] = useState('Engineering');

  const tabs = ['Engineering', 'Production', 'Projects', 'Support'];
  
  return (
    <>
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "Careers" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                Careers
              </h1>
            </div>
          </div>

          {/* Right side with white cut and text */}
          <div 
            className="h-full bg-white flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16 text-center">
              <h2 className="text-7xl font-bold text-[#8A393B]">Join our team</h2>
              <p className="mt-4 text-4xl text-orange-400">Build the future of rail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-24 bg-white text-gray-800">
          <div className="text-center">
              <h2 className="text-4xl font-semibold text-[#8A393B]">We hire for roles across</h2>
              <div className="mt-4 mx-auto w-64 h-1 bg-gradient-to-r from-orange-400 via-[#1E3888] to-[#8A393B]"></div>
          </div>
          <div className="mt-12 flex justify-center space-x-16 text-2xl text-gray-600">
              {tabs.map((tab) => (
                  <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 ${activeTab === tab ? 'text-black border-b-4 border-orange-400' : 'hover:text-black'}`}
                  >
                      {tab}
                  </button>
              ))}
          </div>

          <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="bg-gray-200 h-80 rounded-lg">
                      {/* Placeholder for the image */}
                  </div>
                  <div>
                      <p className="text-[#8A393B] font-semibold">Dec 2023</p>
                      <h3 className="mt-2 text-4xl font-bold text-orange-400">
                          Partnered on Mumbai Ahmedabad bullet train trial track
                      </h3>
                      <a href="#" className="mt-6 inline-flex items-center text-blue-600 font-bold">
                          <Linkedin className="h-6 w-6 mr-2" />
                          <span>LinkedIn</span>
                          <ArrowRight className="h-5 w-5 ml-2" />
                      </a>
                  </div>
              </div>
          </div>
      </section>

      <ApplyForm />
    </>
  );
};

const CareersPage = () => {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <CareersContent />
    </div>
  );
};

export default CareersPage;
