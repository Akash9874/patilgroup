"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import InsertFeatures from '@/components/InsertFeatures';
import InsertDetails from '@/components/InsertDetails';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const InsertsPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-[#212121] py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-8xl font-medium font-clash text-[#F2913F] whitespace-nowrap" style={{ lineHeight: '64px', letterSpacing: '-0.25px' }}>
            SGCI Insert And Base Plates
          </h1>
        </div>
      </div>
      <InsertFeatures />
      <InsertDetails />
      <ContentSlider />
      <div className="my-24" />
      <ExploreSolutions />
    </div>
  );
};

export default InsertsPage; 