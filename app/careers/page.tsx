"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CareersContent = () => {
  useScrollAnimation();
  
  return (
    <>
      {/* Hero Section Placeholder */}
      <section className="relative h-screen">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
              Careers
            </h1>
            <p className="mt-4 text-xl text-gray-600 animate-fadeInUp">
              Coming Soon - Career opportunities will be showcased here
            </p>
          </div>
        </div>
      </section>

      {/* Content sections will be added based on your design */}
      <div className="bg-white text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600">
            Career page content will be added here based on your design
          </p>
        </div>
      </div>
    </>
  );
};

const CareersPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <CareersContent />
    </div>
  );
};

export default CareersPage; 