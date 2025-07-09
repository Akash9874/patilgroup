"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContentSlider = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="bg-[#D9D9D9] p-8 md:p-12 lg:p-16 flex items-center justify-end min-h-[488px] md:col-span-7">
              <button className="bg-transparent text-amber-500 rounded-full p-3 border-2 border-amber-500 hover:bg-amber-500 hover:text-white transition-colors duration-300">
                <ArrowRight size={24} />
              </button>
            </div>
            <div className="bg-[#999898] min-h-[488px] md:col-span-5">
              {/* Image or other content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;